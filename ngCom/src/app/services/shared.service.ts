import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService implements OnInit{

  private isLogged = false;
  constructor() { }
  ngOnInit(){
    this.isLogged = false;
  }
  login(){
    this.isLogged = true;
  }
  logout(){
    this.isLogged = false;
  }
  getState(){
    return this.isLogged;
  }
}
