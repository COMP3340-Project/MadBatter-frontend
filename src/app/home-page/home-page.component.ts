import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  slideshow();
  }

}

let myIndex = 0;
//setTimeout(slideshow, 0);
function slideshow()
{
  let i;
  const x = document.getElementsByClassName("slide");
  for(i = 0; i < x.length; i++)
  {
    x[i].style.display = "none";
  }
  myIndex++;
  if(myIndex > x.length)
  {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(slideshow, 2000);
}
