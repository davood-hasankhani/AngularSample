import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments:comment[];

  constructor( public dataservice:DataService) {
    console.log("comment data conected ...");
   }

  ngOnInit() {
     this.dataservice.getComment().subscribe( (comments) => {
       this.comments = comments;
       console.log(" comment is called ");
     });
  }

}
interface comment{
  id:number,
  email:string,
  name:string,
  body:string,
  postId:string
}
