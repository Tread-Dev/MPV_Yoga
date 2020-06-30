import React, { useState } from 'react';
import {
  Button,
  Image,
  Grid,
  Embed,
  Modal,
  Header,
  Form,
} from 'semantic-ui-react';

const Demo = () => {
  const [isOpenModal, setOpenModal] = useState(true);

  return (
    <Modal
      open={isOpenModal}
      closeOnDimmerClick={true}
      size='small'
      onClose={(e) => setOpenModal(false)}
    >
      <Form style={{ margin: '5%' }}>
        <Grid columns='equal' centered>
          <Grid.Row>
            <Grid.Column style={{ textAlign: 'center' }}>
              <Header>How to build a workout using Tread?</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column style={{ textAlign: 'center' }}>
              <Embed
                id='m24gh3H3o1A'
                source='youtube'
                iframe={{
                  allowFullScreen: true,
                }}
                active={true}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column style={{ textAlign: 'center' }}>
              <Button
                onClick={(e) => setOpenModal(false)}
                style={{
                  background: '#4DD599',
                  borderRadius: '4px',
                  color: 'white',
                  boxShadow: '0px 4px 10px rgba(16, 156, 241, 0.24)',
                }}
              >
                Skip
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Modal>
  );
};

export default Demo;
