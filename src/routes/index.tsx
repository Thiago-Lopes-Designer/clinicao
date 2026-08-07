import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowRight,
  Bath,
  Bone,
  Building2,
  ChevronRight,
  Clock3,
  Dog,
  HeartPulse,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Stethoscope,
  Syringe,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

const novaNumber = '5594991395960'
const velhaNumber = '5594981633831'
const defaultMessage = 'Olá! Vim pelo site da CliniCão & Gatos e gostaria de informações.'
const whatsappLink = (phone: string, message = defaultMessage) =>
  `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`

const novaWhats = whatsappLink(novaNumber)
const velhaWhats = whatsappLink(velhaNumber)
const novaMap = 'https://www.google.com/maps/place/Clinicão+e+Gatos/@-5.3483497,-49.1109211,20.17z/data=!4m6!3m5!1s0x92c3a165ccd4cbc5:0xfb945c440b20535e!8m2!3d-5.348423!4d-49.1106767!16s%2Fg%2F11wg4y68l0?authuser=0&entry=ttu&g_ep=EgoyMDI1MDExMC4wIKXMDSoASAFQAw%3D%3D'
const velhaMap = 'https://www.google.com/maps/search/?api=1&query=Av.%20Antônio%20Maia%2C%201813%20-%20Velha%20Marabá%2C%20Marabá%20-%20PA%2C%2068598-040'
const novaMapEmbed = 'https://www.google.com/maps?q=Clinic%C3%A3o+e+Gatos+Folha+32+QD+04+Lote+19+Nova+Marab%C3%A1&output=embed'
const velhaMapEmbed = 'https://www.google.com/maps?q=Av.+Ant%C3%B4nio+Maia%2C+1813+Velha+Marab%C3%A1+Marab%C3%A1+PA&output=embed'

const services = [
  { icon: Stethoscope, title: 'Consultas veterinárias', text: 'Avaliação cuidadosa e acompanhamento em todas as fases da vida.' },
  { icon: Syringe, title: 'Vacinação e prevenção', text: 'Proteção preventiva com orientação personalizada para seu pet.' },
  { icon: Microscope, title: 'Exames e ultrassom', text: 'Apoio diagnóstico para decisões mais seguras e precisas.' },
  { icon: HeartPulse, title: 'Cirurgias e internação', text: 'Estrutura e cuidado profissional antes, durante e após o procedimento.' },
  { icon: Bath, title: 'Banho e tosa', text: 'Higiene, beleza e bem-estar com produtos de qualidade.' },
  { icon: ShoppingBag, title: 'Pet shop e hotel', text: 'Produtos, conforto e atenção para a rotina do seu melhor amigo.' },
]

