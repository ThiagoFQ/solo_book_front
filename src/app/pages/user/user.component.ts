import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SetSceneButtonComponent } from "../../components/set-scene-button/set-scene-button.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Dice20Component } from "../../components/dice-20/dice-20.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.scss',
    imports: [CommonModule, SetSceneButtonComponent, SidebarComponent, FooterComponent, Dice20Component]
})
export class UserComponent implements OnInit {
  fragments: any[] = [];
  fragmentLinks: string[] = [];
  lastFragmentId: number = 0;
  sceneId: number = 0;

  constructor(private http: HttpClient, private changeDetectorRef: ChangeDetectorRef, private zone:NgZone) { }

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
        },
        (error) => {
          console.error('Erro ao buscar os links do fragmento:', error);
        }
      );
  }

  updateSceneId(linkId: number): void {
    this.zone.run(() => {
      this.sceneId = linkId;
      this.getFragments();
      this.scrollToTop();
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}