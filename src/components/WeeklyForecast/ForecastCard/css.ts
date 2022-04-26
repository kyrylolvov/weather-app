export const cardContainer: CSSWithTheme = () => ({
  padding: '18px 22px',
  backgroundColor: 'var(--background-secondary)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cardDate: CSSWithTheme = () => ({
  color: 'var(--typograghy-main)',
  fontSize: '16px',
});

export const cardIconContainer: CSSWithTheme = () => ({
  marginTop: '16px',

  '& svg': {
    height: '72px',
    width: '72px',
    margin: '0 auto',
  },
});

export const temperatureContainer: CSSWithTheme = () => ({
  marginTop: '24px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '16px',
  gap: '16px',

  fontSize: '16px',
  fontWeight: 500,
});

export const maxTemperature: CSSWithTheme = () => ({
  color: 'var(--typograghy-main)',
});

export const minTemperature: CSSWithTheme = () => ({
  color: 'var(--typograghy-secondary)',
});
