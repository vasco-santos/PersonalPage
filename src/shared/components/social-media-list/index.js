import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Link from 'shared/components/link'

import Svg from 'shared/components/svg'
import Github from 'shared/media/images/icons/github.inline.svg'
import Twitter from 'shared/media/images/icons/twitter.inline.svg'
import Instagram from 'shared/media/images/icons/instagram.inline.svg'
import LinkedIn from 'shared/media/images/icons/linkedin.inline.svg'
import Spotify from 'shared/media/images/icons/spotify.inline.svg'

import styles from './index.module.css'

const socialLinks = [
    { href: 'https://github.com/vasco-santos', name: 'github', svg: Github, css: styles.github },
    { href: 'https://twitter.com/vascosantos10', name: 'twitter', svg: Twitter, css: styles.twitter },
    { href: 'https://instagram.com/vasco.santos10', name: 'instagram', svg: Instagram, css: styles.instagram },
    { href: 'https://linkedin.com/in/vascosantos10', name: 'linkedin', svg: LinkedIn, css: styles.linkedin },
    { href: 'https://open.spotify.com/user/1167427245', name: 'spotify', svg: Spotify, css: styles.spotify },
];

const SocialMediaList = ({ orientation }) => (
    <div className={ styles.list }>
        {
            socialLinks.map((item) => (
                <Link href={ item.href }>
                    <Svg className={ classNames(styles.svg, item.css) } 
                        svg={ item.svg }
                        role="presentation" />
                </Link>
            ))
        }
    </div>
)

SocialMediaList.propTypes = {
    orientation: PropTypes.oneOf(['horizontal', 'vertical'])
}

SocialMediaList.defaultProps = {
    orientation: 'horizontal'
};

export default SocialMediaList
