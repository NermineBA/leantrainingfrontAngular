import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 goToHome(){
  this.router.navigate(["/home"])
 }
 goToContact(){
  this.router.navigate(["/contact"])
 }
 goToAboutus(){
  this.router.navigate(["/about-us"])
 }
 goToM(){
  this.router.navigate(["/manufacturing"])
 }
 goToQ(){
  this.router.navigate(["/quality"])
 }
 goToS(){
  this.router.navigate(["/supply-chain"])
 }
 goToE(){
  this.router.navigate(["/environments"])
 }
 goToL(){
  this.router.navigate(["/leadership"])
 }
 goToI(){
  this.router.navigate(["/innovation"])
 }
}
