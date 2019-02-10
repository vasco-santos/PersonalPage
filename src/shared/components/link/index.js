import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

class Link extends Component {
    render() {
        const { to, href, ...rest } = this.props

        if (to) {
            return <GatsbyLink {...rest} to={this.buildTo()} />
        }

        return (
            <a {...rest} href={href} target="_blank" rel="noopener noreferrer" />
        )
    }

    buildTo() {
        const { to } = this.props

        let finalTo = ''

        finalTo += to.replace(/\/+$/, '')
        finalTo += '/'

        return finalTo
    }
}

Link.propTpes = {
    to: PropTypes.string,
    href: PropTypes.string
}

export default Link