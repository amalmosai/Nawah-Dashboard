import { Component } from '@angular/core';
import { AccountService } from '../Serviecs/account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private accSrv:AccountService,private router:Router){

  }
  logout(){
    this.accSrv.logout()
    this.router.navigate(['/login'])
  }

}