const reviews = [
  ['Bruno Pelosi', 'Sempre levo meu pet pra banho, tosa, hotel e consultas.'],
  ['Damaris Costa', 'Atendimento muito bom e no banho são usados ótimos produtos.'],
  ['Paulo Roberto', 'Minha primeira vez na clínica. Fui muito bem atendido.'],
]

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [whatsOpen, setWhatsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const nav = ['servicos', 'sobre', 'unidades', 'avaliacoes', 'galeria']

  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="CliniCão & Gatos - Início">
          <img src="/images/logo.jpg" alt="Logo CliniCão & Gatos" />
          <div><strong>CliniCão & Gatos</strong><span>Clínica Veterinária & Pet Shop</span></div>
        </a>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <button onClick={() => scroll('inicio')}>Início</button>
          {nav.map((item) => <button key={item} onClick={() => scroll(item)}>{item[0].toUpperCase() + item.slice(1)}</button>)}
          <button className="nav-cta" onClick={() => scroll('unidades')}>Falar no WhatsApp</button>
        </nav>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><HeartPulse size={16} /> Amor, cuidado e saúde para seu pet</div>
            <h1>Cuidado completo para quem faz parte da sua <em>família.</em></h1>
            <p>Clínica veterinária, exames, prevenção, banho, tosa e tudo o que seu pet precisa em um só lugar — com duas unidades em Marabá.</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => scroll('unidades')}>Agendar atendimento <ArrowRight size={18} /></button>
              <button className="btn secondary" onClick={() => scroll('servicos')}>Conhecer serviços</button>
            </div>
            <div className="trust-row"><div className="stars">★★★★★</div><div><strong>Mais de 4 mil avaliações</strong><span>de clientes no Google</span></div></div>
          </div>
          <div className="hero-visual">
            <div className="hero-blob" />
            <img src="/images/gallery4.jpg" alt="Cuidado veterinário com um cão" />
            <div className="floating-card fc-one"><ShieldCheck /><div><strong>Atendimento completo</strong><span>Para cães e gatos</span></div></div>
            <div className="floating-card fc-two"><MapPin /><div><strong>2 unidades</strong><span>em Marabá</span></div></div>
          </div>
        </section>

        <section className="quick-benefits">
          <div><Stethoscope /><span><strong>Atendimento veterinário</strong>Cuidado especializado</span></div>
          <div><MapPin /><span><strong>Duas unidades</strong>Nova e Velha Marabá</span></div>
          <div><Clock3 /><span><strong>Fácil agendamento</strong>Direto pelo WhatsApp</span></div>
          <div><HeartPulse /><span><strong>Amor em cada detalhe</strong>Seu pet em boas mãos</span></div>
        </section>

        <section id="servicos" className="section services-section">
          <div className="section-heading centered"><span className="kicker">Nossos serviços</span><h2>Tudo o que seu pet precisa</h2><p>Do cuidado preventivo ao banho e tosa, oferecemos atendimento completo para cães e gatos.</p></div>
          <div className="service-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <div className="icon-box"><Icon /></div><h3>{title}</h3><p>{text}</p>
                <button type="button" className="service-link" onClick={() => setSelectedService(title)}>Saiba mais <ChevronRight size={16} /></button>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre" className="section about-section">
          <div className="about-images"><img className="about-main" src="/images/gallery1.jpg" alt="Cuidado veterinário" /><img className="about-small" src="/images/gallery2.jpg" alt="Pessoa demonstrando carinho por um pet" /><div className="experience-badge"><strong>+4 mil</strong><span>avaliações no Google</span></div></div>
          <div className="about-copy"><span className="kicker">Sobre a clínica</span><h2>Amor, experiência e cuidado em cada atendimento</h2><p>Na CliniCão & Gatos, cada animal recebe um atendimento cuidadoso, responsável e individualizado. Nossa equipe está preparada para acompanhar seu pet em todas as fases da vida.</p><ul><li><ShieldCheck />Profissionais preparados e atendimento humanizado</li><li><Building2 />Estrutura completa em duas unidades</li><li><Dog />Serviços para cães e gatos em um só lugar</li><li><Bone />Cuidado preventivo, exames, estética e bem-estar</li></ul><button className="btn primary" onClick={() => scroll('unidades')}>Falar com nossa equipe <ArrowRight size={18} /></button></div>
        </section>

        <section id="unidades" className="section units-section">
          <div className="section-heading centered light"><span className="kicker">Estamos perto de você</span><h2>Escolha a unidade mais próxima</h2><p>Entre em contato pelo WhatsApp e receba atendimento rápido da nossa equipe.</p></div>
          <div className="units-grid">
            <article className="unit-card"><div className="unit-icon"><MapPin /></div><span className="unit-tag">Unidade</span><h3>Nova Marabá</h3><p>Folha 32, QD 04, Lote 19 — Nova Marabá, Marabá - PA.</p><div className="unit-hours"><Clock3 size={18} /><span>Seg. a sex.: 08h–18h<br />Sábado: 08h–13h · Domingo: fechado</span></div><div className="unit-actions"><a href={novaWhats} target="_blank" rel="noopener noreferrer"><Phone size={18} /> WhatsApp</a><a href={novaMap} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> Ver localização</a></div><iframe className="unit-map" src={novaMapEmbed} title="Mapa - CliniCão & Gatos Nova Marabá" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></article>
            <article className="unit-card featured"><div className="unit-icon"><MapPin /></div><span className="unit-tag">Unidade</span><h3>Velha Marabá</h3><p>Av. Antônio Maia, 1813 — Velha Marabá, Marabá - PA, 68598-040.</p><div className="unit-hours"><Clock3 size={18} /><span>Seg. a sex.: 08h–18h<br />Sábado: 08h–13h · Domingo: fechado</span></div><div className="unit-actions"><a href={velhaWhats} target="_blank" rel="noopener noreferrer"><Phone size={18} /> WhatsApp</a><a href={velhaMap} target="_blank" rel="noopener noreferrer"><MapPin size={18} /> Ver localização</a></div><iframe className="unit-map" src={velhaMapEmbed} title="Mapa - CliniCão & Gatos Velha Marabá" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></article>
          </div>
        </section>

        <section id="avaliacoes" className="section reviews-section">
          <div className="section-heading centered"><span className="kicker">Quem conhece, recomenda</span><h2>Carinho reconhecido pelos clientes</h2><div className="rating-line"><span>4,8</span><div><div className="stars">★★★★★</div><small>Avaliações da web</small></div></div></div>
          <div className="reviews-grid">{reviews.map(([name, text]) => <article className="review-card" key={name}><div className="stars">★★★★★</div><p>“{text}”</p><div className="reviewer"><div>{name[0]}</div><span><strong>{name}</strong><small>Avaliação do Google</small></span></div></article>)}</div>
        </section>

        <section id="galeria" className="section gallery-section">
          <div className="section-heading centered"><span className="kicker">Nosso dia a dia</span><h2>Carinho em cada detalhe</h2><p>Conheça um pouco do cuidado, da rotina e dos momentos especiais da CliniCão & Gatos.</p></div>
          <div className="gallery-grid">{[1, 2, 3, 5, 6, 7, 8].map((n, i) => <a href={`/images/gallery${n}.jpg`} target="_blank" rel="noopener noreferrer" className={`gallery-item g${i + 1}`} key={n}><img src={`/images/gallery${n}.jpg`} alt={`Galeria da CliniCão & Gatos ${n}`} loading="lazy" /></a>)}</div>
        </section>

        <section className="cta-section"><div><span className="kicker">Seu pet merece o melhor</span><h2>Pronto para cuidar de quem sempre está ao seu lado?</h2><p>Escolha a unidade mais próxima e fale agora com nossa equipe.</p></div><div className="cta-buttons"><a href={novaWhats} target="_blank" rel="noopener noreferrer">WhatsApp Nova Marabá</a><a href={velhaWhats} target="_blank" rel="noopener noreferrer">WhatsApp Velha Marabá</a></div></section>
      </main>

      <footer>
        <div className="footer-main">
          <div className="footer-brand"><img src="/images/logo.jpg" alt="CliniCão e Gatos" /><p>Amor, cuidado e saúde para o seu pet em Marabá.</p><a href="https://www.instagram.com/clinicaoegatosmaraba/" target="_blank" rel="noopener noreferrer">clinicaoegatosmaraba</a></div>
          <div><h4>Links rápidos</h4>{['inicio', 'servicos', 'sobre', 'unidades', 'avaliacoes'].map((i) => <button key={i} onClick={() => scroll(i)}>{i[0].toUpperCase() + i.slice(1)}</button>)}</div>
          <div><h4>Contato e horários</h4><p><MapPin /> <span>Folha 32, QD 04, Lote 19 — Nova Marabá<br />Av. Antônio Maia, 1813 — Velha Marabá</span></p><p><Phone /> <span>(94) 99139-5960 · Nova Marabá<br />(94) 98163-3831 · Velha Marabá</span></p><div className="footer-hours"><Clock3 /><span><strong>Segunda a sexta:</strong> 08h às 18h<br /><strong>Sábado:</strong> 08h às 13h<br /><strong>Domingo:</strong> fechado</span></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 CliniCão & Gatos. Todos os direitos reservados.</span><span>Criado por <a href="https://www.instagram.com/thiago_lopesez/" target="_blank" rel="noopener noreferrer">Thiago Lopes</a></span></div>
      </footer>

      {selectedService && (
        <div className="service-whatsapp-overlay" role="presentation" onClick={() => setSelectedService(null)}>
          <div className="service-whatsapp-modal" role="dialog" aria-modal="true" aria-labelledby="service-whatsapp-title" onClick={(event) => event.stopPropagation()}>
            <button className="service-modal-close" type="button" onClick={() => setSelectedService(null)} aria-label="Fechar"><X /></button>
            <span className="kicker">Escolha a unidade</span>
            <h3 id="service-whatsapp-title">Informações sobre {selectedService}</h3>
            <p>Selecione em qual unidade você deseja ser atendido.</p>
            <div className="service-unit-options">
              <a href={whatsappLink(novaNumber, `Olá! Vim pelo site da CliniCão & Gatos e gostaria de informações sobre ${selectedService}.`)} target="_blank" rel="noopener noreferrer" onClick={() => setSelectedService(null)}><Phone size={18} /><span><strong>Nova Marabá</strong><small>Falar pelo WhatsApp</small></span><ChevronRight /></a>
              <a href={whatsappLink(velhaNumber, `Olá! Vim pelo site da CliniCão & Gatos e gostaria de informações sobre ${selectedService}.`)} target="_blank" rel="noopener noreferrer" onClick={() => setSelectedService(null)}><Phone size={18} /><span><strong>Velha Marabá</strong><small>Falar pelo WhatsApp</small></span><ChevronRight /></a>
            </div>
          </div>
        </div>
      )}

      <div className="whatsapp-float"><div className={whatsOpen ? 'whats-options show' : 'whats-options'}><a href={novaWhats} target="_blank" rel="noopener noreferrer">Nova Marabá <ChevronRight /></a><a href={velhaWhats} target="_blank" rel="noopener noreferrer">Velha Marabá <ChevronRight /></a></div><button onClick={() => setWhatsOpen(!whatsOpen)} aria-label={whatsOpen ? 'Fechar opções do WhatsApp' : 'Abrir opções do WhatsApp'}>{whatsOpen ? <X /> : <Phone />}</button></div>
    </div>
  )
}
