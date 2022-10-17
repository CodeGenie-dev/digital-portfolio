import { useEffect, useState, useRef, useCallback } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-a.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'
import Typed from 'typed.js';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Home = () => {
    const el = useRef(null);
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['d', 'r', 'i', 'a','n',', ']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.',]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        const typed = new Typed(el.current, {
          strings: ["a creative", "an inquisitive", "a passionate", "an innovative"],
          startDelay: 500,
          typeSpeed: 55,
          backSpeed: 100,
          backDelay: 100,
          smartBackspace: true,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
        return () => {
          typed.destroy();
        };
    }, [])

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);


    return (
        <>        
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                    color: {
                        value: "#000",
                    },
                    },
                    fpsLimit: 100,
                    interactivity: {
                    events: {
                        onClick: {
                        enable: true,
                        mode: "repulse",
                        },
                        onHover: {
                        enable: true,
                        mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                        quantity: 4,
                        },
                        repulse: {
                        distance: 200,
                        duration: 0.4,
                        },
                    },
                    },
                    particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                        default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                        enable: true,
                        area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                    },
                    detectRetina: true

                    // events: {
                    //     onclick: { enable: true, mode: "push" },
                    //     onhover: {
                    //         enable: true,
                    //         mode: "repulse",
                    //         parallax: { enable: false, force: 60, smooth: 10 }
                    //     },
                    //     resize: true
                    //     },
                    //     modes: {
                    //     bubble: { distance: 400, duration: 2, opacity: 0.8, size: 40, speed: 3 },
                    //     grab: { distance: 400, links: { opacity: 1 } },
                    //     push: { quantity: 4 },
                    //     remove: { quantity: 2 },
                    //     repulse: { distance: 200, duration: 0.4 }
                    //     }
                    // },
                    // particles: {
                    //     color: { value: "random" },
                    //     links: {
                    //     color: "random",
                    //     distance: 150,
                    //     enable: false,
                    //     opacity: 0.4,
                    //     width: 1
                    //     },
                    //     move: {
                    //     attract: { enable: false, rotateX: 600, rotateY: 1200 },
                    //     bounce: false,
                    //     direction: "none",
                    //     enable: true,
                    //     out_mode: "out",
                    //     random: false,
                    //     speed: 3,
                    //     straight: false
                    //     },
                    //     rotate: {
                    //     animation: {
                    //         enable: true,
                    //         speed: 10,
                    //         sync: false
                    //     }
                    //     },
                    //     number: { density: { enable: true, area: 800 }, value: 100 },
                    //     opacity: {
                    //     animation: { enable: true, minimumValue: 0.5, speed: 1, sync: false },
                    //     random: false,
                    //     value: 1
                    //     },
                    //     shape: {
                    //     character: [
                    //         {
                    //         fill: true,
                    //         font: "Verdana",
                    //         style: "",
                    //         value: "theAdrianator".split(""),
                    //         weight: "400"
                    //         },
                    //         {
                    //         fill: false,
                    //         font: "Verdana",
                    //         style: "",
                    //         value: "theAdrianator".split(""),
                    //         weight: "400"
                    //         }
                    //     ],
                    //     image: {
                    //         height: 100,
                    //         replace_color: true,
                    //         src: "images/github.svg",
                    //         width: 100
                    //     },
                    //     polygon: { nb_sides: 5 },
                    //     stroke: { color: "random", width: 1 },
                    //     type: "char"
                    //     },
                    //     size: {
                    //     anim: { enable: true, minimumValue: 8, speed: 20, sync: false },
                    //     random: { minimumValue: 8, enable: true },
                    //     value: 32
                    //     }
                    // },
                    // detectRetina: true
                }}
                />
            <div className="container home-page">
                <div id="particles-js">
                    <div className="text-zone">
                        <h1>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>i</span>
                            <span className={`${letterClass} _13`}>,</span> 
                            <span className={`${letterClass} _14 marginLeft`}>I</span>
                            <span className={`${letterClass} _15`}>'</span>                    
                            <span className={`${letterClass} _16`}>m</span>                    
                            <img className='logoTitle' src={LogoTitle} alt="developer"/>
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={nameArray}
                                index={16}
                            />
                            <br />
                            <span ref={el}></span>
                            <br />
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={jobArray}
                                index={22}
                            />
                        </h1>
                        <h2>Frontend Developer / Javascript Expert / Freelancer</h2>
                        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    </div>
                    <Logo />
                </div>   
            </div>
            <Loader type='square-spin'/>
        </>
    )
}

export default Home