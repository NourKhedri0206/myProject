import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignCommunComponent } from './design-commun.component';

describe('DesignCommunComponent', () => {
  let component: DesignCommunComponent;
  let fixture: ComponentFixture<DesignCommunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignCommunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignCommunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
