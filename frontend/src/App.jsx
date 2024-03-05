import React from 'react';
import { Center, Container, SimpleGrid, Card, Title, Image } from '@mantine/core';

import logo from '/public/lightspace_logo_small.png'

function App() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <SimpleGrid cols={3} spacing="lg">
      <Card shadow="sm" mah={100} maw={100} padding="lg" style={{background: 'black'}}>
            <Image src={logo} width={100} height={100}/>
      </Card>
      <Card shadow="sm" padding="lg" maw={100} mah={100} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'black', height: 200 }}>
            <Title style={{color: 'white'}}>B</Title>
      </Card>
      <Card shadow="sm" mah={100} maw={100} padding="lg" style={{background: 'black'}}>
            <Image src={logo} width={100} height={100}/>
      </Card>
      <Card shadow="sm" padding="lg" maw={100} mah={100} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'black', height: 200 }}>
            <Title style={{color: 'white'}}>T</Title>
      </Card>
      <Card shadow="sm" mah={100} maw={100} padding="lg" style={{background: 'black'}}>
            <Image src={logo} width={100} height={100}/>
      </Card>
      <Card shadow="sm" mah={100} maw={100} padding="lg" style={{background: 'black'}}>
            <Image src={logo} width={100} height={100}/>
      </Card>
      <Card shadow="sm" mah={100} maw={100} padding="lg" style={{background: 'black'}}>
            <Image src={logo} width={100} height={100}/>
      </Card>
      <Card shadow="sm" mah={100} maw={100} padding="lg" style={{background: 'black'}}>
            <Image src={logo} width={100} height={100}/>
      </Card>
      <Card shadow="sm" padding="lg" maw={100} mah={100} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'black', height: 200 }}>
            <Title style={{color: 'white'}}>E</Title>
      </Card>

      </SimpleGrid>
    </div>
  );
}

export default App;
