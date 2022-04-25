export const SwitchContainer: CSSWithTheme = () => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '& svg': {
    fill: 'var(--typograghy-secondary)',
  },
});

export const ThemeSwitch: CSSWithTheme = () => ({
  width: 42,
  height: 24,
  padding: 0,
  margin: '0 16px',
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 5,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(18px)',
      color: '#fff',
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none !important',
    backgroundColor: '#ffffff',
    width: 14,
    height: 14,
    transition: 'all 0.2s',
  },
  '& .MuiSwitch-track': {
    borderRadius: '12px',
    backgroundColor: 'var(--typograghy-secondary) !important',
    opacity: '1 !important',
  },

  '&:hover': {
    '& .MuiSwitch-thumb': {
      backgroundColor: 'var(--background-main)',
      transition: '0.2s',
    },
  },
});
