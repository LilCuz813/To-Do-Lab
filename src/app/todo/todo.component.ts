import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos: Todo[] = [
    {
      task: "Survive with no wifi",
      completed: false
    },
    {
      task: "Stay Awake",
      completed: false
    },
    {
      task: "Play the game",
      completed: false
    }
  ];

  newToDo: Todo = {
    task:"",
    completed:false
  };

  addToDo(){
    let result: Todo = {
      task: this.newToDo.task,
      completed: this.newToDo.completed
    };
    this.todos.push(result);
  }

  completedToDo(index: number){
    this.todos[index].completed = true;
  }
}
