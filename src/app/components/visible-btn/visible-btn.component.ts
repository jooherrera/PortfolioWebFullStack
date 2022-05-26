import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UpdateKey } from 'src/types';

@Component({
  selector: 'visible-btn',
  templateUrl: './visible-btn.component.html',
  styleUrls: ['./visible-btn.component.css'],
})
export class VisibleBtnComponent implements OnInit {
  @Input() isVisible: boolean | undefined = false;
  @Input() id: number | undefined = undefined;
  @Input() key: string = '';

  @Output() toggleVisibility: EventEmitter<UpdateKey> =
    new EventEmitter<UpdateKey>();

  imgSrc = '';

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.imgSrc = this.isVisible
      ? './assets/icons/eye-solid.svg'
      : './assets/icons/eye-slash-solid.svg';
  }
  onToogle() {
    this.isVisible = !this.isVisible;

    const body: UpdateKey = {
      key: this.key,
      value: String(this.isVisible),
      position: undefined,
      id: this.id,
    };

    this.toggleVisibility.emit(body);
  }
}
