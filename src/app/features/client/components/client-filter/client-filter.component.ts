import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FloatLabel} from 'primeng/floatlabel';
import {DatePicker} from 'primeng/datepicker';
import {Button} from 'primeng/button';
import {RadioButton} from 'primeng/radiobutton';
import {InputNumber} from 'primeng/inputnumber';

@Component({
  selector: 'g-client-filter',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FloatLabel,
    DatePicker,
    Button,
    RadioButton,
    InputNumber
  ],
  templateUrl: './client-filter.component.html',
  styleUrl: './client-filter.component.scss'
})
export class ClientFilterComponent implements OnInit{
  formGroup !: FormGroup;

  selectedOption: any = null;

  filterOptions: any[] = [
    { name: 'Et', key: 'A' },
    { name: 'Ou', key: 'O' },
  ]


  constructor(private fb: FormBuilder) {
    this.initFormGroup();
  }

  ngOnInit(): void {

  }

  setSelectedOption(option: any){
    this.selectedOption = option;
  }

  private initFormGroup(){
    this.formGroup = this.fb.group({
      name: [''],
      option: [''],
      inscriptionDate: [''],
      interventionNumberMin: [''],
      interventionNumberMax: [''],
    })
  }

  applyFilter(){
    const formValue = this.formGroup.value;
    console.log(formValue)
  }
}
