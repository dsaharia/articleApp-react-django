import React from 'react';
import Articles from '../Articles';
import axios from 'axios';


export default class ArticleList extends React.Component {
    state = {
        articles : [],
    }
    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then(res => {
                this.setState({
                    articles: res.data,
                });
            })
    }
    render() {
        return(
                <Articles data={this.state.articles}/>
            )
    }
}