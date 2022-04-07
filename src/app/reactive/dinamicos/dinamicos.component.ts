import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [ Validators.required, Validators.minLength(3) ] ],
    favoritos: this.fb.array( [
      ['Metal Gear'],
      ['Death Standing']
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {

  }

  esCampoValido( campo: string ): boolean {
    const cumple = this.miFormulario?.controls[campo]?.errors && this.miFormulario?.controls[campo]?.touched;

    return cumple ? cumple : false;
  }

  guardar() {

    if ( this.miFormulario.invalid ) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log("guardando", this.miFormulario.value);
    this.miFormulario.reset();

  }

  agregarFavorito() {

    if (this.nuevoFavorito.invalid) {
      return;
    }

    this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ) );
    this.nuevoFavorito.reset();

  }

}
