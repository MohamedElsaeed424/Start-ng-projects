import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServiceResolver } from './servers/server/server-resolver.service';
const appRouter : Routes =[
  {path:'' , component:HomeComponent } ,
  {path : 'users' , component : UsersComponent , children :[
    {path : ':id/:name' , component : UserComponent} ,
  ]} ,
  {path :'servers',
//   canActivate:[AuthGuard] ,
     canActivateChild : [AuthGuard],
    component : ServersComponent , children:[
    {path :':id',component : ServerComponent , resolve : {server : ServiceResolver}},
    {path : ':id/edit' ,component : EditServerComponent , canDeactivate : [CanDeactivateGuard]}
  ]} ,
  // {path : '404' , component : NotFoundComponent} ,
  {path : '404' , component : ErrorPageComponent , data:{message : 'Page not Found ...'}},
  {path : '**' , redirectTo : '/404' ,pathMatch:'full' }
] ; 

@NgModule({
    imports : [
      // RouterModule.forRoot(appRouter ,{useHash : true})
      RouterModule.forRoot(appRouter)
    ] ,
    exports :[
        RouterModule
    ]
})
export class AppRoutingModule {

}