import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrStatusGood } from "react-icons/gr";
const StyledNotification = styled.div`
  position: fixed;
  top: 2rem;
  left: 40vw;
  color: #270;
  background-color: #dff2bf;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  div {
    padding-left: 1rem;
  }
`;
const Notification = ({ message }) => {
  return (
    <StyledNotification>
      <GrStatusGood size={22} color="#270" />
      <div>{message}</div>
    </StyledNotification>
  );
};

export default Notification;
