import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreerCollegueForm } from 'src/app/motels';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nouveau-collegue-template-form',
  templateUrl: './nouveau-collegue-template-form.component.html',
  styleUrls: ['./nouveau-collegue-template-form.component.scss']
})
export class NouveauCollegueTemplateFormComponent implements OnInit {

  nouveauCollegue: Partial<CreerCollegueForm> = {};

  msgErreur?: string;
  msgOk?:string;

  constructor(private dataSrv: DataService, private router:Router) { }

  ngOnInit(): void {
  }

  valider(colForm: NgForm){
    // code perso ???
    this.msgOk = undefined;
    this.msgErreur = undefined;

    this.dataSrv.creerCollegue(this.nouveauCollegue)
      .subscribe({
        next: () => {
          this.msgOk = 'Collegue créé';
          colForm.reset(); // réinitialiser les informations de validation
          this.nouveauCollegue = {};
          this.router.navigateByUrl('/accueil');
        },
        error: () => this.msgErreur = 'Ooops, erreur back'
      });
  }

}
