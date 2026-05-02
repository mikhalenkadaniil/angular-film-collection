import { Component, input, OnInit, Signal, signal } from '@angular/core';

export interface IOption {
  icon: string;
  label: string;
  id: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  options = input.required<IOption[]>();
  protected selected = signal('');

  ngOnInit(): void {
    this.selected.set(this.options()[0].id);
  }
}
