import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe = [
    {
      icon: '../../assets/img/walk-line.png',
      headline: 'headline',
      text: 'text'
    },
    {
      icon: '../../assets/img/heart-line.png',
      headline: 'headline',
      text: 'text'
    },
    {
      icon: '../../assets/img/search-line.png',
      headline: 'headline',
      text: 'text'
    },
    {
      icon: '../../assets/img/flight-takeoff-line.png',
      headline: 'headline',
      text: 'text'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
