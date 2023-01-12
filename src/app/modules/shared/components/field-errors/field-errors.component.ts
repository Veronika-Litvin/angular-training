import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { messages } from '../../mocks/messages';

@Component({
    selector: 'app-field-errors',
    templateUrl: './field-errors.component.html',
    styleUrls: ['./field-errors.component.scss']
})
export class FieldErrorsComponent {
    @Input() label!: string;

    @Input() control!: AbstractControl;

    showValidationMessage(): string {
        const errors: ValidationErrors = <ValidationErrors>this.control?.errors;
        return Object.entries(errors).map(([errorType]) => {
            console.log(this.control.getError(errorType), errorType)
            const message = messages[errorType].replace(':field:', this.label)
            // .replace(':n:', this.control.getError(errorType)[errorType]);
            return message;
        }).reduce((acc, errorMessage) => acc + errorMessage, "");

    }
}