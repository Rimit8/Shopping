import React from 'react'
import './YellowBanner.css'
import hm from '../../assets/hm.svg'
import obey from '../../assets/obey.svg'
import shopify from '../../assets/shopify.svg'
import levis from '../../assets/levis.svg'
import lacoste from '../../assets/lacoste.svg'
import amazon from '../../assets/amazon.svg'

const YellowBanner = () => {
  return (
<>
<div className='padd'>
      <div className='brands'>
        <div className='align-items-center pt-5 pb-4'>
            <div className='col-lg-12 d-flex amazon'>
                <div className='col-lg-2 blend'>
                <img src={hm} alt='hm' className='img-fluid'/>
                </div>
                <div className='col-lg-2 blend pt-2'>
                <img src={obey} alt='hm' className='img-fluid'/>
                </div>
                <div className='col-lg-2 blend pt-2'>
                <img src={shopify} alt='hm' className='img-fluid'/>
                </div>
                <div className='col-lg-2 blend '>
                <img src={lacoste} alt='hm' className='img-fluid'/>
                </div>
                <div className='col-lg-2 blend pt-2'>
                <img src={levis} alt='hm' className='img-fluid'/>
                </div>
                <div className='col-lg-2 blend pt-3'>
                <img src={amazon} alt='hm' className='img-fluid'/>
                </div>
            </div>
        </div>
      </div>
    </div>
</>
  )
}

export default YellowBanner
