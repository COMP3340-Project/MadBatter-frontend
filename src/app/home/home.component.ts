import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  const x = document.getElementsByClassName("slide")! as HTMLCollectionOf<HTMLElement>;
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

