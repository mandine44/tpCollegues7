import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Avis } from 'src/app/motels';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss'],
})
export class AvisComponent implements OnInit {

  // capacité d'émettre un evt
  @Output() avis = new EventEmitter<Avis>();
  @Input() jaimeActif = true;
  @Input() jedetesteActif = true;

  constructor() { }

  ngOnInit(): void {
  }

  jaime() {
    this.avis.emit(Avis.AIMER);
  }

  jedeteste() {
    // déclencher l'événement "avis" avec "$event" = "Avis.DETESTER".
    this.avis.emit(Avis.DETESTER);
  }

}
