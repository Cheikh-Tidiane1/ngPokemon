import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmBorderCard]',
  standalone: true,
})
export class BorderCardDirective {
  constructor(private element: ElementRef) {
    this.setHeight(180);
    this.setBorder('#f5f5f5');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) {
    this.element.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.element.nativeElement.style.border = border;
  }
}
