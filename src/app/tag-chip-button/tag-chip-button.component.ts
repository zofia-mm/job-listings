import { Component, Input } from '@angular/core';
import { Languages } from './languages';
import { Level } from './level';
import { Tools } from './tools';
import { Role } from './role';
import { Highlight } from './highlight';

type Taggable = Languages | Level | Tools | Role | Highlight;

@Component({
  selector: 'app-tag-chip-button',
  standalone: true,
  imports: [],
  templateUrl: './tag-chip-button.component.html',
  styleUrl: './tag-chip-button.component.scss'
})
export class TagChipButtonComponent {
  @Input({ required: true }) taggable!: Taggable;
}
