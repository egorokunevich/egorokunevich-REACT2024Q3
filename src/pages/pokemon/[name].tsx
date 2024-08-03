// import DetailsPage from '../DetailsPage';
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// import { Pokemon } from '@/api/reduxApi';
// import { useTheme } from '@/theme/useTheme';
// import ThemeToggler from '@/components/ThemeToggler';
// import Header from '@/components/Header';
// import { useRouter } from 'next/router';

// const Details = ({
//   pokemonData,
// }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
//   const { theme } = useTheme();
//   const router = useRouter();
//   console.log(router);
//   return (
//     <div className={`app ${theme}`}>
//       <Header>
//         <ThemeToggler />
//       </Header>
//       <DetailsPage pokemon={pokemonData} />
//     </div>
//   );
// };

// export default Details;

// export const getServerSideProps = (async ({ params }) => {
//   const pokemonResponse = await fetch(
//     `https://pokeapi.co/api/v2/pokemon/${params?.name}`
//   );
//   const pokemonData: Pokemon = await pokemonResponse.json();
//   return { props: { pokemonData } };
// }) satisfies GetServerSideProps<{ pokemonData: Pokemon }>;
