import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Card,
  CardContent
} from '@mui/material';
import {
  PlayArrow as PlayArrowIcon,
  ViewList as ViewListIcon,
  Image as ImageIcon,
  Timeline as TimelineIcon,
  AccountTree as AccountTreeIcon
} from '@mui/icons-material';
import ModuleCard from './components/ModuleCard';

const CognitiveTaskBuilder = () => {
  const [currentView, setCurrentView] = useState('home');
  const [taskName, setTaskName] = useState('New task');
  const [taskNameError, setTaskNameError] = useState('');
  const [taskData, setTaskData] = useState({
    inputs: [],
    resources: [],
    trials: [],
    blocks: []
  });

  const validateTaskName = (name) => {
    if (!name.trim()) {
      setTaskNameError('Task name is required');
      return false;
    }
    if (name.trim().length < 3) {
      setTaskNameError('Task name must be at least 3 characters');
      return false;
    }
    // Could add duplicate name checking logic here in the future
    setTaskNameError('');
    return true;
  };

  const handleTaskNameChange = (event) => {
    const newName = event.target.value;
    setTaskName(newName);
    validateTaskName(newName);
  };

  const handleModuleClick = (moduleType) => {
    setCurrentView(moduleType);
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const modules = [
    {
      id: 'input',
      title: 'Input Manager',
      description: 'Start your cognitive task here by configuring the layout, display size, and inputs.',
      icon: <ViewListIcon sx={{ fontSize: 40, color: '#6366f1' }} />,
      color: '#e0e7ff'
    },
    {
      id: 'resource',
      title: 'Resource Manager',
      description: 'Upload your visual and audio assets to create dynamic sets of resources and stimuli for your cognitive task.',
      icon: <ImageIcon sx={{ fontSize: 40, color: '#06b6d4' }} />,
      color: '#cffafe'
    },
    {
      id: 'trial',
      title: 'Trial Builder',
      description: 'Compose your resource sets into structured trials. Start by choosing a trial template or build your own trial structure from scratch.',
      icon: <TimelineIcon sx={{ fontSize: 40, color: '#8b5cf6' }} />,
      color: '#ede9fe'
    },
    {
      id: 'block',
      title: 'Block Sequencer',
      description: 'Group your trials into blocks and configure or upload one or more sets of trial sequences for each block.',
      icon: <AccountTreeIcon sx={{ fontSize: 40, color: '#ec4899' }} />,
      color: '#fce7f3'
    }
  ];

  const ModuleDetailView = ({ moduleId }) => {
    const module = modules.find(m => m.id === moduleId);
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Button 
            variant="outlined" 
            onClick={handleBackToHome}
            sx={{ mb: 3 }}
          >
            ← Back to Home
          </Button>
          <Typography variant="h4" component="h1" gutterBottom>
            {module?.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {module?.description}
          </Typography>
        </Box>
        
        <Card sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            {module?.title} Configuration
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            This is where the detailed configuration for {module?.title.toLowerCase()} would go.
            Each module will have its own specific interface and settings.
          </Typography>
          <Button variant="contained" sx={{ mr: 2 }}>
            Configure
          </Button>
          <Button variant="outlined">
            Save & Continue
          </Button>
        </Card>
      </Container>
    );
  };

  const HomePage = () => (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Main Module Grid */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {modules.map((module) => (
          <ModuleCard 
            key={module.id} 
            module={module} 
            onModuleClick={handleModuleClick}
          />
        ))}
      </Grid>

      {/* Export/Import Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1f2937',
            color: 'white',
            borderRadius: 25,
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#111827'
            }
          }}
        >
          Export
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#1f2937',
            color: 'white',
            borderRadius: 25,
            px: 4,
            py: 1.5,
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#111827'
            }
          }}
        >
          Import
        </Button>
      </Box>
    </Container>
  );

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <Box 
        sx={{ 
          backgroundColor: 'white',
          borderBottom: '1px solid #e5e7eb',
          py: 2,
          px: 3
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 'bold',
                color: '#1f2937',
                fontSize: '2rem'
              }}
            >
              curi🧠us
            </Typography>

            {/* Task Name Field */}
            <Box sx={{ maxWidth: 400, flex: 1, mx: 4 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Task Name
              </Typography>
              <TextField
                fullWidth
                value={taskName}
                onChange={handleTaskNameChange}
                error={!!taskNameError}
                helperText={taskNameError}
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-error': {
                      '& fieldset': {
                        borderColor: '#ef4444',
                      },
                    },
                  },
                  '& .MuiFormHelperText-root.Mui-error': {
                    color: '#ef4444',
                  },
                }}
              />
            </Box>

            {/* Preview Button */}
            <Button
              variant="contained"
              startIcon={<PlayArrowIcon />}
              disabled={!!taskNameError}
              sx={{
                backgroundColor: '#93c5fd',
                color: '#1e40af',
                borderRadius: 25,
                px: 3,
                py: 1,
                textTransform: 'none',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: '#7dd3fc'
                },
                '&:disabled': {
                  backgroundColor: '#e5e7eb',
                  color: '#9ca3af'
                }
              }}
            >
              Preview
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      {currentView === 'home' ? (
        <HomePage />
      ) : (
        <ModuleDetailView moduleId={currentView} />
      )}
    </Box>
  );
};

export default CognitiveTaskBuilder;
