import { Component } from '@angular/core';
import {Chart} from 'chart.js/auto';
import { ProductsService } from '../Serviecs/products.service';
import { Router } from '@angular/router';
import { EngineersService } from '../Serviecs/engineer.service';
import { FarmarService } from '../Serviecs/farmar.service';
import { UsersService } from '../Serviecs/users.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  public chart: any;
  products:[];
  engineers:[];
  farmers:[];
  users:[];
  arr=[];
  count:number[];

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
        this.count[0]=this.products.length;
        }
    })
    this.UserSrv.getAll().subscribe({
      next: (res) => {
      console.log("in service")
        this.users=res.data
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
        this.createChart()
        }
    })
  }

  createChart(){
    console.log(this.count)
    this.chart = new Chart("MyChartt", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['no. of product', 'no. of User','no. of Farmer','no. of Engineer',],
	      datasets: [
          {
            label: "Profit",
            data: [this.count[0], this.count[1],this.count[2],this.count[3],],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:3,
        animations: {
          tension: {
            duration: 1000,
            easing: 'easeInSine',
            from: 1,
            to: 0,
            loop: true
          },
        }
      },


    });
  }

  ngOnInit(): void {
    // this.createChart();
  }
}
