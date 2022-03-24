import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersListComponent } from './members-list.component';

describe('MembersListComponent', () => {
  let component: MembersListComponent;
  let fixture: ComponentFixture<MembersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
