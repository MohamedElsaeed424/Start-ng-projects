import { Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css' ,
})

export class UserComponent  implements DoCheck{
  userName : string = '' ;
  userNameStatus : boolean = false ;

  ngDoCheck(): void {
    if(this.userName !== '' ){
      this.userNameStatus = true ;
    }
  }
  onAddUserName(){
    
    this.userName = (<HTMLInputElement>event.target).value ;
    (<HTMLInputElement>event.target).value = "" ;
    this.userNameStatus = false ;
  }

}



