import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  public baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }

  getDoctors() {
    let url = this.baseUrl + '/v1/superAdmin/allDoctors';
    return this.http.get(url);
  }

}
