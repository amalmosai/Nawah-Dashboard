import { Component, OnInit } from '@angular/core';
import { Iengineers } from '../i-engineers';
import { EngineersService } from '../Serviecs/engineer.service';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-engineers',
  templateUrl: './engineers.component.html',
  styleUrls: ['./engineers.component.css']
})
export class EngineersComponent implements OnInit {
  POST:any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  Engineers?:Iengineers[];

  constructor(private EngineerSrv : EngineersService , private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit() : void{
    this.fetcheng();
  }

  fetcheng(): void {
    this.Engineers = []
    this.EngineerSrv.getAll().subscribe({
      next: (res) => {
        let Exam = res.data as Iengineers[];
        this.POST = Exam;
        console.log(this.POST);
      }
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetcheng();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetcheng();
  }

  del(id : string)
  {
    console.log(id)
    this.EngineerSrv.delete(id).subscribe({
      next:(res)=>{
        this.fetcheng();
      }
    })
  }
};

