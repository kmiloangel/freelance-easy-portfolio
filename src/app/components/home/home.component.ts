import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  user: {} = null;
  projects: any = []

  constructor(private apiService: ApiService) { }

  async ngOnInit() {
    try {
      const data = await this.apiService.getPortfolio().toPromise();
      this.projects = data.projects;
      this.user = data.user;
    } catch (error) {
      console.error(error);
    }
  }
}
