import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Needed for routerLink
import { TaskService } from '../../../core/services/tasks.service';
import { Tasks } from '../../../core/models/tasks.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TasksListComponent implements OnInit {
  tasks: Tasks[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAll().subscribe(data => {
      this.tasks = data;
    });
  }

  deleteTask(task: Tasks) {
    if (confirm('Delete this task?')) {
      this.taskService.delete(task.id!).subscribe(() => this.loadTasks());
    }
  }
}
