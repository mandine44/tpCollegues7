import { tap } from 'rxjs/operators';
import { Avis, CreerCollegueForm } from 'src/app/motels';
import { Observable, Subject, delay, interval } from 'rxjs';
import { Collegue } from 'src/app/motels';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {




  private busTabCollegues = new Subject<Collegue[]>();

  constructor(private http: HttpClient) {

    // interval(2000)
    // .subscribe(
    //   () => this.busTabCollegues.next([
    //     {
    //       pseudo: 'SUPER',
    //       photo: 'https://randomuser.me/api/portraits/women/71.jpg',
    //       score: 60000
    //     }
    //   ])
    // );
  }



  abonnerFluxTabCollegues(): Observable<Collegue[]> {
    return this.busTabCollegues.asObservable();
  }

  listerCollegues(): Observable<Collegue[]> {
    // GET https://formation-angular-collegues.herokuapp.com/api/v1/collegues
    return this.http.get<Collegue[]>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues');
  }

  rechercherCollegueParPseudo(pseudo: string) : Observable<Collegue> {
    return this.http.get<Collegue>(`https://formation-angular-collegues.herokuapp.com/api/v1/collegues/${pseudo}`);
  }


  donnerUnAvis(collegue: Collegue, avis: Avis): Observable<Collegue> {

    return this.http.post<Collegue>("https://formation-angular-collegues.herokuapp.com/api/v1/votes", {
      avis,
      pseudo: collegue.pseudo
    });
  }

  creerCollegue(collegue: Partial<CreerCollegueForm>) {
    return this.http.post<Collegue>('https://formation-angular-collegues.herokuapp.com/api/v1/collegues',
    collegue);
  }

  rafraichirListeCollegues() {
    const contrat = this.listerCollegues()
      .subscribe(
        colsServeur => this.busTabCollegues.next(colsServeur)
      );

      // c'est bon j'arrête l'abonnement ;-)
     // contrat.unsubscribe();
  }

}
