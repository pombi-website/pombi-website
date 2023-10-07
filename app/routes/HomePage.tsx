export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <header className="flex justify-between p-4 bg-gray-100">
        <div className="flex space-x-4">
          <button className="text-gray-600">🔍</button>
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded-md"
          />
        </div>
        <div className="flex space-x-4">
          <button>Akun</button>
          <button>Keranjang</button>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="p-4">
        <div className="bg-gray-200 rounded-md p-8">
          <h1 className="text-2xl font-bold">Selamat datang di Pombi</h1>
          <p>
            Beli baju anak berkualitas. Menyediakan berbagai macam baju anak dan
            hampers bayi.
          </p>
          <img
            src="baby-image-url"
            alt="Baby Image"
            className="mt-4 rounded-md"
          />{" "}
          {/* Replace "baby-image-url" with imported image if needed */}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="p-4">
        <h2 className="text-xl font-bold">Kenapa Memilih Produk Kami</h2>
        <p>
          Dukung keberlangsungan UMKM Indonesia! Dengan setiap pembelian produk
          kami, Anda mendukung pertumbuhan bisnis lokal dan melestarikan
          kekayaan budaya Indonesia.
        </p>
        <div className="flex space-x-4 mt-4">
          <img src="100-percent-indonesia-image-url" alt="100% Indonesia" />
          <img
            src="bangga-buatan-indonesia-image-url"
            alt="Bangga Buatan Indonesia"
          />
        </div>
      </section>

      {/* Products */}
      <section className="p-4">
        <h2 className="text-xl font-bold">Produk Kami</h2>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* Each product */}
          <div className="bg-gray-200 rounded-md p-4">
            <img src="product-image-url" alt="Product" />
            <div className="mt-2">
              <h3>Baju Anak Laki</h3>
              <p>Baju Anak 01</p>
              <p>Rp. 30,000/pcs</p>
            </div>
          </div>
          {/* ... add other products similarly */}
        </div>
        <button className="mt-4 px-4 py-2 bg-gray-200 rounded-md">
          Lihat Produk Lainnya
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 p-4 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3>Tentang Kami</h3>
            <p>Pombi, produsen garmen baju anak...</p>
          </div>
          <div>
            <h3>Layanan</h3>
            <ul>
              <li>Kunjungi Kami</li>
              <li>Grosir</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>© Pombi Kids</p>
        </div>
      </footer>
    </div>
  );
}
