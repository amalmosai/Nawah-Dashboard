import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../Serviecs/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  Form : FormGroup;
  info : FormData;
  constructor(private route : Router ,private builder : FormBuilder , private userSrv : UsersService){
    this.info = new FormData();
    this.Form = this.builder.group({
      fname: ['fname'],
      lname: ['lname'],
      email: ['example@gmail.com'],
      password: [''],
      phone: ['' ],
      address: ['Aswan'],
      img:['avatar.jfif']
    })
  }

  upload(data:any){
    this.info.append('img',data[0])
  }

  send() {
    for (const key in this.Form.controls) {
      this.info.append(key,this.Form.controls[key].value)
      console.log(this.info);
    }
    // this.show()
    console.log(this.info);
    this.userSrv.add(this.info).subscribe({
      next:(res)=>{
        if(res.success){
          //go to home
        this.route.navigateByUrl("/users")

        }
        else{
          alert(res.message)
        }
      }
    })

  }
}
