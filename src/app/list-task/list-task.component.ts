import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskStorageService } from '../service/task-storage.service';
import { TaskComponent } from "../task/task.component";

@Component({
    selector: 'app-list-task',
    standalone: true,
    templateUrl: './list-task.component.html',
    styleUrl: './list-task.component.scss',
    imports: [TaskComponent, CommonModule]
})
export class ListTaskComponent implements OnInit {
  tasks: Task[] = []

  constructor(private storage: TaskStorageService) {
    this.storage.taskEmitter.subscribe(value => this.tasks = value)
  }
  
  
  ngOnInit(): void {
    this.tasks = this.storage.getTasks()
  }


}
