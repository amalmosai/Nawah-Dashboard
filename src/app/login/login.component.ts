import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/i-users';
import { AccountService } from '../Serviecs/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup
  constructor(private builder:FormBuilder,private accSrv:AccountService,private router:Router)
  {
    this.form=this.builder.group({
      email:['',[Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
      password:['',[Validators.required]],
    })

  }

  login()
  {
    if (this.form.valid) {
      // console.log(this.form.value)
      this.accSrv.adminlogin(this.form.value as IUsers)
        .subscribe({
          next: (response) => {
            if(response.data.role === "admin"){
              this.accSrv.setuser(response.data.email,response.data.fname,response.data.lname,response.data.img ,response.token);
              this.router.navigateByUrl('')
            }else{

            }
          }
        })

    }
  }
}
