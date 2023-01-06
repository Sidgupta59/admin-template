import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }


  login(request: any) {
    let url = this.baseUrl + '/v1/superAdmin/login';
    return this.http.post(url, request);
  }


}
