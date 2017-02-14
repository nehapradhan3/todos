import { Component } from '@angular/core';
import {TodosComponent} from './todos/todos.component';


@Component({

  selector: 'hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives:[TodosComponent]

})
export class AppComponent {
  title = 'Welcome to Todos app!';
}
