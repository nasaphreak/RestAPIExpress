import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../models/BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public selectedPost: BlogPost

  constructor() { }

  ngOnInit() {
  }
  getSelected(){
    return this.selectedPost
  }
  setSelected(){
    
  }
}
