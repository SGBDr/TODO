import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskStorageService } from '../service/task-storage.service';
import { TaskComponent } from "../task/task.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-task',
    standalone: true,
    templateUrl: './list-task.component.html',
    styleUrl: './list-task.component.scss',
    imports: [TaskComponent, CommonModule, AddTaskComponent]
})
export class ListTaskComponent implements OnInit {
  tasks: Task[] = []

  constructor(private storage: TaskStorageService,private router: Router) {
    this.storage.taskEmitter.subscribe(value => this.tasks = value)
  }

  openAdd(): void {

    this.router.navigate(['/add'])
  }


  ngOnInit(): void {
    this.tasks = this.storage.getTasks()
  }


}
