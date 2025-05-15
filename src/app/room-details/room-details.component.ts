import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';
import { Room } from '../room';

@Component({
  selector: 'app-room-details',
  imports: [],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css'
})
export class RoomDetailsComponent implements OnInit { 
  constructor (private route:ActivatedRoute,private roomService:RoomService){}
public room:Room | undefined;

ngOnInit(): void {
  this.GetRoom()
}

  GetRoom(){
  const id = Number(this.route.snapshot.paramMap.get("id"));
  this.room = this.roomService.getRoomById(id)
}
}


