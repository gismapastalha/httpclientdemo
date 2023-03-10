import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
