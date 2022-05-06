import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'addBtn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() addBtn: boolean = false;
  @Input() removeBtn: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
