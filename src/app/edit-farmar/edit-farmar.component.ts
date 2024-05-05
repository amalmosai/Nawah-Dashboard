import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IFarmar } from '../i-farmar';
import { FarmarService } from '../Serviecs/farmar.service';

@Component({
  selector: 'app-edit-farmar',
  templateUrl: './edit-farmar.component.html',
  styleUrls: ['./edit-farmar.component.css']
})
export class EditFarmarComponent {

  MyData : FormData
  MyForm! : FormGroup
  oldFarmar! : IFarmar
  id : string = ""
  constructor(private FrmSrv : FarmarService , private router:Router, private builder: FormBuilder, private activRoute :ActivatedRoute) {
    this.MyData = new FormData();
    this.MyForm = new FormGroup({})
  }

  ngOnInit() {
    this.activRoute.params.subscribe({
      next:(prams)=>{
        this.id = prams["id"]
        this.FrmSrv.getByID(prams["id"]).subscribe({
          next:(res)=>{
            this.oldFarmar = res.data as IFarmar;
            this.buildForm()
          }
        })
      }
    })
  }



  buildForm(){
    console.log(this.oldFarmar);
    this.MyForm = this.builder.group({
      fname: [this.oldFarmar.fname, [Validators.required]],
      lname: [this.oldFarmar.lname, [Validators.required]],
      email: [this.oldFarmar.email, [Validators.required]],
      password: [this.oldFarmar.password, [Validators.required]],
      phone: [this.oldFarmar.phone, [Validators.required]],
      address: [this.oldFarmar.address],
      farmaddress: [this.oldFarmar.farmaddress],
      croptype: [this.oldFarmar.croptype],
      farmarea: [this.oldFarmar.farmarea],
      cropamount: [this.oldFarmar.cropamount],
      farmingExperience: [this.oldFarmar.farmingExperience]
    })
  }


  send() {
    console.log(this.MyForm.value)
    console.log(this.id)
    for (const key in this.MyForm.controls) {
      this.MyData.append(key,this.MyForm.controls[key].value)
    }
    console.log(this.MyData.get("name"));
    this.FrmSrv.edit(this.MyForm.value,this.id).subscribe({
      next:(res)=>{
        if(res.success){
          //go to home
          this.router.navigateByUrl("/farmar")
          // console.log(res.data);

        }
        else{
          alert(res.message)
        }
      }
    })

  }
}
