import { Component, ReactNode } from 'react'
import { generate } from '../generate'

export interface LqipProps {
  lqipParams?: Object
  render?: (props: LqipState) => ReactNode
  children?: (props: LqipState) => ReactNode
}

export interface LqipState {
  src: string
  loaded: boolean
}

export class Lqip extends Component<LqipProps, LqipState> {
  static defaultProps = {
    lqipParams: {
      px: '16',
      blur: '200',
      auto: 'format,compress',
    },
  }

  urls: {
    src: string
    lqipSrc: string
  }

  image?: HTMLImageElement

  constructor(props) {
    super(props)
    const { src, lqipParams } = props
    const lqipSrc = generate(src, lqipParams)

    this.urls = { src, lqipSrc }
    this.state = { src: lqipSrc, loaded: false }
  }

  handleImageLoad = () => {
    this.setState({ src: this.urls.src, loaded: true })
  }

  componentDidMount() {
    this.image = document.createElement('img')
    this.image.addEventListener('load', this.handleImageLoad)
    this.image.src = this.urls.src
  }

  componentWillUnmount() {
    if (this.image) {
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
          : () => null

    return renderFn({ ...this.state })
  }
}
