import React from 'react'
import './Landing.css';
import  {Button, Form, Input} from 'antd';
import { useNavigate } from 'react-router-dom';

const onFinish = (values) => {
    console.log('Success', values); 
}

function Landing() {
    return (
        <>
        <html>
        <h1>LANDLORD (斗地主)</h1>
        <body>
            Welcome to Landlord Game! If you do not know the rules, you can find them <a href="https://www.pagat.com/climbing/doudizhu.html">HERE</a>
        </body>

        </html>
        <Form name = "displayName" labelCol = {{span: 8}} style = {{maxWidth: 600,}} initialValues= {{remember: true,}} onFinish={onFinish}>
        <Form.Item
            label="Username"
            name="username"
            rules={[
                {
                required: true,
                message: 'Please input your username!',
                },
            ]}
        >
      <Input />
    </Form.Item>
            <Form.Item>
                <Button type = "primary" htmlType = "submit">
                Play!
                </Button>
                
            </Form.Item>
        </Form>
        </>
    );
}

export default Landing;