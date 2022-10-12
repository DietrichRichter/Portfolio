import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {
  @ViewChild('myForm') myForm: any;

  constructor() { }

  ngOnInit(): void {
  }

  sendMail() {
    //action="https://dietrich-richter.developerakademie.net/send_mail/send_mail.php"

  }

}
