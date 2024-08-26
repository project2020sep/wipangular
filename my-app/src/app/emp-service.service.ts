import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private http : HttpClient) { }

  
  url : string = "http://localhost:9090/emp/getall";
  url1 : string = "http://localhost:9090/emp/addemployee";

  getEmployeeList() : Observable<any> {
   return this.http.get(`${this.url}`);
  }

  addEmployee(params: any) : Observable<any> {
    
    return this.http.post(`${this.url1}`,params);
   }
}
