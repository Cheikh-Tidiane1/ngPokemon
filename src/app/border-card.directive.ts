import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
  standalone: true,
})
export class BorderCardDirective {
  constructor(private element: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @Input('pkmBorderCard') borderColor: string;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || '#009688');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    this.element.nativeElement.style.border = `solid 4px ${color}`;
  }
}
