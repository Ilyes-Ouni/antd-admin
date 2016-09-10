import React from 'react'
import ReactDOM from 'react-dom'
import { ajax, config, logger } from '../../utils/lib'
import { Icon, message, Button, Row, Col, Form, Input, Select} from 'antd'
import './signIn.less'

const FormItem = Form.Item;

let SignIn = React.createClass({
  getInitialState(){
    return {
      loading: false
    }
  },
  handleSubmit(e){
    var _this = this;
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((errors, values) => {
      console.log(values);
    })
  },
  render(){
    const { getFieldProps } = this.props.form;
    const username = getFieldProps('username', {
      rules: [
        {required: true, message: '不能为空'}
      ]
    });
    const password = getFieldProps('password', {
      rules: [
        {required: true, message: '不能为空'}
      ]
    });
    return (
      <div className="signIn-from">
        <div className="logo mb">
          <img src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"/>
          <span>Ant Design</span>
        </div>
        <form horizontal onSubmit={this.handleSubmit} form={this.props.form}>
          <FormItem
            hasFeedback>
            <Input
              {...username}
              size="large"
              placeholder="账户"/>
          </FormItem>
          <FormItem
            hasFeedback>
            <Input
              {...password}
              size="large"
              placeholder="密码"/>
          </FormItem>
          <Row className="self-modal-footer">
           <Button type="primary" size="large" onClick={this.handleSubmit} loading={this.state.loading}>登录</Button>
          </Row>
        </form>
      </div>
    )
  }
})

SignIn = Form.create()(SignIn)

module.exports = SignIn