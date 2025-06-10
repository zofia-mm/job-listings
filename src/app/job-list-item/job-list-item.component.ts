import { Component, Input } from '@angular/core';
import { Job } from './job';
import { CommonModule } from '@angular/common';
import { TagChipButtonComponent } from "../tag-chip-button/tag-chip-button.component";

@Component({
  selector: 'app-job-list-item',
  standalone: true,
  imports: [CommonModule, TagChipButtonComponent],
  templateUrl: './job-list-item.component.html',
  styleUrl: './job-list-item.component.scss'
})
export class JobListItemComponent{
  @Input({ required: true }) job!: Job;
}
