import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfile } from './crud/pages/userprofile/user-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'CRUD-App-Angular';
}
