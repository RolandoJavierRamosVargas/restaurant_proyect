import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.metodo();
  }
  
  metodo(){
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
    	container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
    	container.classList.remove("right-panel-active");
    });
  }
}
