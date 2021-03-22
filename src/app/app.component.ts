import { Component, OnInit } from '@angular/core';
import { User } from 'src/modals/user';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users$: Observable<User[]> | undefined;

  constructor(private appsService: AppService){}

  ngOnInit(){
    this.users$ = this.appsService.getContacts();

  }



}
