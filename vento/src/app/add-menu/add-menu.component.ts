import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
addMenu;
  constructor(private add:DataService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
    this.addMenu=this.fb.group({
      item:[''],
      price:[''],
      quantity:[''],
      url:['']
    })
    
  }
 Submit(){
    this.add.postMenu(this.addMenu.value).subscribe((res)=>{
      console.log(res);
      
    })
  }

}
