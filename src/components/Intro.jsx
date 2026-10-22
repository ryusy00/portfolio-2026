import { useEffect } from "react";
import syMark from '../assets/sy-mark.svg'
import './Intro.css'

function Intro({ onFinish }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish()
        },3500)

        return () => clearTimeout(timer)
    }, [onFinish])

    return (
        <section className="intro" aria-label="Portfolio introduction">
            <div className="intro_content">
                <img src={syMark} className="intro_symbol" alt=""></img>
                <h1 className="intro_name">SEUNGYEON</h1>
            </div>
        </section>
    )
}

export default Intro