
import Container from '@mui/material/Container'
import Appbar from '~/components/AppBar'
import BoardBar from '~/pages/Boards/BoardBar'
import BoardContent from '~/pages/Boards/BoardContent'
export default function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <Appbar />
      <BoardBar />
      <BoardContent />
    </Container>
  )
}
