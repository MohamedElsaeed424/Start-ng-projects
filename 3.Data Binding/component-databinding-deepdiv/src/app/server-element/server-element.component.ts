import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css' ,
  encapsulation : ViewEncapsulation.None
})
  export class ServerElementComponent implements OnInit  ,
   OnChanges , AfterContentInit , AfterContentChecked , OnDestroy{
    @Input('srvElement') element : {type : string , name: string , content : string} ;
    @Input() name :  string ;
    @ContentChild('contentParagraph' , {static : true}) paragraph : ElementRef ;

    constructor(){
      console.log("Constructor") ;
    }


    ngOnInit(): void {
      console.log("OnInit") ;
      console.log(this.paragraph.nativeElement.value) ;
    }
    ngAfterContentInit(): void {
      console.log("After Content Init") ;
      console.log(this.paragraph.nativeElement.value) ;
    }


    ngOnChanges(changes: SimpleChanges): void {
      console.log("Onchanges") ;
      // console.log(changes);
    }


    ngAfterContentChecked(): void {
      console.log("After Content Check") ;
    }

    ngOnDestroy(): void {
      console.log("On Destroy")
    }
  }
