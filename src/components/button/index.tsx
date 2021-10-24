import React from 'react';
import { Button } from '@mui/material';

import TicketIcon from '../../assets/images/icons/ticket.png';

interface IProps {
  children?: React.ReactNode;
  link?: string;
  size?: 'small' | 'large' | 'medium' | undefined;
  style?: Record<string, unknown>;
  iconTicket?: boolean;
}

const MyButton = ({ children, link, size, style, iconTicket }: IProps) => {
  return (
    <Button
      href={link}
      variant='contained'
      size={size ? size : 'large'}
      style={{
        background: '#8e8e8e',
        color: '#ffffff',
        ...style,
      }}
    >
      {iconTicket && (
        <img src={TicketIcon} className='iconImage' alt='icon_button' />
      )}
      {children}
    </Button>
  );
};

export default MyButton;
