import { Component } from 'react'
import { setup } from './setup'

export interface ReimgixProps {
  removeSrcParams?: boolean
  lqip?: boolean
  lqipParams?: Object
}

export interface ReimgixState {
  src: string
  isLqip: boolean
}

export class Reimgix extends Component<any, any> {
  static defaultProps = {
    removeSrcParams: true,
    lqip: false,
    lqipParams: {
      px: '16',
      blur: '200',
      auto: 'format,compress',
    },
  }

  src: {
    newSrcUrl: string
    lqipSrcUrl: string
  }

  image?: HTMLImageElement

  constructor(props) {
    super(props)

    const { src, params, removeSrcParams, lqipParams, lqip } = props

    const newSrcUrl = setup(src, { removeSrcParams, params })
    const lqipSrcUrl = setup(src, {
      removeSrcParams,
      params: { ...params, ...lqipParams },
    })

    this.src = { newSrcUrl, lqipSrcUrl }

    this.state = {
      src: lqip ? this.src.lqipSrcUrl : this.src.newSrcUrl,
      isLqip: lqip ? true : false,
    }

    this.image = null
  }

  handleImageLoad = () => {
    this.setState({ src: this.src.newSrcUrl, isLqip: false })
  }

  componentDidMount() {
    if (this.props.lqip) {
      this.image = document.createElement('img')
      this.image.addEventListener('load', this.handleImageLoad)
      this.image.src = this.src.newSrcUrl
    }
  }

  componentWillUnmount() {
    if (this.props.lqip && this.image) {
      this.image.removeEventListener('load', this.handleImageLoad)
    }
  }

  render() {
    const { children, render } = this.props

    const renderFn =
      typeof children === 'function'
        ? children
        : typeof render === 'function'
          ? render
          : () => {}

    return renderFn({ ...this.state })
  }
}
