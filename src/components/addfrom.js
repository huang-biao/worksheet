import React from 'react'
import {Form,Input,Button,Icon } from 'antd';
// import Ajax from '../server.js'
import axios from 'axios'
class Info extends React.Component{
    componentDidMount() {
        // To disable submit button at the beginning.
        this.props.form.validateFields();
      }
    
 handleSubmit = e => {
        e.preventDefault();
        console.log(e)
        // axios.post('/api/kebiao',{
        //   body:{
        //       "stu_num":"2018214294"
        //   }
        // })
          // .then(function (response) {
          //   console.log(response);
          // })
          // .catch(function (error) {
          //   console.log(error);
          // })

          // fetch("api/kebiao", {
          //   body:{
          //     "stu_num":"2018214294"
          // },
          //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          //   credentials: 'same-origin', // include, same-origin, *omit
          //   headers: {
          //     "Content-Type":"application/x-www-form-urlencoded",
          //   },
          //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
          //   mode: 'cors', // no-cors, cors, *same-origin
          //   redirect: 'follow', // manual, *follow, error
          //   referrer: 'no-referrer', // *client, no-referrer
          // })
          // .then(response => response.json()) // parses response to JSON
        // Ajax().then((res,rej)=>{
        //   console.log(res)
        // });

        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
  
render(){

    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const usernameError = isFieldTouched('username') && getFieldError('username');
    const userIDError = isFieldTouched('userID') && getFieldError('userID');
    function  hasErrors(fieldsError){
        return Object.keys(fieldsError).some(field => fieldsError[field]);
      }
    return(       
  <Form layout="inline" onSubmit={this.handleSubmit}>
  <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
    {getFieldDecorator('username', {
      rules: [{ required: false, message: '请输入姓名!' }],
    })(
      <Input
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder="姓名"
      />,
    )}
  </Form.Item>
  <br/>
  <Form.Item validateStatus={userIDError ? 'error' : ''} help={userIDError || ''}>
    {getFieldDecorator('userID', {
      rules: [{ required: false, message: '请输入对应学号!' }],
    })(
      <Input
      prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
      placeholder="学号" allowClear maxLength={10}
    />,
    )}
  </Form.Item>
  
  <Form.Item>
    <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
      添加
    </Button>
  </Form.Item>
</Form>
  
    )
}

}


const InfoForm = Form.create({ name: 'horizontal_login' })(Info);

export default InfoForm