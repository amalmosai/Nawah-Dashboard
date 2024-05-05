import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  fname: any = {};
  lname: any = {};
  img:any;
  check: any;

  ngOnInit() {
    const storedUser = localStorage.getItem("storedUser");
    if (storedUser !== null) {
      this.check = JSON.parse(storedUser);
      this.fname = this.check.fname;
      this.lname = this.check.lname;
      this.img=this.check.img;
    }
  }

  title = 'DashBoard';
  theme:string = "";////
  color:string = "";

  change(them:string)
  {
    // console.log(them);
    this.theme = them;
  }

  night(dark:string)
  {
    this.color = dark
  }
}

