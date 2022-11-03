import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';
import ProfilePhoto from '../../assets/images/ProfilePhoto.png';
import AboutMeBg from '../AboutMeBg';
const TagCloud = require('TagCloud');


const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        const myTags = [
            'JavaScript', 'CSS', 'HTML',
            'Sass', 'Tailwind CSS', 'React',
            'Bootstrap', 'Liquid', 'Git',
            'Rest APIs', 'NodeJS', 'UI/UX Design',
            'AWS EC2', 'ViteJS', 'jQuery', 'Figma', 'Webflow', 'Shopify',
            'Material UI', 'FirebaseJS'
        ];
        if (!document.querySelector('.tagcloud')) {

            var tagCloud = TagCloud('.content', myTags,{
            
              // radius in px
              radius: 300,
            
              // animation speed
              // slow, normal, fast
              maxSpeed: 'normal',
              initSpeed: 'slow',
            
              // 0 = top
              // 90 = left
              // 135 = right-bottom
              direction: 135,
              
              // interact with cursor move on mouse out
              keep: true
              
            });
            
            //To change the color of text randomly
            var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', '#FFBA01', '#01A6F0', '#8C92AC'];
            var random_color = colors[Math.floor(Math.random() * colors.length)];
            document.querySelector('.content').style.color = random_color;
        }
    }, [])

    return (        
        <div className='outerContainer'> 
            <AboutMeBg/>       
            <div className='container about-page'>
                <div className='text-n-pic'>
                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters 
                                letterClass={letterClass}
                                strArray={"About me".split("")}
                                index={15}
                            />
                        </h1>
                        <p className='about-me-text'>
                            I'm a very ambitious front-end developer looking for a role in a start-up or an
                            established IT company with the opportunity to work within a team and with the latest technologies on challenging and diverse projects.
                        </p>
                        <p className='about-me-text'>
                            I pride myself with my ability to think critically and pragmatically and an unrelenting attitude towards problem solving.
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                        <p className='about-me-text'>
                            Describing myself in one sentence that would be a family
                            person, a football fanatic,
                            photography enthusiast, and tech-obsessed!!!
                        </p>
                    </div>
                    <img
                        className='profile-photo'
                        src={ProfilePhoto}
                        alt='profile'
                    />  
                </div>
                <div className='spinner-container'>
                    {/* <div className='cube-spinner'>
                        <div className='face1'>
                            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className='face3'>
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} color='#ED4D28' />
                        </div>
                    </div> */}
                    <span className='content'></span>
                </div>

                
            </div>
            <Loader type="square-spin"/>
            <img
                className='photo-mob'
                src={ProfilePhoto}
                alt='profile'
            /> 
        </div>
    )
}

export default About