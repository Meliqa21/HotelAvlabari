import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuggestedRoomsComponent } from "../suggested-rooms/suggested-rooms.component";
import { BannerComponent } from "../banner/banner.component";


@Component({
  selector: 'app-home',
  imports: [RouterModule, SuggestedRoomsComponent, BannerComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
