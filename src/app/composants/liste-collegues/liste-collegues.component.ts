import { DataService } from './../../services/data.service';
import { Collegue } from 'src/app/motels';
import { Component, OnInit } from '@angular/core';
import { timeout, Observable, of, delay } from 'rxjs';

@Component({
  selector: 'app-liste-collegues',
  templateUrl: './liste-collegues.component.html',
  styleUrls: ['./liste-collegues.component.scss']
})
export class ListeColleguesComponent implements OnInit {

  // modélise l'absence des données collègues ?

  // 1. collegues = [] puis collegues = DataServeur
  // => pas trop fan : comment différentier une data serveur vide avec pas encore de données reçues

  // 2. collegues?
  // => correct => OK
  // => le moins - => if if if if

  // 3. collegues: Observable<Collegues>, | async
  // => correct
  // => une affection de l'industrie sur cette option
  // => c'est bon pour la période d'essai ;-)

  // ?4. collegues! => bugs en perspective ;-)
  // => Bidouille ;-)
  // => vous prenez vos responsabilités

  collegues!: Observable<Collegue[]>;

  constructor(private dataSrv: DataService) {

  }

  ngOnInit(): void {
    this.collegues = this.dataSrv.abonnerFluxTabCollegues();
    //this.rafraichir();
  }

  // rafraichir() {
  //   this.collegues = this.dataSrv.listerCollegues()
  //   .pipe(
  //     delay(3000)
  //   );
  // }
}
