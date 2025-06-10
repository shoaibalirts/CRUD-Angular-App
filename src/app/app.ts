import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Routes } from '@angular/router';
import { SideNav } from './crud/pages/NewComponents/side-nav/side-nav';
import { AddUser } from './crud/pages/add-user/add-user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,AddUser, SideNav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'CRUD-App-Angular';
}
