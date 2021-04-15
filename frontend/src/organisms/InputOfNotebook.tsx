import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import 'date-fns';
import { ComposedTextField } from '../atoms/TextField';
import { SimpleMenu } from '../molecules/Menu';
import { MultilineTextField } from '../atoms/TextArea';
import { DraggableDialog } from '../molecules/DraggableDialog';
import { RadioButtonsGroup } from '../molecules/RadioButtonsGroup';
import { VFC } from 'react';
import styled from 'styled-components'

export type Props={
  selectedDate: string
}
export const InputOfNotebook:VFC<Props>=(props)=> {
  const { selectedDate }= props
  // const SContainer = styled(Container)`
  //   display: grid;
  // `
  return (
    <>
      <Container maxWidth="xs" style={{ backgroundColor: '#D9E5FF', height: '800px' }}>
        <Box p={4}>
          <Grid container wrap="nowrap" direction="column" spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h4" align="center">
                {selectedDate}
              </Typography>
            </Grid>
            <Grid container justify="space-between">
              <Grid item xs={5} >
                <ComposedTextField textName="体温" placeholder="36.x"/>
              </Grid>
              <Grid item xs={5} >
                <RadioButtonsGroup title="入浴" labels={["有", "無"]}/>
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <SimpleMenu options={["悪い", "普通", "良い"]} label="機嫌"/>
            </Grid>
            <Grid item xs={12} >
              <MultilineTextField label="夕食" row={4}/>
            </Grid>
            <Grid item xs={12} >
              <MultilineTextField label="朝食" row={4}/>
            </Grid>
            <Grid item xs={12} >
              <MultilineTextField label="連絡事項" row={4}/>
            </Grid>
            <Grid item xs={12} >
              <DraggableDialog
                dialogContentText="この内容で登録しますか？"
                dialogTitle="登録確認"
                buttonLabel="登録"
                cancelButtonLabel= "戻る"
                submitButtonLabel= "登録"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}