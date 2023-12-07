import React, { useState } from "react";
import { Form, Input, Button, message, Modal } from "antd";
import { useChangePasswordMutation } from "@/api/user";
import { IUser } from "@/interfaces/user";

interface ChangePasswordProps {
  handleHideChangePassword: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ handleHideChangePassword }) => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(true);

  const [changePassword] = useChangePasswordMutation();

  const userId = JSON.parse(localStorage.getItem("user") || "{}")._id;

  const handlePasswordChange = () => {
    form.validateFields().then((values) => {
      changePassword({ ...values, _id: userId })
        .then(() => {
          message.success("Đổi mật khẩu thành công");
          form.resetFields();
          setVisible(false);
          handleHideChangePassword(); // Gọi hàm để ẩn form đổi mật khẩu
        })
        .catch(() => {
          message.error("Đổi mật khẩu không thành công");
        });
    });
  };

  const handleCancel = () => {
    setVisible(false);
    handleHideChangePassword(); // Gọi hàm để ẩn form đổi mật khẩu
  };

  return (
    <div>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        title={<h3 className="text-center">Đổi mật khẩu</h3>}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Hủy
          </Button>,
          <Button key="change" onClick={handlePasswordChange}>
            Đổi mật khẩu
          </Button>,
        ]}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="oldPassword"
            label="Mật khẩu hiện tại"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu hiện tại" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="newPassword"
            label="Mật khẩu mới"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu mới" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label="Mật khẩu xác nhận"
            rules={[{ required: true, message: "Vui lòng nhập lại mật khẩu mới" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ChangePassword;