import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  loadedPosts : Post[] = [];
  isFetching : boolean = false ;
  error = null ;
  errorSubsc : Subscription ;
  constructor(private http: HttpClient , private postService : PostService) {}

  ngOnInit() {
    this.errorSubsc =this.postService.error.subscribe(
      (errorMessage)=>{
        this.error = errorMessage ;
      }
    )
    this.isFetching =true ;
    this.postService.fetchPosts().
      subscribe(
        (fetchedPosts)=>{
          this.loadedPosts = fetchedPosts ;
          this.isFetching = false ;
        } ,
        (error)=>{
          this.isFetching = false
          this.error = error.statusText;
          // console.log(error)
        } 
    ) ;
  }

  onCreatePost(postData: Post) {
    this.postService.createNewPost(postData.title , postData.content)
  }
  

  onFetchPosts() {
    this.isFetching =true ;
    this.postService.fetchPosts().
      subscribe(
        (fetchedPosts)=>{
          this.loadedPosts = fetchedPosts ;
          this.isFetching = false ;
        } ,
        (error)=>{
          this.isFetching = false ;
          this.error = error.statusText + ' To Fetch Data';
          // alert(error.statusText)
        }
    ) ;
  }
  OnHandleError(){
    this.error = null ;
  }
  onClearPosts() {
    this.postService.deletePosts().
    subscribe((daltedPosts)=>{
      // console.log("Posts Deleted Successfully");
      this.loadedPosts=[] ;
    })
  }

  ngOnDestroy(): void {
    this.errorSubsc.unsubscribe()
  }
}
