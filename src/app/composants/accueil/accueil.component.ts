import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ListeColleguesComponent } from '../liste-collegues/liste-collegues.component';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  // @ViewChild(ListeColleguesComponent)
  // composantListeCollegues?: ListeColleguesComponent;

   constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  // actualiser() {
  //   this.composantListeCollegues?.rafraichir();
  // }

  actualiser() {
    this.dataSrv.rafraichirListeCollegues();
  }

}
