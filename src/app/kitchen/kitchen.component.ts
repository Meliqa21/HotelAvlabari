import { Component } from '@angular/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-kitchen',
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {
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
