import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListTaskComponent } from "./list-task/list-task.component";
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, ListTaskComponent, CommonModule]
})

export class AppComponent {
  title = 'TODO';
}
