import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpclientdemo';
  constructor(private todoService: TodoService) {

  }
  public apGetAllTodos(): void {
    this.todoService.getAllTodos().subscribe( 
      (todos => console.log(todos)),
      (error => console.log('algo fue mal'))
    )
  }
  public apGetTodo(): void {
    this.todoService.getTodo('1').subscribe(
    (todo =>	console.log(todo)),
    (error =>	console.log('algo fue mal'))
    )
  }
  public apCreateTodo(): void {
    const newTodo = {
    userId: '1',
    title: 'change title',
    completed: true
    };
    this.todoService.createTodo(newTodo).subscribe(
      (todo => console.log(todo)),
      (error => console.log(error))
    );
  }
  public apUpdateTodo(): void {
    const aTodo = {
    id: '1',
    userId: '200',
    title: 'another title',
    completed: true
    };
    this.todoService.updateTodo(aTodo).subscribe(
      (todo => console.log(todo)),
      (error => console.log(error))
    );
  }
  public apDeleteTodo(): void {
    this.todoService.deleteTodo('1').subscribe(
      (todo =>	console.log(todo)),
      (error => console.log(error))
    );
  }



}
