import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rafraichir',
  templateUrl: './rafraichir.component.html',
  styleUrls: ['./rafraichir.component.scss']
})
export class RafraichirComponent implements OnInit {

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
  }

  rafraichir() {
    this.dataSrv.rafraichirListeCollegues()
  }

}
