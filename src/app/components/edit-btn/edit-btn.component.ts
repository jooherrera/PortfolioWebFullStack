import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
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

  @Input() key: string = '';
  @Input() value: string = '';
  @Input() paragraph: boolean = false;
  @Input() position: number | undefined = undefined;
  @Input() id: number | undefined = undefined;
  @Input() fileUpload: boolean = false;
  @ViewChild('keyValue') field: ElementRef = new ElementRef(Input);

  @Output() updatedValue: EventEmitter<UpdateKey> =
    new EventEmitter<UpdateKey>();

  constructor(private uiService: UiService) {
    this.uiService.LogState().subscribe((v) => (this.isLogged = v));
  }

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
      position: this.position,
      id: this.id,
    };
    this.updatedValue.emit(body);
    this.onCloseEdit();
  }
}
