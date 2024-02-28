import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskStorageService } from '../service/task-storage.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  task : Task = {
    id: -1,
    name: "",
    description: "",
    statut : false,
    date: new Date(Date.now())
  }

  constructor(private router: Router, private service: TaskStorageService){

  }

  add() {
    this.service.add(this.task)

    this.router.navigate(['/home'])
  }
}
