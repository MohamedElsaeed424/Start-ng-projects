import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f' ,{static : true}) form : NgForm; 
  answer : string = '' ;
  genders : string [] = ['male' , 'femals'] ;
  user  = {
    username : '' ,
    email : '' ,
    secret : '',
    answer : '' ,
    gender : ''
  }
  isSubmitted : boolean = false ;


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.form.form.patchValue({
      userData:{
        username:suggestedName 
      }
    })
  }
  onSubmit(){
    this.isSubmitted = true ;
    this.user.username = this.form.value.userData.username ;
    this.user.email = this.form.value.userData.email ;
    this.user.secret = this.form.value.secret ;
    this.user.answer = this.form.value.questionAnswer ;
    this.user.gender = this.form.value.gender ;

    this.form.reset(); 
  }
}
