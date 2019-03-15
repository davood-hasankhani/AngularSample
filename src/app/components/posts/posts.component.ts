import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postse:post [];
  comments:comment[];
  postComments:postComment[];

  constructor( private dataService:DataService) {
    console.log("add to data console");
   }

  ngOnInit() {
    this.dataService.getPostsData().subscribe((posts) => {
      //console.log(posts.toString);
      this.postse  = posts; 
      console.log(this.postse);
    });

    this.dataService.getComment().subscribe((comments) => {
      this.comments = comments;
    });

    for(let i=0 ; i< this.postse.length;i++){
      for(let j=0; j< this.comments.length ; j++)
      if(this.postse[i].id == this.comments[j].postId){
          
      }
    }

  }

}
interface post{
  id:number,
  title:string,
  body:string,
  userId:number
}
interface comment{
  id:number,
  email:string,
  name:string,
  body:string,
  postId:number
}
interface postComment{

  comments:comment[]
}
