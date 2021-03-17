import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from "../../../modelo/usuario";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.sass']
})
export class UsuariosComponent implements OnInit {
  closeResult = '';
  userForm: FormGroup;
  rolList: any = ['Profesor', 'Usuario', 'Administrador'];

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveTodo() {
    // Validar el formulario
    if (this.userForm.invalid) {
      return;
    }
 
    let todo: Usuario = this.userForm.value;
    
    console.log(todo);
  }

}
