import React from 'react';
import { Coffee, ArrowRight, Zap, Users, Wifi, CircleParking } from 'lucide-react';
import heroImg from '../assets/hero.jpeg';

export function Hero() {
  return (
    <section className="relative w-full min-h-[85svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="YPF Soldano Station Night" className="w-full h-full object-cover object-[center_45%]" src={heroImg}/>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-gutter py-20 flex flex-col items-start justify-end min-h-[85svh]">
        <div className="max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-2xl">
          <div className="flex items-center gap-2 bg-secondary-container/30 border border-secondary-container/50 text-secondary-fixed text-[10px] font-bold px-3 py-1 rounded-full mb-6 uppercase tracking-[0.2em] w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Cruce Ruta 36 &amp; Ruta 5 · Berrotarán
          </div>
          <h1 className="font-headline-xl text-on-primary mb-4 text-4xl md:text-6xl leading-[1.1]">
            YPF Soldano<br/><span className="text-secondary-fixed">Full Service</span>
          </h1>
          <p className="font-body-lg text-primary-fixed-dim mb-8 max-w-md">
            Combustibles premium, GNC y tienda Full en el cruce más importante del sur cordobés. Abierto las 24 horas, los 365 días del año.
          </p>
          <div className="flex flex-wrap gap-4">
            <a className="bg-white/10 backdrop-blur-md text-white border border-white/20 inline-flex items-center justify-center font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] hover:bg-white/20" href="#servicios">
              ⛽ Ver servicios
            </a>
            <a className="bg-primary text-white inline-flex items-center justify-center font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] hover:bg-primary-container" href="https://maps.app.goo.gl/4hA2HUcG4DnaSo1e6" target="_blank" rel="noreferrer">
              📍 Cómo llegar
            </a>
          </div>
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap gap-8">
            <div>
              <div className="text-2xl font-black text-secondary-fixed">24hs</div>
              <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Siempre abiertos</div>
            </div>
            <div>
              <div className="text-2xl font-black text-secondary-fixed">4.8★</div>
              <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Google Maps</div>
            </div>
            <div>
              <div className="text-2xl font-black text-secondary-fixed">FULL</div>
              <div className="text-[10px] uppercase font-bold text-white/50 tracking-widest">Tienda &amp; Café</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TiendaFull() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto bg-surface" id="tienda-full">
      <div className="relative rounded-[2rem] overflow-hidden group min-h-[400px] flex shadow-lg border border-outline-variant/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="absolute inset-0">
          <img alt="Tienda Full" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uh3ZWYyGlZ6jPpVmEASleTCj-gPcXgAtGXG_5TzwKqxzNpsrLQwhSMUTQDfLqvej0ySqHg_rap2BNnRdjzYzzuAGw3KhboZKfFJjinXIJKp4KDnIXo1WYXSUKhTBHqJRx6wNapn_z0g8tkKpcG2MGZhVZdX5MABvEKqfyFncTdxklL6lbCv3peGQuroRVVJw0XR9FtdGd_P100ycgI96_KIXpzEd22ii79GULiTmqGteK65ZWWP-FtOS6d_hyWhOFGzuJpjfNo"/>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
        </div>
        <div className="relative z-10 p-10 md:p-16 flex flex-col justify-center max-w-2xl text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-amber-500 text-white rounded-xl flex items-center justify-center">
              <Coffee className="w-6 h-6" />
            </div>
            <span className="font-bold uppercase tracking-[0.2em] text-amber-400 text-xs">Tienda Full</span>
          </div>
          <h3 className="font-headline-xl text-white mb-4 text-4xl md:text-5xl leading-tight">El mejor café <br/><span className="text-amber-400">de la ruta</span></h3>
          <p className="font-body-lg text-white/80 mb-8 max-w-md">Listo en minutos. Disfrutá de un momento de pausa con el mejor aroma y sabor, para que sigas tu viaje con la mejor energía.</p>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl mb-8 w-fit">
            <div className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-1">Promo Exclusiva</div>
            <div className="text-xl font-bold text-white">Café + 2 medialunas <span className="bg-amber-500 text-slate-900 px-2 py-0.5 rounded text-sm ml-2 align-middle">a precio especial</span></div>
          </div>
          <a className="inline-flex items-center justify-center font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98] group bg-white/10 border border-white/20 backdrop-blur hover:bg-white/20" href="#">
            Entrá y pedilo <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function ParadaInteligente() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto bg-surface" id="parada-inteligente">
      <div className="bg-slate-900 rounded-[2rem] p-0 border border-slate-800 flex flex-col md:flex-row items-stretch overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div className="p-8 md:p-12 flex flex-col justify-center flex-grow md:w-1/2 text-white">
          <span className="text-secondary-fixed font-bold uppercase tracking-[0.2em] text-xs mb-3">Todo lo que necesitás en una parada</span>
          <h3 className="font-headline-xl text-white mb-8 text-3xl md:text-4xl">Parada <span className="text-secondary-fixed">Inteligente</span></h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary-fixed border border-white/5 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm md:text-base">Carga rápida</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary-fixed border border-white/5 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm md:text-base">Baños limpios</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary-fixed border border-white/5 shrink-0">
                <Wifi className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm md:text-base">WiFi</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-secondary-fixed border border-white/5 shrink-0">
                <CircleParking className="w-6 h-6" />
              </div>
              <span className="font-bold text-sm md:text-base">Espacio amplio</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 min-h-[300px] overflow-hidden relative">
          <img alt="Parada Inteligente" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uiSpW9Vb1aWz5fJsVgiJylEypRe8-DCT4qHVbwQC2mAxDKipZLwk3ah1knfuEOzC_RVYYIYU84mdv7ck0NVd8QqZt2sjEbY1TcNz5_K6tOen5mwXs--VPAWLnGF_6FG5IyRPbM7-ePHLCTC7ivf4WQ4tko5IuLsdBwfYpWMeR3MbsQS-RSM2mc9MFoYbad9jcrzGTyGEWPTq5lX_unRjPlivRr8eXLNlLvpAWmHO7vCsXwy1zbYARUrspWXaRyH4tgaDsxQ0Rbf"/>
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent via-transparent to-slate-900"></div>
        </div>
      </div>
    </section>
  );
}

