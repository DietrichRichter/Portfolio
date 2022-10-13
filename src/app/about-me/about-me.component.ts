import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutMe = [
    {
      icon: 'assets/img/walk-line.png',
      headline: 'I Started',
      text: 'my IT journey by trying to program websites in my free time and questioning how programs were created. After a few turtorials I discovered the fun of programming and wanted to deepen my knowledge and gain experience in web development.'
    },
    {
      icon: 'assets/img/heart-line.png',
      headline: 'My Search',
      text: 'After a while, I needed a common thread to learn faster and more efficiently, so I decided to seek professional help. I then came across the Developer Academy by chance and in December 2021 I decided to go down the path with the team. In addition to my main job, I learned the basic knowledge for frontend web development there in a very short time. I have completed many different projects there, both individually and in groups.'
    },
    {
      icon: 'assets/img/search-line.png',
      headline: 'My Passion',
      text: "After the first modules I realized that I had made the right decision. When I encountered the first hurdles, I couldn't stop looking for a solution until I found it. With every project I complete and every challenge I overcome, I learn something new and I don't want to stop. I invest a lot of time in programming and I enjoy it"
    },
    {
      icon: 'assets/img/flight-takeoff-line.png',
      headline: 'My Journey',
      text: 'I would like to deepen my knowledge and curiosity in the field of frontend development and am therefore looking for a chance to work in an interesting team.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
