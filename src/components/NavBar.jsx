import { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const links = [
  { name: 'Escolas', path: '/' },
  { name: 'Sobre', anchor: 'sobre' },
];

export default function MyNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setOpenNav(false), [location.pathname]);

  const goToSection = (anchor) => {
    setOpenNav(false);
    if (location.pathname !== '/') {
      window.location.href = `${import.meta.env.BASE_URL}#${anchor}`;
      return;
    }
    document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-navbar ${scrolled ? 'site-navbar--scrolled' : ''}`}>
      <div className="site-navbar__inner">
        <a href={import.meta.env.BASE_URL} className="brand" aria-label="Samba Carioca, página inicial">
          <span className="brand__mark">♪</span>
          <span>Samba Carioca</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={openNav ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={openNav}
          onClick={() => setOpenNav((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-navbar__links ${openNav ? 'site-navbar__links--open' : ''}`}>
          {links.map((link) => link.anchor ? (
            <button type="button" className="nav-link" key={link.name} onClick={() => goToSection(link.anchor)}>
              {link.name}
            </button>
          ) : link.path === '/' ? (
            <a className="nav-link" href={import.meta.env.BASE_URL} key={link.name}>
              {link.name}
            </a>
          ) : (
            <RouterLink className="nav-link" to={link.path} key={link.name}>
              {link.name}
            </RouterLink>
          ))}
          <RouterLink to="/trivia" className="nav-cta">Jogar trivia</RouterLink>
        </nav>
      </div>
    </header>
  );
}