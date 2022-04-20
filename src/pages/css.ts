import cloudBackground from '../assets/img/Cloud-background.svg';
import cloudBackgroundLight from '../assets/img/Cloud-background-light.svg';

export const container: CSSWithTheme = () => ({
  backgroundColor: 'var(--background-main)',
  height: '100vh',
  width: '100vw',
  transition: 'all 0.3s',

  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
});

export const sidebar = (theme: string): CSSWithTheme => () => ({
  transition: 'all 0.3s',
  backgroundColor: 'var(--background-secondary)',
  backgroundImage: theme === 'light' ? `url(${cloudBackgroundLight}) !important` : `url(${cloudBackground}) !important`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '110%',
  backgroundPosition: '50% 140px',
});
