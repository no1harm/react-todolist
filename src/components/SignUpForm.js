import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import '../css/SignUp.css'

export default function (props) {
  return (
    <Form className="signUp" onSubmit={props.onSubmit.bind(this)}> {/* 注册*/}
      <div className="row">
        <Input type="text" value={props.formData.email}
          onChange={props.onChange.bind(null, 'email')}
          prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
      </div>
      <div className="row">
        <Input type="text" value={props.formData.username}
          maxLength="10"
          onChange={props.onChange.bind(null, 'username')}
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username 限制10个字符" />
        {/* bind 不仅可以绑定 this，还可以绑定第一个参数 */}
      </div>
      <div className="row">
        <Input type="password" value={props.formData.password}
          onChange={props.onChange.bind(null, 'password')}
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Password" />
      </div>
      <div className="row actions">
        <Button type="primary" htmlType="submit">注册</Button>
      </div>
    </Form>
  )
}