import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFarmar } from '../i-farmar';
import { FarmarService } from '../Serviecs/farmar.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-farmar',
  templateUrl: './farmar.component.html',
  styleUrls: ['./farmar.component.css']
})
export class FarmarComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];
  Farmer? : IFarmar [];

  constructor(private FrmSrv : FarmarService , private router : Router) {}

  ngOnInit(): void {
    this.fetchfar();
  }

  fetchfar(): void {
    this.Farmer = []
    this.FrmSrv.getFarmer().subscribe({
      next: (res) => {
        let Exam = res.data as IFarmar[];
        this.POSTS = Exam;
        console.log(this.POSTS);
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchfar();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchfar();
  }

  del(id : string)
  {
    console.log(id)
    this.FrmSrv.delete(id).subscribe({
      next:(res)=>{
        this.fetchfar();
      }
    })
  }
}
