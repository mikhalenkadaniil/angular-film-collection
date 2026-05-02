import { Component, output } from '@angular/core';
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
  valueEvent = output<string>();

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.valueEvent.emit(input.value);
  }
}
