import React, { useState } from 'react';
import { Menu, Globe, MessageCircle, MapPin, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Infinia', href: '#infinia' },
    { name: 'Promos', href: '#promociones' },
    { name: 'Reseñas', href: '#resenas' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl fixed top-0 w-full z-50 border-b border-slate-200/60 shadow-sm font-manrope antialiased transition-all">
      <div className="max-w-container-max mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.02]" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img alt="YPF Soldano Logo" className="h-10 w-auto rounded-full ring-2 ring-primary/10 p-0.5" src="https://lh3.googleusercontent.com/aida/ADBb0uij41I3f9SOes8z9K71fwKVA4CpvcU2nrW8EJdQ82OVIeta8hpeFPrxK0cpQDjtRJYuCkDYDxYYIfq5Grqbkv-1GHAgwrPn9LamQpxWL6mRh2L0nM8NhEgWhRK8ziea3S27aQs8mupOI2PEL8CTRcTzk2uZm4eglKslU2cf4861uYbjIhKV2VROlg-LGZjm-9z_X76t6It44_eMzMrvdL2xTTrCqeKCRMc9HXQvsBDJvD-EfnZYeEtwgVtXSAIB3Gs9DsOTz7-H" />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-primary tracking-tight text-lg leading-none">YPF SOLDANO</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mt-0.5">Berrotarán</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors rounded-full hover:bg-primary/5"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-6 bg-slate-200 mx-2"></div>
          <a className="bg-primary text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-primary-container transition-all duration-300 shadow-md shadow-primary/20 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] flex items-center gap-2 group" href="#location">
            <MapPin className="w-4 h-4 group-hover:animate-bounce" /> Ubicación
          </a>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden p-2 text-primary hover:bg-primary/10 rounded-full transition-all active:scale-95" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="px-4 py-3 text-lg font-bold text-slate-600 hover:text-primary hover:bg-primary/5 rounded-2xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            className="bg-primary text-white mt-4 px-5 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-md shadow-primary/20 hover:shadow-lg active:scale-[0.98]" 
            href="#location" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MapPin className="w-5 h-5" /> Cómo llegar
          </a>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white w-full py-20 border-t border-white/5 font-manrope">
      <div className="max-w-container-max mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img alt="YPF Soldano Logo" className="h-12 w-auto rounded-full" src="https://lh3.googleusercontent.com/aida/ADBb0uij41I3f9SOes8z9K71fwKVA4CpvcU2nrW8EJdQ82OVIeta8hpeFPrxK0cpQDjtRJYuCkDYDxYYIfq5Grqbkv-1GHAgwrPn9LamQpxWL6mRh2L0nM8NhEgWhRK8ziea3S27aQs8mupOI2PEL8CTRcTzk2uZm4eglKslU2cf4861uYbjIhKV2VROlg-LGZjm-9z_X76t6It44_eMzMrvdL2xTTrCqeKCRMc9HXQvsBDJvD-EfnZYeEtwgVtXSAIB3Gs9DsOTz7-H"/>
              <span className="font-black text-xl tracking-tight">SOLDANO</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Servicio premium para el viajero moderno. En el corazón del sur cordobés, cuidando tu motor y tu descanso.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">Navegación</h5>
            <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#servicios">Servicios</a>
            <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#infinia">Infinia</a>
            <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#promociones">Promociones</a>
            <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#resenas">Reseñas</a>
            <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#reconocimientos">Premios</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">Contacto</h5>
            <div className="text-slate-400 text-sm leading-6">
              Cruce Ruta 36 &amp; Ruta 5<br/>
              Berrotarán, Córdoba<br/>
              <a className="hover:text-white transition-colors" href="tel:+5493584207432">+54 9 358 420-7432</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-2">Redes</h5>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-0.5 active:scale-95" href="#">
                <Globe className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 transition-all duration-300 hover:-translate-y-0.5 active:scale-95" href="https://wa.me/5493584207432" target="_blank" rel="noreferrer">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
