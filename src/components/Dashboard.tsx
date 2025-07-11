import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Paper
} from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format, subDays } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Mock data for demonstration
const generateMockData = () => {
  const days = 7;
  const labels = [];
  const migraineData = [];
  const moodData = [];
  const energyData = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = subDays(new Date(), i);
    labels.push(format(date, 'dd/MM'));
    migraineData.push(Math.floor(Math.random() * 4) + 1);
    moodData.push(Math.floor(Math.random() * 3) + 3);
    energyData.push(Math.floor(Math.random() * 3) + 3);
  }

  return { labels, migraineData, moodData, energyData };
};

const Dashboard: React.FC = () => {
  const { labels, migraineData, moodData, energyData } = generateMockData();

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Migræne',
        data: migraineData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Humør',
        data: moodData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        tension: 0.1,
      },
      {
        label: 'Energi',
        data: energyData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Velvære-trend siste 7 dager',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 6,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  const currentAverage = {
    migraine: (migraineData.reduce((a, b) => a + b, 0) / migraineData.length).toFixed(1),
    mood: (moodData.reduce((a, b) => a + b, 0) / moodData.length).toFixed(1),
    energy: (energyData.reduce((a, b) => a + b, 0) / energyData.length).toFixed(1),
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Oversikt og trender
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2, mb: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h6" color="error">
              Migræne
            </Typography>
            <Typography variant="h4">
              {currentAverage.migraine}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gjennomsnitt siste uke
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" color="primary">
              Humør
            </Typography>
            <Typography variant="h4">
              {currentAverage.mood}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gjennomsnitt siste uke
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h6" color="success.main">
              Energi
            </Typography>
            <Typography variant="h4">
              {currentAverage.energy}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gjennomsnitt siste uke
            </Typography>
          </CardContent>
        </Card>
      </Box>

      <Paper elevation={2} sx={{ p: 3 }}>
        <Line data={chartData} options={chartOptions} />
      </Paper>
    </Box>
  );
};

export default Dashboard;
