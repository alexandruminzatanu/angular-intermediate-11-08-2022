import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-joke-create',
  templateUrl: './joke-create.component.html',
  styleUrls: ['./joke-create.component.scss'],
})
export class JokeCreateComponent implements OnInit {
  joke: string = 'content';
  author: string = '';

  formGroup: FormGroup = new FormGroup({
    joke: new FormControl('', [Validators.required, Validators.minLength(4)]),
    author: new FormControl('', [Validators.required, this.customValidator()]),
  });

  constructor() {}

  ngOnInit(): void {
    this.formGroup.controls['author'].valueChanges.pipe(debounceTime(2000)).subscribe((value) => {
      console.log(value);
    });

    this.formGroup.controls['joke'].statusChanges.subscribe((value) => {
      console.log(this.formGroup.controls['joke']);
    });
  }

  jokeChange(value: string) {
    console.log(value);
  }

  onSubmit(value: any) {
    console.log(value);
  }

  onSubmitReactive() {
    console.log(this.formGroup);
  }

  resetForm() {
    this.formGroup.reset();
  }

  customValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const isValid = control.value === 'Bruce Lee';
      return isValid ? { badAuthor: { } } : null;
    }
  }
}
