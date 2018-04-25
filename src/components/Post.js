import React, { Component } from 'react';
import {Badge, Button, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPostSelect: props.onPostSelect,
      title: props.title,
      content: props.content,
      writer: props.writer,
      date: props.date
    };
  }

  renderMin() {
    return (
      <Row>
        <div className="post-container">
          <div className="Post">
            <div>
              <h1 className="Post-title">{this.state.title}</h1>
              <div className="Post-tag-container">
                <Badge color="secondary">Java</Badge>
                <Badge color="secondary">MySQL</Badge>
              </div>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">portrait</i>
              <p>{this.state.writer}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">query_builder</i>
              <p>{this.state.date}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">chat_bubble_outline</i>
              <p>16</p>
            <div className="Post-footer-item">
              <i className="material-icons">thumb_up</i>
              <p>46</p>
            </div>
            </div>
          </div>
        </div>
      </Row>

    )
  }

  renderExpanded() {
    return (
      <Row>
        <div className="post-container">
          <div className="Post">
            <div>
              <h1 className="Post-title">{this.state.title}</h1>
              <div className="Post-tag-container">
                <Badge color="secondary">Java</Badge>
                <Badge color="secondary">MySQL</Badge>
              </div>
            </div>
            <div>
              <p>{this.state.content}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">portrait</i>
              <p>{this.state.writer}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">query_builder</i>
              <p>{this.state.date}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">chat_bubble_outline</i>
              <p>16</p>
            </div>
            <button className="post-like">
                <i className="material-icons">thumb_up</i>
                <p>46</p>
            </button>
          </div>
        </div>
      </Row>
    );
  }

  renderLogin() {
    return (
      <Container>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <h1>Login</h1>
            <Form className="form">
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="admin"/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password"/>
              </FormGroup>
              <Button>Log In</Button>
            </Form>
          </div>
        </div>
      </Container>
    );
  }

  render() {
    return this.renderExpanded();
  }
}