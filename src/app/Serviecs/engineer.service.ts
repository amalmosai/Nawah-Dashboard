import { Injectable  } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { API } from '../api';
@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class EngineersService {
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

  OrignaPath ="http://localhost:3001/"

  getAll(){
    return this.http.get<API>(this.OrignaPath+'engineer/allEngineers');
  }

  getByID(id :string){
    return this.http.get<API>(this.OrignaPath+"engineer/"+id);
  }

  add(data:FormData){
    const headers = this.getRequestHeaders();
    return this.http.post<API>(this.OrignaPath+'engineer/add',data,{ headers: headers })
  }

  delete(id :string){
    const headers = this.getRequestHeaders();
    return this.http.delete<API>(this.OrignaPath+"engineer/delete/"+id ,{ headers: headers });
  }

  edit(data:any,id:string){
    const headers = this.getRequestHeaders();
    return this.http.put<API>(this.OrignaPath+'engineer/update/'+id , data ,{ headers: headers })
  }


  AddFarmer(id:string,data:any){
    const headers = this.getRequestHeaders();
    return this.http.put<API>(this.OrignaPath+'engineer/addfarmer/'+id,data,{ headers: headers });
  }
}
