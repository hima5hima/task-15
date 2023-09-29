import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilterPipe } from './filter.pipe';

const routes: Routes = [
  { path: 'todo-list', component: TodoListComponent },
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' } // Redirect to 'todo-list' by default
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
