import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 ,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor( private elementRef : ElementRef , private renderer : Renderer2) { }
  @HostBinding('style.backgroundColor')backGroundColor : string;
  @Input() defaultColor : string ='transparent';
  @Input() newColor : string = 'blue';
  ngOnInit(): void {
    this.backGroundColor = this.defaultColor 
    // this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'yellow')
  } 
  @HostListener('mouseenter') mouseHover (eventData : Event){
    // this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'yellow')
    this.backGroundColor = this.newColor ;
  }
  @HostListener('mouseleave') mouseLeave (eventData : Event){
    // this.renderer.setStyle(this.elementRef.nativeElement , 'background-color' , 'transparent')
    this.backGroundColor = this.defaultColor ;
  }

}
