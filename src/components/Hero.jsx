import './Hero.css'

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero_inner">
                <p className="hero_label reveal reveal_1">
                    PORTFOLIO 2026
                </p>

                <h1 className="hero_title reveal reveal_2">
                    Designing &<br />
                    building <span>Digital</span><br />
                    Experiences.
                </h1>

                <div className="hero_bottom">
                    <p className="hero_description reveal reveal_3">
                        Web Publisher & Frontend Developer
                        <br />
                        Turning ideas into meaningful digital experiences.
                    </p>

                    <a href="#projects" className="hero_link reveal reveal_4">
                        VIEW RPOJECTS
                        <span>↗</span>
                    </a>
                </div>
            </div>

            <div className="hero_index reveal reveal_4">
                <span>01</span>
                <span className="hero_index_line" />
                <span>04</span>
            </div>
        </section>
    )
}

export default Hero