import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  WeatherData:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    slideshow();
    this.getWeatherData();
    console.log(this.WeatherData);
  }
  routecat(catid:number, catname:string)
  {
    console.log(catid);
    const test = "?id:"
    this.router.navigateByUrl(`/category?id=${catid}&catname=${catname}`);
  }

  getWeatherData()
  {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=42.3&lon=-83.0364&appid=49e29eea7059655c43771c486c95508e&units=metric')
        .then(response=>response.json())
        .then(data=>{this.setWeatherData((data))})
  }

  setWeatherData(data: any)
  {
    this.WeatherData = data;
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


