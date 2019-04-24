import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  private userid: string;
  constructor(private route: Router) { }

  logout(){
  // Redirect to login page on logout
  localStorage.removeItem("userid");
  this.route.navigate(['/login']);
  }

  ngOnInit() {
    // Retrieve the stored userid
    this.userid = localStorage.getItem("userid");
  }

}
