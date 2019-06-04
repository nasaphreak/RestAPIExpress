import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { NewBlogPostComponent } from './new-blog-post/new-blog-post.component';
import { LoginComponent } from './login/login.component';
import { BlogPostFormComponent } from './blog-post-form/blog-post-form.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const AppRoutes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'newblogpost', component: NewBlogPostComponent },
  { path: 'login', component: LoginComponent},
  { path: 'blogpostform', component: BlogPostFormComponent} 
];
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);