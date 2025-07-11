import { useMsal } from "@azure/msal-react";
import { Container, Typography, Button, Box, Paper } from '@mui/material';
import { loginRequest } from "./authConfig";
import DailyRatingForm from './components/DailyRatingForm';
import Dashboard from './components/Dashboard';

function App() {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch(e => {
      console.error(e);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup({
      postLogoutRedirectUri: "/",
      mainWindowRedirectUri: "/"
    });
  };

  const isAuthenticated = accounts.length > 0;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            RateMyLife
          </Typography>
          {isAuthenticated ? (
            <Box>
              <Typography variant="body2" sx={{ mr: 2, display: 'inline' }}>
                Velkommen, {accounts[0].name || accounts[0].username}
              </Typography>
              <Button variant="outlined" onClick={handleLogout}>
                Logg ut
              </Button>
            </Box>
          ) : (
            <Button variant="contained" onClick={handleLogin}>
              Logg inn med Microsoft
            </Button>
          )}
        </Box>

        {isAuthenticated ? (
          <Box>
            <Typography variant="h5" gutterBottom>
              Daglig velvære-registrering
            </Typography>
            <DailyRatingForm />
            <Box mt={4}>
              <Dashboard />
            </Box>
          </Box>
        ) : (
          <Box textAlign="center" py={8}>
            <Typography variant="h5" gutterBottom>
              Spor din daglige velvære
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Logg inn med din Microsoft-konto for å begynne å registrere daglige vurderinger 
              av migræne, humør og andre velvære-indikatorer.
            </Typography>
            <Button variant="contained" size="large" onClick={handleLogin}>
              Kom i gang
            </Button>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default App;
