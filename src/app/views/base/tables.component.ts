import { Component } from '@angular/core';
import { TableService } from '../../table.service';
import { Router } from '@angular/router';
import { User } from '../../user.model';
@Component({
  templateUrl: 'tables.component.html'
})
export class TablesComponent {
  users:User[];
  
  constructor(public  TableService:TableService,private router:Router) { }
  ngOnInit() {

    this.displayusers();
  }
  displayusers()
  {
    
   this.TableService.getUsers().subscribe((res)=>{
     this.users=JSON.parse(JSON.stringify(res));
     console.log("hai");
     console.log(res);
     
     
     console.log(this.users);
     
   });
  }

}
