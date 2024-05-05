import { Component, OnInit } from '@angular/core';
import { IUsers } from '../i-users';
import { UsersService } from '../Serviecs/users.service';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  Users?: IUsers[];
  constructor(private UserSrv: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.fetchuser();
  }

  fetchuser(): void {
    this.Users = []
    this.UserSrv.getAll().subscribe({
      next: (res) => {
        let Exam = res.data as IUsers[];
        this.POSTS = Exam;
        console.log(this.POSTS);
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchuser();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchuser();
  }

  del(id : string){
    console.log(id)
    this.UserSrv.delete(id).subscribe({
      next:(res)=>{
        this.fetchuser();
      }
    })
  }


}
