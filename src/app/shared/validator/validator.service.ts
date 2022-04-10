import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  // Validacion personalizada de formgroup
  noPuedeSerStrider( control: FormControl ): ValidationErrors | null {

    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true
      }
    }
    return null; //Si el metodo devuelve null, el FormGroup lo interpretara como que no ha habido ningun error
  }

  camposIguales(pass: string, confirmPass: string) {

    return ( formGroup: AbstractControl): ValidationErrors | null => {

      const _pass = formGroup.get(pass)?.value;
      const _confirmPass = formGroup.get(confirmPass)?.value;

      if ( _pass !== _confirmPass ) {
        formGroup.get(_confirmPass)?.setErrors({ noIguales: true });
        return { noIguales: true }
      }

      formGroup.get(_confirmPass)?.setErrors(null);

      return null;
    }

  }

}
