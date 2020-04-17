import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            info: null
        };
    }
  
    componentDidCatch(error, info) {
        this.setState({ 
            hasError: true,
            info
        });
    }
  
    render() {
        const {hasError,info} = this.state
        if (hasError) {
            return <div>
                <h1>某些地方看起来出错了，请联系管理员...</h1>
                <p>{info}</p>
            </div>
        }
        return this.props.children
    }
  }