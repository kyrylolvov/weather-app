import cloudBackground from '../assets/img/Cloud-background.svg';
import cloudBackgroundLight from '../assets/img/Cloud-background-light.svg';

export const container: CSSWithTheme = (theme) => ({
  backgroundColor: 'var(--background-main)',
  height: '100vh',
  width: '100vw',
  transition: 'all 0.3s',

  display: 'grid',
  gridTemplateColumns: '1fr 2fr',

  [theme.breakpoints.down(1000)]: {
    gridTemplateColumns: '2fr 3fr',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr 1fr',
  },

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    height: 'auto',
  },
});

export const sidebar = (currentTheme: string): CSSWithTheme => () => ({
  transition: 'all 0.3s',
  backgroundColor: 'var(--background-secondary)',
  backgroundImage: currentTheme === 'light' ? `url(${cloudBackgroundLight}) !important` : `url(${cloudBackground}) !important`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '110%',
  backgroundPosition: '50% 140px',
});

export const mainContainer: CSSWithTheme = (theme) => ({
  padding: '48px',
  overflowY: 'scroll',

  [theme.breakpoints.down('md')]: {
    overflowY: 'auto',
  },
});

export const loaderContainer: CSSWithTheme = () => ({
  width: '100vw',
  flexDirection: 'column',
  height: '100vh',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'var(--background-main)',
});

export const loaderText: CSSWithTheme = () => ({
  fontSize: '18px',
  fontWeight: 500,
  color: 'var(--typograghy-main)',
});
