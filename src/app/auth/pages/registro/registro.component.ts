import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ]],
    email: ['', [ Validators.required,  Validators.pattern(emailPattern) ], [ this.evs ]],
    username: ['', [ Validators.required, noPuedeSerStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    confirmPass: ['', [ Validators.required ]]
  }, {
    validators: [ this.vs.camposIguales('password', 'confirmPass') ]
  });

  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if ( errors?.['required'] ) {
      return 'Este campo es obligatorio.';
    }
    else if ( errors?.['pattern'] ) {
      return 'El formato es incorrecto.';
    }
    else if ( errors?.['emailTomado'] ) {
      return 'Este correo ya existe.';
    }
    else {
      return '';
    }
  }

  constructor( 
    private fb: FormBuilder,
    private vs: ValidatorService,
    private evs: EmailValidatorService
  ) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Isidro Sotoca',
      email: 'test1@test.com',
      username: 'poiuy',
      password: '123456',
      confirmPass: '123456'
    });
  }

  campoNoValido( campo: string ) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {

  }

}
