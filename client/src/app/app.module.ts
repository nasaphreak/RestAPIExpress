import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule , ROUTING} from './app-routing.module';
import { RootComponent } from './root/root.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPostsComponent } from './main-posts/main-posts.component';
import { ListPostsComponent } from './list-posts/list-posts.component';
import { FooterComponent } from './footer/footer.component';
import { NewBlogPostComponent } from './new-blog-post/new-blog-post.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';


@NgModule({
  declarations: [
    RootComponent,
    MenuComponent,
    LoginComponent,
    BlogComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    MainPostsComponent,
    ListPostsComponent,
    FooterComponent,
    NewBlogPostComponent,
    BlogPostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
