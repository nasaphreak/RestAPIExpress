import { Component, OnInit, OnDestroy } from '@angular/core'
import { BlogPost } from '../models/BlogPost';
import { BlogService } from '../blog.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-posts',
  templateUrl: './main-posts.component.html',
  styleUrls: ['./main-posts.component.css']
})
export class MainPostsComponent implements OnDestroy {
  public selectedPost:BlogPost
  subscription: Subscription
  constructor(private blogService:BlogService) { 
    this.subscription = this.blogService.getPost().subscribe(selected => {
      if(selected){
        this.selectedPost = selected
      } else {
        this.selectedPost = null
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  showSelected(){
    this.blogService.getPost()
  }

}
