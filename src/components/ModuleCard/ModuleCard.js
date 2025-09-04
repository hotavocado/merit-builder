import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Grid
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const ModuleCard = ({ module, onModuleClick }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card 
        sx={{ 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)'
          },
          backgroundColor: 'var(--color-surface)',
          border: '1px solid var(--color-surface-variant)',
          borderRadius: '8px',
          boxShadow: 'none'
        }}
      >
        <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
          <Typography variant="h6" component="h2" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
            {module.title}
          </Typography>
          
          <Box 
            sx={{ 
              width: 120, 
              height: 120, 
              borderRadius: '50%', 
              backgroundColor: module.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
              position: 'relative'
            }}
          >
            {module.icon}
            <Box
              sx={{
                position: 'absolute',
                bottom: -5,
                right: -5,
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'var(--color-surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <AddIcon sx={{ color: 'var(--color-primary)' }} />
            </Box>
          </Box>
          
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ mb: 3, lineHeight: 1.5, fontSize: '0.9rem' }}
          >
            {module.description}
          </Typography>
          
          <Button
            variant="outlined"
            onClick={() => onModuleClick(module.id)}
            sx={{ px: 4, py: 1 }}
          >
            Go
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ModuleCard;