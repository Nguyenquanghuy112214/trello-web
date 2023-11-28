import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
function CardItem({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <Card sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}>

        <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
          <Typography>Test</Typography>
        </CardContent>

      </Card>
    )
  }
  return (
    <Card sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
      overflow: 'unset'
    }}>
      <CardMedia
        sx={{ height: 140 }
        }
        image="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/351108183_813954133482848_3633154861397883237_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K9qsaPbRT_AAX9zfOG4&_nc_ht=scontent.fhan17-1.fna&oh=00_AfC2jRv_nk9RNSVvGNRrEboDYcpOCSbZnwO54GAxV8V8bg&oe=656AA1B0"
        title="green iguana"
      />
      <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
        <Typography>QuangHuyDev MERN Stack</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px 4px' }}>
        <Button size="small" startIcon={<GroupIcon />}>20</Button>
        <Button size="small" startIcon={<CommentIcon />}>15</Button>
        <Button size="small" startIcon={<AttachmentIcon />}>10</Button>
      </CardActions>
    </Card>
  )
}

export default CardItem