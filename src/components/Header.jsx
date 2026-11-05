import { useState } from 'react'
import './Header.css'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => {
        setMenuOpen(false)
    }
    return (
        <header className="header">
            <a 
                href="#home"
                className="header_logo"
                onClick={closeMenu}
                aria-label="SEUNGYEON - HOME"
                >
                SEUNGYEON<span className="header_logo_dot">.</span>
            </a>

            <button
                type="button"
                className={ `header_menu_button &{menuOpen ? 'is-open': ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
                aria-expanded={menuOpen}
                aria-controls="header-navigation"
                >
                <span />
                <span />
            </button>

            <nav 
                id="header-navigation"
                className={`header_nav &{menuOoen ? 'is-open' : ''}`}
                aria-label="메인 내비게이션"
                >
                <a href="#about" onClick={closeMenu}>
                    <span className="header_nav_number">01</span>About
                </a>
                <a href="#projects" onClick={closeMenu}>
                    <span className="header_nav_number">02</span>Projects
                </a>
                <a href="#contact" onClick={closeMenu}>
                    <span className="header_nav_number">03</span>Contact
                </a>
            </nav>

            <div className="header_status">
                <span className="haeder_status_dot" />
                AVAILABLE FOR OPPORTUNITIES
            </div>
        </header>
    )
}

export default Header