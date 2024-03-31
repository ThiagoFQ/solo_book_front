import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSceneButtonComponent } from './set-scene-button.component';

describe('SetSceneButtonComponent', () => {
  let component: SetSceneButtonComponent;
  let fixture: ComponentFixture<SetSceneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetSceneButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetSceneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
