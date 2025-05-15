import { Injectable } from '@angular/core';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor() { }

  private rooms:Room[] = [
    {
      id:1,
      name: "Twin Room",
      price:110,
      image: ["102-Main.jpg",],
      roomN: 102,
      description:"this twin room includes a private bathroom with a walk-in shower,Offering free toiletries,  a bath and a hairdryer. The air-conditioned twin room offers a flat-screen TV with cable channels, soundproof walls, a wardrobe, a carpeted floor as well as a quiet street view. The unit offers 2 beds."
    },
      {
      id:2,
      name: "Superior Twin Room",
      price:110,
      image: ["103-Main.jpg",],
      roomN: 103,
      description: "this twin room includes a private bathroom with a walk-in shower,Offering free toiletries, a bath and a hairdryer. The air-conditioned twin room offers a flat-screen TV with cable channels, soundproof walls, a wardrobe, a carpeted floor as well as a quiet street view. The unit offers 2 beds."
    },
      {
      id:3,
      name: "Queen Room with Balcony",
      price:130,
      image: ["201-Main.JPEG","201-02.JPEG","201-03.jpg", "2Floor-Balcony.JPEG"],
      roomN: 201,
      description:"This air-conditioned double room includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with mountain views. The unit offers 1 bed."
    },
     {
      id:4,
      name: "Twin Room with Balcony",
      price:130,
      image:[ "202-02.JPEG","202-Main.jpg","202-03.JPEG", "202-04.JPEG", "2Floor-Balcony.JPEG"],
      roomN: 202,
      description:"This air-conditioned double room includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with mountain views. The unit offers 1 bed."
    },
       {
      id:5,
      name: "Double Room with Balcony",
      price:130,
      image: ["203-Main.jpg","203-02.JPEG","203-Balcony-Night.JPEG"],
      roomN: 203,
      description:"This air-conditioned double room includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with mountain views. The unit offers 1 bed."
    },
     {
      id:6,
      name: "King Suite with Balcony",
      price:150,
      image: ["301-Main.jpg","3Floor-Balcony.JPEG","3Floor-View-Night.JPEG"],
      roomN: 301,
      description:"This air-conditioned double room includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with mountain views. The unit offers 1 bed."
    },
     {
      id:7,
      name: "Suite with Mountain View",
      price:150,
      image: ["302-Main.jpg","3Floor-Balcony.JPEG","3Floor-View-Night.JPEG"],
      roomN: 302,
      description:"This air-conditioned double room includes a flat-screen TV with cable channels, a private bathroom as well as a balcony with mountain views. The unit offers 1 bed."
    },
    ]

      getRooms(): Room[] {
    return this.rooms;
  }
 
    getRoomById(id: number): Room | undefined {
    return this.rooms.find(room => room.id === id);
  }

}

