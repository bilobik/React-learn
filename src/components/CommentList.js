import React, {Component} from 'react';
import toogleOpen from '../decorators/toogleOpen';

class CommentList extends  Component {
    constructor(props){
        super(props);
    }
    render(){
        if (!this.props.comments)
            return null;
        const {isOpen, toogleOpen} = this.props;
        const comments = this.props.comments.map(comment => <li key={comment.id}>
            <b>{comment.user}:</b> {comment.text}
            </li>
        );
        return(
            <div>
                <h3>Comments</h3>
                <button onClick={toogleOpen}>{isOpen ? 'hide' : 'show'}</button>
                <ul>
                    {isOpen && comments}
                </ul>
            </div>
            );
    }
}

export default toogleOpen(CommentList);
