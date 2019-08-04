import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

export default class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, articleID) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    console.log(title, content)
    switch (requestType) {
      case 'POST':
        return axios.post('http://127.0.0.1:8000/api/', {
          title: title,
          content: content,
        })
          .then(res => console.log(res))
          .catch(error => console.err(error));
      case 'PUT':
        return axios.post(`http://127.0.0.1:8000/api/${articleID}`, {
          title: title,
          content: content,
        })
          .then(res => console.log(res))
          .catch(err => console.err(err));
    }
  }
  render() {
    return (
      <div>
        <Form onSubmit={(event) => this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}>
          <Form.Item label="Title:">
            <Input name="title" placeholder="Enter title..." />
          </Form.Item>
          <Form.Item label="Content:">
            <Input name="content" placeholder="Enter some content..." />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Submit</Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}