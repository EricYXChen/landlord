import React from 'react'
import './Landing.css';
import  {Button, Form, Input} from 'antd';
import { useNavigate } from 'react-router-dom';

var name;
function Landing() {
    const navigate = useNavigate();
    const OnFinish = (value) => {
        name = value
        navigate('/board', { state: name })
    }
    return (

        <>
        <h1>LANDLORD (斗地主)</h1>
        <body>
            Welcome to Landlord Game! If you do not know the rules, you can find them <a href="https://www.pagat.com/climbing/doudizhu.html">HERE</a>
        </body>
        <Form name = "displayName" labelCol = {{span: 8}} style = {{maxWidth: 600,}} initialValues= {{remember: true,}} onFinish={OnFinish}>
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