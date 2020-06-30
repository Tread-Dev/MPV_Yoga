import React from 'react';
import {
  Button,
  Segment,
  Menu,
  Input,
  Header,
  Responsive,
  Image,
} from 'semantic-ui-react';
import './App.css';
import logo from './Logo.png';

const Navbar = () => {
  return (
    // <Menu style={{ background: "navy"}} size="large">
    <Responsive
      as={Menu}
      style={{ background: '#6095FF', textAlign: 'center', borderRadius: '0' }}
    >
      <Menu.Item>
        <Image src={logo} size='tiny' />
      </Menu.Item>

      <Menu.Item
        style={{ textAlign: 'center', color: 'white' }}
        className='workoutname'
      >
        Workout Builder
      </Menu.Item>
      {/* <Menu.Item style={{ textAlign: "center", color: "white" }} >
        <Button primary onClick>Start Tour</Button>
      </Menu.Item> */}
    </Responsive>
  );
};

export default Navbar;
