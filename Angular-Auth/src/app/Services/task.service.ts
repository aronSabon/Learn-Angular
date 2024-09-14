import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Task } from "../Models/Task";
import { catchError, exhaustMap, map, Subject, take, tap, throwError } from "rxjs";
import { LoggingService } from "./Logging.service";
import { response } from "express";
import { AuthService } from "./auth.service";
import { User } from "../Models/User";

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TaskService {
  http: HttpClient = inject(HttpClient);
  errorSubject = new Subject<HttpErrorResponse>();
  loggingService: LoggingService = inject(LoggingService);
  authService: AuthService = inject(AuthService);


  CreateTask(task: Task) {
    const headers = new HttpHeaders({ 'myheader': 'hello-world' });
    // console.log(data)
    this.http.post<{ name: string }>(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json',
      task,
      { headers: headers })
      .pipe(catchError((err) => {
        const errObj = { statusCode: err.status, errorMessage: err.message, dateTime: new Date };
        this.loggingService.logError(errObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      });
  }
  DeleteTask(id: string | undefined) {
    this.http.delete(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks/' + id + '.json')
      .pipe(catchError((err) => {
        const errObj = { statusCode: err.status, errorMessage: err.message, dateTime: new Date };
        this.loggingService.logError(errObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      });
  }
  DeleteAllTasks() {
    this.http.delete(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json',
      { observe: 'events', responseType: 'json' })
      .pipe(tap((event) => {
        if (event.type === HttpEventType.Sent) {
          alert('request Sent')
          console.log('event type = ')
        }
        if (event.type === HttpEventType.Response) {
          alert('response received')
          console.log('event type = ')
        }
        console.log(event);
      }), catchError((err) => {
        const errObj = { statusCode: err.status, errorMessage: err.message, dateTime: new Date };
        this.loggingService.logError(errObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      });
  }
  GetAllTaskData() {
    return this.http.get<{ [key: string]: Task }>(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks.json'
    ).pipe(map((response) => {
        //transform Data
        let tasks = [];
        console.log(response);
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            tasks.push({ ...response[key], id: key });
          }
        }
        return tasks;
      }),
      catchError((err) => {
        const errObj = { statusCode: err.status, errorMessage: err.message, dateTime: new Date };
        this.loggingService.logError(errObj);
        return throwError(() => err);
      }))
    // let headers = new HttpHeaders();
    // headers= headers.append('content-type','application/json');
    // headers= headers.append('Access-Control-Allow-Origin','*')
    // let queryParams = new HttpParams();
    // queryParams= queryParams.set('page', 2);
    // queryParams=queryParams.set('item',10);

    //   ,{headers:headers,params:queryParams, observe:'body',responseType:'json'}



  }
  UpdateTask(id: string | undefined, data: Task) {
    this.http.put('https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks/' + id + '.json',
      data)
      .pipe(catchError((err) => {
        const errObj = { statusCode: err.status, errorMessage: err.message, dateTime: new Date };
        this.loggingService.logError(errObj);
        return throwError(() => err);
      }))
      .subscribe({
        error: (err) => {
          this.errorSubject.next(err);
        }
      });
  }
  GetTaskById(id: string) {
    return this.http.get(
      'https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/tasks/' + id + '.json'
    ).pipe(map((response) => {
      console.log(response);
      let task = {};
      task = { ...response, id: id }
      return task;
    }))
  }
}