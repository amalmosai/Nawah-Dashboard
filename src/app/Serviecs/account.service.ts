import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../api';
import { IUsers } from '../i-users';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  OrignaPath ="http://localhost:3001/"
  StoredUserSub:BehaviorSubject<StoredUser>
  constructor(private http:HttpClient) {
    this.StoredUserSub = new BehaviorSubject<StoredUser>(this.getuser())
  }
  adminlogin(data:IUsers){
    return this.http.post<API>(this.OrignaPath+'auth/login',data)
  }

  setuser(email:string,fname:string,lname:string,img:string ,token:string){
    let s= {email:email,fname:fname,lname:lname,img:img,token:token} as StoredUser;
    localStorage.setItem("storedUser",JSON.stringify(s))
    this.StoredUserSub.next(s)

  }

  getuser():StoredUser{
    let check = localStorage.getItem("storedUser")
    if(check == null)
      return {email:"",fname:"",lname:"",img:"" ,token:""}
    else
      return JSON.parse(check)  as StoredUser
  }

  logout(){
    this.setuser("","","","","");
  }

}
export interface StoredUser{
  email:string;
  fname:string;
  lname:string;
  img:string;
  token:string
}
