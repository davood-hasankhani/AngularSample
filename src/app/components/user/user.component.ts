import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  address:AddressHome;
  formsDetail:FormDetail[];
  isEdit:boolean=false;
  comments:comment[];

  constructor(private dataService:DataService) { 
    console.log("Constructor ...");
  }

  ngOnInit() {
    console.log('ng on init ...');
 

    // this.dataService.getComment().subscribe((comments) => {
    //   this.comments = comments;
    // });


    this.formsDetail = [{
      id:'1',
      name:'street Follan',
      lastName:'fdv',
      birthDay:'Tehran',
      phone:'45453456354'
      }, {
        id:'2',
        name:'street fdgdfb Follan',
        lastName:'ghjghj',
        birthDay:'Tehran',
        phone:'45635434554'
      }, {
        id:'3',
        name:'streetfdbdf dsv Follan',
        lastName:'ghjghjgh',
        birthDay:'Tehran',
        phone:'4565345354'
      }, {
        id:'4',
        name:'street fdbfsg Follan',
        lastName:'ghkgkgk',
        birthDay:'Tehran',
        phone:'45635434554'
      },
      ];

  }
  
  toggle(hobby){
    
    this.isEdit= !this.isEdit;
    this.address =  this.formsDetail.find(hobby);
    console.log(this.address);
  }

  addformDetail(hobby){
    console.log("add hobby ");
    this.formsDetail.unshift(hobby);
    return false;
  }

  editHobby(hobb){
    console.log("delete hobby ...." + hobb);
    for(let i=this.formsDetail.length;i >= 0;i--){
      if(this.formsDetail[i] == hobb){
        this.formsDetail = hobb;
       console.log("Done   --> ");
       return false;
      }
    }
    return false;
  }

  deleteHobby(hobb){
    console.log("delete hobby ...." + hobb);
    for(let i=this.formsDetail.length;i >= 0;i--){
      if(this.formsDetail[i] == hobb){
        this.formsDetail.splice(i,1);
       console.log("Done   --> ");
       return false;
      }
    }
    return false;
  }

}
interface AddressHome{
  id:string,
  name:string,
  lastName:string,
  birthDay:string,
  phone:string
}

interface FormDetail{
  id:string,
  name:string,
  lastName:string,
  birthDay:string,
  phone:string
}
interface comment{
  id:number,
  email:string,
  name:string,
  body:string,
  postId:number
}