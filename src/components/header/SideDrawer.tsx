import React from 'react';
import { Drawer, List, ListItem } from '@mui/material';

interface Props {
  isOpen: boolean;
  onClose: (val: boolean) => void;
}

interface Link {
  where: string;
  value: string;
}

const SideDrawer = ({ isOpen, onClose }: Props) => {
  const links: Link[] = [
    { where: 'featured', value: 'To top' },
    { where: 'venuenfo', value: 'Venue NFO' },
    { where: 'highlights', value: 'Highlights' },
    { where: 'pricing', value: 'Pricing' },
    { where: 'location', value: 'Location' },
  ];

  const renderItem = (item: Link) => (
    <ListItem button onClick={() => console.log(item.where)} key={item.where}>
      {item.value}
    </ListItem>
  );

  return (
    <Drawer anchor='right' open={isOpen} onClose={() => onClose(false)}>
      <List component='nav'>{links.map(item => renderItem(item))}</List>
    </Drawer>
  );
};

export default SideDrawer;
