import React, { useState } from "react";
import {
  Modal,
  Form,
  Input,
  DatePicker,
  Button,
  Row,
  Col,
  message,
} from "antd";
import { ROW_GUTTER } from "constants/ThemeConstant";

const UserView = ({ visible, data, close }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const key = "updatable";
    message.loading({ content: "Sending data to the server...", key });
    setTimeout(() => {
      console.log("Data sent to the server:", values);
      message.success({
        content: "Data successfully saved!",
        key,
        duration: 2,
      });
      setLoading(false);
      close();
    }, 1000);
  };

  const initialValues = data
    ? {
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone,
        website: data.website,
        address: `${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`,
        company: data.company.name,
        dateOfBirth: null,
      }
    : {};

  return (
    <Modal
      title="User Details"
      visible={visible}
      onCancel={close}
      footer={null}
    >
      {data && (
        <Form
          form={form}
          layout="vertical"
          initialValues={initialValues}
          onFinish={onFinish}
        >
          <Row gutter={ROW_GUTTER}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input the name!" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input the username!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please enter a valid email!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Date of Birth" name="dateOfBirth">
                <DatePicker className="w-100" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Phone" name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="Website" name="website">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item label="Address" name="address">
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24}>
              <Form.Item label="Company" name="company">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <div className="text-right">
            <Button onClick={close} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" loading={loading}>
              Save Changes
            </Button>
          </div>
        </Form>
      )}
    </Modal>
  );
};

export default UserView;
