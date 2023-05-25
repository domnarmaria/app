import { Injectable } from '@angular/core';
import { Par } from '../shared/component/Par';
@Injectable({
  providedIn: 'root'
})
export class ParService {
  getprodbyid(id:number):Par{
    return this.getAll().find(par =>par.id==id)!;
 }
  constructor() { }
  getAll():Par[]{
    return [
      {
          id:10,
          name:'Ceară de păr',
          price:35,
          imageUrl:'/assets/par/ceara-de-par.jpg',
          descriere:'Reușește să fixeze firele de păr rebele.',
      },
      {
        id:11,
        name:'Șampon de păr',
        price:60,
        imageUrl:'/assets/par/sampon-par.jpg',
        descriere:' Șampon pentru un păr deteriorat.Formula cu Pro-Keratina și Ceramide a șamponului repară fibra capilară. ',
      
      },

      {
      id:12,
      name:'Ser pentru protecția termică a părului',
      price:15,
      imageUrl:'/assets/par/ser-de-par-protectie-termica.jpg',
      descriere:'',

      },
      {
        id:13,
        name:'Set pentru îngrijirea părului creț',
        price:240,
        imageUrl:'/assets/par/set-par-cret.jpg',
        descriere:'Gentle Lather Shampoo este un șampon fără sulfați, care nu folosește agenți duri de curățare și creează o spumă ușoară cremoasă. Este ideal pentru părul fin ondulat sau creț dar poate fi folosit cu succes și pentru părul drept.Produse potrivite și pentru fir subțire.Balsamul Aloeba Daily conține ulei de jojoba, nucă de cocos, avocado și aloe vera și oferă o hidratare optimă părului tău.Gelebration Spray conferă ținuta necesară părului ondulat și creț dar subțire.Definește și îmbunătățește buclele și onduleurile.',
      },
      {
        id:14,
        name:'Spary parfumat de păr',
        price:15,
        imageUrl:'/assets/par/spray-parfumat-de-par.jpg',
        descriere:'Oferă un miros floral.',
      },
      {
        id:15,
        name:'Ulei de păr',
        price:50,
        imageUrl:'/assets/par/ulei-de-par.jpg',
        descriere:'Ulei de stilizare pentru păr vopsit pentru femei.',
      },
      {
        id:16,
        name:'Spumă pentru volum,strălucire și protecție pentru părul vopsit',
        price:58,
        imageUrl:'/assets/par/spuma-pentru-volum--stralucire-si-protectie-pentru-parul-vopsit---500-ml.jpg',
        descriere:'Spumă pentru volum ideală pentru părul vopsit, deoarece conferă protecție și extra-strălucire acestuia. Conține filtru UV care protejează împotriva razelor solare și previne spălarea culorii. Părul va avea o fixare puternică și plină de strălucire și volum.',
      },
      {

        id:17,
        name:'Mască de păr',
        price:165,
        imageUrl:'/assets/par/masca-par.jpg',
        descriere:' South Beach este prima masca de păr cu silicon natural și biodegradabili, un tsunami de ingrediente active naturale care repară, hrănesc și hidratează intens firul de păr. ',
      },
      {
        id:18,
        name:'Perie de păr',
        price:35,
        imageUrl:'/assets/par/perie-par.jpg',
        descriere:'',
      }
    ]
  }
}
