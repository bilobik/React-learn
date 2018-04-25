import React, {Component} from 'react';
import Article from './Article';

export default class ArticleList extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const articleElements = this.props.articles.map(item => <li key={item.id}><Article article={item}/></li>);
        return (<ul>
            {articleElements}
        </ul>);
    }
}