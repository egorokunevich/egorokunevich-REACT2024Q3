import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <Link to={'controlled'}>Controlled</Link>
          <Link to={'uncontrolled'}>Uncontrolled</Link>
        </ul>
      </nav>
    </>
  );
};

export default Index;
