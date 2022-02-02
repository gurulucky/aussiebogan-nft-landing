// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
// hooks
import useAuth from './hooks/useAuth';

// components
import LoadingScreen from './components/LoadingScreen';
import NotistackProvider from './components/NotistackProvider';
import ThemePrimaryColor from './components/ThemePrimaryColor';
import ThemeLocalization from './components/ThemeLocalization';

// ----------------------------------------------------------------------
import './App.css';

export default function App() {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
            <NotistackProvider>
              {isInitialized ? <Router /> : <LoadingScreen />}
            </NotistackProvider>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
}
