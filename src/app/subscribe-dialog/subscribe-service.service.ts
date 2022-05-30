import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  url =environment.teamAlphaServerapi;
  
  constructor(private _http : HttpClient) { }

  postSubscribeData(subScribeData){
     return  this._http.post(`${this.url}`+"/subscribe",subScribeData) 
  }



}
