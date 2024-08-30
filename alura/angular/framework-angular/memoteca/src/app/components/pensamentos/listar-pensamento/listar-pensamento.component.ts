import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  constructor(private service: PensamentoService, private router: Router) {}

  ngOnInit(): void {
    this.service.listar(this.page).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  loadPensamentos() {
    this.service
      .listar(++this.page, this.filtro, this.favoritos)
      .subscribe((pensamentos) => {
        if (pensamentos.length) {
          this.listaPensamentos.push(...pensamentos);
        } else {
          this.hasPensamentos = false;
        }
      });
  }

  searchPensamentos() {
    this.page = 1;
    this.service
      .listar(this.page, this.filtro, this.favoritos)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
        this.hasPensamentos = true;
      });
  }

  listarFavoritos() {
    this.titulo = 'Meus Favoritos';
    this.page = 1;
    this.hasPensamentos = true;
    this.favoritos = true;
    this.service
      .listar(this.page, this.filtro, true)
      .subscribe((pensamentosFavoritos) => {
        this.listaPensamentos = pensamentosFavoritos;
        this.listaFavoritos = pensamentosFavoritos;
      });
  }

  recarregarComponente() {
    this.favoritos = false;
    this.page = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }
}
