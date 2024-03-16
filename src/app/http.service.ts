import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  inject } from '@angular/core';

import { IStudent } from './interface/student';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url="https://localhost:7045/api/Student";
  http = inject(HttpClient);
  constructor() { }
  getallstudent(){
    return this.http.get<IStudent[]>(this.url);
  }
  addstudent(student:IStudent){
    return this.http.post(this.url,student);
  }
}
