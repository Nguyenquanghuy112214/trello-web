import { Cloud, ContentCopy, ContentCut, ContentPaste } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import GroupIcon from '@mui/icons-material/Group'
import ModeCommentIcon from '@mui/icons-material/ModeComment'
import CommentIcon from '@mui/icons-material/Comment';
import AttachmentIcon from '@mui/icons-material/Attachment'
const COLUMN_HEADER_HIGHT = "50px"
const COLUMN_FOOTER_HIGHT = "56px"
export default function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardContentHieght,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        p: '10px 0'
      }}>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        bgcolor: 'inherit',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}>
        {/* Column box 01*/}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => (`calc(${theme.trello.boardContentHieght} - ${theme.spacing(5)})`)
        }}>

          <Box sx={{
            height: COLUMN_HEADER_HIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Typography variant='h6' sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <ExpandMoreIcon
                  sx={{ color: 'white', cursor: 'pointer' }}
                  id="basic-button-wordspaces"
                  aria-controls={open ? 'basic-menu-wordspaces' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick} />
              </Tooltip>

              <Menu
                id="basic-menu-wordspaces"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-wordspaces'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => (`calc(${theme.trello.boardContentHieght} - ${theme.spacing(5)} - ${COLUMN_HEADER_HIGHT} - ${COLUMN_FOOTER_HIGHT})`)
          }}>
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
            {/*  */}
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>

          </Box>
          <Box sx={{
            height: COLUMN_FOOTER_HIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
        {/* Column 02 */}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => (`calc(${theme.trello.boardContentHieght} - ${theme.spacing(5)})`)
        }}>

          <Box sx={{
            height: COLUMN_HEADER_HIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Typography variant='h6' sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              Column Title
            </Typography>
            <Box>
              <Tooltip title="More options">
                <ExpandMoreIcon
                  sx={{ color: 'white', cursor: 'pointer' }}
                  id="basic-button-wordspaces"
                  aria-controls={open ? 'basic-menu-wordspaces' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick} />
              </Tooltip>

              <Menu
                id="basic-menu-wordspaces"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button-wordspaces'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Copy</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Remove this column</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => (`calc(${theme.trello.boardContentHieght} - ${theme.spacing(5)} - ${COLUMN_HEADER_HIGHT} - ${COLUMN_FOOTER_HIGHT})`)
          }}>
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
            {/*  */}
            <Card sx={{ cursor: 'pointer', boxShadow: '0 1px 1px rgba(0,0,0,0.2)', overflow: 'unset' }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Card 01</Typography>
              </CardContent>
            </Card>


          </Box>
          <Box sx={{
            height: COLUMN_FOOTER_HIGHT,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box>
      </Box>

    </Box >
  )
}
