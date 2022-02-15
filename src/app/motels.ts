export interface Collegue {
    photo: string,
    pseudo: string,
    score: number,
}

export interface CreerCollegueForm {
  photo: string,
  pseudo: string,
  nom: string,
  prenom:string
}

export enum Avis {
  AIMER = 'AIMER', DETESTER = 'DETESTER'
}
