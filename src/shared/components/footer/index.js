import React from 'react'
import PropTypes from 'prop-types'

import classNames from 'classnames'

import styles from './index.module.css'

const Footer = ({ className }) => (
    <div className={ classNames(className, styles.footer) }>
        Vasco Santos © { new Date().getFullYear() }
    </div>
)

Footer.propTypes = {
    className: PropTypes.string,
}

export default Footer
