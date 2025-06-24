import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  intervalId: any;

  cakes = [
    {
      name: 'Bánh Valentine Trái Tim',
      image: 'https://birthdaylovecake.com/wp-content/uploads/2022/02/2.jpg',
      description: 'Bánh kem trái tim đỏ, trang trí socola.',
      price: 850000
    },
    {
      name: 'Bánh Tiệc Bé Gấu Bông',
      image: 'https://tse4.mm.bing.net/th?id=OIP.aBAGJKrqnfzzRmysPF9kxQHaHa&pid=Api&P=0&h=180',
      description: 'Bánh ngộ nghĩnh hình gấu bông.',
      price: 700000
    },
    {
      name: 'Bánh Sự Kiện Hoa Tươi',
      image: 'https://banhsinhnhat.com/media/cache/c6/ea/c6ea5e384f9ed2b2284fd47d0e5d16ab.jpg',
      description: 'Bánh hoa tươi, sang trọng.',
      price: 1500000
    },
    {
      name: 'Bánh Sinh Nhật Hình Thú',
      image: 'https://friendshipcakes.com/wp-content/uploads/2023/04/banh-ve-hinh-7.jpg',
      description: 'Bánh hình thú ngộ nghĩnh.',
      price: 900000
    },
    {
      name: 'Bánh Valentine Hoa Hồng',
      image: 'https://banhkemngonghinh.com/wp-content/uploads/2018/04/26-banh-kem-sinh-nhat-tang-ngay-8.3-trai-tim.jpg',
      description: 'Bánh hoa hồng đỏ, kem hồng đậm.',
      price: 1000000
    },
    {
      name: 'Bánh Tiệc Bé Ngôi Sao',
      image: 'https://friendshipcakes.com/wp-content/uploads/2023/04/banh-ve-hinh-0-e1681523771366.jpg',
      description: 'Bánh hình ngôi sao dễ thương.',
      price: 750000
    },
    {
      name: 'Bánh Sinh Nhật 3 Tầng',
      image: 'https://tse2.mm.bing.net/th?id=OIP.WFDPb2OS4KoGK81yDZDDRwHaIs&pid=Api&P=0&h=180',
      description: 'Bánh 3 tầng sang trọng.',
      price: 1200000
    }
  ];

  ngAfterViewInit() {
    // Tự động scroll mỗi 3s
    this.intervalId = setInterval(() => {
      if (!this.carousel?.nativeElement) return;
      const carousel = this.carousel.nativeElement;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      // Nếu đang gần cuối => quay về đầu
      if (carousel.scrollLeft + 320 >= maxScrollLeft) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
      }
    }, 3000); // 3s
  }

  ngOnDestroy() {
    clearInterval(this.intervalId); // Clear khi component bị huỷ
  }

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
