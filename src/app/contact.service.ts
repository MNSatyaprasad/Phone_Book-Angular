import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import { Contact } from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl ="http://localhost:8080/"

  constructor(private httpclient:HttpClient) { }

  createContact(contact:Contact):Observable<string>{
  return this.httpclient.post('$(this.baseUrl)/contact',contact,{responseType:'text'})
  }
  getAllContacts():Observable<Contact[]>{
    return this.httpclient.get<Contact[]>('$(this.baseUrl)/contacts',);
  }
  deleteContact(id:number):Observable<string>{
    return this.httpclient.delete('$(this.baseUrl)/contact/${id}',{responseType:"text"})
  }
  findContact(id:number):Observable<Contact>{
    return this.httpclient.get<Contact>('$(this.baseUrl)/contact/{id}')
  }
}
