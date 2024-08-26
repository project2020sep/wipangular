import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Observable } from 'rxjs';
import { Employee } from '../../Employee';
import { Router} from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-firstcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './firstcomponent.component.html',
  styleUrl: './firstcomponent.component.css'
})
export class FirstcomponentComponent {
 
  employees !: Observable<Employee[]>;
  
constructor(private empservice : EmpServiceService, router : Router){}

ngOnInit(){
  this.reloadData();
}
  
reloadData(){
  this.employees = this.empservice.getEmployeeList();
}

}
