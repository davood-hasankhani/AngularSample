import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //add to form submit
import { HttpModule } from '@angular/http';//add to call Data service
import { RouterModule , Routes } from '@angular/router'; // add to page route in to other page

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { CommentComponent } from './components/comment/comment.component';
import { PostsComponent } from './components/posts/posts.component';



/** Start  add for bootstrap-ngx  */
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  // ...
})
export class AppBootstrapModule {}
/** add for bootstrap-ngx  End */



const AppRoutes : Routes =[
  {path:'' ,component:UserComponent},
  {path:'comments',component:CommentComponent},
  {path:'posts' , component:PostsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CommentComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // add to form submit
    HttpModule, // get data from webService
    RouterModule.forRoot(AppRoutes) //app routes redirect to other page
  ],
  providers: [DataService],// add to call data
  bootstrap: [AppComponent]
})
export class AppModule { }
