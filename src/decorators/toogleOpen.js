import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    constructor(props){
        super(props);

        this.state = {
            isOpen: true
        };
        this.toogleOpen = this.toogleOpen.bind(this);
    };

    render(){
        return <OriginalComponent {...this.props} {...this.state} toogleOpen={this.toogleOpen} />
    }

    toogleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };
}