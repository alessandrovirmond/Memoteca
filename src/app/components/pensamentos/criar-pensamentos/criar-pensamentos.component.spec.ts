import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CriarPensamentosComponent } from './criar-pensamentos.component';
import { RouterModule } from '@angular/router';


describe('CriarPensamentosComponent', () => {
  let component: CriarPensamentosComponent;
  let fixture: ComponentFixture<CriarPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarPensamentosComponent, RouterModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
