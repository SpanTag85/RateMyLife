import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Slider,
  Button,
  Alert,
  Snackbar
} from '@mui/material';
import { format } from 'date-fns';

interface RatingQuestion {
  id: string;
  question: string;
  value: number;
}

const questions: RatingQuestion[] = [
  { id: 'migraine', question: 'Ranger migrenen din i dag (1 = ingen, 6 = ekstrem)', value: 1 },
  { id: 'mood', question: 'Hvordan er humøret ditt i dag (1 = dårlig, 6 = utmerket)', value: 3 },
  { id: 'energy', question: 'Hvor mye energi har du i dag (1 = ingen, 6 = høy)', value: 3 },
  { id: 'sleep', question: 'Hvor godt sov du i natt (1 = dårlig, 6 = utmerket)', value: 3 },
  { id: 'stress', question: 'Hvor stresset føler du deg (1 = ikke stress, 6 = meget stresset)', value: 1 },
];

const DailyRatingForm: React.FC = () => {
  const [ratings, setRatings] = useState<RatingQuestion[]>(questions);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleRatingChange = (questionId: string, value: number) => {
    setRatings(prev => 
      prev.map(q => 
        q.id === questionId ? { ...q, value } : q
      )
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simuler API-kall
    try {
      const data = {
        date: format(new Date(), 'yyyy-MM-dd'),
        ratings: ratings.reduce((acc, q) => ({
          ...acc,
          [q.id]: q.value
        }), {})
      };
      
      console.log('Submitting ratings:', data);
      
      // Her vil vi senere kalle Azure Functions API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setShowSuccess(true);
    } catch (error) {
      console.error('Error saving ratings:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSliderColor = (value: number) => {
    if (value <= 2) return 'success';
    if (value <= 4) return 'warning';
    return 'error';
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {format(new Date(), 'dd. MMMM yyyy')}
      </Typography>
      
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
        {ratings.map((question) => (
          <Card elevation={1} key={question.id}>
            <CardContent>
              <Typography variant="body1" gutterBottom>
                {question.question}
              </Typography>
              <Box sx={{ px: 2, py: 1 }}>
                <Slider
                  value={question.value}
                  onChange={(_, value) => handleRatingChange(question.id, value as number)}
                  min={1}
                  max={6}
                  step={1}
                  marks
                  valueLabelDisplay="on"
                  color={getSliderColor(question.value)}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" sx={{ px: 2 }}>
                <Typography variant="caption" color="text.secondary">
                  1
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  6
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box mt={4} textAlign="center">
        <Button
          variant="contained"
          size="large"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Lagrer...' : 'Lagre dagens vurdering'}
        </Button>
      </Box>

      <Snackbar
        open={showSuccess}
        autoHideDuration={3000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Dagens vurdering er lagret!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DailyRatingForm;
