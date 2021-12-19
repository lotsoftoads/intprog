import './App.css';
import { Box, AppBar, Toolbar, Typography, Grid, Container, Card, CardContent, CardHeader } from '@mui/material';
import { useState, useEffect } from 'react';

// интерфейс с информацией о репозитории: названии, описании, ссылке на github.
interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
}

// асинхронный метод по получению данных от API при помощи fetch API
let getData = async () => {
  return fetch('https://api.github.com/users/mui-org/repos')
    .then(res => res.json())
    .then((res: GithubRepo[]) => {
      res.forEach((repos) => {
        console.log("name: ", repos.name);
        console.log("link: ", repos.html_url);
        console.log("description: ", repos.description);
        console.log("----------------------");
      });
      return res;
    })
};

let dataArray: GithubRepo[] = [];

function App() {

  // состояние компонента "приложение" - "массив репозиториев, полученный через API"
  const [data, setData] = useState(dataArray);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  });

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Репозитории библиотеки MUI
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>

        <Typography gutterBottom variant="h5" component="h2" sx={{ pt: '5%' }}>
          Репозитории:
        </Typography>

        <Grid container spacing={4} sx={{ pt: '2%' }}>
          {data.map((card) => (
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 100 }}>

                <CardHeader
                  title={card.name}
                  subheader={card.html_url}
                />

                <CardContent>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box >
  );
}

export default App;