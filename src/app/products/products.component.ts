import {Component, OnInit} from '@angular/core';
import { iProducts } from '../iProducts';
import { ProductsService } from '../Serviecs/products.service';
import { Router } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
/** Constants used to fill up our data base. */

export class ProductsComponent implements OnInit {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 7;
  tableSizes: any = [3, 6, 9, 12];

  Products:iProducts[] =[]

  constructor(private PrdSrv : ProductsService , private router : Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  ngAfterViewInit() : void{
    this.fetchprod();
  }

  fetchprod():void{
    this.Products = [];
    this.PrdSrv.getAll().subscribe({
      next: (res) => {
        let Exam = res.data as iProducts [];
        this.POSTS = Exam;
        console.log(this.POSTS);
        }
    })
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.fetchprod();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchprod();
  }
  del(id : string)
  {
    console.log(id)
    this.PrdSrv.delete(id).subscribe({
      next:(res)=>{
        this.fetchprod();
      }
    })
  }
}





