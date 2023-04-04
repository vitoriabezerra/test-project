import { Component, TemplateRef } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'test-project'
    userName = 'Vitória'
    modalRef?: BsModalRef
    message?: string
    constructor(private modalService: BsModalService) {}

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template)
    }

    openSecondModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template, { class: 'modal-sm' })
    }

    confirm(): void {
        this.message = 'Sim'
        this.modalRef?.hide()
    }

    decline(): void {
        this.message = 'Não'
        this.modalRef?.hide()
    }
}
