import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvisComponent } from './composants/avis/avis.component';
import { ColleguesComponent } from './composants/collegues/collegues.component';
import { ListeColleguesComponent } from './composants/liste-collegues/liste-collegues.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { ScorePipe } from './pipes/score.pipe';
import { RafraichirComponent } from './composants/rafraichir/rafraichir.component';
import { NouveauCollegueTemplateFormComponent } from './composants/nouveau-collegue-template-form/nouveau-collegue-template-form.component';
import { FormsModule } from '@angular/forms';
import { NomPrenomValidatorDirective } from './validators/nom-prenom-validator.directive';
import { PseudoValidatorDirective } from './validators/pseudo-validator.directive';
import { MenuComponent } from './composants/menu/menu.component';
import { RouterModule, Routes } from '@angular/router';

const routerConfig:Routes=[
  {
    path:'accueil', component:AccueilComponent
  },
  {
    path:'formulaire', component:NouveauCollegueTemplateFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AvisComponent,
    ColleguesComponent,
    ListeColleguesComponent,
    AccueilComponent,
    ScorePipe,
    RafraichirComponent,
    NouveauCollegueTemplateFormComponent,
    NomPrenomValidatorDirective,
    PseudoValidatorDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
