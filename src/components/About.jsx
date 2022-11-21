import './About.css'
import React from 'react'
import Video from './Video'





const About = () => {
  return (
    <div className='about_container'>
        <div className='about_inner'>
            <div className='about_top_left'>
              <Video source='/Videos/book_red.mp4'/>
              <Video source='/Videos/book_bronze.mp4'/>
            </div>
            <div className='about_top_right'>
                <h2>
                THE 9 TENANTS OF OUR ETHOS
                </h2>
                <div className='underline'></div>
              <div>
              <h3>
              <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                INNOVATION</h3>
              <p>We will strive to always be trying new things and making old things better</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  EFFECIENCY</h3>
                <p>We continue to streamline everything we do always looking for the most effecient process/build</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  SECURITY</h3>
                <p>We will always develop with a priority on making things safe(r) for our community and the ecosystem</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  LOYALTY</h3>
                <p>We believe strongly in loyalty to our holders and community as well as to our commitment to bringing them real value</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  INTEGRITY</h3>
                <p>We will always strive to move in an integral manner setting an example and standard with our actions</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  COMMUNITY</h3>
                <p>Nothing happens without community and we will always put the community first</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  TRANSPARENCY</h3>
                <p>We will always be as transparent as possible with everything we do</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  ADAPTABILITY</h3>
                <p>Change is inevitable, so we can change with it.</p>
              </div>
              <hr/>
              <div>
                <h3>
                <img
                className='logo_on_point'
                alt='point'
                src='/observables_logo.jfif'
                />
                  CONSISTENCY</h3>
                <p>We believe that consistency is key to success of anything worth doing, hence why we won't stop</p>
              </div>
              <hr/>
            </div> 
        </div>
    </div>
    
  )
}

export default About