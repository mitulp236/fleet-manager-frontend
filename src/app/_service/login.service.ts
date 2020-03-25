import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login_url = `http://localhost:8080/fleet-manager-api/rest/user/login`;

  login(email,password){
    // define json payload
    const payload = {
      email:email,
      password:password
    };
    // define http post request
    return this.http.post(this.login_url,payload,{observe:'response'});  
  }

}
