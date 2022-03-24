import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private bt:HttpClient) { }
  postData(value){
  return  this.bt.post<any>(`http://localhost:3000/Register`, value)

  }
  getLog(){
    return this.bt.get<any>(`http://localhost:3000/Register`)
  }
  menu(){
    return this.bt.get<any>(`http://localhost:3000/menu`)
  }
  postMenu(value){
   return this.bt.post<any>(`http://localhost:3000/menu`,value)
  }
}
