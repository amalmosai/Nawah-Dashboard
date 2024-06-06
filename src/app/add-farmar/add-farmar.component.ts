import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FarmarService } from '../Serviecs/farmar.service';

@Component({
  selector: 'app-add-farmar',
  templateUrl: './add-farmar.component.html',
  styleUrls: ['./add-farmar.component.css']
})
export class AddFarmarComponent {
  Form : FormGroup;
  info : FormData;

  constructor(private route : Router ,private builder : FormBuilder , private FrmSrv : FarmarService) {
    this.info = new FormData()
    this.Form = this.builder.group({
      fname: ['fname'],
      lname: ['lname'],
      email: ['example@gmail.com'],
      password: [''],
      phone: ['01'],
      address: ['Aswan'],
      farmaddress: ['Aswan'],
      farmarea: ['1'],
      cropamount: ['1'],
      croptype: ['date'],
      farmingExperience: ['1'],
      img: ['avatar.jfif'],
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
    this.FrmSrv.add(this.info).subscribe({
      next:(res)=>{
        if(res.success){
          //goo to home
        this.route.navigateByUrl("/farmar")

        }
        else{
          alert(res.message)
        }
      }
    })

  }
}
