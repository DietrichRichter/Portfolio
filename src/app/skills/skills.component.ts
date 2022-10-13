import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      icon: 'assets/img/java script.png',
      name: 'Java script'
    },
    {
      icon: 'assets/img/angular-logo.png',
      name: 'Angular'
    },
    {
      icon: 'assets/img/Group 205.png',
      name: 'HTML/CSS'
    },
    {
      icon: 'assets/img/Group 226.png',
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
      icon: 'assets/img/icons8-test-lab-96 2.png',
      name: 'Test automation'
    },
    {
      icon: 'assets/img/icons8-database-52 2.png',
      name: 'Databases'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }
}
