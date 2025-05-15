import { Component } from '@angular/core';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
constructor(private language:LanguageService){
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
