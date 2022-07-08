import { AbstractControl } from '@angular/forms';

export abstract class FormControlUtil {

  /** reset value to null for the given controls */
  public static reset(controls: AbstractControl[]) {
    controls.forEach(control => {
      control.setValue(null);
    });
  }
}
