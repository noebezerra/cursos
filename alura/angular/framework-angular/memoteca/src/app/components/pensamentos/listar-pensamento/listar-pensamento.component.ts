import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  page: number = 1;
  hasPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.page).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  loadPensamentos() {
    this.service.listar(++this.page, this.filtro).subscribe((pensamentos) => {
      if (pensamentos.length) {
        this.listaPensamentos.push(...pensamentos);
      } else {
        this.hasPensamentos = false;
      }
    });
  }

  searchPensamentos() {
    this.page = 1;
    this.service.listar(this.page, this.filtro).subscribe((pensamentos) => {
      this.listaPensamentos = pensamentos;
      this.hasPensamentos = true;
    });
  }
}
