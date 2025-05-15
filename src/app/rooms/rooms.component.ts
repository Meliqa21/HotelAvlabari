import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../room';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../language.service';


@Component({
  selector: 'app-rooms',
  imports: [RouterModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit {
constructor(public roomsrv:RoomService,private language:LanguageService){}

public rooms:Room[] = [];
public currentImgIndex = 0;
public Index = this.currentImgIndex +1;
selectedRoom: Room | null = null;
public imgLen!:number;

ngOnInit(): void {
  this.GetRooms(),
  this.rooms = this.roomsrv.getRooms(),
  this.langService()
}

GetRooms(){
  this.rooms = this.roomsrv.getRooms()
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

public lang :number = 0;
langService(){
  this.language.language$.subscribe((Value:any) => 
  {
    this.lang = Value
  }) 
}
}
