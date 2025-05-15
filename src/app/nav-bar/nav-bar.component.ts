import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-nav-bar',
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private language:LanguageService){
    this.langService()
  }

 isMenuOpen = false;

 Close(){
  this.isMenuOpen = false;
 }
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  public lang :number = 0;
langService(){
  this.language.language$.subscribe((Value:any) => 
  {
    this.lang = Value
  }) 
}
}
