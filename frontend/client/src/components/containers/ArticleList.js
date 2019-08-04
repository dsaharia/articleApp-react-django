import React from 'react';
import Articles from '../Articles';
import axios from 'axios';
import CustomForm from '../Form';  

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
            <div>
                <Articles data={this.state.articles}/>
                <br/>
                <h2>Create an article</h2>
                <CustomForm requestType="POST" articleID={null}/>
            </div>
            )
    }
}