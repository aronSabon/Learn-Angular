import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class LoggingService{
    http:HttpClient=inject(HttpClient);

    logError(data:{statusCode:number, errorMessage: string, dateTime : Date}){
        this.http.post('https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/log.json',data)
        .subscribe();
    }
    fetchError(){
        this.http.get('https://angularhttpclient-ff30e-default-rtdb.firebaseio.com/log.json')
        .subscribe((err) => {
            console.log(err);
        });
    }
}