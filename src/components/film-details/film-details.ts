import { Component, inject, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { IFilm } from '../../model/films';
import { HumanReadableDurationPipe } from '../../pipes/human-readable-duration.pipe';
import { NotFound } from '../not-found/not-found';
import { Breadcrumbs } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-film-details',
  imports: [RouterLink, HumanReadableDurationPipe, NotFound, Breadcrumbs],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
})
export class FilmDetails implements OnInit {
  protected id!: number;
  protected data!: Signal<IFilm>;
  protected store = inject(StoreService);

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.data = this.store.getFilm(this.id);
  }
}
