import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BusyService } from './core/services/busy.service';
import { AuthService } from './shared-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'E-Commerce';
  isLoading:boolean
  constructor(private authService:AuthService,private busyService:BusyService){
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.autoLogin()
    this.busyService.getLoadingStatus().subscribe((status)=>{
      this.isLoading=status
      console.log(this.isLoading);
      
    })


  }
}
