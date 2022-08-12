import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: StarRatingComponent
    },
    {
      provide: NG_VALIDATORS,
      multi:true,
      useExisting: StarRatingComponent
    }
  ]
})
export class StarRatingComponent implements OnInit, ControlValueAccessor, Validator {

  @Input() count: number = 5;
  stars: number[] = [];

  score: number = 3;

  onChange = (value:number) => {};

  onTouched = () => {};

  touched: boolean = false;

  constructor() {
   }


  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const isInvalid = control.value < 10;
    return isInvalid ? { invalidScore: { score: control.value} } : null;
  }

  writeValue(obj: any): void {
    this.score = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit(): void {
    for(let i = 0; i < this.count; i++){
      this.stars.push(i + 1);
    }
  }

  setScore(value:number) {
    this.score = value;
    this.onChange(value);
    this.setTouched();
  }

  setTouched() {
    if(!this.touched){
      this.touched = true;
      this.onTouched();
    }
  }
}
