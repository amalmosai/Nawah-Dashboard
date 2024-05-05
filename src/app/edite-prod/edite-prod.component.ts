import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../Serviecs/products.service';
import { iProducts } from '../iProducts';
@Component({
  selector: 'app-edite-prod',
  templateUrl: './edite-prod.component.html',
  styleUrls: ['./edite-prod.component.css']
})
export class EditeProdComponent {

  MyData : FormData
  MyForm! : FormGroup
  oldProduct : iProducts
  id : string = ""
  imageUrl : any
  constructor(private PrdSrv : ProductsService , private router:Router, private builder: FormBuilder, private activRoute :ActivatedRoute) {
    this.MyData = new FormData();
    this.oldProduct = {price:0, quantity:0 , _id:"0"}
  }


  ngOnInit() {
    this.activRoute.params.subscribe({
      next:(prams)=>{
        this.id = prams["id"]
        this.PrdSrv.getByID(prams["id"]).subscribe({
          next:(res)=>{
            this.oldProduct = res.data as iProducts;
            // this.imageUrl= this.oldProduct.imageUrl
            console.log(this.oldProduct);
            this.buildForm()
          }
        })
      }
    })
  }

  upload(data:any){
    this.MyData.append('imageUrl',data[0])
    console.log(this.MyData.get('imageUrl'));
  }


  buildForm(){
    this.MyForm = this.builder.group({
      name: [this.oldProduct.name, [Validators.required]],
      description: [this.oldProduct.description, [Validators.required]],
      quantity: [this.oldProduct.quantity, [Validators.required]],
      price: [this.oldProduct.price, [Validators.required]],
      // farmerId: [this.oldProduct.farmerId, [Validators.required]],
      category: [this.oldProduct.category],
      status: [this.oldProduct.status],
    })
    // console.log(this.MyForm.value);
  }

  send() {
    console.log(this.MyForm.value)
    // console.log(this.id)
    for (const key in this.MyForm.controls) {
      this.MyData.append(key,this.MyForm.controls[key].value)
    }
    if(this.id)
    {
      this.MyData.append('id',this.id)
      this.PrdSrv.edit(this.MyData,this.id).subscribe({
        next:(res)=>{
          if(res.success){
            //goo to home
            this.router.navigateByUrl("/products")
            // console.log(res.data);
          }
          else{
            alert(res.message)
          }
      }
    })

  }
}



// send() {
//   console.log(this.MyForm.value);
//   const formData = new FormData();
//   for (const key in this.MyForm.controls) {
//     formData.append(key, this.MyForm.controls[key].value);
//   }
//   console.log(this.MyForm.value);
//   // this.PrdSrv.edit(this.MyForm.value, this.id).subscribe({
//   //   next: (res) => {
//   //     if (res.success) {
//   //       this.router.navigateByUrl("/products");
//   //     } else {
//   //       alert(res.message);
//   //     }
//   //   },
//   //   error: (err) => {
//   //     console.error(err);
//   //     alert("An error occurred.Please try again later.");
//   //   }
//   // });
// }

}
