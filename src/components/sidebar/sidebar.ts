import { Component, input, OnInit, output, signal } from '@angular/core';
import { Icon } from '../../ui/icon/icon';

export interface IOption {
  icon: string;
  label: string;
  id: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [Icon],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  options = input.required<IOption[]>();
  protected selected = signal('');
  selectedEvent = output<string>();

  ngOnInit(): void {
    this.selected.set(this.options()[0].id);
  }

  protected onChange(id: string) {
    this.selected.set(id);
    this.selectedEvent.emit(id);
  }
}
