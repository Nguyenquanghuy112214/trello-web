import ModeSelect from '~/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Wordspaces from './Menus/Wordspaces'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Profile from './Menus/Profile'
import { Drawer, IconButton, InputAdornment } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import PostAddIcon from '@mui/icons-material/PostAdd'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
export default function Appbar() {
  const [state, setState] = useState(false)
  const [searchValue, setSearchValue] = useState()
  return (
    <Box
      px={2}
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'),
        '&::-webkit-scrollbar-track': {
          m: 2
        }
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '2' }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5' }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{ color: 'white' }} />
          <Typography variant='span' sx={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'white' }}>Trello</Typography>
        </Box>

        <IconButton onClick={() => setState(true)} edge="start" color="inherit" aria-label="menu" sx={{ ml: 2, display: { xs: 'flex', md: 'none' } }}>
          <MenuIcon sx={{ color: 'white' }} fontSize='small' />
        </IconButton>
        {/* mobile */}
        <Drawer
          sx={{ display: { xs: 'flex', md: 'none' } }}
          anchor="top"
          open={state}
          onClose={() => setState(false)}
        >
          <Box sx={{ display: { xs: 'flex', md: 'none' }, height: '140px', alignItems: 'center', justifyContent: 'center' }}>
            {/* Wordsspace */}
            <Wordspaces />
            {/* Recent */}
            <Recent />
            {/* Starred */}
            <Starred />
            {/* Templates */}
            <Templates />
            <Button sx={{ color: 'white', border: 'none', '&:hover': { border: 'none' } }} variant="outlined" startIcon={<PostAddIcon />}>Create</Button>
          </Box>
        </Drawer>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {/* Wordsspace */}
          <Wordspaces />
          {/* Recent */}
          <Recent />
          {/* Starred */}
          <Starred />
          {/* Templates */}
          <Templates />
          <Button sx={{ color: 'white' }} variant="outlined" startIcon={<PostAddIcon />}>Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          value={
            searchValue
          }
          onChange={(e) => setSearchValue(e.target.value)}
          id="outlined-search"
          label="Search..."
          type="text"
          size="small"
          sx={{
            minWidth: 120,
            maxWidth: 170,
            '& label': {
              color: 'white'
            },
            '& input': {
              color: 'white'
            },
            '& label.Mui-focused': {
              color: 'white'
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white'
              },
              '&:hover fieldset': {
                borderColor: 'white'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white'
              }

            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment InputAdornment position="start" >
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon onClick={() => setSearchValue('')} fontSize='small' sx={{ color: searchValue ? 'white' : 'transparent', cursor: 'pointer' }} />
            )
          }}
        />
        <ModeSelect />
        <Tooltip title="Notifycation">
          <Badge color="warning" variant="dot" sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title="Help">
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>
        {/* Profile */}
        <Profile />

      </Box>
    </Box >
  )
}
