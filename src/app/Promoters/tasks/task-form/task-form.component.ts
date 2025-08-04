import { Component, Input, OnInit } from '@angular/core';
import { Tasks } from '../../../core/models/tasks.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  @Input() task: Tasks = { title: '', status: '' };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Form submitted', this.task);
    // 🔁 send data to parent or service
  }

  onCancel() {
    this.router.navigate(['/promoter/tasks']);
  }
}
