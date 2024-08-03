import Header from '@/components/Header';
import SearchPage from './SearchPage';
import ThemeToggler from '@/components/ThemeToggler';
import { useTheme } from '@/theme/useTheme';

const Index = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className={`app ${theme}`}>
        <Header>
          <ThemeToggler />
        </Header>
        <SearchPage />
      </div>
    </>
  );
};

export default Index;
