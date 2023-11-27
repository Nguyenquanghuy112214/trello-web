
import Container from '@mui/material/Container'
import Appbar from '../../components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
export default function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Appbar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}
