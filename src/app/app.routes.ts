import { Routes } from '@angular/router';
import { ListTaskComponent } from './list-task/list-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

export const routes: Routes = [
    { path: 'home', component: ListTaskComponent },
    { path: 'add', component: AddTaskComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' }
];
