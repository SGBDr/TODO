import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
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
      name: 'Tache d\'init',
      description: 'description test',
      statut: true,
      date: new Date(Date.now()),
    }
  ];

  taskEmitter = new EventEmitter();

  constructor(private http: HttpClient) {
    this.init()
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  add(task: Task) {
    task.id = this.tasks.length + 1

    this.tasks.push(task);
    this.taskEmitter.emit(this.tasks)
    this.saveS()
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== id);

    this.taskEmitter.emit(this.tasks);
    this.saveS()
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
    this.saveS()
  }

  saveS(): void{
    localStorage.setItem("TODO-STORAGE-TASK", JSON.stringify(this.tasks))
  }

  init() {
    var stock = localStorage.getItem("TODO-STORAGE-TASK")
    stock = stock === null ? "[]" : stock
    var ts:Task[] = JSON.parse(stock);
    console.log(ts)
    if(ts === undefined){
      localStorage.setItem("TODO-STORAGE-TASK", JSON.stringify(this.tasks))
    }else {
      this.tasks = ts.map(x => {x.date = new Date(x.date); return x})
    }
  }

}

