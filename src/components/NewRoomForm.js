import React from "react";
import { Form, Input, Button } from "antd";

export default function NewRoomForm(props) {
  function onSubmit(formData) {
    navigateToRoom(formData.name);
  }

  function navigateToRoom(name) {
    console.log("clicked", name);
  }

  function onSubmitFailed() {
    console.error("Form submit failed");
  }

  return (
    <div>
      <Form name="basic" onFinish={onSubmit} onFinishFailed={onSubmitFailed}>
        <Form.Item
          label="Name your new room"
          name="name"
          rules={[{ required: true, message: "Please add a name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
