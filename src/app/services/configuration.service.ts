import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  public baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }

  getZipCodes() {
    let url = this.baseUrl + '/v1/masterData/zipcode';
    return this.http.get(url);
  }

  getZipCode(zipcode: any) {
    let url = this.baseUrl + '/v1/masterData/zipcode/' + zipcode;
    return this.http.get(url);
  }

  getSpecializations() {
    let url = this.baseUrl + '/v1/masterData/specialization';
    return this.http.get(url);
  }

  getSpecialization(id: any) {
    let url = this.baseUrl + '/v1/masterData/specialization/' + id;
    return this.http.get(url);
  }

  getQualifications() {
    let url = this.baseUrl + '/v1/masterData/qualification';
    return this.http.get(url);
  }

  getQualification(id: any) {
    let url = this.baseUrl + '/v1/masterData/qualification/' + id;
    return this.http.get(url);
  }

  getMedicalCouncil() {
    let url = this.baseUrl + '/v1/masterData/registerCouncil';
    return this.http.get(url);
  }

  getMedicalCouncils(id: any) {
    let url = this.baseUrl + '/v1/masterData/registerCouncil/' + id;
    return this.http.get(url);
  }

  getMedicalRecord() {
    let url = this.baseUrl + '/v1/masterData/medicalRecordType';
    return this.http.get(url);
  }

  getMedicalRecords(id: any) {
    let url = this.baseUrl + '/v1/masterData/medicalRecordType/' + id;
    return this.http.get(url);
  }
  getIssueType() {
    let url = this.baseUrl + '/v1/masterData/issuetype';
    return this.http.get(url);
  }

  getIssueTypes(id: any) {
    let url = this.baseUrl + '/v1/masterData/issuetype/' + id;
    return this.http.get(url);
  }

  createMedicalCouncil(body: any) {
    let url = this.baseUrl + '/v1/masterData/registerCouncil';
    return this.http.post(url, body);
  }

  deleteMedicalCouncil(id: any) {
    let url = this.baseUrl + '/v1/masterData/registerCouncil/' + id;
    return this.http.delete(url);
  }

  createMedicalRecord(body: any) {
    let url = this.baseUrl + '/v1/masterData/medicalRecordType';
    return this.http.post(url, body);
  }

  deleteMedicalRecord(id: any) {
    let url = this.baseUrl + '/v1/masterData/medicalRecordType/' + id;
    return this.http.delete(url);
  }

  createQualification(body: any) {
    let url = this.baseUrl + '/v1/masterData/qualification';
    return this.http.post(url, body);
  }

  deleteQualification(id: any) {
    let url = this.baseUrl + '/v1/masterData/qualification/' + id;
    return this.http.delete(url);
  }

  createSpecialization(request: any) {
    let url = this.baseUrl + '/v1/masterData/specialization';
    return this.http.post(url, request);
  }

  updateSpecialization(id: any, request: any) {
    let url = this.baseUrl + '/v1/masterData/specialization/' + id;
    return this.http.put(url, request);
  }

  deleteSpecialization(id: any) {
    let url = this.baseUrl + '/v1/masterData/specialization/' + id;
    return this.http.delete(url);
  }

  createIssueType(body: any) {
    let url = this.baseUrl + '/v1/masterData/issuetype';
    return this.http.post(url, body);
  }

  deleteIssueType(id: any) {
    let url = this.baseUrl + '/v1/masterData/issuetype/' + id;
    return this.http.delete(url);
  }

  getSupport() {
    let url = this.baseUrl + '/v1/support/tickets/assignedTo';
    return this.http.get(url);
  }

  updateMedicalRecord(id: any, request: any) {
    let url = this.baseUrl + '/v1/masterData/medicalRecordtype/' + id;
    return this.http.put(url, request);
  }

  updateMedicalCouncil(id: any, request: any) {
    let url = this.baseUrl + '/v1/masterData/registerCouncil/' + id;
    return this.http.put(url, request);
  }

  updateIssueType(id: any, request: any) {
    let url = this.baseUrl + '/v1/masterData/issuetype/' + id;
    return this.http.put(url, request);
  }

  createZipCode(body: any) {
    let url = this.baseUrl + '/v1/masterData/zipcode';
    return this.http.post(url, body);
  }


  updateZipcode(id: any, request: any) {
    let url = this.baseUrl + '/v1/masterData/zipcode/' + id;
    return this.http.put(url, request);
  }

  deleteZipcode(id: any) {
    let url = this.baseUrl + '/v1/masterData/zipcode/' + id;
    return this.http.delete(url);
  }
}
