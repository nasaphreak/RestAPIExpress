import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BlogPost } from './models/BlogPost'
import { Subject, Observable }    from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  private subject =new Subject<any>()
  public selectedPost:BlogPost
  
  constructor(private http: HttpClient) { }

  newPost(blogPost: BlogPost){
    return this.http.post('/api/blogposts',{
        author : blogPost.author,
        title : blogPost.title,
        mainText : blogPost.mainText,
        auxText: blogPost.auxText
    })
  }
  listarPosts(){
    return this.http.get<any[]>('/api/blogposts')
  }
  getPost(): Observable<any> {
    return this.subject.asObservable()
  }
  setPost(blogPost:BlogPost){
    this.subject.next(blogPost)
  }
}
