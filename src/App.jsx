import React from 'react';
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';

function App() {
  const contactLinks = [
    {
      name: 'Call Us',
      href: 'tel:+1234567890',
      icon: <FaPhone className="w-6 h-6" />,
      color: 'from-emerald-500 to-teal-500',
      hoverColor: 'hover:shadow-teal-500/30 hover:border-teal-200',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/1234567890',
      icon: <FaWhatsapp className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:shadow-green-500/30 hover:border-green-200',
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: <FaFacebook className="w-6 h-6" />,
      color: 'from-blue-600 to-indigo-600',
      hoverColor: 'hover:shadow-blue-500/30 hover:border-blue-200',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: <FaInstagram className="w-6 h-6" />,
      color: 'from-pink-500 via-red-500 to-yellow-500',
      hoverColor: 'hover:shadow-pink-500/30 hover:border-pink-200',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: <FaYoutube className="w-6 h-6" />,
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:shadow-red-500/30 hover:border-red-200',
    },
    {
      name: 'Visit Us',
      href: '#',
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      color: 'from-orange-500 to-amber-600',
      hoverColor: 'hover:shadow-orange-500/30 hover:border-orange-200',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800 selection:bg-emerald-500/20 font-sans scroll-smooth">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img src="/Logo.png" alt="KP Farm Logo" className="h-12 w-auto drop-shadow-sm" />
          </a>
          <div className="hidden sm:flex space-x-6 text-sm font-medium text-neutral-600">
            <a href="#home" className="hover:text-emerald-600 transition">Home</a>
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#contact" className="hover:text-emerald-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/hero-farm.png" 
            alt="Beautiful Farm Landscape" 
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-xl">
            Cultivating <span className="text-emerald-400">Nature's Best</span>
          </h1>
          <p className="text-lg md:text-2xl text-neutral-100 max-w-2xl mx-auto font-medium mb-10 drop-shadow-md">
            Experience the harmony of sustainable farming and fresh, organic produce straight from our fields to your family.
          </p>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-full transition-all duration-300 shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/40 hover:-translate-y-1"
          >
            Discover Our Story
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-sm font-bold tracking-wide border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                ABOUT OUR FARM
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-tight">
                Rooted in Tradition, Growing for the Future.
              </h2>
              <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
                <p>
                  Welcome to KP Condect Farm, where passion meets the soil. For generations, our family has been dedicated to cultivating the finest organic produce using sustainable, eco-friendly farming practices.
                </p>
                <p>
                  We believe that the best food comes from a healthy earth. That's why we prioritize soil health, water conservation, and biodiversity. From our lush green pastures to our thriving crop fields, every acre is nurtured with care.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-sm font-medium text-neutral-500">Organic Certified</div>
                </div>
                <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm">
                  <div className="text-3xl font-bold text-teal-600 mb-1">50+</div>
                  <div className="text-sm font-medium text-neutral-500">Acres of Farmland</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-3xl blur-2xl"></div>
              <img 
                src="/hero-farm.png" 
                alt="Farm Life" 
                className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl ring-1 ring-neutral-200 hover:scale-[1.02] transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-neutral-50 border-t border-neutral-200 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-neutral-600 mb-12 max-w-2xl mx-auto">
            Have questions about our produce or want to schedule a visit? Reach out to us through any of our channels below. We'd love to hear from you!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {contactLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white border border-neutral-100 shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${link.hoverColor}`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${link.color} shadow-md group-hover:scale-110 transition-transform duration-500 text-white mb-4 relative z-10`}>
                  {link.icon}
                </div>
                <span className="text-lg font-bold text-neutral-800 transition-colors relative z-10">
                  {link.name}
                </span>
                <span className="text-sm font-medium text-neutral-500 mt-2 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Click to connect
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-neutral-200 text-center text-neutral-500 text-sm bg-white">
        <p>&copy; {new Date().getFullYear()} KP Condect Farm. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
