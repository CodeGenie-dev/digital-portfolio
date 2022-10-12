import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const [portfolio, setPortfolio] = useState([]);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    useEffect(() => {
        getPortfolio();
    }, [])


    const getPortfolio = async () => {
        const querySnapshot = await getDocs(collection(db, 'portfolio'));
        setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    }

    const renderPortfolio = (portfolio) => {
        return (
            <div className='images-container'>
                {
                    portfolio.map((port, index) => {
                        return (
                            <div className='image-box' key={index} data-aos='fade-up' data-aos-offset='200' data-aos-delay={(index + 1) * 200}>
                                <img src={port.image}
                                className="portfolio-image"
                                alt='portfolio' />
                                <div className='content'>
                                    <div className='text-content'>
                                        <p className='title'>{port.name}</p>
                                        <h4 className='description'>{port.description}</h4>
                                        <button 
                                        onClick={() => window.open(port.url)}
                                        className='btn'>
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    
    return (
        <>
            <div className='container portfolio-page'>
                <h1 className='page-title'>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        index={15}
                    />
                </h1>
                <div className='text-zone'>
                    
                </div>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type='square-spin' />
        </>
    )
}

export default Portfolio;