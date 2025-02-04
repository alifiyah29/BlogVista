import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  message: string = '';

  constructor(private helloService: HelloService) {}

  ngOnInit(): void {
    this.helloService.getHello().subscribe((response) => {
      this.message = response;
    });
  }
}
