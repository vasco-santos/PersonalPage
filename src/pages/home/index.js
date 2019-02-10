import React, { Component } from 'react'

import classNames from 'classnames'
import OnImagesLoaded from 'react-on-images-loaded'
import Particles from 'react-particles-js'
import Loader from 'react-loader-spinner'

import VascoProfile from 'shared/media/images/profile.jpg'
import ParticlesParams from 'shared/data/home-particles'

import SocialMediaList from 'shared/components/social-media-list'

import styles from './index.module.css'

class Home extends Component {
    state = {
        pageReady: false,
    }

    render () {
        const { pageReady } = this.state

        return (
            <div className={styles.home}>
                <Particles className={styles.particles}
                    params={ParticlesParams} />
                {!pageReady && <div className={styles.loader}>
                    <Loader type="Oval" color="#fff" height={80} width={80} />
                </div>}
                <div className={ classNames(styles.profile, { [styles.ready]: pageReady }) }>
                    <OnImagesLoaded className={styles.picture}
                        onLoaded={ this._handleOnImageLoaded }>
                        <img src={VascoProfile} alt="Project Preview" />
                    </OnImagesLoaded>
                    <div className={styles.info}>
                        <div className={styles.role} >
                            P2P Software Engineer
                        </div>
                        <div className={styles.intro} >
                            A technology enthusiast driven by the daily challenges of software engineering,
                            who aspires to build software to make the world a better place.
                        </div>
                        <SocialMediaList />
                        <div className={styles.ending} >
                            ... and a world traveler in the free time.
                        </div>
                    </div>
                </div>
                { /* <Link to="/about/">Go to page 2</Link> */}
            </div>
        )
    }

    _handleOnImageLoaded = () =>  {
        this.setState({ pageReady: true })
    }
}

export default Home