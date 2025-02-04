//My Main Focus was to learn how to use Material-UI with React and CRUD operations with MongoDB.

import React from "react";
import { Box, Button, Container, Grid, Typography, CssBaseline} from "@mui/material";
import { People as PeopleIcon, CalendarMonth as CalendarIcon, Settings as SettingsIcon, CheckCircle as CheckCircleIcon, Help as HelpIcon, WbSunny as SunIcon, } from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796b",
      dark: "#004d40",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        {/* Hero Section */}
        <Container maxWidth="md" sx={{ textAlign: "center", py: 8 }}>
          <SunIcon sx={{ fontSize: 40, color: "warning.main", mb: 2 }} />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight="bold"
          >
            Start the year strong with the top-rated Employee.
          </Typography>
        </Container>

        {/* Feature Grid */}
        <Box sx={{ bgcolor: "grey.50", py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              textAlign="center"
              gutterBottom
              fontWeight="bold"
            >
              But wait, there's more.
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                { icon: <PeopleIcon />, label: "Team Management" },
                { icon: <CalendarIcon />, label: "Scheduling" },
                { icon: <SettingsIcon />, label: "Automation" },
                { icon: <CheckCircleIcon />, label: "Compliance" },
                { icon: <HelpIcon />, label: "Support" },
              ].map((feature, i) => (
                <Grid item xs={6} md={2.4} key={i} sx={{ textAlign: "center" }}>
                  <Box sx={{ color: "primary.main", mb: 1 }}>
                    {React.cloneElement(feature.icon, { sx: { fontSize: 40 } })}
                  </Box>
                  <Typography variant="subtitle1">{feature.label}</Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Image Section */}
        <Container maxWidth="lg" sx={{ textAlign: "center", py: 6 }}>
          <Grid container spacing={6} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <img
                src="https://miro.medium.com/v2/format:webp/0*MlKTgKSekE-Ahhzw.jpg"
                alt="Image1"
                style={{ width: "100%", height: "96%", borderRadius: 12 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="https://media.licdn.com/dms/image/v2/D5612AQHMhqcrIU66mA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703654505170?e=1744243200&v=beta&t=pAQDiwcZ1xDYbFQRAaDzX3kROGYwWji-IVzm1-kenMQ"
                alt="Image2"
                style={{ width: "100%", height: "95%", borderRadius: 12 }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <img
                src="https://www.timedoctor.com/blog/images/2020/01/employee-management-1536x1024.jpg.webp"
                alt="Image3"
                style={{ width: "100%", height: "94%", borderRadius: 12 }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* CTA Section */}
        <Box sx={{ bgcolor: "primary.dark", color: "white", py: 8 }}>
          <Container maxWidth="md" sx={{ textAlign: "center" }}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              See how our platform stacks up against other providers.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "primary.main",
                },
              }}
            >
              Compare Now
            </Button>
          </Container>
        </Box>

        {/* Footer Section */}
        <Box sx={{ bgcolor: "grey.900", color: "white", py: 4, mt: 4 }}>
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" fontWeight="bold">
                  Company
                </Typography>
                <Typography variant="body2" color="grey.400">
                  About Us
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Careers
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Contact
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" fontWeight="bold">
                  Support
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Help Center
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Privacy Policy
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Terms of Service
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Typography variant="h6" fontWeight="bold">
                  Follow Us
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Facebook
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Twitter
                </Typography>
                <Typography variant="body2" color="grey.400">
                  LinkedIn
                </Typography>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="grey.500"
              textAlign="center"
              sx={{ mt: 4 }}
            >
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
