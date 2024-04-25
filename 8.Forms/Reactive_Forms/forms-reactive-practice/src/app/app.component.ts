import { Component } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
@Component({        
  selector:   'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  forbiddenPNames = ['Test'] ;
  newForm : FormGroup = new FormGroup ({
    'projectname' : new FormControl(null , 
      [
        Validators.required ,
        // this.isforbiddenProject
      ] ,
      this.isforbiddenProjectAsync
      ) ,
    'email' : new FormControl (null ,
       [
        Validators.required ,
        Validators.email ,
      ]
    ) ,
    'status' : new FormControl('Stable')
  }) ;

  isforbiddenProject(control : FormControl) :{[s:string]:boolean} {
    if (control.value === 'Test'){
      return {'projectNameForbidden' : true} ;
    }else {
      return null ;
    }
  }
  isforbiddenProjectAsync(control : FormControl) : 
    Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Test') {
            resolve({'invalidProjectName': true});
          } else {
            resolve(null);
          }
        }, 2000);
      })
      return promise;
  }
  onSubmit(){
    console.log(this.newForm) ;
    console.log(this.newForm.get('projectname').value)
    console.log(this.newForm.get('email').value)
    console.log(this.newForm.get('status').value)
    this.newForm.reset();
  }
}
