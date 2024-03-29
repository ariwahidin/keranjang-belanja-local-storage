<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keranjang Belanja</title>
    <style>
        #cart {
            border-collapse: collapse;
            width: 100%;
        }

        #cart th,
        #cart td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        #cart th {
            background-color: #f2f2f2;
        }

        #cart tr:hover {
            background-color: #f5f5f5;
        }

        .delete-button {
            cursor: pointer;
            color: red;
        }
    </style>
</head>

<body>

    <h2>Keranjang Belanja</h2>

    <button id="btnAdd">Tambah Item</button>
    <br>
    <br>
    <table id="cart">
        <thead>
            <tr>
                <th>Produk</th>
                <th>Harga</th>
                <th>Jumlah</th>
                <th>Aksi</th>
            </tr>
        </thead>
        <tbody>
            <!-- Item keranjang akan ditampilkan di sini -->
        </tbody>
    </table>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="script.js"></script>
</body>

</html>