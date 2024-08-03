import { useRouter } from 'next/router';
import DetailsPage from '../DetailsPage';

const Details = () => {
  const router = useRouter();
  console.log(router);
  return <DetailsPage />;
};

export default Details;
