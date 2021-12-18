import React from 'react';
import './App.css';
import { Box, AppBar, Toolbar, Typography, Button, Grid, CardMedia, Container, Card, CardContent, CssBaseline } from '@mui/material';

import giftBox from './gift-box.png';
import champange from './champagne.png';
import confetti from './confetti.png';
import dinnerTable from './dinner-table.png';
import idCard from './id-card.png';
import videoCamera from './video-camera.png';

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            All Fun & Games
          </Typography>
          <Button color="inherit">главная</Button>
          <Button color="inherit">тарифы</Button>
          <Button color="inherit">мероприятия</Button>
          <Button color="inherit">адреса и контакты</Button>
        </Toolbar>
      </AppBar>

      <Container>

        <Typography gutterBottom variant="h5" component="h2" sx={{ pt: '5%' }}>
          Мерприятия
        </Typography>

        <Grid container spacing={4} sx={{ pt: '2%' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardMedia
                component="img"
                sx={{ pt: '5%' }}
                image={giftBox}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  ДНИ РОЖДЕНИЯ
                </Typography>
                <Typography>
                  Наше тайм-кафе - идеальное место для проведения вашего праздника. Вы можете зарезервировать зал заранее только для себя или собраться небольшой компанией в любое время. Для именинника и его гостей действуют особые предложения!
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardMedia
                component="img"
                sx={{ pt: '5%' }}
                image={videoCamera}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  КИНОВЕЧЕРА
                </Typography>
                <Typography>
                  По пятницам с 18:00 мы проводим киновечера в одном из залов. Узнать фильм текущей недели можно у сотрудников на стойке. Попкорн бесплатно!                  </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardMedia
                component="img"
                sx={{ pt: '5%' }}
                image={dinnerTable}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  ВЫПУСКНЫЕ
                </Typography>
                <Typography>
                  и так далее текст текст тт е е е еее е т т т тттекст текст текст текст текст текст текст текст текст текст текст текст текст текст текст тексттекст текст текст                  </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardMedia
                component="img"
                sx={{ pt: '5%' }}
                image={champange}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  КОРПОРАТИВЫ
                </Typography>
                <Typography>
                  и так далее текст текст тт е е е еее е т т т тттекст текст текст текст текст текст текст текст текст текст текст текст текст текст текст тексттекст текст текст                  </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardMedia
                component="img"
                sx={{ pt: '5%' }}
                image={confetti}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  ВЕЧЕРИНКИ
                </Typography>
                <Typography>
                  и так далее текст текст тт е е е еее е т т т тттекст текст текст текст текст текст текст текст текст текст текст текст текст текст текст тексттекст текст текст                  </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 100 }}>
              <CardMedia
                component="img"
                sx={{ pt: '5%' }}
                image={idCard}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  МАСТЕР-КЛАССЫ
                </Typography>
                <Typography>
                  и так далее текст текст тт е е е еее е т т т тттекст текст текст текст текст текст текст текст текст текст текст текст текст текст текст тексттекст текст текст                  </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default App;