import { useEffect, useRef, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_88w056v',
                'template_6c7922a',
                refForm.current,
                '6DZv0XS-lve232WJF'
            )
            .then (
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass} 
                            strArray={"Contact me".split("")} 
                            index={15}
                        />
                    </h1>
                    <p className='contact-text'>
                        I am interested in web development opportunities - especially ambitious or
                        large projects. However, if you have other requests or questions, I would love to hear from you. Please don't hesitate to contact me using the form below or send me a direct email.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required>

                                    </textarea>
                                </li>
                                <li>
                                    <input className='flat-button' type='submit' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Adrian U,
                    <br />
                    London,
                    <br />
                    United Kingdom <br />
                    <span>adrianukwunna@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[51.5072, 0.1276]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[51.5072, 0.1276]}>
                            <Popup>The Adrianator lives here, come over for a cup of tea :)</Popup>
                        </Marker>

                    </MapContainer>
                </div>
            </div>
            <Loader type='square-spin' />
        </>
    )
}

export default Contact