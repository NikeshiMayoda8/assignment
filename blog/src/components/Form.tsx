import React from 'react';
import { Form, Input, Button } from 'antd';
import { FormInstance } from 'antd/es/form';

interface CustomFormProps {
  onSubmit: (values: any) => void;
  form: FormInstance;
}

const CustomForm: React.FC<CustomFormProps> = ({ onSubmit, form }) => {
  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onSubmit}
      className="custom-form"
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Please enter a title' }]}
      >
        <Input placeholder="Enter title" />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please enter a description' }]}
      >
        <Input.TextArea placeholder="Enter description" rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
