import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-ui';

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(private http: HttpClient) {}

  submit() {
    debugger;
    const data = {
      name: this.name,
      email: this.email
    };

    this.http.post('http://localhost:5000/api/user', data)
    // this.http.post('https://localhost:7016/api/user', data) 
      .subscribe({
        next: (res: any) => {
          this.message = res.message;
        },
        error: (err) => {
          this.message = "Error calling API";
          console.log(err);
        }
      });
  }
}