const promocionesData = [
  {
    headerBg: "bg-primary text-white",
    headerTagColor: "text-white/70",
    headerTag: "Descuento\nCombustibles",
    headerValue: "30%",
    titleColor: "text-primary",
    title: "MODO + BNA",
    description: "Pagá con MODO vinculando tu cuenta del Banco Nación y obtené reintegro inmediato en tus cargas.",
    legal: "* Tope de reintegro: $15.000. Consultar vigencia en caja."
  },
  {
    headerBg: "bg-slate-900 text-white",
    headerTagColor: "text-white/70",
    headerTag: "Café\nTienda Full",
    headerValue: "2x1",
    titleColor: "text-slate-900",
    title: "Café de Especialidad",
    description: "Cargá combustible y llevate dos cafés al precio de uno para seguir tu viaje bien despierto.",
    legal: "* Disponible de lunes a viernes. Sujeto a stock."
  },
  {
    headerBg: "bg-primary/10 text-primary",
    headerTagColor: "text-primary/70",
    headerTag: "ServiClub\nYPF",
    headerValue: "APP",
    titleColor: "text-primary",
    title: "Acumulá & Canjeá",
    description: "Sumá puntos en cada consumo y canjealos por descuentos directos en combustibles y productos Full.",
    legal: "* Descargá la app y registrate gratis ahora."
  },
  {
    headerBg: "bg-blue-600 text-white",
    headerTagColor: "text-white/70",
    headerTag: "Alta\nPresión",
    headerValue: "GNC",
    titleColor: "text-blue-600",
    title: "Carga Rápida",
    description: "Gas natural comprimido con equipos de alta tecnología para menor tiempo de espera en tu carga.",
    legal: "* Servicio disponible las 24hs."
  }
];

export function Promociones() {
  return (
    <section className="py-section-gap px-gutter bg-surface-container-lowest overflow-x-hidden" id="promociones">
      <div className="max-w-container-max mx-auto">
        <div className="mb-stack-lg text-center md:text-left">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Beneficios exclusivos</span>
          <h2 className="font-headline-lg text-on-surface mt-2 text-3xl md:text-5xl">Promociones <span className="text-primary">Vigentes</span></h2>
        </div>
        
        <div className="relative flex overflow-hidden group mask-horizontal pb-8">
          <div className="flex gap-6 pr-6 animate-marquee flex-nowrap w-max min-w-max group-hover:[animation-play-state:paused]">
            {promocionesData.map((promo, idx) => (
              <div key={`origin-${idx}`} className="w-[280px] flex-none bg-white rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[380px]">
                <div className={`${promo.headerBg} p-6 flex flex-col h-32 justify-center relative`}>
                  <div className={`absolute right-4 top-4 text-right font-bold text-[10px] ${promo.headerTagColor} uppercase whitespace-pre-line`}>{promo.headerTag}</div>
                  <div className="text-5xl font-black mt-2">{promo.headerValue}</div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between whitespace-normal">
                  <div>
                    <h3 className={`text-lg font-bold mb-2 uppercase tracking-tight ${promo.titleColor}`}>{promo.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {promo.description}
                    </p>
                  </div>
                  <div className="text-[10px] text-slate-400 italic mt-4">
                    {promo.legal}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-6 pr-6 animate-marquee flex-nowrap w-max min-w-max group-hover:[animation-play-state:paused]" aria-hidden="true">
            {promocionesData.map((promo, idx) => (
              <div key={`dup-${idx}`} className="w-[280px] flex-none bg-white rounded-3xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-[380px]">
                <div className={`${promo.headerBg} p-6 flex flex-col h-32 justify-center relative`}>
                  <div className={`absolute right-4 top-4 text-right font-bold text-[10px] ${promo.headerTagColor} uppercase whitespace-pre-line`}>{promo.headerTag}</div>
                  <div className="text-5xl font-black mt-2">{promo.headerValue}</div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between whitespace-normal">
                  <div>
                    <h3 className={`text-lg font-bold mb-2 uppercase tracking-tight ${promo.titleColor}`}>{promo.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed">
                      {promo.description}
                    </p>
                  </div>
                  <div className="text-[10px] text-slate-400 italic mt-4">
                    {promo.legal}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
