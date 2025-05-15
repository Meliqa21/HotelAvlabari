import { Component } from '@angular/core';


@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
constructor(){
}

public slides = [ {
  image : "Builiding.JPEG",
  title : "Step Into Old Tbilisi – Where Every Turn Feels Like an Adventure!"
},

{
  image : "3Floor-View-Night.JPEG",
  title : "Old Tbilisi at Night – A Magical Sight for All Ages"
},
{
  image : "2FloorHall.JPEG",
  title : "Family vibes, helpful hearts, and a perfect location — that’s our promise."
}


]

CurrentIndex:number = 0;
  nextSlide() {
    this.CurrentIndex = (this.CurrentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.CurrentIndex =(this.CurrentIndex - 1 + this.slides.length) % this.slides.length;
  }
}
