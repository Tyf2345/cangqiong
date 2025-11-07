import { SafetyCertificateOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Form, Image, Input, message, Row } from "antd";
import { login} from '@cangqion/services/employee'
export default function LoginPage() {
    const [form] = Form.useForm<{ username: string, password: string }>()
    const handleLogin = async() => {
       const data = await form.validateFields()
        if(!data.username?.trim()) {
            message.error("用户名不得为空")
            return
        }
        if(!data.password?.trim()) {
            message.error("密码不得为空")
            return
        }
        login
        
    }
    return <div className="w-full min-h-screen bg-[#333] flex justify-center items-center">
        <Row className=" bg-white rounded-lg p-10 h-full flex w-[70vw]">
            <Col span={18}>
                <Image preview={false} src="https://kk-promote-template.v3mh.com/answer-admin/prod/image/GI4J2DNbB/8709%E7%A7%A6%E6%97%B6%E6%98%8E%E6%9C%88%E8%A7%82%E7%9C%8B.png" />
            </Col>
            <Col span={6}>
                <div>

                    <Form form={form}>
                        <Form.Item>
                            <div className="text-2xl font-bold text-center mb-8">登录</div>
                        </Form.Item>
                        <Form.Item name="username">
                            <Input prefix={<UserOutlined />} placeholder="请输入" />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input.Password prefix={<SafetyCertificateOutlined />} placeholder="请输入" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="w-full" onClick={handleLogin}>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </Col>
        </Row>
    </div>
}