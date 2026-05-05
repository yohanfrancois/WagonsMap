import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  constructor(private readonly userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
    });
  }
}
