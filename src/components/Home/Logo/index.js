import './index.scss';
import LogoA from '../../../assets/images/logo-a.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    const didAnimate = useRef(false);

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)

        if (didAnimate.current) { return; }
        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
        didAnimate.current = true;
        gsap.from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 10,
            })

        gsap.fromTo(
            solidLogoRef.current, {
                opacity: 0,
            }, 
            {
                opacity: 1,
                delay: 4,
                duration: 10,
            }
        )
    }, [])
    
    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef}
                src={LogoA}                  
                className='solid-logo' 
                alt='A'
            />            
            <svg
                width="500"
                zoomAndPan="magnify"
                viewBox="0 0 375 374.999991"
                height="500"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"> 
                <g className='svg-container' fill="none">
                    <path ref={outlineLogoRef}
                    style={{fill:"none"}}
                    d="M 167.02295 33.897949 C 157.12452 33.897949 152.17626 38.39894 148.57471 47.85205 L 48.675292 317.39795 C 46.425295 322.80028 46.426278 330 56.324706 330 L 71.263183 330 L 68.563476 337.28613 C 66.313478 342.68846 66.312997 349.88671 76.211425 349.88671 L 123.46142 349.88671 C 133.36375 349.88671 136.96192 347.18748 140.56347 336.38671 L 153.16113 300.83642 L 250.57177 300.83642 L 256.125 316.5 C 259.72655 327.30077 263.32472 330 273.22705 330 L 273.74853 330 L 276.01172 336.38671 C 279.61327 347.18748 283.21144 349.88671 293.11377 349.88671 L 340.36377 349.88671 C 350.2622 349.88671 350.26171 342.68846 348.01171 337.28613 L 248.56347 67.738769 C 244.62475 58.54714 240.21927 54.075406 230.88134 53.833007 L 228.67529 47.85205 C 224.62451 38.39894 220.12548 33.897949 210.22705 33.897949 L 167.02295 33.897949 z M 201.94336 157.74316 L 222.375 217.9497 L 181.51025 217.9497 L 201.94336 157.74316 z " />
                </g>
            </svg>
            
           
        </div>
    )
}

export default Logo