
import {Button, Container, Typography} from '@mui/material';

const TypoButtons = () => {
  return <div>
    <Container maxWidth='md'>

    <Typography 
      variant='h3' 
      component='h4' 
      align='center' 
      color='error'
      sx={{
        background: 'lightgrey', 
        mt:4, 
        border: '1px solid green'}}
      >
      Typography, Buttons, Container, Box
    </Typography>

    <Typography 
      variant='body2' 
      component='' 
      align='justify' 
      color=''
    
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus obcaecati nihil autem dicta modi dolorem expedita architecto minus. Quod accusamus rem ipsam recusandae quo reiciendis facere omnis velit? Culpa?
    </Typography>
    <Typography 
      variant='button' 
      component='' 
      align='justify' 
      color='secondary'
      sx={{display: 'inline-block', mt:4,}}
    
      >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse delectus obcaecati nihil autem dicta modi dolorem expedita architecto minus. Quod accusamus rem ipsam recusandae quo reiciendis facere omnis velit? Culpa?
    </Typography>

    </Container>
    
    <Container maxWidth= 'md'>
        <Button variant='contained' color='secondary'>CLICK</Button>
        <Button variant='outlined' color='success'>SEND</Button>

    </Container>
    
    
  </div>;
};

export default TypoButtons;
