import { Box } from "@mui/material"
import CardItem from "./Card/Card"

function ListCards() {
  return (
    <Box sx={{
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
      overflowX: 'hidden',
      overflowY: 'auto',
      maxHeight: (theme) => (`calc(${theme.trello.boardContentHieght} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`)
    }}>

      <CardItem />
      <CardItem temporaryHideMedia={true} />

    </Box>
  )
}

export default ListCards