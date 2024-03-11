import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { catchError, map, tap } from "rxjs/operators";
import { Subject, throwError } from "rxjs";

@Injectable({providedIn : 'root'})
export class PostService{
    error = new Subject<string>() ;
    constructor(private http : HttpClient){}

    createNewPost(title : string , content : string){
        const postData = {title : title , content : content} ;
        this.http.post<{name : string}>(
            'https://ng-full-stack-app-default-rtdb.firebaseio.com/posts.json',
            postData ,
            {
              observe : 'response'
            }
        )
          .subscribe( 
            (resData)=>{
              console.log(resData)
            } ,
            (error)=>{
              this.error.next(error.message) ;
            }
          )
    }

    
  fetchPosts(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append('page' , '1') ;
    searchParams = searchParams.append('custom' , 'true') ;
    searchParams = searchParams.append('print' , 'pretty') ;
    return this.http.get<{[key : string]:Post}>('https://ng-full-stack-app-default-rtdb.firebaseio.com/posts.json' ,{
      headers : new HttpHeaders({
        'Cutom-Header' : 'Hello this is the Hacker'
      }) ,
      params : searchParams
    })
      .pipe(
        map((resData)=>{
            const postsArray : Post[] = [] ;
            for (const key in resData){
              if (resData.hasOwnProperty(key)){
                postsArray.push({...resData[key] , id :key})
              }
            }
            return postsArray ;
          }
        ) ,
        catchError(errorRes=>{
          return throwError(errorRes);
        })
    )
  }

  deletePosts(){
    return this.http.delete('https://ng-full-stack-app-default-rtdb.firebaseio.com/posts.json' ,
    {
      observe : 'events' ,
      responseType : 'json'
    })
      .pipe(tap((event)=>{
        console.log(event);
        if (event.type === HttpEventType.Sent){
          // console.log(event.type);
        }
        if (event.type === HttpEventType.Response){ // did i get back response
          console.log(event.body);
        }
      })) ;
  }

}