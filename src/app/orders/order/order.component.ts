import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/order.service';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common';
import { CustomerService } from 'src/app/shared/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/shared/customer.model';


@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './order.component.html',
  styles: [''],
})
export class OrderComponent implements OnInit{
  customerList!: Customer[];
  isValid: boolean =true;
  constructor(public service: OrderService,
    // private dialog: MatDialog,
    private customerService: CustomerService,
    // private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.resetForm();



  }
  resetForm(form? : NgForm) {
    if (form){
      form.resetForm();
    }
    this.service.formData = {
      OrderId: 0,
      OrderNo: Math.floor(100000 + Math.random() * 900000).toString(),
      CustomerId: 0,
      Pmethod: '',
      Gtotal: 0,
      // DeletedOrderItemIDs: ''
    };
  }
  
  validateForm() {
    this.isValid = true;
    if (this.service.formData.CustomerId == 0)
      this.isValid = false;
    // else if (this.service.orderItems.length == 0)
    //   this.isValid = false;
    return this.isValid;
  }

  onSubmit(_t3: any) {
    throw new Error('Method not implemented.');
  }
}
