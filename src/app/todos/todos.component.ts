import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
todos:any;
newTodo:string;
text:any;
todoObj:any;
  constructor() {
      this.newTodo = '';
   }

  ngOnInit() {
    this.todos=[
    {
      text:'Pickup kids at school'
    },
    {
      text:'Meeting with boss'
    },
    {
      text:'dinner with wife'
    }
    ];
  }
//
addTodo(event) {
  this.todoObj = {
        text: this.newTodo
      }
  this.todos.push(this.todoObj);
  this.newTodo = '';
  event.preventDefault();
});
//
deleteTodo(index) {
  this.todos.splice(index,1);

}
// deleteTodo(todoText) {
// for(var i=0; i<this.todos.length;i++){
// if(this.todos[i].text == todoText){
// this.todos.splice(i,1);
//    }
//   }
// }
}
