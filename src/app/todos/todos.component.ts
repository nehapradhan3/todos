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

deleteTodo(index) {
  this.todos.splice(index,1);

}
deleteSelectedTodos() {
     //need ES5 to reverse loop in order to splice by index
     for(var i=(this.todos.length -1); i > -1; i--) {
       if(this.todos[i].completed) {
         this.todos.splice(i, 1);
       }
     }
   }
// deleteTodo(todoText) {
// for(var i=0; i<this.todos.length;i++){
// if(this.todos[i].text == todoText){
// this.todos.splice(i,1);
//    }
//   }
// }
}
