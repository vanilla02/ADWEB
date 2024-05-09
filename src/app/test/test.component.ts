import { Component } from '@angular/core';
import { User } from '../user';

// always import common module for angular 17
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  isLogIn: boolean = false;
  isLogOut: boolean = true;

  list = [1, 2, 3, 4, 5];

  loginName = "admin";

  users: User[] = [
    {"userId":1, "userName":"John Doe", "type":"employee"},
    {"userId":2, "userName":"Jane Doe", "type":"student"},
    {"userId":3, "userName":"Billy Doe", "type":"student"},
    {"userId":4, "userName":"Telly Doe", "type":"employee"}
  ];
}