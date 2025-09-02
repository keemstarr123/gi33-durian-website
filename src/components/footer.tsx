const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>&copy; {currentYear} GI33 Durian. All Rights Reserved.</p>
          <p className="text-sm text-gray-400 mt-2">
            Kepong, Kuala Lumpur | Email: dsaluggage@gmail.com | Phone: 010-945 0225
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;