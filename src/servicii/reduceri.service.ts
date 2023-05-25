import { Injectable } from '@angular/core';
import { Reduceri } from '../shared/component/Reduceri';
@Injectable({
  providedIn: 'root'
})
export class ReduceriService {
  getprodbyid(id:number):Reduceri{
    return this.getAll().find(reduceri =>reduceri.id==id)!;
 }
  constructor() { }
  getAll():Reduceri[]{
    return[
      {
        id:19,
  name:'Spary parfumat de păr',
  price:10,
  oldprice:15,
  imageUrl:'/assets/par/spray-parfumat-de-par.jpg',
  descriere:'Oferă un miros floral.',
      },
      {
 id:20,
  name:'Ulei de păr',
  price:35,
  oldprice:50,
  imageUrl:'/assets/par/ulei-de-par.jpg',
  descriere:'Ulei de stilizare pentru păr vopsit pentru femei.',
      },
      {
         id:21,
  name:'Spumă pentru volum,strălucire și protecție pentru părul vopsit',
  price:45,
  oldprice:58,
  imageUrl:'/assets/par/spuma-pentru-volum--stralucire-si-protectie-pentru-parul-vopsit---500-ml.jpg',
  descriere:'Spumă pentru volum ideală pentru părul vopsit, deoarece conferă protecție și extra-strălucire acestuia. Conține filtru UV care protejează împotriva razelor solare și previne spălarea culorii. Părul va avea o fixare puternică și plină de strălucire și volum.',
      },
      {
        id:22,
        name:'Plasturi hidrocoloidali pentru coșuri',
        price:20,
        oldprice:33,
        imageUrl:'/assets/fata/plasturi-hidrocoloidali-pentru-cosuri-master.jpg',
        descriere:'Acești plasturi ajută la vindecarea acneei fără a lăsa cicatrici, acționând asupra coșurilor și calmând leziunile.Plasturii pe bază de Hydrocolloid protejează pielea iritată de bacterii, în timp ce extractul de Centella asiatica are rol de vindecare.',
      },
      {
        id:23,
        name:'Ceară de sprâncene',
        price:15,
        oldprice:25,

        imageUrl:'/assets/fata/ceara-sprancene.jpg',
        descriere:'Ceară transparentă pentru stilizarea sprâncenelor Perfect Brow Soap, de la Revers, adaugă volum și modelează perfect părul sprâncenelor.',
    },
    {
      id:24,
      name:'Spf 50',
      price:50,
      oldprice:75,
      imageUrl:'/assets/fata/VLCC-Sunscreen-Lotion-50-ml-.jpg',
      descriere:'',
    }

]
}
}
