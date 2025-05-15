import { Component } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-suggested-rooms',
  imports: [RouterModule],
  templateUrl: './suggested-rooms.component.html',
  styleUrl: './suggested-rooms.component.css'
})
export class SuggestedRoomsComponent {
constructor(private roomserv:RoomService,private language :LanguageService){
  this.GetRooms();
  this.langService()
}


public room:Room[] = [];
public currentImgIndex = 0;
public Index = this.currentImgIndex +1;
selectedRoom: Room | null = null;
public imgLen!:number;
public lang :number = 0;

GetRooms(){
  this.room = this.roomserv.getRooms().slice(4,7);
}
OpenModal(room:Room): void {
  this.selectedRoom = room;
  this.imgLen = this.selectedRoom.image.length
}

CloseModal(): void {
  this.selectedRoom = null;
  this.currentImgIndex = 0;
  this.Index = 1;
}

nextImage(){
  if (this.selectedRoom?.image.length){
    this.currentImgIndex = (this.currentImgIndex + 1) % this.selectedRoom.image.length;
    this.Index = this.currentImgIndex +1;
  }
}

goToImage(index: number) {
  this.currentImgIndex = index;
}

langService(){
  this.language.language$.subscribe((Value:any) => 
  {
    this.lang = Value
  }) 
}


}
