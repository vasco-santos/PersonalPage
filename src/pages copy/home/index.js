import React from 'react'
// import { Link } from 'gatsby'

import VascoProfile from 'shared/media/images/profile.jpg'
// import Particles from 'react-particles-js'
// import ParticlesParams from './particles'

import SocialMediaList from 'shared/components/social-media-list'

import styles from './index.module.css'

const Home = () => (
    <div className={ styles.home }>
        { /* <Particles className={ styles.particles }
            params={ ParticlesParams } /> */ }
        <div className={ styles.profile }>
            <img className={ styles.picture }
                src={ VascoProfile } alt="Project Preview" />
            <div className={ styles.info }>
                <div className={ styles.role } >
                    P2P Software Engineer
                </div>
                <div className={ styles.intro } >
                    A technology enthusiast driven by the daily challenges of software engineering,
                    who aspires to build software to make the world a better place.
                </div>
                <SocialMediaList />
                <div className={styles.ending} >
                    ... and a world traveler in the free time
                </div>
            </div>
        </div>
        { /* <Link to="/about/">Go to page 2</Link> */ }
    </div>
)

export default Home