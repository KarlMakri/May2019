import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listMovie: object[];
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.listMovie = this.filmService.getMovies();
  }

}
