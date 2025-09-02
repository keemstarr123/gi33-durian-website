import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center bg-yellow-400 p-8 md:p-16 rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4">
          The King of Fruits, Perfected.
        </h1>
        <p className="text-lg md:text-xl text-green-800 max-w-3xl mx-auto mb-8">
          Welcome to GI33 Durian, Kepong&apos;s premier destination for the freshest and most delicious durians. Taste the quality that sets us apart.
        </p>
        <Link href="tel:0109450225" className="bg-green-700 text-white font-bold py-3 px-8 rounded-full hover:bg-green-800 transition-transform transform hover:scale-105 inline-block">
          Call to Order Now
        </Link>
      </section>

      {/* Varieties Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Signature Varieties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2 text-green-800">Musang King (MSW)</h3>
            <p className="text-gray-600">Creamy, bittersweet, and intense. The undisputed king, known for its rich golden flesh and unforgettable aroma.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2 text-green-800">D24 Sultan</h3>
            <p className="text-gray-600">A perfect balance of sweet and bitter notes with a thick, creamy texture. A classic favorite for a reason.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold mb-2 text-green-800">Black Thorn</h3>
            <p className="text-gray-600">Rare and highly sought-after. Features a sweet, custardy flesh with a subtle alcoholic hint for the true connoisseur.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
