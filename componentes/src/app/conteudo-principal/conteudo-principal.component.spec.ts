import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoPrincipalComponent } from './conteudo-principal.component';

describe('ConteudoPrincipalComponent', () => {
  let component: ConteudoPrincipalComponent;
  let fixture: ComponentFixture<ConteudoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoPrincipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
