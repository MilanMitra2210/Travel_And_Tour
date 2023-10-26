import React, { useEffect } from 'react';
import './Main.css';
import img from '../../assets/image1.jpg';
import {HiOutlineLocationMarker } from 'react-icons/hi';
import {HiOutlineClipboardCheck } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
  {
    id:1,
    imgSrc:img,
    destTitle:'Bora Bora',
    location:"New Zealand",
    garde:'CULTURE RELAX',
    fees:'₹700',
    description:'lorem bdiujd u jhgfg dgi b uiv vdiuvgsuisdv v gsdvvdsv dvcgsdvhsdv ddvdv vv'
  },
  {
    id:2,
    imgSrc:img,
    destTitle:'cds dcd',
    location:"New Zealand",
    garde:'dsadssd RELAX',
    fees:'₹76200',
    description:'lorem  ccsdcdsc  wccdcdcw dugdu jdghjgh ghsdkjsk bdiujd u jhgfg dgi b uiv vdiuvgsuisdv v gsdvvdsv dvcgsdvhsdv ddvdv vv'
  },
  {
    id:3,
    imgSrc:img,
    destTitle:'cds dcd',
    location:"New Zealand",
    garde:'dsadssd RELAX',
    fees:'₹76200',
    description:'lorem  ccsdcdsc  wccdcdcw dugdu jdghjgh ghsdkjsk bdiujd u jhgfg dgi b uiv vdiuvgsuisdv v gsdvvdsv dvcgsdvhsdv ddvdv vv'
  },
  {
    id:4,
    imgSrc:img,
    destTitle:'cds dcd',
    location:"New Zealand",
    garde:'dsadssd RELAX',
    fees:'₹76200',
    description:'lorem  ccsdcdsc  wccdcdcw dugdu jdghjgh ghsdkjsk bdiujd u jhgfg dgi b uiv vdiuvgsuisdv v gsdvvdsv dvcgsdvhsdv ddvdv vv'
  }
]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[]);

  return (
    <section className='main container section'>
      <div  className='secTitle'>
        <h3 data-aos="fade-right" className='title'>
          Most Visited Destinations
        </h3>
      </div>

      <div className='secContent grid'>
        {
          Data.map(({id, imgSrc, destTitle,location, garde, fees, description})=>{
            return(
              <div key={id} data-aos="fade-up" className='singleDestionation'>

                <div className='imageDiv'>
                  <img src={imgSrc} alt={destTitle}/>
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{location}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{garde} <small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS<HiOutlineClipboardCheck className='icon'/>
                  </button>

                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
