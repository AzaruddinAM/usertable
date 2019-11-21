import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../app/user.model';



@Injectable({
  providedIn: 'root'
})
export class TableService {

  public users:User[];
  constructor(public http:HttpClient,public router:Router) { }
  
  

  getUsers()
  {
    
      return this.http.get('http://localhost:3001/users');
      
  }
}
