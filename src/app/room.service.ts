import { Injectable } from '@angular/core';
import { Room } from './room';
import { BehaviorSubject } from 'rxjs';

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
      description:"Our standard room is ideal for those who appreciate comfort and coziness. The room features two single beds, modern equipment, and all the necessary amenities. In addition to the items listed below, the room also includes a small refrigerator, an electric kettle, and a private bathroom with all essential accessories (towels, a hairdryer, toiletries, toothpaste, slippers).",
      descriptionR:"Наш стандартный номер идеально подойдёт для любителей комфорта и уюта. В номере расположены две односпальные кровати, современная техника и все необходимые принадлежности. Помимо ниже перечисленного, в номере также есть небольшой холодильник, электрический чайник и собственная ванная комната со всеми необходимыми аксессуарами (полотенца, фен, средства для умывания, зубная паста, тапочки).",
      descriptionGeo:"ჩვენი სტანდარტული ოთახი იდეალურია კომფორტისა და სიმყუდროვის მოყვარულთათვის. ოთახში განთავსებულია ორი ერთსაწოლიანი საწოლი, თანამედროვე ტექნიკითა და ყველა საჭირო ნივთით.ოთახში გარდა ქვევით ჩამოთვლილისა ასევე არის პატარა მაცივარი,ელექტრო მადუღარა,პირადი სველი წერთილი საჭირო აქსესუარებით ( პირსახოცები, ფენი, დაბანის საშუალებები, კბილის პასტა, ჩუსტები )"
    },
      {
      id:2,
      name: "Superior Twin Room",
      price:110,
      image: ["103-Main.JPEG","103-01.JPEG","103-02.JPEG","103-03.JPEG",],
      roomN: 103,
      description: "Our standard room is ideal for those who appreciate comfort and coziness. The room features two single beds, modern equipment, and all the necessary amenities. In addition to the items listed below, the room also includes a small refrigerator, an electric kettle, and a private bathroom with all essential accessories (towels, a hairdryer, toiletries, toothpaste, slippers).",
      descriptionR:"Наш стандартный номер идеально подойдёт для любителей комфорта и уюта. В номере расположены две односпальные кровати, современная техника и все необходимые принадлежности. Помимо ниже перечисленного, в номере также есть небольшой холодильник, электрический чайник и собственная ванная комната со всеми необходимыми аксессуарами (полотенца, фен, средства для умывания, зубная паста, тапочки).",
      descriptionGeo:"ჩვენი სტანდარტული ოთახი იდეალურია კომფორტისა და სიმყუდროვის მოყვარულთათვის. ოთახში განთავსებულია ორი ერთსაწოლიანი საწოლი, თანამედროვე ტექნიკითა და ყველა საჭირო ნივთით.ოთახში გარდა ქვევით ჩამოთვლილისა ასევე არის პატარა მაცივარი,ელექტრო მადუღარა,პირადი სველი წერთილი საჭირო აქსესუარებით ( პირსახოცები, ფენი, დაბანის საშუალებები, კბილის პასტა, ჩუსტები )"
    },
      {
      id:3,
      name: "Queen Room with Balcony",
      price:130,
      image: ["201-Main.JPEG","201-02.JPEG","201-01.JPEG", "2Floor-Balcony.JPEG"],
      roomN: 201,
      description:"Our standard room, located on the second floor, provides coziness and comfort in one space. The room has one large bed, which are ideal for both single and double occupancy. It includes a private bathroom with all necessary accessories: towels, a hairdryer, toiletries, toothpaste, and slippers. The room also has a balcony, situated in a quiet area, overlooking old Tbilisi. A small refrigerator and an electric kettle are also available in the room.",
      descriptionR:"Наш стандартный номер, расположенный на втором этаже, обеспечивает уют и комфорт в одном пространстве. В номере есть одна большая кровать, которые идеально подходят как для одного, так и для двух гостей. Номер оборудован собственной ванной комнатой со всеми необходимыми аксессуарами: полотенца, фен, средства гигиены, зубная паста и тапочки. В номере также есть балкон, расположенный в тихом месте и с видом на старый Тбилиси. В номере также есть небольшой холодильник и электрический чайник.",
      descriptionGeo:"მეორე სართულზე განთავსებული ჩვენი სტანდარტული ნომერი უზრუნველყოფს სიმყუდროვესა და კომფორტს ერთ სივრცეში. ერთი დიდი ზომის საწოლი, რომელიც იდეალურია როგორც ერთ, ასევე ორ სტუმარზე. ნომერს აქვს პირადი სველი წერტილი ყველა საჭირო აქსესუარით: პირსახოცები, ფენი, ჰიგიენური საშუალებები, კბილის პასტა და ჩუსტები. ოთახს ასევე აქვს აივანი, რომელიც მშვიდ გარემოში მდებარეობს და გადაჰყურებს ძველ თბილისს. ოთახში არის ასევე მინი მაცივარი და ელექტრო მადუღარა"
    },
     {
      id:4,
      name: "Twin Room with Balcony",
      price:130,
      image:[ "202-02.JPEG","202-Main.jpg","202-03.JPEG", "202-04.JPEG", "2Floor-Balcony.JPEG"],
      roomN: 202,
      description:" Our standard room, located on the second floor, provides coziness and comfort in one space. The room has two single beds. It includes a private bathroom with all necessary accessories: towels, a hairdryer, toiletries, toothpaste, and slippers. The room also has a balcony, situated in a quiet area, overlooking old Tbilisi. A small refrigerator and an electric kettle are also available in the room.",
      descriptionR:"Наш стандартный номер, расположенный на втором этаже, обеспечивает уют и комфорт в одном пространстве. В номере есть две односпальные кровати. Номер оборудован собственной ванной комнатой со всеми необходимыми аксессуарами: полотенца, фен, средства гигиены, зубная паста и тапочки. В номере также есть балкон, расположенный в тихом месте и с видом на старый Тбилиси. В номере также есть небольшой холодильник и электрический чайник.",
      descriptionGeo:"მეორე სართულზე განთავსებული ჩვენი სტანდარტული ნომერი უზრუნველყოფს სიმყუდროვესა და კომფორტს ერთ სივრცეში. ოთახში არის ორი ერთ საწოლიანი საწოლი. ნომერს აქვს პირადი სველი წერტილი ყველა საჭირო აქსესუარით: პირსახოცები, ფენი, ჰიგიენური საშუალებები, კბილის პასტა და ჩუსტები. ოთახს ასევე აქვს აივანი, რომელიც მშვიდ გარემოში მდებარეობს და გადაჰყურებს ძველ თბილისს. ოთახში არის ასევე მინი მაცივარი და ელექტრო მადუღარა"
    },
       {
      id:5,
      name: "Double Room with Balcony",
      price:130,
      image: ["203-Main.jpg","203-02.JPEG","203-04.JPEG","203-Balcony-Night.JPEG",],
      roomN: 203,
      description:"Our standard room, located on the second floor, provides coziness and comfort in one space. The room has one large bed, which is ideal for both single and double occupancy. The room includes a private bathroom with all necessary accessories: towels, a hairdryer, toiletries, toothpaste, and slippers. The room also has a balcony, which faces the street and overlooks the everyday life of Tbilisi. A small refrigerator and an electric kettle are also available in the room.",
      descriptionR:"Наш стандартный номер, расположенный на втором этаже, обеспечивает уют и комфорт в одном пространстве. В номере есть одна большая кровать, которая идеально подходит как для одного, так и для двух гостей. В номере имеется собственная ванная комната со всеми необходимыми аксессуарами: полотенца, фен, средства гигиены, зубная паста и тапочки. У номера также есть балкон, выходящий на улицу и открывающий вид на повседневную жизнь Тбилиси. В номере также есть небольшой холодильник и электрический чайник.",
      descriptionGeo:"მეორე სართულზე განთავსებული ჩვენი სტანდარტული ნომერი უზრუნველყოფს სიმყუდროვესა და კომფორტს ერთ სივრცეში. ოთახში არის ერთი დიდი ზომის საწოლი, რომელიც იდეალურია როგორც ერთ, ასევე ორ სტუმარზე.ნომერს აქვს პირადი სველი წერტილი ყველა საჭირო აქსესუარით: პირსახოცები, ფენი, ჰიგიენური საშუალებები, კბილის პასტა და ჩუსტები.  ოთახს ასევე აქვს აივანი,რომელიც ქუჩის მხარეს მდებარეობს და გადაჰყურებს თბილისის ყოველდღიურ ცხოვრებას. ოთახში არის ასევე მინი მაცივარი და ელექტრო მადუღარა"
    },
     {
      id:6,
      name: "King Suite with Balcony",
      price:150,
      image: ["301-Main.jpg","3Floor-Balcony.JPEG","3Floor-View-Night.JPEG"],
      roomN: 301,
      description:"Our deluxe room, located on the third floor, provides a high level of comfort and coziness. The room has one large bed and two sofas, which can be unfolded if needed, accommodating up to 4 guests (the listed price is calculated for 2 guests only). The room has a private bathroom with all necessary accessories: towels, a hairdryer, toiletries, toothpaste, and slippers. The room also has a balcony, situated in a quiet area, overlooking old Tbilisi, which is especially beautiful at night. The room also includes a small refrigerator and an electric kettle.",
      descriptionR:"Наш люкс номер, расположенный на третьем этаже, обеспечивает высокий уровень комфорта и уюта. В номере есть одна большая кровать и два дивана, которые при необходимости раскладываются, размещая до 4 гостей (указанная цена рассчитана только на 2 гостей). В номере есть собственная ванная комната со всеми необходимыми аксессуарами: полотенца, фен, средства гигиены, зубная паста и тапочки. В номере также есть балкон, расположенный в тихом месте и с видом на старый Тбилиси, который особенно красив ночью. В номере также есть небольшой холодильник и электрический чайник.",
      descriptionGeo:"მესამე სართულზე მდებარე ჩვენი ლუქს ნომერი უზრუნველყოფს მაღალი დონის კომფორტს და სიმყუდროვეს ოთახში არის ერთი დიდი ზომის საწოლი და ორი დივანი, რომლებიც საჭიროების შემთხვევაში იშლებიან და 4 ადამიანს იტევს ( მოცემული ფასი გათვლილია მხოლოდ 2 სტუმრისთვის ). ნომერს აქვს პირადი სველი წერტილი ყველა საჭირო აქსესუარით: პირსახოცები, ფენი, ჰიგიენური საშუალებები, კბილის პასტა და ჩუსტები. ოთახს ასევე აქვს აივანი, რომელიც მშვიდ გარემოში მდებარეობს და გადაჰყურებს ძველ თბილისს, რომელიც ულამაზესია, განსაკუთრებით ღამით. ოთახში არის ასევე მინი მაცივარი და ელექტრო მადუღარა"
     },
     {
      id:7,
      name: "Suite with Mountain View",
      price:150,
      image: ["302-Main.jpg","3Floor-Balcony.JPEG","3Floor-View-Night.JPEG"],
      roomN: 302,
      description:"Our deluxe room, located on the third floor, provides a high level of comfort and coziness. The room has one large bed and one sofa, which can be unfolded if needed, accommodating up to 3 guests (the listed price is calculated for 2 guests only). The room has a private bathroom with all necessary accessories: towels, a hairdryer, toiletries, toothpaste, and slippers. The room also has a balcony, situated in a quiet area, overlooking old Tbilisi, which is especially beautiful at night. The room also includes a small refrigerator and an electric kettle.",
      descriptionR:"Наш люкс номер, расположенный на третьем этаже, обеспечивает высокий уровень комфорта и уюта. В номере есть одна большая кровать и один диван, который при необходимости раскладывается, размещая до 3 гостей (указанная цена рассчитана только на 2 гостей). В номере есть собственная ванная комната со всеми необходимыми аксессуарами: полотенца, фен, средства гигиены, зубная паста и тапочки. В номере также есть балкон, расположенный в тихом месте и с видом на старый Тбилиси, который особенно красив ночью. В номере также есть небольшой холодильник и электрический чайник.",
      descriptionGeo:"მესამე სართულზე მდებარე ჩვენი ლუქს ნომერი უზრუნველყოფს მაღალი დონის კომფორტს და სიმყუდროვეს ოთახში არის ერთი დიდი ზომის საწოლი და ერთი დივანი, რომლებიც საჭიროების შემთხვევაში იშლებიან და 3 სტუმარს იტევს ( მოცემული ფასი გათვლილია მხოლოდ 2 სტუმრისთვის ). ნომერს აქვს პირადი სველი წერტილი ყველა საჭირო აქსესუარით: პირსახოცები, ფენი, ჰიგიენური საშუალებები, კბილის პასტა და ჩუსტები. ოთახს ასევე აქვს აივანი, რომელიც მშვიდ გარემოში მდებარეობს და გადაჰყურებს ძველ თბილისს, რომელიც ულამაზესია, განსაკუთრებით ღამით. ოთახში არის ასევე მინი მაცივარი და ელექტრო მადუღარა"
    },
    
    ]

      getRooms(): Room[] {
    return this.rooms;
  }
 
    getRoomById(id: number): Room | undefined {
    return this.rooms.find(room => room.id === id);
  }

}

