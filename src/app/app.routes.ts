import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AboutComponent } from './about/about.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { LocationComponent } from './location/location.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"Rooms",component:RoomsComponent},
    {path:"About",component:AboutComponent},
    {path:"Kitchen",component:KitchenComponent},
    {path:"Location",component:LocationComponent}
];
