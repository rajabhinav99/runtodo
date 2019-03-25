import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import {  TodoListComponent } from './components/todo-list/todo-list.component';
//import { TodoComponent } from './components/todo/todo.component';
import { UpdateComponent } from './components/update/update.component';

const myroutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'addTodo',component:AddTodoComponent},
  {path:'todoList',component:TodoListComponent},
  //{path:'todo',component:TodoComponent},
  {path:'update',component:UpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
