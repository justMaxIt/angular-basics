import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core'

@Directive({
   selector: '[appStyle]'
})
export class StyleDirective {
   constructor(private el: ElementRef, private r: Renderer2) {

   }

   @HostListener('click', ['$event.target']) onClick(event: Event) {
      this.r.setStyle(this.el.nativeElement, 'font-size', '40px')
   }

   @HostListener('mouseenter') onEnter() {
      this.r.setStyle(this.el.nativeElement, 'color', 'blue')
   }

   @HostListener('mouseleave') onLeave() {
      this.r.setStyle(this.el.nativeElement, 'color', null)
   }
}