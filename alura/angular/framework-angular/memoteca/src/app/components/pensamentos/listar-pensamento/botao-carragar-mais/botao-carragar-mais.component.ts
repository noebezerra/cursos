import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carragar-mais',
  templateUrl: './botao-carragar-mais.component.html',
  styleUrls: ['./botao-carragar-mais.component.css'],
})
export class BotaoCarragarMaisComponent implements OnInit {
  @Input() hasPensamentos: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
