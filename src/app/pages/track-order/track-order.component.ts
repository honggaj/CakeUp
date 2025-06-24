import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-track-order',
  standalone: false,
  templateUrl: './track-order.component.html',
})
export class TrackOrderComponent {
  orderCode: string = '';
  orderData: any = null;

  trackOrder() {
    // Giả lập dữ liệu, sau này gọi API ở đây
    if (this.orderCode === 'CAKE123456') {
      this.orderData = {
        customerName: 'Nguyễn Văn A',
        phone: '0909 123 456',
        address: '123 Đường Hoa Hồng, Quận 1, TP.HCM',
        deliveryDate: '2025-06-25',
        deliveryTime: '15:00',
        items: [
          { name: 'Bánh Kem Hồng 3 Tầng', quantity: 2, price: 900000 },
          { name: 'Bánh Kem Socola Hồng', quantity: 1, price: 350000 },
          { name: 'Bánh Kem Trái Cây', quantity: 3, price: 1200000 },
          { name: 'Bánh Kem Matcha', quantity: 1, price: 380000 },
          { name: 'Bánh Kem Phô Mai', quantity: 4, price: 1680000 },
        ],
        subtotal: 4510000,
        shipping: 50000,
        total: 4560000,
      };
    } else {
      this.orderData = null;
      alert('Không tìm thấy đơn hàng');
    }
  }
}
