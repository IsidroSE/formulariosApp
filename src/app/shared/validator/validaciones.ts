import { FormControl } from "@angular/forms";


export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

// Validacion personalizada de formgroup
export const noPuedeSerStrider = ( control: FormControl ) => {
  const valor = control.value?.trim().toLowerCase();
  if (valor === 'strider') {
    return {
      noStrider: true
    }
  }
  return null; //Si el metodo devuelve null, el FormGroup lo interpretara como que no ha habido ningun error
}