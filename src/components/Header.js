import React from "react";
import { Button, PageHeader } from "antd";
import { useDispatch } from "react-redux";

import ModalActions from "../store/modal";

export default function Header() {
  const dispatch = useDispatch();

  function openNewRoomForm() {
    dispatch(ModalActions.open("newRoomForm"));
  }
  return (
    <div>
      <PageHeader
        ghost={false}
        title="Live Set"
        subTitle="Live-streamed musical collaboration"
        extra={[
          <Button key="1" type="primary" onClick={openNewRoomForm}>
            Start a new jam
          </Button>,
        ]}
      />
    </div>
  );
}
