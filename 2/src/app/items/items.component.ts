import { Component, OnInit } from '@angular/core';
import { ITEMS } from './itemsStore';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  items = ITEMS
  constructor() { }

  ngOnInit(): void {
  }

}
