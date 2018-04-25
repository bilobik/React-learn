import React, {Component} from 'react';
import CommentList from './CommentList'
import toogleOpen from '../decorators/toogleOpen';

/*export default  function Article(props) {
    const {article} = props;
    console.log('_____', article);

    return (
        <div>
        <h3>{article.title}</h3>
        <section>
            {article.text}
        </section>
    </div>
    );
}*/

class Article extends Component {
    render(){
        const {article, isOpen, toogleOpen} = this.props;
        console.log('_____', article);

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={toogleOpen}>{isOpen ? 'hide' : 'show'}</button>
                {this.getBody()}
            </div>
        );
    };

    getBody(){
        const {article, isOpen} = this.props;
        return isOpen
            ?   <div>
                    <section>{article.text}</section>
                    <CommentList comments={article.comments}/>
                </div>

            : null;
    };

}

export default toogleOpen(Article);
