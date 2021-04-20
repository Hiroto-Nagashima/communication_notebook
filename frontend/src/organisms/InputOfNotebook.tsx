import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import 'date-fns';
import { ComposedTextField } from '../atoms/TextField';
import { SimpleMenu } from '../molecules/SimpleMenu';
import { MultilineTextField } from '../atoms/TextArea';
import { RadioButtonsGroup } from '../molecules/RadioButtonsGroup';
import { VFC, ChangeEvent, memo, MouseEventHandler} from 'react';
import { DraggableDialog } from '../molecules/DraggableDialog';


export type Props={
  selectedDate: string
  dinner:string | null
  breakfast:string | null
  memo: string | null
  body_temperature: number | string|  null
  bath: string | null
  index: number
  anchorEl: HTMLElement | null
  isOpen:boolean
  onClose: ()=>void
  onChangeDinner:(e: ChangeEvent<HTMLInputElement>)=>void
  onChangeBreakfast:(e: ChangeEvent<HTMLInputElement>)=>void
  onChangeMemo:(e: ChangeEvent<HTMLInputElement>)=>void
  onChangeBodyTemperature:(e: ChangeEvent<HTMLInputElement>)=>void
  onChangeBath:(e: ChangeEvent<HTMLInputElement>)=>void
  onClickMenu:(event: React.MouseEvent<HTMLElement>, index: number) => void
  onClickButton:MouseEventHandler<HTMLButtonElement>
  onClickRegister:()=>void
  onClickDialogClose:()=>void
  onClickDialogOpen:()=>void
}
export const InputOfNotebook:VFC<Props>=memo((props)=> {
  const {
    selectedDate,
    dinner,
    breakfast,
    memo,
    body_temperature,
    bath,
    index,
    anchorEl,
    isOpen,
    onChangeDinner,
    onChangeBreakfast,
    onChangeMemo,
    onChangeBodyTemperature,
    onChangeBath,
    onClickMenu,
    onClose,
    onClickButton,
    onClickRegister,
    onClickDialogClose,
    onClickDialogOpen
  }= props

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
                <ComposedTextField textName="体温" placeholder="36.x" value={body_temperature} onChange={onChangeBodyTemperature}/>
              </Grid>
              <Grid item xs={5} >
                <RadioButtonsGroup title="入浴" labels={["有", "無"]} value={ bath } onChange={onChangeBath}/>
              </Grid>
            </Grid>
            <Grid item xs={12} >
              <SimpleMenu Index={index} onClickMenuItem={onClickMenu} anchorEl={anchorEl} onClose={onClose} onClickButton={onClickButton}/>
            </Grid>
            <Grid item xs={12} >
              <MultilineTextField label="夕食" row={4} value={dinner} onChange={onChangeDinner}/>
            </Grid>
            <Grid item xs={12} >
              <MultilineTextField label="朝食" row={4} value={breakfast} onChange={onChangeBreakfast}/>
            </Grid>
            <Grid item xs={12} >
              <MultilineTextField label="連絡事項" row={4} value={memo} onChange={onChangeMemo}/>
            </Grid>
            <Grid item xs={12} >
              <DraggableDialog isOpen={isOpen} onClickClose={onClickDialogClose} onClickOpen={onClickDialogOpen} onClickRegister={onClickRegister}/>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
})