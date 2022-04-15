import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[]
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  persona: Persona = {
    nombre: 'Isidro',
    favoritos: [
      { id: 1, nombre: 'Mario Kart'},
      { id: 2, nombre: 'Metroid'},
      { id: 3, nombre: 'Fire Emblem'}
    ]
  }

  eliminar ( index: number ): void {
    this.persona.favoritos.splice(index, 1);
  }

  agregar(): void {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    };
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  guardar() {
    console.log("formulario guardado");
  }

}
