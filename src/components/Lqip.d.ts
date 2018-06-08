import { Component, ReactNode } from 'react';
export interface LqipProps {
    lqipParams?: Object;
    render?: (props: LqipState) => ReactNode;
    children?: (props: LqipState) => ReactNode;
}
export interface LqipState {
    src: string;
    loaded: boolean;
}
export declare class Lqip extends Component<LqipProps, LqipState> {
    static defaultProps: {
        lqipParams: {
            px: string;
            blur: string;
            auto: string;
        };
    };
    urls: {
        src: string;
        lqipSrc: string;
    };
    image?: HTMLImageElement;
    constructor(props: any);
    handleImageLoad: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): any;
}
