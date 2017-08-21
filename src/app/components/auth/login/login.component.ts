import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../providers/provider.imports";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth : AuthService) { }
  Todo;
  ngOnInit() {
  }


  addTodo() {
    console.log(this.Todo); 
  }

  
}
