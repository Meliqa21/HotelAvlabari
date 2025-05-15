import { Component } from '@angular/core';
import { LocationComponent } from "../location/location.component";
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-about',
  imports: [LocationComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor(public language:LanguageService){
this.langService()
  }
public lang :number = 0;
langService(){
  this.language.language$.subscribe((Value:any) => 
  {
    this.lang = Value
  }) 
}
  
}
