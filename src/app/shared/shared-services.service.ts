import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url=environment.teamAlphaServerapi;
  constructor(private _http : HttpClient) { }

  postContactDetails(contactDetails){
    return this._http.post(this.url+'/contact',contactDetails)
  }
  postBusinessInfoServiceDetails(businessInfoDetails){
    return this._http.post(this.url+'/businessInfo',businessInfoDetails)
  }
}
