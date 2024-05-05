import { Component } from '@angular/core';
import { ProductsService } from '../Serviecs/products.service';
import { UsersService } from '../Serviecs/users.service';
import { FarmarService } from '../Serviecs/farmar.service';
import { EngineersService } from '../Serviecs/engineer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  public chart: any;
  products:[];
  engineers:[];
  farmers:[];
  users:[];
  arr=[];
  order=[];
  count:number[];
  status:number=0;


  constructor(private ProductSrv : ProductsService,private UserSrv:UsersService ,private FarmerSrv:FarmarService,private EngineerSrv:EngineersService , private router : Router){
    this.products=[];
    this.engineers=[];
    this.farmers=[];
    this.users=[];
    this.count=[];

    this.ProductSrv.getAll().subscribe({
      next: (res) => {
      console.log("in service")
        this.products=res.data
        console.log(this.products)
        this.count[0]=this.products.length;
      }
    })
    this.UserSrv.getAll().subscribe({
      next: (res) => {
      console.log("in service")
        this.users=res.data
        console.log(this.users)
        this.count[1]=this.users.length;
      }
    })
    this.FarmerSrv.getFarmer().subscribe({
      next: (res) => {
      console.log("in service")
        this.farmers=res.data
        this.count[2]=this.farmers.length;
      }
    })
    this.EngineerSrv.getAll().subscribe({
      next: (res) => {
      console.log("in service")
        this.engineers=res.data
        this.count[3]=this.engineers.length;
      }
    })

    const config = {
      // type: 'polarArea',
      // data: ,
      options: {}
  }

    const data = {
      labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };
  }
}
