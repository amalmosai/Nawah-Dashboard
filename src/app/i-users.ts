import { Data } from "@angular/router";

export interface IUsers {
  _id:string,
  fname:string,
  lname:string,
  email:string,
  password:string,
  phone:number,
  img:string,
  order?: Array<object>;
  address:string,
  role:string
}
