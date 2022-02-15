import { DataService } from './../../services/data.service';
import { Avis } from 'src/app/motels';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from 'src/app/motels';

@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.scss']
})
export class ColleguesComponent implements OnInit {

  @Input() col?:Collegue;
  btnJaimeActif = false;
  btnJedetesteActif = false;

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.gererEtatBtns();
  }

  traiterEvtAvis(avisEmis: Avis){
    if(this.col) {
      this.dataSrv.donnerUnAvis(this.col, avisEmis)
        .subscribe(
          colServeur => this.col = colServeur
        );
    }
    this.gererEtatBtns();
  }

  gererEtatBtns() {
    if(this.col) {
      const {score} = this.col;
      if(score <= -1000) {
        this.btnJedetesteActif = false;
        this.btnJaimeActif = true;
      } else if(score >= 1000) {
        this.btnJaimeActif = false;
        this.btnJedetesteActif = true;
      } else {
        this.btnJaimeActif = true;
        this.btnJedetesteActif = true;
      }
    }
  }



}
