import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-on-primary)',
            borderRadius: '25px',
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: 'var(--color-primary-container)',
            }
          }
        },
        {
          props: { variant: 'outlined' },
          style: {
            borderColor: 'var(--color-outline-variant)',
            color: 'var(--color-on-surface)',
            borderRadius: '25px',
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              borderColor: 'var(--color-outline-variant)',
              backgroundColor: '#f4f3f2', // We might want to make this a CSS variable too
            }
          }
        }
      ]
    }
  }
});

export default theme;