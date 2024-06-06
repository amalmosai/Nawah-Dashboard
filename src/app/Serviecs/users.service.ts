import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../api';
import { IUsers } from '../i-users';
import { StoredUser } from './account.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  storeduser: any;
  token:string='';
  reqHeader:any;
  constructor(private http : HttpClient) { }

  private getRequestHeaders(): HttpHeaders {
    const storedUser = localStorage.getItem("storedUser");
    if (storedUser !== null) {
      this.storeduser=JSON.parse(storedUser);
      this.token=this.storeduser.token;
      console.log(this.storeduser.token);
    }
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    return headers;
  };

  OrignaPath ="http://localhost:3001/api/v2/user";

  getAll(){
    return this.http.get<API>(this.OrignaPath+'/');
  }

  getByID(id :string){
    return this.http.get<API>(this.OrignaPath+"/"+id);
  }

  add(data:FormData){
    const headers = this.getRequestHeaders();
    return this.http.post<API>(this.OrignaPath+'/',data,{ headers: headers });
  }

  delete(id :string){
    const headers = this.getRequestHeaders();
    return this.http.delete<API>(this.OrignaPath+"/"+id,{ headers: headers });
  }

  edit(data:any,id:string){
    const headers = this.getRequestHeaders();
    return this.http.put<API>(this.OrignaPath+`/${id}`,data ,{ headers: headers });
  }
}
