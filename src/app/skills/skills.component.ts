import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      icon: 'assets/img/javascript-logo.png',
      name: 'JavaScript'
    },
    {
      icon: 'assets/img/angular-logo.png',
      name: 'Angular'
    },
    {
      icon: 'assets/img/html.png',
      name: 'HTML'
    },
    {
      icon: 'assets/img/Group 205.png',
      name: 'CSS'
    },
    {
      icon: 'assets/img/scrum.png',
      name: 'SCRUM'
    },
    {
      icon: 'assets/img/Git-Icon-1788C 2.png',
      name: 'Git'
    },
    {
      icon: 'assets/img/Group 20.png',
      name: 'Design Thinking'
    },
    {
      icon: 'assets/img/icons8-rest-api-80 2.png',
      name: 'Rest API'
    },
    {
      icon: 'assets/img/firebase.png',
      name: 'Firebase'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }
}
