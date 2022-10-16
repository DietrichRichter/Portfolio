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
      headline: 'My Journey',
      text: 'I was curious about how programs were created and eventually began programming websites. After a few tutorials, I discovered the fun of programming and wanted to deepen my knowledge and gain experience in web development.'
    },
    {
      icon: 'assets/img/heart-line.png',
      headline: 'My Search',
      text: 'I quickly discovered that I needed a common thread to learn faster and more efficiently, so I decided to seek professional help. I then came across the Developer Academy and in December 2021, I decided to join the team. In a very short time, I gained the knowledge and skill set necessary for frontend web development. Since then, I have completed many different projects there both individually and in groups.'
    },
    {
      icon: 'assets/img/search-line.png',
      headline: 'My Passion',
      text: "After the first few modules, I realized that I had made the right decision. When I encountered the first hurdles, I couldn't stop looking for a solution until I found it. With every project I complete and every challenge I overcame, I learn something new and my curiosity only deepens. These days, I invest a lot of time into programming and I enjoy it very much."
    },
    {
      icon: 'assets/img/flight-takeoff-line.png',
      headline: 'My Goal',
      text: 'I would like to deepen my understanding and further build my skill set in the area of front-end development. To achieve this, I would like to join an equally curious and driven team.'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
