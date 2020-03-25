import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { DriverModel } from '../_model/driver-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }
  driver_url = `http://localhost:8080/fleet-manager-api/rest/driver`;
  signup_url = `http://localhost:8080/fleet-manager-api/rest/driver/save`;

  //get all driver result
  getDrivers(): Observable<HttpResponse<DriverModel[]>>{
    let headers = new HttpHeaders();
    headers = headers.append('auth-token',localStorage.getItem("auth-token"));
    headers = headers.append('session_key',localStorage.getItem("session_key"));
    
    return this.http.get<HttpResponse<DriverModel[]>>(this.driver_url,{headers});
  }

  // http options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'my-auth-token',
      'auth-token':localStorage.getItem('auth-token'),
      'session_key':localStorage.getItem('session_key')
    })
  };

  //save driver
  saveDriver(driverPayload){
    return this.http.post(this.signup_url,driverPayload,this.httpOptions);
  }

  
}
