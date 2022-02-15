import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appNomPrenomValidator]', // usage via un attribut
  providers: [{provide: NG_VALIDATORS, useExisting: NomPrenomValidatorDirective,
    multi: true}]
})
export class NomPrenomValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const nomCtrl = control.get('nom');
    const prenomCtrl = control.get('prenom');

    if (!nomCtrl || !prenomCtrl) {
      return null;
    } else {
      const nomSaisie = nomCtrl.value;
      const prenomSaisie = prenomCtrl.value;
      return nomSaisie && nomSaisie === prenomSaisie
        ? { nomPrenomIdentique: true }
        : null;
    }
  }
}
