import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-yellow-300">
          GI33 Durian
        </Link>
        <nav>
          <ul className="flex space-x-4 md:space-x-6">
            <li><Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-300 transition-colors">About Us</Link></li>
            <li><Link href="/policies" className="hover:text-yellow-300 transition-colors">Policies</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;