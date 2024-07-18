import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/ascourses.json';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Courses[]>(this.API).pipe(
      first(),
      delay(5000),
      tap((courses) => console.log(courses))
    );
  }
}
