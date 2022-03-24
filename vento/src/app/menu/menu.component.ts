import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
biryani;
menu;
  constructor(private th:DataService) { }

  ngOnInit(): void {
    this.th.menu().subscribe((res)=>{
      console.log(res);
      this.menu=res
      
      
    })
  }
getMenu(){
  
}
}
