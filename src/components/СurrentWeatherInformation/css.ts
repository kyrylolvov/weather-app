export const container: CSSWithTheme = () => ({
  padding: '42px 46px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  height: '100%',
  justifyContent: 'space-between',
});

export const buttonsContainer: CSSWithTheme = () => ({
  display: 'flex',
  justifyContent: 'space-between',
});

export const searchButton: CSSWithTheme = (theme) => ({
  height: '40px',
  width: '180px',
  borderRadius: '4px',
  backgroundColor: 'var(--typograghy-secondary)',
  color: '#ffffff',
  transition: 'all 0.2s',

  '&:hover': {
    backgroundColor: 'var(--typograghy-secondary)',
    color: '#ffffff',

    [theme.breakpoints.up('md')]: {
      transform: 'scale(1.02)',
    },
  },
});

export const navigationButton: CSSWithTheme = (theme) => ({
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--typograghy-secondary)',
  color: '#ffffff',
  transition: 'all 0.2s',

  '&:hover': {
    backgroundColor: 'var(--typograghy-secondary)',
    color: '#ffffff',

    [theme.breakpoints.up('md')]: {
      transform: 'scale(1.02)',
    },
  },
});

export const iconContainer: CSSWithTheme = () => ({
  margin: '0 auto',
});

export const weatherContainer: CSSWithTheme = () => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const temperatureText: CSSWithTheme = () => ({
  fontSize: '108px',
  lineHeight: '98px',
  marginTop: '-16px',
  fontWeight: 500,
  color: 'var(--typograghy-main)',
});

export const weatherText: CSSWithTheme = () => ({
  fontSize: '36px',
  fontWeight: 500,
  color: 'var(--typograghy-secondary)',
});

export const dateText: CSSWithTheme = () => ({
  fontSize: '18px',
  fontWeight: 500,
  color: 'var(--typograghy-secondary)',
});

export const textWithIcon: CSSWithTheme = () => ({
  color: 'var(--typograghy-secondary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '32px',
});
