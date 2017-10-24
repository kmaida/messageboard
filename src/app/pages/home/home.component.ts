import { Title } from '@angular/platform-browser';
import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public auth: AuthService,
    private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Message Board - Forums');
  }

}
