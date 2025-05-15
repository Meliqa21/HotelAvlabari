import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
constructor(public language:LanguageService){
  this.langService()
}

onLanguageChange(event: Event) {
  const selectedLang = Number((event.target as HTMLSelectElement).value);
  this.language.setLanguage(selectedLang);
}
public lang :number = 0;
langService(){
  this.language.language$.subscribe((Value:any) => 
  {
    this.lang = Value
  }) 
}
}

