import { Component, OnInit } from '@angular/core';
import { Email } from './../email';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  emails:Array<object>;
  constructor() { 
    this.emails = [];
    // from: string, importance: boolean, subject: string, content: string
    this.emails.push(new Email("noelle@dojo.news", true, "You got a black belt!", "Congratulations!"))
    this.emails.push(new Email("ray@dojo.news", false, "Hi I am Ray", "Nice to meet you!"))
    this.emails.push(new Email("joshua@gmail.com", true, "Hey", "Let's play Pingpong"))
    this.emails.push(new Email("BillGates@gmail.com", true, "You got hired!", "Grats!"))
  }


  // when the component is initialized
  ngOnInit() {
  }

}