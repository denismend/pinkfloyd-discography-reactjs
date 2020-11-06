import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

import { Container, Content, MenuButton, TextTitle } from './styles';

interface HeaderProps {
  userScroolDown: boolean;
  handleOpenDrawer: (newValue: boolean) => void;
  toogleDrawer: boolean;
}

const HeaderBar: React.FC<HeaderProps> = ({
  userScroolDown,
  handleOpenDrawer,
  toogleDrawer,
  children,
}) => {
  return (
    <Container isScrool={userScroolDown} drawerOpen={toogleDrawer}>
      <MenuButton
        onClick={() => {
          handleOpenDrawer(!toogleDrawer);
        }}
      >
        <MenuIcon fontSize="large" />
      </MenuButton>

      <Content drawerOpen={toogleDrawer}>
        <TextTitle>PINK FLOYD DISCOGRAPHY</TextTitle>
      </Content>

      {children}
    </Container>
  );
};

export default HeaderBar;
