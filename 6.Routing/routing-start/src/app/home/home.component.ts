import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router : Router , private autService : AuthService) { }
  
  onLoadServers(){
    this.router.navigate(['/servers' ,1 ,'edit'] , {queryParams : {loading : 'true'} , fragment:"LoadingNow"}  );
  }
  onLogin(){
    this.autService.login() ;
  }
  onLogout(){
    this.autService.logout() ;
  }

}
