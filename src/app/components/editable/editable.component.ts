import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'editable',
  templateUrl: './editable.component.html',
  styleUrls: ['./editable.component.css'],
})
export class EditableComponent implements OnInit {
  @Input() data: string = '';
  @Input() dataPorcent: number = 0;
  @Input() heading: string = '';
  @Input() goTo: boolean = false;
  @Input() linkeable: boolean = false;
  @Input() paragraph: boolean = false;
  @Input() withPorcent: boolean = false;
  @ViewChild('field') field: ElementRef = new ElementRef(Input);
  @ViewChild('porcent') porcent: ElementRef = new ElementRef(Input);

  originalData: string = '';
  originalPorcent: number = 0;
  onLogged: boolean = false;
  onEdit: boolean = false;
  isLinkeable: boolean = false;

  constructor(private uiService: UiService, private renderer: Renderer2) {
    this.uiService.LogState().subscribe((v) => (this.onLogged = v));
    // this.renderer.listen('window', 'click', (e: Event) => {
    //   if (e.target !== this.field.nativeElement && this.onEdit)
    //     this.onDecline();
    // });
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.originalData = this.data;
    this.originalPorcent = this.dataPorcent;
    this.isLinkeable = this.linkeable;
  }

  divClick() {
    if (!this.onLogged && this.goTo) {
      window.open(`http://${this.data.split(' ')[1]}`, '_blank');
    }
    console.log('Click div');
  }

  onClicked() {
    console.log('Click');
    this.onEdit = true;
  }

  onAccept() {
    console.log('Aceptado');
    this.data = this.data.trim();
    this.originalData = this.data.trim();
    this.originalPorcent = this.dataPorcent;
    this.onEdit = false;
  }

  onDecline() {
    console.log('Rechazado');
    this.data = this.originalData;
    this.dataPorcent = this.originalPorcent;
    this.onEdit = false;
  }
}
