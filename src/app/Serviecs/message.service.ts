import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http : HttpClient) { }
  OrignaPath ="http://localhost:3001/api/v2/contactMessg";

  getAllMessages(){
    return this.http.get<API>(this.OrignaPath+'/');
  }

}
