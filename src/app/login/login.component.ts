import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  private checkvalid:boolean=false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  // Function called on form submission on login page
  redir(value: any){
    // The parameter "value" contains the entire form data, i.e. the values in the username and text fields
    // The field values can then be accessed using their names "uid" and "pwd"

    // Checking for blank fields submission
    // If not blank or null (in case the fields are "reset"), the userid is stored in the local computer's browser cache
    // The current user is then logged in and redirected to the welcome page
    this.checkvalid=true;
    if((value.uid!='' && value.uid!=null) && (value.pwd !='' && value.pwd != null)){
      
      localStorage.setItem("userid", value.uid);
      
      this.router.navigate(['welcome']);
    }
    // If any one of the fields are empty on "submission", alert is shown
   
    
  }
}
