import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../api';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private http : HttpClient) { }
  OrignaPath ="http://localhost:3001/";

  getAllMessages(){
    return this.http.get<API>(this.OrignaPath+'contactMessg/allMessages');
  }

}
