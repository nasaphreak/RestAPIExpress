import { Component, OnInit } from '@angular/core';
import { BlogService} from '../blog.service'
import { BlogPost} from '../models/BlogPost'
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post-form',
  templateUrl: './blog-post-form.component.html',
  styleUrls: ['./blog-post-form.component.css']
})
export class BlogPostFormComponent implements OnInit {
  public blogPost: BlogPost
  constructor(private blogService: BlogService, private router: Router) { 
    this.blogPost = new BlogPost
  }

  ngOnInit() {
  }

  newPost(){
    if (this.blogPost.author && this.blogPost.title && this.blogPost.mainText){
      this.blogService.newPost(this.blogPost).subscribe(result =>{
        if(result['status'] === 'success'){
          this.router.navigate(['/blog'])
        }
      })
    }
  }
}
