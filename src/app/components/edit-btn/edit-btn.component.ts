import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';
import { UpdateKey } from 'src/types';

@Component({
  selector: 'editBtn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.css'],
})
export class EditBtnComponent implements OnInit {
  isLogged: boolean = false;
  isEditable: boolean = false;
  isImgSrc: boolean = false;

  @Input() title: String = 'Editor';

  @Input() key: string = '';
  @Input() value: string = '';
  @Input() paragraph: boolean = false;
  @Input() id: number | undefined = undefined;
  @Input() fileUpload: boolean = false;
  @ViewChild('keyValue') field: ElementRef = new ElementRef(Input);

  @Output() updatedValue: EventEmitter<UpdateKey> =
    new EventEmitter<UpdateKey>();

  constructor(private uiService: UiService) {}

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;

      reader.readAsDataURL(file);

      reader.onload = () => {
        this.value = reader.result as string;
        this.isImgSrc = true;
      };
    }
  }

  ngOnInit(): void {}

  onOpenEdit() {
    this.isEditable = true;
    if (!this.fileUpload) this.field.nativeElement.focus();
  }
  onCloseEdit() {
    this.isEditable = false;
  }

  onSubmit() {
    if (this.fileUpload) {
      if (!this.isImgSrc) {
        alert('No hay imagen.');
        return;
      }
    }

    const body: UpdateKey = {
      key: this.key,
      value: this.value,
      id: this.id,
    };
    this.updatedValue.emit(body);
    this.onCloseEdit();
  }
}
