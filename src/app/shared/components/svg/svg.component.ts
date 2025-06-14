import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, input, OnDestroy, type OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { catchError, of, Subject, takeUntil, throwError } from 'rxjs';

@Component({
  selector: 'app-svg',
  imports: [CommonModule],
  templateUrl: './svg.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgComponent implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private sub$ = new Subject<void>();
  private cdr = inject(ChangeDetectorRef);
  private sanitizer: DomSanitizer = inject(DomSanitizer);
  svgContent: SafeHtml = '';

  src = input<string | undefined>();
  size = input<string>('18px');

  ngOnInit(): void { 

    if(this.src()) {
      this.loadSvg();
    }
  }

  private loadSvg() { 
    this.http.get(`${this.src()}`, {
      responseType: 'text'
    })
    .pipe(
      catchError((err: HttpErrorResponse) => {
        console.error("URL não encontrada!")
        return of("");
      }),
      takeUntil(this.sub$))
    .subscribe(svgContent => {
      if(svgContent)
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(svgContent);
        this.cdr.markForCheck();
    })
  }

  ngOnDestroy(): void {
    this.sub$.next();
    this.sub$.complete();
  }
}
