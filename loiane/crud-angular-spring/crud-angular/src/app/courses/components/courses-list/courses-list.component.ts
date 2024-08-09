import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course';
import { CoursesModule } from '../../courses.module';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CoursesModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.scss',
})
export class CoursesListComponent {
  @Input()
  courses: Course[] = [];

  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course) {
    this.edit.emit(course);
  }
}
