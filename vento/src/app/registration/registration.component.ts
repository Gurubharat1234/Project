import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private fb:FormBuilder,
    private fetch:DataService) { }
data;
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:[''],
      number:[''],
      mail:[''],
      password:[''],
      role:[''],
    
    })
  }
  
Submit(){
  console.log(this.registerForm.value);
  // localStorage.setItem('details', JSON.stringify(this.registerForm.value))
  localStorage.setItem('bhart',JSON.stringify(this.registerForm.value))
  this.fetch.postData(this.registerForm.value).subscribe((res)=>{
    console.log(res);
    this.data=res
  })
}

}
