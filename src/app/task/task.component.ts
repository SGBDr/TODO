import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Task } from '../model/task';
import { TaskStorageService } from '../service/task-storage.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input()
  task!: Task

  constructor(private storage: TaskStorageService) {
  }

  delete() {
    this.storage.delete(this.task.id)
  }
}
