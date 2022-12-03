import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  implements OnInit{

  userList: any
  constructor (private HttpClient: HttpClient) { 
    this.userList=[];
  }
  
   isShowing: boolean = true;
  ngOnInit() : void {
    this.getUserList()
  }

  getUserList() {
    this.HttpClient.get('https://jsonplaceholder.typicode.com/users').subscribe((result:any) => {
      this.userList = result
    })
  }

}
