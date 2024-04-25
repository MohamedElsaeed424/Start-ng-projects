import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isSubmitted : boolean = false ;
  @ViewChild('f' , {static : true}) form : NgForm ; 

  onSubmit(){
    this.isSubmitted = true ;
    console.log(this.form.value.userData.email);
    console.log(this.form.value.userData.password);
    console.log(this.form.value.subsc);

    this.form.reset();
  }
}
