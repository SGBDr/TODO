import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { TaskStorageService } from '../service/task-storage.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent  implements OnInit{
  @Input()
  task!: Task;
  description! : string;

  ngOnInit(): void {
      this.description = this.task.description;  // initialise desription
  }

  constructor(private storage: TaskStorageService) {}

  delete() {
    this.storage.delete(this.task.id);
  }

  save() {
    this.storage.save(this.description,this.task.id);
    console.log(this.description);
  }
  
}
