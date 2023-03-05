import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private urlBase = 'https://jsonplaceholder.typicode.com';
  constructor(private httpClient: HttpClient) {
  }
  public getAllTodos(): Observable<Todo[]> {
    const path ='https://jsonplaceholder.typicode.com/todos';
    return this.httpClient.get<Todo[]>(`${this.urlBase}/todos`);
  }
  public getTodo(id: string): Observable<Todo> {
    const path =`https://jsonplaceholder.typicode.com/todos/${id}`;
    return this.httpClient.get<Todo>(`${this.urlBase}/todos/${id}`);
  }
  public createTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.post<Todo>(`${this.urlBase}/todos`, todo);
  }
  public updateTodo(todo: Todo): Observable<Todo> {
    return this.httpClient.put<Todo>(`${this.urlBase}/todos/${todo.id}`, todo);
  }
  public deleteTodo(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.urlBase}/todos/${id}`);
    }





}
