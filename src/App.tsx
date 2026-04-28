/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header, Footer } from './components/Layout';
import { Hero, TiendaFull, ParadaInteligente, Promociones } from './components/Sections1';
import { Servicios, Infinia, Resenas, Location, Atmosphere, Reconocimientos } from './components/Sections2';

export default function App() {
  return (
    <div className="font-manrope antialiased overflow-x-hidden pt-20">
      <Header />
      <main>
        <Hero />
        <TiendaFull />
        <ParadaInteligente />
        <Promociones />
        <Servicios />
        <Infinia />
        <Resenas />
        <Location />
        <Atmosphere />
        <Reconocimientos />
      </main>
      <Footer />
    </div>
  );
}
