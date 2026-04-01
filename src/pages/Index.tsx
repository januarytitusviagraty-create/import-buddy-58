import { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}
const WHATSAPP_LINK = 'https://chat.whatsapp.com/GE0IPcBRSbQ7EpSePZm3xu';

const handleVipClick = () => {
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
  window.open(WHATSAPP_LINK, '_blank');
};

const Index = () => {
  return (
    <div className="bg-gw-light-bg min-h-screen font-['Roboto',sans-serif]">
      {/* HEADER */}
      <header className="bg-gw-dark text-primary-foreground h-[76px] fixed top-0 w-full z-50 shadow-lg border-b-4 border-gw-green">
        <div className="container mx-auto px-4 h-full flex justify-between items-center max-w-6xl">
          <a href="#" />
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase">
            <a href="#" className="hover:text-gw-green transition">Home</a>
            <a href="#" className="hover:text-gw-green transition">Meus Pedidos</a>
            <a href="#" className="hover:text-gw-green transition">Ajuda</a>
            <button className="bg-gw-green hover:opacity-90 text-primary-foreground font-bold py-2 px-6 rounded transition">
              ENTRAR
            </button>
          </nav>
          <button className="lg:hidden text-2xl">
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </header>

      {/* BANNER */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 80%, hsl(var(--gw-light-bg)) 100%), url('/images/hero-banner-bg.jpg')`,
          height: '550px',
        }}
      >
        <img
          src="/images/banner-overlay.jpg"
          alt="Buteco Tour 2026 - Em até 5x sem juros"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[5] w-[90%] max-w-[900px] h-auto"
        />
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="hsl(0,0%,96%)"
            />
          </svg>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="container mx-auto px-4 -mt-24 relative z-10 max-w-6xl pb-20">
        {/* HEADLINE */}
        <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-8 text-center p-8">
          <div className="inline-block mb-4 bg-gw-danger text-primary-foreground px-4 py-2 rounded-full font-bold text-sm">
            🚨 GARANTA SEU INGRESSO! 🚨
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            BUTECO <span className="text-gw-green">SÃO PAULO</span> 2026
          </h1>
          <p className="text-xl text-muted-foreground mb-2">
            <strong>Gusttavo Lima</strong>
          </p>

          <p className="text-lg text-muted-foreground mb-6">
            Entre para o <strong>Grupo VIP</strong> e tenha acesso antecipado aos ingressos
            <br />
            antes que esgotem de vez!
          </p>

          <button
            onClick={handleVipClick}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gw-green to-[hsl(130,54%,35%)] text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all hover:shadow-lg hover:-translate-y-0.5 mb-4 cursor-pointer"
          >
            <i className="fab fa-whatsapp" />
            ENTRAR NO GRUPO VIP
          </button>
        </div>

        {/* SETORES E ÁREAS */}
        <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-card-foreground mb-6">
            🎶 SETORES E ÁREAS
          </h2>
          <div className="space-y-4">
            {[
              { title: 'PISTA PREMIUM EMBAIXADOR', desc: 'Área em frente ao palco • Visão privilegiada • Acesso à praça de alimentação e banheiros • Bar com venda', tag: 'Não open bar' },
              { title: 'PISTA FICHA LIMPA', desc: 'Praça de alimentação • Setores de banheiros • Bar com venda', tag: 'Não open bar' },
              { title: 'CADEIRA INFERIOR - N1', desc: 'Praça de alimentação • Setores de banheiros • Bar com venda', tag: 'Não open bar' },
              { title: 'CADEIRA SUPERIOR (ARQUIBANCADA) - N2', desc: 'Praça de alimentação • Setores de banheiros • Bar com venda', tag: 'Não open bar' },
            ].map((s) => (
              <div key={s.title} className="bg-card rounded-lg p-5 border-l-4 border-gw-green">
                <h3 className="font-bold text-lg text-card-foreground mb-1">
                  {s.title}
                </h3>
                <span className="text-xs text-gw-danger font-semibold">{s.tag}</span>
                <p className="text-muted-foreground mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 font-semibold">
            O MAPA DO EVENTO PODERÁ SOFRER ALTERAÇÕES SEM AVISO PRÉVIO.
          </p>
        </div>

        {/* INFORMAÇÕES DO EVENTO */}
        <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-card-foreground mb-6">
            📍 INFORMAÇÕES DO EVENTO
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <img
                src="/images/mapa-arena.jpg"
                alt="Mapa do evento Buteco São Paulo 2026"
                className="rounded-lg shadow-md w-full max-w-sm mx-auto"
              />
            </div>
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-gw-green">Buteco São Paulo 2026</h3>
                <div className="space-y-2 text-card-foreground">
                  <p className="flex items-center">
                    <i className="fas fa-calendar text-gw-green mr-3" />
                    <strong>Data:&nbsp;</strong> 12 de Dezembro de 2026
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-clock text-gw-green mr-3" />
                    <strong>Abertura dos portões:&nbsp;</strong> 15h00
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-calendar-day text-gw-green mr-3" />
                    <strong>Dia:&nbsp;</strong> Sábado
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-map-marker-alt text-gw-green mr-3" />
                    <strong>Local:&nbsp;</strong> A definir - São Paulo / SP
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-user-check text-gw-green mr-3" />
                    <strong>Classificação:&nbsp;</strong> +18 anos
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-heart text-gw-green mr-3" />
                    <strong>Meia solidária:&nbsp;</strong> 1 kg de alimento não perecível
                  </p>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-bold mb-2 text-card-foreground">Atração</h3>
                <p className="text-gw-green font-bold text-xl">Gusttavo Lima</p>
              </div>
            </div>
          </div>
        </div>

        {/* IMPORTANTE */}
        <div className="bg-card rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-card-foreground mb-6">
            ⚠️ IMPORTANTE
          </h2>
          <div className="space-y-3 text-muted-foreground text-sm">
            <p>• Ao adquirir o ingresso, o comprador autoriza o uso de sua imagem e o compartilhamento de dados para ações de marketing dos organizadores e patrocinadores.</p>
            <p>• É obrigatória a apresentação do ingresso em forma digital ou impressa, juntamente com o DOCUMENTO OFICIAL COM FOTO para a entrada no evento.</p>
            <p>• Proibida a entrada de menores de 18 anos, mesmo acompanhados dos pais ou responsável legal.</p>
            <p>• Será proibida a entrada de pessoas portando drogas, armas, objetos pontiagudos, vasilhames de vidro, fogos de artifício, inflamáveis, capacetes, alimentos ou bebidas comprados fora do evento.</p>
            <p>• Emergência e paramédicos no local. Expressamente proibido o consumo de bebidas alcoólicas para menores de 18 anos. Se beber, não dirija.</p>
          </div>
          <div className="mt-4 text-center">
            <p className="text-muted-foreground text-sm">
              <strong>Contato da produção:</strong>{' '}
              <a href="https://instagram.com/buteco" className="text-gw-green hover:underline" target="_blank" rel="noopener noreferrer">
                @buteco
              </a>
            </p>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-card rounded-lg shadow-lg p-8 text-center mb-8">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">
            NÃO DEIXE PARA A ÚLTIMA HORA!
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Os ingressos para o <strong className="text-gw-green">BUTECO SÃO PAULO 2026</strong> estão voando.
            <br />
            Entre no <strong>Grupo VIP</strong> e garanta o seu antes que acabe!
          </p>
          <button
            onClick={handleVipClick}
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-gw-green to-[hsl(130,54%,35%)] text-primary-foreground font-bold py-4 px-8 rounded-lg text-lg transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            <i className="fab fa-whatsapp" />
            ENTRAR NO GRUPO VIP AGORA
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            ⏰ Vagas limitadas no grupo - Garanta sua vaga!
          </p>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-gw-dark text-primary-foreground py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <p className="text-muted-foreground">
                Guichê Web Comercialização de Ingressos Ltda
                <br />
                CNPJ: 18.797.249/0001-35
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">LINKS ÚTEIS</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://guicheweb.octadesk.com/kb" className="hover:text-primary-foreground transition">
                    Dúvidas Frequentes
                  </a>
                </li>
                <li>
                  <a href="https://guicheweb.notion.site/Termos-Pol-ticas-b5713f88c432496a8cb3683da9be7dfd" className="hover:text-primary-foreground transition">
                    Termos e Políticas
                  </a>
                </li>
                <li>
                  <a href="https://abrape.com.br/" className="hover:text-primary-foreground transition">
                    ABRAPE
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">REDES SOCIAIS</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/GuicheWeb/" className="text-gray-400 hover:text-primary-foreground transition">
                  <i className="fab fa-facebook-f text-xl" />
                </a>
                <a href="https://instagr.am/guicheweb" className="text-gray-400 hover:text-primary-foreground transition">
                  <i className="fab fa-instagram text-xl" />
                </a>
                <a href="https://www.youtube.com/channel/UC9-7SFPICgrmnZRXhmpFVug" className="text-gray-400 hover:text-primary-foreground transition">
                  <i className="fab fa-youtube text-xl" />
                </a>
                <a href="https://twitter.com/guicheweb" className="text-gray-400 hover:text-primary-foreground transition">
                  <i className="fab fa-twitter text-xl" />
                </a>
                <a href="https://wa.me/5548999511111" className="text-gray-400 hover:text-primary-foreground transition">
                  <i className="fab fa-whatsapp text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Guichê Web. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
