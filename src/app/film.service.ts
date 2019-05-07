import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  listMovie: object[] = [
    {titre: 'Le seigneur des anneaux', date: 1998, entree: 1520145},
    {titre: 'Harry Potter', date: 1997, entree: 2520145},
    {titre: 'Les petits mouchoirs', date: 2005, entree: 235415},
    {titre: 'La Maison du Maltais', date: 1947, entree: 135415},
    {titre: 'Alexandre', date: 1956, entree: 184415},
    {titre: 'À la dérive', date: 2002, entree: 184415}
  ];


   constructor() { }

  getMovies() {
    return this.listMovie;
  }

  getMovie(i) {
    return this.listMovie[i];
  }
}
