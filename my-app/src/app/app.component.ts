import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { EmpaddComponent } from './empadd/empadd.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,CommonModule,FirstcomponentComponent,EmpaddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
