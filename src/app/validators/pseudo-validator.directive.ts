import { tap, map, catchError } from 'rxjs/operators';
import { Directive } from '@angular/core';
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DataService } from '../services/data.service';

@Directive({
  selector: '[appPseudoValidator]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: PseudoValidatorDirective,
    multi: true}]
})
export class PseudoValidatorDirective implements AsyncValidator {

  constructor(private dataSrv: DataService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    if(!control.value){
      return of(null); // Ok
    }

    return this.dataSrv.rechercherCollegueParPseudo(control.value) // Observable<Collegue>
          .pipe(
            tap(col => console.log('avant map', col)),
            // pseudo est trouvé => erreur { pseudoTrouve : true}
            map(() => ({ pseudoTrouve : true})),
            tap(col => console.log('après map', col)),
            // si erreur, donc pseudo non trouvé, alors pas d'erreur de validation
            catchError(() => of(null))
          );
  }
}
