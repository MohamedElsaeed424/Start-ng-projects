import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm : FormGroup ; 
  forbiddenUsernames = [ 'Mohamed' , 'ibrahim'] ;
  
  ngOnInit(): void {
    this.signupForm  = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null , [Validators.required , this.isforbiddenNames.bind(this)]) ,
        'email' : new FormControl(null  , 
          [Validators.required , 
            Validators.email ,
            this.isForbiddenEmail
          ] ) ,
      }) ,
      'gender' : new FormControl('male') ,
      'hobbies' : new FormArray([])
    })
    // this.signupForm.valueChanges.subscribe(
    //   (value)=>{console.log(value); }
    // )
    this.signupForm.statusChanges.subscribe(
      (status)=>{console.log(status);}
    )
  }
  onSubmit(){
    console.log(this.signupForm);
  }

  addHobby(){
    const control  = new FormControl(null, Validators.required)  ;
    (<FormArray>this.signupForm.get('hobbies')).push(control) ; 
  }
  getControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls ;
  }
  isforbiddenNames(control : FormControl ) : {[s : string ]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return { 'nameIsForbiden' : true };
    }else{
      return null ;
    }
  }
  isForbiddenEmail(control : FormControl)  : Promise<ValidationErrors| null> | 
    Observable<ValidationErrors | null> {
      if (control.value === 'medo.s.mensh@gmail.com'){
          console.log(3);
          return of( {'emailIsForbidden' : true} );
        }else{
          console.log(4);
          return(null) ;
        }

    // const promise = new Promise<any>((resolve , reject)=>{
    //   setTimeout(()=>{
    //     if (control.value === 'medo.s.mensh@gmail.com'){
    //       console.log(3);
    //       resolve( {'emailIsForbidden' : true} );
    //     }else{
    //       console.log(4);
    //       resolve(null) ;
    //     }
    //   } , 1500);
    // });
    // console.log(promise);
    // return promise ;
  }
}
