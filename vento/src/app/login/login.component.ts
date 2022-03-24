import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  route: any;

  constructor(private bt:DataService,
    route:Router) { }
person;
  ngOnInit(): void {
    this.bt.getLog().subscribe((res)=>{
      console.log(res);
      this.person=res
      
    })
  }
  onSubmit(data) {
    let flag = false
    this.person.forEach((res)=> {
     if(res.Email === data.value.mail && res.password === data.value.password) {
       alert("User Logged In Successfully")
       localStorage.setItem("users",JSON.stringify(res))
       flag = true;
      //  data.reset()
      //  console.log("bharat");
       
     } 
   })
   if(!flag) {
     alert("Please Register");
     console.log("bharat");

    
   }
 
   }
}
