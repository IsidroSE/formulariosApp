import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: [ 'M' , Validators.required ],
    notificaciones: [ true , Validators.required ],
    condiciones: [ false, Validators.requiredTrue ]
  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.miFormulario.reset( {
      ...this.persona,
      condiciones: true
    } );

    this.miFormulario.get('condiciones')?.valueChanges.subscribe( newValue => {
      console.log( newValue );
    })

    this.miFormulario.valueChanges.subscribe(/*form*/ ({condiciones, ...restoDeArgumentos}) => {
      // delete form.condiciones;
      // console.log(form);
      this.persona = restoDeArgumentos;
    });

  }

  guardar() {

    const formValue = { ...this.miFormulario.value };

    console.log(formValue);

  }

}
