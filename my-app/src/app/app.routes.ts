import { Routes } from '@angular/router';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { EmpaddComponent } from './empadd/empadd.component';

export const routes: Routes = [
    {path:'employees', component:FirstcomponentComponent},
    {path:'empadd', component:EmpaddComponent}
];

