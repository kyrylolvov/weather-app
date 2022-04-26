export const SwitchContainer: CSSWithTheme = (theme) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gridGap: '26px',
  gap: '26px',
  marginTop: '64px',

  [theme.breakpoints.down(1350)]: {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },

  [theme.breakpoints.down(1150)]: {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  [theme.breakpoints.down(1000)]: {
    gridTemplateColumns: '1fr 1fr',
  },

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
});

export const SwitchContainers: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '& svg': {
    fill: 'var(--typograghy-secondary)',
  },
});
