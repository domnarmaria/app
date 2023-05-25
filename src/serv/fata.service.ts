import { Injectable } from '@angular/core';
import { Fata } from '../shared/component/Fata';
@Injectable({
  providedIn: 'root'
})
export class FataService {

  constructor() { }
  getprodbyid(id:number):Fata{
    return this.getAll().find(fata =>fata.id==id)!;
 }
 getAll():Fata[]{
  return [
    {
      id:1,
      name:'Ceară de sprâncene',
      price:25,
      imageUrl:'/assets/fata/ceara-sprancene.jpg',
      descriere:'Ceară transparentă pentru stilizarea sprâncenelor Perfect Brow Soap, de la Revers, adaugă volum și modelează perfect părul sprâncenelor.',
  },
  {
    id:2,
    name:'Paletă contouring și blush',
    price:40,
    imageUrl:'/assets/fata/contouring-blush-palette.jpg',
    descriere:'',
  },

  {
  id:3,
  name:'Paletă fard pleoape',
  price:215,
  imageUrl:'/assets/fata/eye-shadow-palette.jpg',
  descriere:'',

  },
  {
    id:4,
    name:'Set 4 fonduri de ten',
    price:350,
    imageUrl:'/assets/fata/fonduri-de-ten.jpg',
    descriere:'',
  },
  {
    id:5,
    name:'Plasturi hidrocoloidali pentru coșuri',
    price:33,
    imageUrl:'/assets/fata/plasturi-hidrocoloidali-pentru-cosuri-master.jpg',
    descriere:'Acești plasturi ajută la vindecarea acneei fără a lăsa cicatrici, acționând asupra coșurilor și calmând leziunile.Plasturii pe bază de Hydrocolloid protejează pielea iritată de bacterii, în timp ce extractul de Centella asiatica are rol de vindecare.',
  },
  {
    id:6,
    name:'Bază de machiaj',
    price:145,
    imageUrl:'/assets/fata/primer-machiaj.jpg',
    descriere:'Rezistența machiajului dvs. întrece orice limită. Primerul elf menține aspectul și senzația de piele moale, suplă și reîmprospătată, în timp ce fixează machiajul.',
  },
  {
    id:7,
    name:'Set 4 rujuri lichide mate',
    price:115,
    imageUrl:'/assets/fata/set-4-rujuri-lichide-mate.jpg',
    descriere:'',
  },
  {

    id:8,
    name:'Set pensule',
    price:170,
    imageUrl:'/assets/fata/set-pensule.jpg',
    descriere:'',
  },
  {
    id:9,
    name:'Spf 50',
    price:75,
    imageUrl:'/assets/fata/VLCC-Sunscreen-Lotion-50-ml-.jpg',
    descriere:'',
  }
    
    

  ]
}}
