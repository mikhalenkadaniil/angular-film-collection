import { Component } from '@angular/core';
import { Icon } from '../icon/icon';
import { loupe } from '../../assets/icons/icons';

@Component({
  selector: 'app-search',
  imports: [Icon],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  protected icon = loupe;
}
