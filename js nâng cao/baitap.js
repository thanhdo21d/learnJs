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