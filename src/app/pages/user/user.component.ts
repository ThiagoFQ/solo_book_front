import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  fragments: any[] = [];
  fragmentLinks: string[] = [];
  lastFragmentId: number = 0;
  sceneId: number = 19;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getFragments();
  }

  getFragments(): void {
    this.http.get<any[]>(`http://localhost:8080/api/fragments/scene/${this.sceneId}`)
      .subscribe(
        (response) => {
          this.fragments = response;
          if (this.fragments.length > 0) {
            this.lastFragmentId = this.fragments[this.fragments.length - 1].id;
            this.getFragmentLinks(this.lastFragmentId);
          }
        },
        (error) => {
          console.error('Error fetching fragments:', error);
        }
      );
  }

  getFragmentLinks(fragmentId: number): void {
    this.http.get<string[]>(`http://localhost:8080/api/fragments/${fragmentId}/links`)
      .subscribe(
        (response) => {
          this.fragmentLinks = response;
          console.log('Links do fragmento:', this.fragmentLinks);
        },
        (error) => {
          console.error('Erro ao buscar os links do fragmento:', error);
        }
      );
  }
}