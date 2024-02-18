import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TaskStorageService {
  //url: string = "https://task-89503-default-rtdb.europe-west1.firebasedatabase.app/"

  /**
   * Ajout
   */
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

  constructor(private http: HttpClient) {this.init()}

  getTasks(): Task[] {
    return this.tasks;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);

    this.taskEmitter.emit(this.tasks);
  }

  save(description : string , id : number) : void {
      this.tasks = this.tasks.map((x) =>{  // calllback function  function(()=>{})
        if(x.id === id){ console.log(2);
            x.description = description;
            console.log(description);
        }  
        return x;
      }); 

    /*let te = this.tasks.filter((t) => t.id === id);
    a = te[0];   // give back an array with one element
    a.description = description;  // go to the  taken alement an d modify the it 
    this.delete(id); // delete the taken element so as not to have the mody and taken element .here we use the id bcs at the tine t the id is for the taken element not the modify element
    this.tasks.push(a);  // üush th emodify element in array so as to see it */
    this.taskEmitter.emit(this.tasks); // update the front end so as to see the mnodificationsa
    }

    init(): void {
      this.http.get(this.url).subscribe(e => console.log(e))
      this.http.post(this.url + "tasks", this.tasks).subscribe(mes => console.log(mes))
      console.log("okok")
    }
  }

