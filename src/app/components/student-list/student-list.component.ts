import { Component, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { IStudent } from '../../interface/student';
import { HttpService } from '../../http.service';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [MatTableModule,RouterLink,MatButtonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  StudentList:IStudent[]=[];
  httpservice = inject(HttpService);
  displayedColumns:string[]=[
    'id',
    'name',
    'gender',
    'age',
    'standard',
    'fathername'
  ];
  ngOnInit(){
      this.httpservice.getallstudent().subscribe(result=>{
        this.StudentList=result;
        console.log(this.StudentList);
    });
  }
}
