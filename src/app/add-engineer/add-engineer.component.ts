import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import  {EngineersService} from '../Serviecs/engineer.service';

@Component({
  selector: 'app-add-engineer',
  templateUrl: './add-engineer.component.html',
  styleUrls: ['./add-engineer.component.css']
})
export class AddEngineerComponent {

  Form : FormGroup;
  info : FormData;
  constructor(private route : Router ,private builder : FormBuilder , private engineerSrv : EngineersService){
    this.info = new FormData()
    this.Form = this.builder.group({
      fname: ['fname'],
      lname: ['lname'],
      email: ['example@gmail.com'],
      password: [''],
      phone: ['012'],
      address: ['Aswan'],
      license: [''],
      img:['http://localhost:5000/default.png',]
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
    this.engineerSrv.add(this.info).subscribe({
      next:(res)=>{
        if(res.success){
        this.route.navigateByUrl("/engineer")
        }else{
          alert(res.message)
        }
      }
    })

  }
}
