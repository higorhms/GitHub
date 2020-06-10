import React, { useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSun, FiMoon, FiUser, FiLogOut } from 'react-icons/fi';

import { Container, MenuToolTip, ThemeSwitcher } from './styles';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';

interface TooltipProps {
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ visible }) => {
  const { user } = useAuth();
  const { handleChangeTheme, theme } = useTheme();
  const { signOut } = useAuth();

  const handleLogOut = useCallback((): void => {
    signOut();
  }, [signOut]);

  const themeChangerIcon = useMemo(() => {
    return theme.title === 'light' ? <FiMoon /> : <FiSun />;
  }, [theme.title]);

  return (
    <Container isVisible={!!visible}>
      <MenuToolTip>
        <Link to={`/profile/${user?.login}/followers`}>
          <FiUser />
          <p>My Profile</p>
        </Link>
        <Link to="/" onClick={handleLogOut}>
          <FiLogOut />
          <p>Sign out</p>
        </Link>
        <ThemeSwitcher type="button" onClick={handleChangeTheme}>
          {themeChangerIcon}
        </ThemeSwitcher>
      </MenuToolTip>
    </Container>
  );
};

export default Tooltip;
