import React, {Component} from 'react';
import { Form, Icon,  Button,Input } from 'antd';
import '../css/SignUp.css'
 export default class ForgotPasswordForm extends Component {
  render () {
    return (
      <div className="forgotPassword">
        <h3>
          重置密码
        </h3>
        <Form className="forgotPassword" onSubmit={this.props.onSubmit}> {/* 登录*/}
          <div className="row">
            <Input type="text" value={this.props.formData.email}
              onChange={this.props.onChange.bind(null, 'email')}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Email"/>
          </div>
          <div className="row actions">
            <Button type="submit" htmlType="submit">发送重置邮件</Button>
          </div>
          <div className='text'>
            <a href="#" onClick={this.props.onSignIn}>返回登录</a>
          </div>
        </Form>
      </div>
    )
  }
}