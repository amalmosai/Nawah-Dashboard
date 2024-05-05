import { Component } from '@angular/core';
import { IFarmar } from '../i-farmar';
import { FarmarService } from '../Serviecs/farmar.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators ,FormArray} from '@angular/forms';
import { Iengineers } from '../i-engineers';
import { EngineersService } from '../Serviecs/engineer.service';

@Component({
  selector: 'app-add-farmer-to-engineer',
  templateUrl: './add-farmer-to-engineer.component.html',
  styleUrls: ['./add-farmer-to-engineer.component.css']
})
export class AddFarmerToEngineerComponent {
    // MyData : FormData
    MyForm! : FormGroup
    oldUsers! : Iengineers
    id : string = ""
    Farmer : IFarmar [];
    values :any [];

    constructor(private fb: FormBuilder,private EngineerSrv : EngineersService,private FrmSrv : FarmarService,private activRoute :ActivatedRoute,private route : Router ) {
      this.Farmer =[];
      this.values=[];
      this.MyForm = this.fb.group({
        checkArray: this.fb.array([], [Validators.required]),
      });
      this.FrmSrv.getFarmer().subscribe({
        next:(res)=>{
          let Exam = res.data as IFarmar [];
          this.Farmer = Exam;
          console.log(this.Farmer);
        }
      })
    }
    onCheckboxChange(e: any) {
      const checkArray: FormArray = this.MyForm.get('checkArray') as FormArray;
      if (e.target.checked) {
        checkArray.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: any) => {
          if (item.value == e.target.value) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
    submitForm() {
      this.values=this.MyForm.value;
      this.activRoute.params.subscribe({
        next:(prams)=>{
          this.id = prams["id"]
          this.EngineerSrv.AddFarmer(prams["id"],this.values).subscribe({
            next:(res)=>{
              if(res.success){
              this.route.navigateByUrl("/engineer");
              }else{
                alert(res.message)
              }
            }
          })
        }
      })
    }

    ngOnInit() {

    }
}
