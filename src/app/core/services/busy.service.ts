import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount = 0;
  isLoadingSubject:BehaviorSubject<boolean>
  isLoading$:Observable<boolean>
  constructor(
    
  ) {
    this.isLoadingSubject=new BehaviorSubject<boolean>(false)
    this.isLoading$=this.isLoadingSubject.asObservable()
   }

  busy(){
    this.busyRequestCount++;
    this.isLoadingSubject.next(true)
  }

  idle(){
    this.busyRequestCount--;
    if(this.busyRequestCount <= 0){
      this.busyRequestCount = 0;
      this.isLoadingSubject.next(false)
    }
  }
  getLoadingStatus(){
    return this.isLoading$
  }
}