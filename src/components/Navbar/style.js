import styled from "styled-components";

export const Container = styled.div`
  position: sticky;
  height: 64px;
  background: #0d263b;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  margin: 5px auto;
`;

Wrap.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

Wrap.Image = styled.img`
  width: 250px;
  height: 250px;
`;
Wrap.Control = styled.img``;
