import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondaggioComponent } from './sondaggio.component';

describe('SondaggioComponent', () => {
  let component: SondaggioComponent;
  let fixture: ComponentFixture<SondaggioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondaggioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
