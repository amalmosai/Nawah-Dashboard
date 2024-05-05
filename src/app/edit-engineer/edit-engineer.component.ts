import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Iengineers } from '../i-engineers';
import { EngineersService } from '../Serviecs/engineer.service';
@Component({
  selector: 'app-edit-engineer',
  templateUrl: './edit-engineer.component.html',
  styleUrls: ['./edit-engineer.component.css']
})
export class EditEngineerComponent {
  MyData : FormData
  MyForm! : FormGroup
  oldUsers! : Iengineers
  id : string = ""
  constructor(private EngineerSrv : EngineersService , private router:Router, private builder: FormBuilder, private activRoute :ActivatedRoute) {
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
        this.EngineerSrv.getByID(prams["id"]).subscribe({
          next:(res)=>{
            this.oldUsers = res.data as Iengineers;
            this.buildForm()
          }
        })
      }
    })
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
      license: [this.oldUsers.license],
      // imageUrl: [this.oldUsers.imageUrl, [Validators.required]],
    })
  }

  send() {
    console.log(this.MyForm.value)
    console.log(this.id)
    for (const key in this.MyForm.controls) {
      this.MyData.append(key,this.MyForm.controls[key].value)
    }
    console.log(this.MyData.get("name"));
    this.EngineerSrv.edit(this.MyForm.value,this.id).subscribe({
      next:(res)=>{
        if(res.success){
          //goo to home
          this.router.navigateByUrl("/engineer")
          // console.log(res.data);

        }
        else{
          alert(res.message)
        }
      }
    })

  }
}
