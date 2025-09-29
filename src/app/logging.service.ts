import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(messge: string) {
    const timeStamp = new Date().toLocaleDateString(); 
    console.log(`[${timeStamp}]: ${messge}`);  
  }
}
