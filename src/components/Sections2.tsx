import React from 'react';
import { Fuel, Fan, Wrench, Droplets, Cylinder, Star, MapPin, Clock, Phone, Navigation, Share2, Heart, Trophy, Award } from 'lucide-react';

export function Servicios() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto bg-surface" id="servicios">
      <div className="mb-stack-lg text-center md:text-left">
        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Todo en un solo lugar</span>
        <h2 className="font-headline-lg text-on-surface mt-2 text-3xl md:text-5xl">Nuestros <span className="text-primary">Servicios</span></h2>
        <p className="font-body-md text-on-surface-variant mt-4 max-w-2xl">Una estación completa en el cruce estratégico de Ruta 36 y Ruta 5 para que sigas el camino sin preocupaciones.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Combustibles */}
        <div className="group relative overflow-hidden rounded-2xl bg-white border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="h-48 overflow-hidden">
            <img alt="Combustibles" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/ADBb0ujjHhYKZmQqeMkzlN7ayF8JwS_McNIye7S2uqKUj4fZlmqQ3l_trFSD4XM94WraRzOagMxzMQF4xqvT-n1EOvOTNhmTqz3amX2fa_lNwlfg1GRPUvbxP8qzHgh6KzBD-i9JmJiF4Yv13H6F732pjIX4reir_Xll1oL8t9C6Xh7nfhWoHmlggQHIi2CoFAlZpOmoTfLwWBLOhvusrX4cTwVZe57x_iHs727rAcyNx4DRFCwpH3YiwG2lpCHlTb_ncMIHToY3-zpe"/>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-4">
              <Fuel className="w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-on-surface mb-2 text-xl">Líquidos</h3>
            <p className="font-body-sm text-on-surface-variant text-sm mb-4">Nafta súper, Infinia y gasoil. Surtidores modernos con atención personalizada.</p>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">Atención 24hs</span>
          </div>
        </div>
        {/* GNC */}
        <div className="group relative overflow-hidden rounded-2xl bg-white border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="h-48 overflow-hidden text-white"><img alt="GNC Alta Presión" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/ADBb0ugbt0k22eTGLKim7QKeSCfv5tcHCXbDPTL2orSyRtdq-Guz-YDuFTnl8k6xGXOGN8daZeFr7q61Bw5xzh1kJRgtbqEoJOy6L3eP0WhLK9chV6Fu-QSE-ilX2o9qGDZKp87NI75MLBEgSB-Nr0tK3t-Os28KWEKTW4Igd5SD5t-1ga9AnLxl4u13r5iTltnw3OMFiCJfH80KRP9LnfS077kovXpF8hZuapJ6OB-jS0xkGQHwU9U2VmOCoJP_K11Dwu2gMoKL6io9"/></div>
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Fan className="w-6 h-6" />
            </div>
            <h3 className="font-headline-md text-on-surface mb-2 text-xl">Alta Presión</h3>
            <p className="font-body-sm text-on-surface-variant text-sm mb-4">Gas natural comprimido con equipos de alta tecnología para menor tiempo de espera.</p>
            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full uppercase tracking-wider">Rápida Carga</span>
          </div>
        </div>
        {/* Boxes & Lubricantes */}
        <div className="col-span-1 md:col-span-2 bg-surface-container-low rounded-2xl p-0 border border-outline-variant/20 flex flex-col md:flex-row items-stretch overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="w-full md:w-1/3 h-56 md:h-auto overflow-hidden">
            <img alt="YPF Lubricants" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida/ADBb0uiUmyyhG8y0rTmcgKs-6YncqtdqpwN1gaK62j9pV470rWh8sDXzUUvap5IrKTk2-79aZ_o19H6zWYzMlj7inQCN1PeW_sHDVtecPW-t0leXeRzMHbOdu9vLP4Sz9zW6qktHVDhM0cjS3L3-9OjSqnvNNA8jIOIsZJSyoYLR_SvwVHFwL3nDVZVYZfW6cKetwKn5W7_fQlyDk2QyMLWgdgSkwcbJulOwDaiMPlPq5gSEgUHaVPs64yBlb9ZOOF0f6X2U0mJAl0vz"/>
          </div>
          <div className="p-8 flex flex-col md:flex-row items-center justify-between flex-grow gap-6">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Wrench className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-headline-md text-on-surface text-2xl">Boxes &amp; Lubricación</h3>
                <p className="font-body-md text-on-surface-variant max-w-md">Servicio especializado con productos oficiales YPF para el máximo cuidado de tu motor.</p>
              </div>
            </div>
            <button className="px-8 py-4 bg-primary text-on-primary font-bold rounded-xl hover:bg-primary-container transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98] w-full md:w-auto">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Infinia() {
  return (
    <section className="py-section-gap bg-slate-900 text-white overflow-hidden relative" id="infinia">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/30"></div>
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Tecnología en cada gota</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">Productos <span className="text-primary">Infinia</span></h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              La línea premium de YPF con tecnología TurboClean®. Cuidá tu motor y maximizá el rendimiento desde la primera carga.
            </p>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-3">
                  <Droplets className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Infinia (Nafta)</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> 97 octanos de potencia</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> TurboClean® activa</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Limpieza de inyectores</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Reduce emisiones</li>
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center gap-4 mb-3">
                  <Cylinder className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Infinia Diesel</h3>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Mayor número de cetano</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Arranque en frío optimizado</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Protección anticorrosión</li>
                  <li className="flex items-center gap-2"><span className="text-primary">✓</span> Mayor vida útil motor</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary/20 rounded-full blur-[100px] absolute inset-0"></div>
            <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-white/10 shadow-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              <img alt="Infinia Tech" className="w-full rounded-2xl opacity-80 group-hover:scale-105 transition-transform duration-[2s]" src="https://lh3.googleusercontent.com/aida/ADBb0uiUmyyhG8y0rTmcgKs-6YncqtdqpwN1gaK62j9pV470rWh8sDXzUUvap5IrKTk2-79aZ_o19H6zWYzMlj7inQCN1PeW_sHDVtecPW-t0leXeRzMHbOdu9vLP4Sz9zW6qktHVDhM0cjS3L3-9OjSqnvNNA8jIOIsZJSyoYLR_SvwVHFwL3nDVZVYZfW6cKetwKn5W7_fQlyDk2QyMLWgdgSkwcbJulOwDaiMPlPq5gSEgUHaVPs64yBlb9ZOOF0f6X2U0mJAl0vz"/>
              <div className="absolute bottom-12 left-12 right-12 bg-primary/90 backdrop-blur-md p-6 rounded-2xl text-center">
                <div className="text-2xl font-black text-white mb-1">Rendí más</div>
                <p className="text-white/80 text-sm">Los aditivos activos trabajan desde la primera carga para que ahorres en mantenimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Resenas() {
  return (
    <section className="py-section-gap px-gutter bg-slate-50" id="resenas">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <div className="w-full md:w-1/3 bg-white p-8 rounded-3xl shadow-lg text-center border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="text-7xl font-black text-slate-900 mb-2">4.8</div>
            <div className="flex justify-center gap-1 text-amber-400 mb-2">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">En Google Maps</div>
          </div>
          <div className="flex-grow text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Lo que dicen <span className="text-primary">nuestros clientes</span></h2>
            <p className="text-slate-500 max-w-2xl">La excelencia en el servicio es nuestra prioridad. Conocé la experiencia de quienes nos eligen todos los días.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
            <span className="absolute top-6 right-8 text-primary/10 text-6xl font-serif">"</span>
            <div className="flex gap-1 text-amber-400 mb-4">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-slate-600 mb-8 italic">"Siempre paro acá cuando viajo por la ruta. El personal es muy atento y el café de la tienda está muy bueno. La carga de GNC es rápida y sin esperas."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">MG</div>
              <div>
                <div className="font-bold text-slate-900">Martín G.</div>
                <div className="text-xs text-slate-400">Hace 2 semanas</div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative">
            <span className="absolute top-6 right-8 text-primary/10 text-6xl font-serif">"</span>
            <div className="flex gap-1 text-amber-400 mb-4">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <p className="text-slate-600 mb-8 italic">"Excelente atención. Los surtidores siempre funcionando y el lugar muy limpio. La mejor estación del sur de Córdoba."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">LC</div>
              <div>
                <div className="font-bold text-slate-900">Laura C.</div>
                <div className="text-xs text-slate-400">Hace 1 mes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto" id="location">
      <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 flex flex-col lg:flex-row shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4">Visitanos</span>
          <h2 className="font-headline-lg text-on-surface mb-8 text-4xl">Ubicación Estratégica</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Dirección</h4>
                <p className="text-slate-500 leading-relaxed">Cruce Ruta Nacional N°36 y Ruta Provincial N°5<br/>Berrotarán, Córdoba, Argentina</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Horario de Atención</h4>
                <p className="text-slate-500 leading-relaxed">Abierto 24 horas<br/>Todos los días del año</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Contacto Directo</h4>
                <a className="text-primary font-bold hover:underline transition-all" href="tel:+5493584207432">+54 9 358 420-7432</a>
              </div>
            </div>
          </div>
          <a className="mt-12 bg-primary hover:bg-primary-container text-on-primary font-bold py-5 px-10 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 w-fit shadow-lg shadow-primary/20 hover:-translate-y-0.5 hover:shadow-xl active:scale-[0.98]" href="https://maps.app.goo.gl/4hA2HUcG4DnaSo1e6" target="_blank" rel="noreferrer">
            <Navigation className="w-5 h-5" />
            Cómo llegar ahora
          </a>
        </div>
        <div className="w-full lg:w-1/2 min-h-[450px] relative">
          <iframe allowFullScreen title="Map Location" className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.3218407627494!2d-64.39679772393015!3d-33.089278373494874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2832878f4a1bd%3A0x6876762cbf037888!2sYPF%20FULL%20SERVICE!5e0!3m2!1ses!2sar!4v1714500000000!5m2!1ses!2sar">
          </iframe>
        </div>
      </div>
    </section>
  );
}

export function Atmosphere() {
  return (
    <section className="py-section-gap">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[600px]">
          <div className="rounded-3xl overflow-hidden relative group w-full lg:w-1/2 h-[350px] lg:h-full">
            <img alt="Atmosphere Sunset" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida/ADBb0uhjnq0Xp7M0p6aiH5VLwkM5mDBUZ_D6cmh76DnRlpIzf217h1OMrK8e1Xn07JGAHwqunbLZHdJB9Bb4GYDCYCJyVXy3DF4OxjCF1iAKdL5pQPJuTyuPaAOMJKBXlpZjv6y0zNJw6Uzf8q8oN2N5NNt39xSsY9YB7Xz7cjnTaYkAZqnAetzj7yRpkjNWFZIbCiBycwJxPjFycUU8TpWdXmQUAJ_wx5uIPp0ajxyVk2LBI3jwzKcBjOEcmUYgiyK4YT0W7yBZSpY"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-bold tracking-widest uppercase text-xs">Atardeceres en el Cruce</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full lg:w-1/2 h-[600px] lg:h-full">
            <div className="rounded-3xl overflow-hidden relative group flex-1">
              <img alt="Atmosphere Services" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida/ADBb0ujjHhYKZmQqeMkzlN7ayF8JwS_McNIye7S2uqKUj4fZlmqQ3l_trFSD4XM94WraRzOagMxzMQF4xqvT-n1EOvOTNhmTqz3amX2fa_lNwlfg1GRPUvbxP8qzHgh6KzBD-i9JmJiF4Yv13H6F732pjIX4reir_Xll1oL8t9C6Xh7nfhWoHmlggQHIi2CoFAlZpOmoTfLwWBLOhvusrX4cTwVZe57x_iHs727rAcyNx4DRFCwpH3YiwG2lpCHlTb_ncMIHToY3-zpe"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <p className="text-white font-bold tracking-widest uppercase text-xs">Atención Personalizada</p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden relative group flex-1 bg-primary flex items-center justify-center p-8 md:p-12 text-center text-white">
              <div className="space-y-4">
                <div className="text-3xl font-black">YPF Soldano</div>
                <p className="text-white/70 text-sm">Mas de que una parada, una experiencia de confianza para tu camino.</p>
                <div className="pt-4 flex justify-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer">
                    <Heart className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reconocimientos() {
  return (
    <section className="py-section-gap px-gutter bg-surface" id="reconocimientos">
      <div className="max-w-container-max mx-auto">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-outline-variant/30 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden border border-outline-variant/20 bg-white relative group aspect-video flex items-center justify-center p-6">
              <img alt="Premios a la Excelencia YPF" className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida/ADBb0ugV9NZO16z2o1NTMk-F__NpWHLI2wEagkY5O1N_1sN7j4EDUZGzStMypMGsWXXoYcidD905uXTjBSd2Nt8Gt0AclgF7NwglJQbPII8qxhlduVbq2TNqzj7xHKr381C_ReZXecaS1hQ2_Z7c-czzNhVES7sN045rmsgG8G3vgldHZxqOxV6qsX4gJGccYGYs8kdRrj-K75XNcgXb5Ahn2cEIhkpEXQyS0E0MI6RRJ9wwROcvRP2R6HH3wJMcjBguZBjszU2jlM4B"/>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-6 h-6 text-amber-500" />
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Nuestra Trayectoria</span>
              </div>
              <h2 className="font-headline-lg text-on-surface mb-6 text-3xl md:text-4xl leading-tight">Excelencia <span className="text-primary">Premiada</span></h2>
              <p className="text-on-surface-variant font-body-lg mb-8 leading-relaxed">
                Año tras año, renovamos nuestro compromiso con la calidad y el servicio. Estos premios otorgados por YPF reflejan el esfuerzo constante de todo nuestro equipo por brindar una gestión de excelencia en Berrotarán, garantizando la mejor experiencia en cada parada.
              </p>
              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-primary text-center sm:text-left">
                  <Award className="w-10 h-10 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg leading-tight">Estación de Servicio Autorizada</h4>
                    <p className="text-sm text-primary/80 mt-1">Galardonados por YPF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
