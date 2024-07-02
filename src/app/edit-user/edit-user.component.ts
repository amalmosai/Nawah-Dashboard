import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IUsers } from '../i-users';
// import { iProducts } from '../iProducts';
import { UsersService } from '../Serviecs/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  MyData : FormData
  MyForm! : FormGroup
  oldUsers! : IUsers
  id : string = ""
  img: any
  constructor(private UserSrv : UsersService , private router:Router, private builder: FormBuilder, private activRoute :ActivatedRoute) {
    this.MyData = new FormData();
    this.MyForm = new FormGroup({
      // firstName: new FormControl()
    });
    // this.oldUsers = {_id }
}
  ngOnInit() {
    this.activRoute.params.subscribe({
      next:(prams)=>{
        this.id = prams["id"]
        this.UserSrv.getByID(prams["id"]).subscribe({
          next:(res)=>{
            this.oldUsers = res.data as IUsers;
            this.buildForm()
          }
        })
      }
    })
  }

  upload(data:any){
    this.MyData.append('img',data[0])
    console.log(this.MyData.get('img'));
  }


  buildForm(){
    ////to appand Coloer ayyay
    console.log(this.oldUsers);
    // let list = this.builder.array([])
    this.MyForm = this.builder.group({
      fname: [this.oldUsers.fname, [Validators.required]],
      lname: [this.oldUsers.lname, [Validators.required]],
      email: [this.oldUsers.email, [Validators.required]],
      password: [this.oldUsers.password, [Validators.required]],
      phone: [this.oldUsers.phone, [Validators.required]],
      address: [this.oldUsers.address],
    })
  }

  send() {
    console.log(this.MyForm.value)
    for (const key in this.MyForm.controls) {
      this.MyData.append(key,this.MyForm.controls[key].value)
    }
    this.MyData.append('id',this.id);
    this.UserSrv.edit(this.MyData,this.id).subscribe({
      next:(res)=>{
        if(res.success){
          //goo to home
          this.router.navigateByUrl("/users")
          // console.log(res.data);
        }
        else{
          alert(res.message)
          console.log(this.MyData.get("img"));
        }
      }
    })
  }
}
