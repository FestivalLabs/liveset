import React, { useState } from "react";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";

import NewRoomForm from "./NewRoomForm";

import ModalActions from "../store/modal";

export default function NewRoomModal(props) {
  const dispatch = useDispatch();

  const open = useSelector((st) => st.modal.newRoomForm);

  function close() {
    dispatch(ModalActions.close("newRoomForm"));
  }

  return (
    <Modal
      destroyOnClose={true}
      footer={null}
      maskClosable={true}
      onCancel={close}
      title="Start a new jam room"
      visible={open}
    >
      <NewRoomForm />
    </Modal>
  );
}
