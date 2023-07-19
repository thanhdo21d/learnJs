  // Lấy danh sách nút "Mua"
        const buyButtons = Array.from(document.querySelectorAll('.buy-btn'));

        // Lấy giỏ hàng và tổng tiền
        const cartItems = document.getElementById('cart-items');
        const total = document.getElementById('total');

        // Tạo biến để lưu trữ tổng tiền
        let totalPrice = 0;

        // Lấy giỏ hàng từ localStorage nếu có
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cartItems.innerHTML = savedCart;
        }

        // Cập nhật tổng tiền từ các sản phẩm đã lưu
        const savedTotal = localStorage.getItem('total');
        if (savedTotal) {
            totalPrice = parseInt(savedTotal);
            total.innerHTML = `Tổng tiền: $${totalPrice}`;
        }

        // Xử lý sự kiện click nút "Mua"
        buyButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.getAttribute('data-product');
                const productPrice = parseInt(button.parentNode.innerHTML.split(' - $')[1]);

                // Tạo phần tử mới cho sản phẩm trong giỏ hàng
                const cartItem = document.createElement('li');
                cartItem.innerHTML = `
                    <span>${productName}</span>
                    <button class="quantity-btn" data-product="${productName}" data-price="${productPrice}" data-action="decrease">-</button>
                    <span class="quantity">1</span>
                    <button class="quantity-btn" data-product="${productName}" data-price="${productPrice}" data-action="increase">+</button>
                `;

                // Thêm sản phẩm vào giỏ hàng
                cartItems.appendChild(cartItem);

                // Cập nhật tổng tiền
                totalPrice += productPrice;
                total.innerHTML = `Tổng tiền: $${totalPrice}`;

                // Lưu giỏ hàng và tổng tiền vào localStorage
                localStorage.setItem('cart', cartItems.innerHTML);
                localStorage.setItem('total', totalPrice.toString());

                // Xử lý sự kiện click nút "+" và "-"
                const quantityBtns = Array.from(cartItem.querySelectorAll('.quantity-btn'));
                quantityBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const action = btn.getAttribute('data-action');
                        const quantityElement = cartItem.querySelector('.quantity');
                        let quantity = parseInt(quantityElement.innerHTML);

                        if (action === 'increase') {
                            quantity += 1;
                            totalPrice += productPrice;
                        } else if (action === 'decrease' && quantity > 1) {
                            quantity -= 1;
                            totalPrice -= productPrice;
                        }

                        quantityElement.innerHTML = quantity;
                        total.innerHTML = `Tổng tiền: $${totalPrice}`;

                        // Lưu giỏ hàng và tổng tiền vào localStorage
                        localStorage.setItem('cart', cartItems.innerHTML);
                        localStorage.setItem('total', totalPrice.toString());
                    });
                });
            });
        });

        // Xử lý sự kiện click nút "Thanh toán"
        const checkoutBtn = document.getElementById('checkout');
        checkoutBtn.addEventListener('click', () => {
            // Xóa dữ liệu giỏ hàng và tổng tiền
            cartItems.innerHTML = '';
            totalPrice = 0;
            total.innerHTML = `Tổng tiền: $${totalPrice}`;

            // Xóa dữ liệu trong localStorage
            localStorage.removeItem('cart');
            localStorage.removeItem('total');
        });




        const products = [
  {
    image:
      "https://product.hstatic.net/1000003969/product/xanh-mint_txn711_1_20230619085317_ac421a9de58541a5a7e57b2ff299f2ce_grande.jpeg",
    name: "Túi Xách Nhỏ Nắp Gập Eastern Royal",
    price: "784000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/nau_txn712_21_20230619090755_effb5cd7479a4a85956c635a6336568b_grande.jpeg",
    name: "Túi Xách Nhỏ Đeo Chéo Trang Trí Khóa",
    price: "684000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/hong_txn708_11_20230612091859_50953998a7064819b86359bc47ea547a_grande.jpeg",
    name: "Túi Xách Lớn Satchel Trang Trí Khóa",
    price: "484000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/trang-kem_txn713_1_20230619184924_be1472d8c66c4fb7b42449ca0e295128_grande.jpeg",
    name: "Túi Xách Nhỏ Dập Nổi Phối Khoá Bấm Jn",
    price: "584000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/hong_txn714_1_20230710085756_637c68aabe2e4856ac6df37e213f5b88_grande.jpeg",
    name: "Túi Xách Nhỏ Phối Khoá Tối Giản",
    price: "384000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/trang-xa-cu_txn709_1_20230614094503_4aef71e793224da3b4d40b55af31b976_grande.jpeg",
    name: "Túi Xách Nhỏ Đeo Vai Trang Trí Khóa",
    price: "184000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/nau_txl086_17_20230523122329_3e931f3a49bd48b7a0091b867add6c88_grande.jpeg",
    name: "Túi Xách Nhỏ Đeo Chéo Enthusiast",
    price: "784000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/kem_bl157_1_20230516115947_13af22d76de14c75ae0161439042beca_grande.jpeg",
    name: "Ví Nắp Gập Phối Khoá Jn",
    price: "984000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/hong_bl156_1_20230516114833_a795f75b1aa74c309160f96d54a78155_grande.jpeg",
    name: "Túi Xách Nhỏ Top Handle Phối Khoá Trang Trí",
    price: "7800",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/kem_txl085_1_20230607090329_b16cee6e790a49e6bd0666ff4dc697d7_grande.jpeg",
    name: "Túi Xách Nhỏ Top Handle Phối Khoá",
    price: "79000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/xanh-la_txn696_1_20230529184051_667398544dbb40ca9a042eb8baf52c80_grande.jpeg",
    name: "Túi Xách Nhỏ Đeo Vai",
    price: "70000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/xanh-la_txn696_1_20230529184051_667398544dbb40ca9a042eb8baf52c80_grande.jpeg",
    name: "Túi Xách Nhỏ Top Handle Phối Khoá Bấm Jn",
    price: "354000",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/vang_txn705_1_20230516110928_6bbbd2903d714a1ba00d72ac12c48fc3_grande.jpeg",
    name: "Túi Xách Nhỏ Hobo Enthusiast",
    price: "384000",
  },
  {
    image:"https://product.hstatic.net/1000003969/product/nau_txn704_21_20230516105049_4730b3e6e1074bea8c03062d3aef0077_grande.jpeg",
    name: "Túi Xách Lớn Tote Trang Trí Khóa Luxe",
    price: "668465",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/vang_txl087_1_20230605154248_79a88ff261c246b0831705724c0bcd87_grande.jpeg",
    name: "Túi Xách Nhỏ Trang Trí Khóa Kim Loại",
    price: "51133",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/xanh-reu_txn703_1_20230516094644_ebbe48eb626b43c3873884cd8c339531_grande.jpeg",
    name: "Túi Xách Trung Hobo Trang Trí Khóa Luxe",
    price: "213125",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/kem_txn697_17_20230523100914_f484a8e9a22c4223b380ed196668e3d6_grande.jpeg",
    name: "Túi Xách Trung Hobo Trang Trí Khóa LuxeTúi Xách Nhỏ Top Handle Phối Khoá Bấm Jn",
    price: "543555",
  },
  {
    image:
      "https://product.hstatic.net/1000003969/product/bac_txn701_17_20230523153621_3fa4e588269f48fd9fe8062a53b15ad3_grande.jpeg",
    name: "Túi Xách Trung Hobo Trang Trí Khóa LuxeTúi Xách Nhỏ Top Handle Phối Khoá Bấm JnTúi Xách Nhỏ Phối Khoá Tối Giản",
    price: "125334",
  },
];