import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-set-scene-button',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './set-scene-button.component.html',
  styleUrl: './set-scene-button.component.scss'
})
export class SetSceneButtonComponent {
  @Input() fragmentLinks: string[] = [];
  @Output() sceneIdChange = new EventEmitter<number>();

  constructor() { }

  setSceneId(link: string): void {
    const linkId = parseInt(link, 10);
    this.sceneIdChange.emit(linkId);
  }
}
