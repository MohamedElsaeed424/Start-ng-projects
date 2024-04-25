import { animate, group, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  animations:[
    trigger('simple' ,[
      state('normal' , style({
        'background-color':'red',
        transform :'translateX(0) scale(1)'
      })),
      state('higlighted' ,style({
        'background-color':'blue',
        transform :'translateX(100px) scale(1)'
      })) ,
      transition('normal <=> higlighted' , animate(300)) ,
    ]),
    trigger('wild' ,[
      state('normal' , style({'background-color':'red',transform :'translateX(0) scale(1)'})),
      state('higlighted' ,style({'background-color':'blue',transform :'translateX(100px) scale(1)'})) ,
      state('shrunken' ,style({'background-color':'green',transform :'translateX(0) scale(0.5)'})) ,
      transition('normal => higlighted' , animate(500)) ,
      transition('higlighted => normal' , animate(500)) ,
      transition('shrunken <=> *' , 
        [
          style({'background-color' : 'orange'}), // start state
          animate(500 , style({borderRadius:'50px'})) ,  // in between state
          animate(500)  // end state
        ]
      ) ,
    ]) ,
    trigger('list1' ,[
      state('in' , style({opacity : 1 ,transform :'translateX(0) scale(1)'})),
      transition('void => *' , [
        style({opacity : 0 , transform : 'translateX(-100px)'}),
        animate(300)
      ]) ,
      transition('* => void' ,animate(300 , style({opacity : 0 , transform : 'translateX(100px)'})) )
    ]),
    trigger('list2' ,[
      state('in' , style({opacity : 1 ,transform :'translateX(0)' })) ,
      transition('void => *' , [
        animate(1000 , keyframes([ // which style should occure at which time 
          style({opacity : 0 , transform : 'translateX(-100px)' , offset : 0}),
          style({opacity : 0.5 , transform : 'translateX(-50px)' , offset : 0.3}),
          style({opacity : 0.8 , transform : 'translateX(-20px)' , offset : 0.8}),
          style({opacity : 1 , transform : 'translateX(0px)' , offset : 1})
        ]))
      ]),
      transition('* => void' ,[
        group([
          animate(800 , style({opacity : 0 , transform : 'translateX(100px)'})) ,
          animate(300 , style({color : 'red'})) 
        ])
      ])
    ] )


  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate(){
    this.state === 'normal'?this.state ='higlighted': this.state = 'normal' ;
    this.wildState === 'normal'?this.wildState ='higlighted': this.wildState = 'normal' ;
  }

  onDelete(item){
    for (const litem of this.list ) {
        if(litem === item){
          this.list.splice(this.list.indexOf(item), 1);
          break;
        }
    }
  }

  onShrunck(){
    this.wildState = 'shrunken'
  }

  onAdd(item) {
    this.list.push(item);
  }

  animationStarted(event){
    console.log(event);
  }
  animationEnded(event){
    console.log(event);
  }
}
