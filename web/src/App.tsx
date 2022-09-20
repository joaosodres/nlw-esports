import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import './styles/main.css';

import logoImg from './assets/logo_esports_nlw.svg';

import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';


import { CreateAddModal } from './components/CreateAddModal';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(response => {
        setGames(response.data);
      })
      ;
  }, []);

  return (
    <div className='max-w-[1344px] mx-auto flex items-center flex-col my-20'>
      <img src={logoImg} alt="" className='max-w-[400px]' />
      <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> está aqui.</h1>

      <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 gap-6 mt-16 ' >
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          );
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAddModal />

      </Dialog.Root>
    </div >
  );

}

export default App;
