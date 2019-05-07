import { FilmService } from './../film.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  listMovie: object[];
  key: number;
  movie: object;

  constructor(private route: ActivatedRoute, private filmService: FilmService) {
    this.route.params
      .subscribe(params => {
          this.key = params.key;
        });
    }

  ngOnInit() {
    this.getMovie(this.key);
  }

  getMovie(i) {
    this.movie = this.filmService.getMovie(i);
  }

}
