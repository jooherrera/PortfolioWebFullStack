import { Component, Input, OnInit } from '@angular/core';
import { SoftSkill } from 'src/types';

@Component({
  selector: 'app-soft',
  templateUrl: './soft.component.html',
  styleUrls: ['./soft.component.css'],
})
export class SoftComponent implements OnInit {
  @Input() info: Partial<SoftSkill> = {};
  constructor() {}

  ngOnInit(): void {}
}
