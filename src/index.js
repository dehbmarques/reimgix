import { Component } from 'react'
import qs from 'query-string'

class Reimgix extends Component {
  static defaultProps = {
    useSrcParams: true,
    lqip: true,
    lqipParams: {
      px: '16',
      blur: '200',
      auto: 'format,compress',
    },
  }

  constructor(props) {
    super(props)

    const { src, params, useSrcParams, lqipParams, lqip } = props
    const [path, search = ''] = src.split('?')
    let srcParams

    /**
     * Create imgix params based on
     * 1. original src params (if this.props.useSrcParams: true)
     * 2. this.props.params (merged with src params)
     * 3. lqip purpose params (only on src.lqip)
     */

    try {
      srcParams = qs.parse(search) || {}
    } catch (e) {
      srcParams = {}
    }

    const srcOriginalParams = {
      ...(useSrcParams ? srcParams : {}),
      ...params,
    }

    const srcLqipParams = {
      ...srcOriginalParams,
      ...lqipParams,
    }

    this.src = {
      original: `${path}?${qs.stringify(srcOriginalParams)}`,
      lqip: `${path}?${qs.stringify(srcLqipParams)}`,
    }

    this.state = {
      src: lqip ? this.src.lqip : this.src.original,
      isLqip: lqip ? true : false,
    }

    this.image = null
  }

  handleOriginalLoad = () => {
    this.setState({ src: this.src.original, isLqip: false })
  }

  componentDidMount() {
    if (this.props.lqip) {
      this.image = document.createElement('img')
      this.image.addEventListener('load', this.handleOriginalLoad)
      this.image.src = this.src.original
    }
  }

  componentWillUnmount() {
    if (this.props.lqip && this.image) {
      this.image.removeEventListener('load', this.handleOriginalLoad)
    }
  }

  render() {
    const { children, render } = this.props

    const renderFn =
      typeof children === 'function'
        ? children
        : typeof render === 'function' ? render : () => {}

    return renderFn({ ...this.state })
  }
}

export default Reimgix
