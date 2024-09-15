import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { FormInstance } from 'antd/es/form';

const { TextArea } = Input;

const Contact: React.FC = () => {
  const [form] = Form.useForm<FormInstance>();

  const handleSubmit = async (values: any) => {
    try {
      console.log('Form values:', values);
      message.success('Your message has been sent successfully!');
      form.resetFields();
    } catch (error) {
      message.error('There was an error sending your message. Please try again.');
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="contact-form"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name' }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          name="message"
          label="Message"
          rules={[{ required: true, message: 'Please enter your message' }]}
        >
          <TextArea placeholder="Enter your message" rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
