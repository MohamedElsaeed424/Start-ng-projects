import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit , CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit : boolean = false ;
  changesSaved : boolean = false ;

  constructor(private serversService: ServersService ,private route : ActivatedRoute , private router : Router) { }
  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true ;
    this.router.navigate(['../'], {relativeTo : this.route}) ;
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit){
      return true ;
    }else if  ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved){
      return confirm('Do you want to leave ?');
    }else{
      return true ;
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParam : Params)=>{
       this.allowEdit = queryParam['allowEdit'] === '1' ? true : false ;
      }
    ) ;
    this.route.fragment.subscribe() ;

    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }





}
