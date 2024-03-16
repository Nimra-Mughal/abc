import { Component, NgModule, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { IStudent } from '../../interface/student';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  formbuilder=inject(FormBuilder);
  httpservice=inject(HttpService);
  studentform=this.formbuilder.group({
    name:['',Validators.required],
    gender:['',Validators.required],
    age:[0,Validators.required],
    standard:[0,Validators.required],
    fathername:['',Validators.required]
  });
  save(){
    console.log(this.studentform.value);
    const student:IStudent={
      name:this.studentform.value.name!,
      gender:this.studentform.value.gender!,
      age:this.studentform.value.age!,
      standard:this.studentform.value.standard!,
      fathername:this.studentform.value.fathername!
    };
    this.httpservice.addstudent(student).subscribe(()=>{
      console.log("data added");
    })
  }
}
