export const sectionContainer: CSSWithTheme = () => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '64px',
});

export const sectionTitle: CSSWithTheme = () => ({
  fontSize: '24px',
  fontWeight: 700,
  color: 'var(--typograghy-main)',
});

export const cardsContainer: CSSWithTheme = (theme) => ({
  display: 'grid',
  marginTop: '32px',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '48px',
  gap: '48px',

  [theme.breakpoints.down(1000)]: {
    gridTemplateColumns: '1fr',
  },
});

export const cardComponent: CSSWithTheme = () => ({
  padding: '22px',
  backgroundColor: 'var(--background-secondary)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const cardTitle: CSSWithTheme = () => ({
  color: 'var(--typograghy-main)',
  fontSize: '16px',
  fontWeight: 500,
});

export const cardText: CSSWithTheme = () => ({
  color: 'var(--typograghy-main)',
  fontSize: '64px',
  fontWeight: 700,
});

export const progressBar: CSSWithTheme = () => ({
  margin: '0',
  width: '224px',
  height: '8px',
  borderRadius: 5,
  backgroundColor: 'var(--background-main)',

  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: 'var(--special-main)',
  },
});

export const progressBarNumbers: CSSWithTheme = () => ({
  margin: '0 auto',
  width: '224px',
  display: 'flex',
  justifyContent: 'space-between',

  '& .MuiTypography-root': {
    color: 'var(--typograghy-secondary)',
    fontSize: '12px',
    fontWeight: 700,
  },
});

export const progressBarPercentage: CSSWithTheme = () => ({
  margin: '0 auto',
  width: '224px',
  display: 'flex',
  justifyContent: 'flex-end',

  '& .MuiTypography-root': {
    color: 'var(--typograghy-secondary)',
    fontSize: '12px',
    fontWeight: 700,
  },
});

export const windContainer: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  marginTop: '8px',

  '& .MuiTypography-root': {
    color: 'var(--typograghy-main)',
    fontSize: '14px',
    fontWeight: 500,
    marginLeft: '12px',
  },
});

export const windIconContainer: CSSWithTheme = () => ({
  height: '30px',
  width: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'var(--typograghy-secondary)',
  borderRadius: '50%',

  '& svg': {
    fill: '#ffffff',
    height: '20px',
    width: '18px',
  },
});
