import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarragarMaisComponent } from './botao-carragar-mais.component';

describe('BotaoCarragarMaisComponent', () => {
  let component: BotaoCarragarMaisComponent;
  let fixture: ComponentFixture<BotaoCarragarMaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoCarragarMaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoCarragarMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
