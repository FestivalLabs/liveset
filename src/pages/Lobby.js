/**
 * View all active rooms.
 */

import React, { Fragment, useState, useEffect } from "react";

import styled from "styled-components";

import RoomPreview from "../components/RoomPreview";
import Header from "../components/Header";
import NewRoomModal from "../components/NewRoomModal";

export default function Lobby() {
  const [activeRooms, setActiveRooms] = useState([]);

  function renderActiveRooms() {
    return activeRooms.map(() => {
      return <RoomPreview />;
    });
  }

  return (
    <Fragment>
      <NewRoomModal />;
      <Header />
      <Container>{renderActiveRooms()}</Container>
    </Fragment>
  );
}

const Container = styled.div`
  display: flex;
`;
