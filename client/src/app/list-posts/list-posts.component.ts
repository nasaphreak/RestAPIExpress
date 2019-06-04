import { Component, OnInit } from '@angular/core';
import { BlogService} from '../blog.service'
import { BlogPost } from '../models/BlogPost'

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {
  public blogPosts: BlogPost[] = []
  private selectedPost: BlogPost

  constructor(private blogService:BlogService) { 
     
  }

  ngOnInit() {
    this.listarPosts()
  }
  listarPosts(){
    this.blogService.listarPosts().subscribe(result => this.blogPosts = result)
  }
  selectPost(post: BlogPost){
    this.blogService.setPost(post)

  }
}
