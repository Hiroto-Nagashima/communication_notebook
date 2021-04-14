import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import styled from 'styled-components'

export default function SimpleContainer() {

  // const SContainer = styled(Container)`
  //   display: grid;
  // `
  return (
    <>
      <Container maxWidth="sm" style={{ backgroundColor: '#D9E5FF', height: '100vh' }}>
        <Box p={4}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                こんにちは
              </Typography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}