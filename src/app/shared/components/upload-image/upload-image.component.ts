import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Image} from 'primeng/image';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'g-upload-image',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Image
  ],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent {

  fileUploadGroup!: FormGroup;

  @Input() file?: File;

  @Output() selectedFile = new EventEmitter<File>

  imageSrc: string = '';

  constructor(private uploadForm: FormBuilder) {
    this.fileUploadGroup = this.uploadForm.group({
      fileName: ''
    })
  }

  onFileSelected(event: any){
    this.file = event.target.files[0];

    if (this.file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      };

      this.selectedFile.emit(this.file)

      reader.readAsDataURL(this.file);
    }
  }

  onDeleteFile(){
    this.file = undefined
    this.fileUploadGroup.get('fileName')?.reset('')
  }
}
