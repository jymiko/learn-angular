import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

// directive = custom props di react
@Directive({
  selector: '[appHome]',
  standalone: true
})
export class HomeDirective implements AfterViewInit {
  @Input()  color:string = 'green'
  constructor(private elementRef:ElementRef) { }

  ngAfterViewInit(): void {
    console.log(this.elementRef)
    this.elementRef.nativeElement.style.background = this.color;
  }

}
