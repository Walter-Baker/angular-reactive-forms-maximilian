import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

export class Hobbies {

    public parentForm: FormGroup;

    public id: string = 'hobbies';
    public path: string = this.id;

    public formArray: FormArray;

    constructor(parentForm: FormGroup) {
        this.parentForm = parentForm;
        this.formArray = new FormArray([]);
    }

    onAddHobby() {
        const control = new FormControl(null, Validators.required);
        (<FormArray>this.parentForm.get(this.path)).push(control);
    }
      
    getControls() {
        return (<FormArray>this.parentForm.get(this.path)).controls;
    }
}