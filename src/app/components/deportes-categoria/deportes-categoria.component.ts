import { Component, OnInit } from '@angular/core';
import { Deporte } from 'src/app/entities/deporte';
import { CategoriasDeportesService } from 'src/app/services/categorias-deportes.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-deportes-categoria',
  templateUrl: './deportes-categoria.component.html',
  styleUrls: ['./deportes-categoria.component.css']
})
export class DeportesCategoriaComponent implements OnInit {
  listaCategorias: Deporte[];
  nuevaCategoria: Deporte;

  categoriasAgregarForm = new FormGroup({
    pais: new FormControl(),
    nombre: new FormControl(),
    deporte: new FormControl(),
    evento: new FormControl(),
    medallas: new FormControl()
  });

  constructor(private readonly deportesService: CategoriasDeportesService) { }

  ngOnInit(): void {
    this.deportesService.mostrarDeportes().subscribe(categorias => {
      console.log(categorias);
      this.listaCategorias = categorias
    })
  }

  agregarCategoria(values) {
    console.log(values);
    this.deportesService.categoriasInsert(values.pais, values.nombre, values.evento, values.medallas, values.deporte).subscribe(
      (res: string) => {
        console.log(res)
        this.nuevaCategoria = {
          IdDeportista: res,
          Pais: values.pais,
          Nombre: values.nombre,
          Deporte: values.deporte,
          Evento: values.evento,
          Medallas: values.medallas
        }
      }
    );
    this.listaCategorias.push(this.nuevaCategoria);
    this.categoriasAgregarForm.reset();
  }
}
