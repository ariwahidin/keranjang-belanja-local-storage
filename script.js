$(document).ready(function () {
    // Cek apakah ada data keranjang belanja di localStorage
    var storedCartData = localStorage.getItem('cartData');
    var cartData = storedCartData ? JSON.parse(storedCartData) : [];

    refreshCart();

    // Fungsi untuk menambahkan item ke keranjang
    function addItemToCart(product, price, quantity) {
        var newItem = {
            product: product,
            price: price,
            quantity: quantity
        };
        cartData.push(newItem);
        saveCartData();
        refreshCart();
    }

    // Fungsi untuk menyimpan data keranjang ke localStorage
    function saveCartData() {
        localStorage.setItem('cartData', JSON.stringify(cartData));
    }

    // Fungsi untuk merefresh tampilan keranjang
    function refreshCart() {
        var tableBody = $('#cart tbody');
        tableBody.empty();

        $.each(cartData, function (index, item) {
            var row = '<tr>';
            row += '<td>' + item.product + '</td>';
            row += '<td>' + item.price + '</td>';
            row += '<td>' + item.quantity + '</td>';
            row += '<td><span class="delete-button" data-index="' + index + '">Hapus</span></td>';
            row += '</tr>';
            tableBody.append(row);
        });
    }

    // Tambahkan item awal ke keranjang
    // addItemToCart('Produk A', 100, 2);
    // addItemToCart('Produk B', 150, 1);

    // Event listener untuk tombol tambah item
    $('#btnAdd').click(function () {
        var productName = prompt('Masukkan nama produk:');
        var productPrice = parseFloat(prompt('Masukkan harga produk:'));
        var productQuantity = parseInt(prompt('Masukkan jumlah produk:'));

        addItemToCart(productName, productPrice, productQuantity);
    });

    // Event listener untuk tombol hapus item di setiap baris
    $('#cart').on('click', '.delete-button', function () {
        var index = $(this).data('index');
        cartData.splice(index, 1);
        saveCartData();
        refreshCart();
    });
});
