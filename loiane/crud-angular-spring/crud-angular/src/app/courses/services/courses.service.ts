import { Injectable } from '@angular/core';
import { Courses } from '../model/courses';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly API = '/assets/courses.json';
  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Courses[]>(this.API).pipe(
      first(),
      // delay(5000),
      tap((courses) => console.log(courses))
    );
  }

  save(record: Partial<Courses>) {
    return this.httpClient.post<Courses>(this.API, record).pipe(first());
  }
}
