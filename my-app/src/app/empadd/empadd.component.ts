import { Component, model, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Employee } from '../../Employee';
import { EmpServiceService } from '../emp-service.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-empadd',
  standalone: true,
  imports: [RouterModule,CommonModule,ReactiveFormsModule],
  templateUrl: './empadd.component.html',
  styleUrl: './empadd.component.css'
})

export class EmpaddComponent implements OnInit{
  protected empform!: FormGroup;
  dataForm!: FormData;
  emp!:Employee;
  returnUrl!: string;
  
  private subs: Subscription = new Subscription();

  constructor(private service :EmpServiceService, private router :Router,private formBuilder : FormBuilder) { 
  
  }
 
  ngOnInit(): void {
    this.dataForm = new FormData();
    this.empform = this.formBuilder.group({
      empid: [''],
      ename: [''],
      phone: [''],
      city: ['']
         });
    }
    get empformControls() {
      return this.empform.controls;
    }
 
    onsubmit(){
      this.dataForm.append('empid', this.empform.get('empid')?.value);
      this.dataForm.append('ename', this.empform.get('ename')?.value);
      this.dataForm.append('phone', this.empform.get('phone')?.value);
     
      this.dataForm.append('city', this.empform.get('city')?.value);
     console.log(this.dataForm);

     this.subs = this.service.addEmployee(this.dataForm).subscribe({
      next: result => {
        let res = JSON.parse(JSON.stringify(result));
        console.log(res);
        this.router.navigate([this.returnUrl || '/employees']);
        
      },
      error: error => {
       (error ? error : 'error msg');
      },
    });
      

    }
}
