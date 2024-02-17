import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskStorageService {
  tasks: Task[] = [
    {
      id: 1,
      name: 'Learn JSX',
      description: 'i have to follow the course on yudemy website',
      statut: true,
      date: new Date(Date.now()),
    },
    {
      id: 2,
      name: 'Learn React-Native',
      description: 'i have to follow the course on yudemy website',
      statut: true,
      date: new Date(Date.now()),
    },
    {
      id: 3,
      name: 'Learn PowerBI',
      description: 'i have to follow the course on yudemy website',
      statut: true,
      date: new Date(Date.now()),
    },
    {
      id: 4,
      name: 'Learn C/C++',
      description: 'i have to follow the course on yudemy website',
      statut: true,
      date: new Date(Date.now()),
    },
    {
      id: 5,
      name: 'Learn C Sharp',
      description: 'i have to follow the course on yudemy website',
      statut: true,
      date: new Date(Date.now()),
    },
    {
      id: 6,
      name: 'Learn JAVAFX',
      description: 'i have to follow the course on yudemy website',
      statut: true,
      date: new Date(Date.now()),
    },
    {
      id: 7,
      name: 'Learn Java',
      description: 'i have to follow the course on yudemy website',
      statut: true,
      date: new Date(Date.now()),
    },
  ];

  taskEmitter = new EventEmitter();

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);

    this.taskEmitter.emit(this.tasks);
  }

  save(description : string , id : number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.taskEmitter.emit(this.tasks[2]);
    }
  }

