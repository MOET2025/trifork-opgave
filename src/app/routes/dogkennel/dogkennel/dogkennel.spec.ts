import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Dogkennel } from './dogkennel';

describe('Dogkennel', () => {
  let component: Dogkennel;
  let fixture: ComponentFixture<Dogkennel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dogkennel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dogkennel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
