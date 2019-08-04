import React from 'react';
import Articles from '../Articles';
import axios from 'axios';
import { Card } from 'antd';
import CustomForm from '../Form';

export default class ArticleList extends React.Component {
    state = {
        article : {},
    }
    componentDidMount() {
        const articleId = this.props.match.params.articleID;
        axios.get(`http://127.0.0.1:8000/api/${articleId}`)
            .then(res => {
                this.setState({
                    article: res.data,
                });
            })
    }
    render() {
        return(
            <div>
                <Card title={this.state.article.title}>
                    <p>{this.state.article.content}</p>
                </Card>
                <CustomForm requestType="PUT" articleID={this.props.match.params.articleID}/>
            </div>
            )
    }
}