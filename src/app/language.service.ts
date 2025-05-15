import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

    private languageSubject = new BehaviorSubject<number>(0);
    language$ = this.languageSubject.asObservable();

   setLanguage(langIndex: number) {
    this.languageSubject.next(langIndex);
  }

  get currentLang() {
    return this.languageSubject.getValue();
  }

}
