import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuItem, SideBarMenuCard } from './types/types';
import {FcHome, FcAutomatic, FcManager, FcFlowChart} from 'react-icons/fc';
// import profileImage from './util/profile.jpeg'
const profileImage = 'https://avatars.githubusercontent.com/u/38893187?v=4';

function App() {
  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'Inicio',
      icon: FcHome,
      url: '/'
    },
    {
      id: '2',
      label: 'Usuarios',
      icon: FcManager,
      url: '/'
    },
    {
      id: '3',
      label: 'Herramientas',
      icon: FcAutomatic,
      url: '/'
    },
    {
      id: '4',
      label: 'Familia',
      icon: FcFlowChart,
      url: '/'
    },
  ]

  const card: SideBarMenuCard  = {
    id: "card01",
    displayName: 'Iñaki Goikoetxea',
    title: 'Developer',
    photoUrl: profileImage,
    url: '/'
  }
  return (
    <>
      <SideBarMenu items={items} card={ card }/>
    </>
  );
}

export default App;
