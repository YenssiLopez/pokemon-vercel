import { Container, Text, Image } from '@nextui-org/react';
import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { useEffect, useState } from 'react';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritePokemon] = useState<number[]>([])


  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemon())
  }, [])

  return (
    <Layout title='Pokémons - Favoritos'>


      {
        favoritePokemons.length === 0

          ? (<NoFavorites />)
          : (<FavoritePokemons pokemons={favoritePokemons} />)
      }


    </Layout>
  )
};

export default FavoritesPage;
