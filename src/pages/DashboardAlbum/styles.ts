import styled, { css } from 'styled-components';

import { IconButton } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';

interface AlbumsViewProps {
  drawerOpen?: boolean;
}

export const Container = styled.main`
  position: relative;
  height: 20vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-bottom: 20px;

  background: #202020;
`;

export const ContainerDrawer = styled(Drawer)`
  overflow: hidden;

  .MuiPaper-root {
    background: transparent;
  }

  .MuiDrawer-paperAnchorDockedLeft {
    border-right: 0;
  }

  .MuiPaper-root::-webkit-scrollbar {
    width: 5px;
  }

  .MuiPaper-root::-webkit-scrollbar-track {
    background: transparent;
    border: 0;
  }

  .MuiPaper-root::-webkit-scrollbar-thumb {
    background-color: #505050;
    border-radius: 5px;
  }
`;

export const DrawerHeader = styled.div`
  height: 100px;
  background: #505050;
  display: flex;
  justify-content: flex-end;
`;

export const DrawerHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  ::-webkit-scrollbar {
    width: 11px;
  }

  scrollbar-width: thin;
  scrollbar-color: var(#90a4ae) var(#cfd8dc);

  ::-webkit-scrollbar-track {
    background: var(#cfd8dc);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(#90a4ae);
    border-radius: 6px;
    border: 3px solid var(#cfd8dc);
  }
`;

export const DrawerBackButton = styled(IconButton)``;

export const DrawerAlbumItem = styled.li`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  background-color: #202020;
  color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  p {
    margin-left: 0.5rem;
    text-transform: uppercase;
  }

  &:hover {
    background-color: #505050;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: -10px;
  display: flex;
  flex-direction: column;
  z-index: 1;

  > input {
    width: 260px;
    height: 40px;
    border: 1px solid #fff;
    outline: 0;
    padding: 0 14px;
    border-radius: 25px;

    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

export const AlbumsView = styled.div<AlbumsViewProps>`
  max-width: 1600px;
  padding: 0 20px 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;

  ${props =>
    props.drawerOpen &&
    css`
      margin-left: calc(255px - 20px);
    `};
`;
