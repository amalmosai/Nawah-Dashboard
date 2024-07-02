import { Component } from '@angular/core';
import { FormGroup, FormBuilder  , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../Serviecs/products.service';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent {
  Form : FormGroup;
  info : FormData;
  constructor(private route : Router ,private builder : FormBuilder , private PrdSrv : ProductsService){
    this.info = new FormData()
    this.Form = this.builder.group({
      name: ['name'],
      description: [''],
      quantity: ['1'],
      price: [''],
      category: ['dates'],
      status: ['available'],
      imageUrl:['']
    })
  }
  upload(data:any){
    this.info.append('imageUrl',data[0])
  }
  send() {
    for (const key in this.Form.controls) {
      this.info.append(key,this.Form.controls[key].value)
      console.log(this.info);
    }
    console.log(this.info);
    this.PrdSrv.add(this.info).subscribe({
      next:(res)=>{
        if(res.success){
          this.route.navigateByUrl("/products")
        }else{
          alert(res.message)
        }
      }
    })

  }
}
