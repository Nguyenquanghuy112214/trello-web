import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import { Avatar, AvatarGroup, Button, Tooltip } from '@mui/material'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  px: 2,
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
export default function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHieght,
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      px: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      borderBottom: '1px solid white'

    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip icon={<DashboardIcon />} label="QuangHuyDev MERN Stack Board" clickable sx={MENU_STYLES} />
        <Chip icon={<VpnLockIcon />} label="Public/Private Workspace" clickable sx={MENU_STYLES} />
        <Chip icon={<AddToDriveIcon />} label="Add To Google Drive" clickable sx={MENU_STYLES} />
        <Chip icon={<BoltIcon />} label="Automation" clickable sx={MENU_STYLES} />
        <Chip icon={<FilterListIcon />} label="Filter" clickable sx={MENU_STYLES} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          startIcon={<PersonAddAlt1Icon />}
          sx={{
            color: 'white',
            border: '0.5px solid white',
            '&: hover': {
              borderColor: 'white'
            }
          }}>
          Invite
        </Button>
        <AvatarGroup
          max={6} total={10}
          sx={{
            border: 'none',
            gap: '5px',
            '& .MuiAvatar-root': {
              width: 30,
              height: 30,
              fontSize: '16px'
            }
          }}
        >
          <Tooltip title="quanghuydev">
            <Avatar
              sx={{ fontSize: 20 }}
              alt="quanghuydev"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/353817796_3430709953868970_374175792483119879_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7sRCxELTJwwAX-pAd6K&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDgSJSFtcQaKHGtc-jaC6JN78BScOhIIitgGWD-bfAkIA&oe=656A6D84" />
          </Tooltip>
          <Tooltip title="quanghuydev">
            <Avatar
              sx={{ fontSize: 20 }}
              alt="quanghuydev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/359797383_1681779908914623_2909394688743114620_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h3PRdr3IonAAX_JdOXA&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCdkdeNwIU9lKhuDYose_o4dPuw7rD3n943Y1G2NIRWQQ&oe=656B245A" />
          </Tooltip>
          <Tooltip title="quanghuydev">
            <Avatar
              sx={{ fontSize: 20 }}
              alt="quanghuydev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/351108183_813954133482848_3633154861397883237_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K9qsaPbRT_AAX9zfOG4&_nc_ht=scontent.fhan17-1.fna&oh=00_AfC2jRv_nk9RNSVvGNRrEboDYcpOCSbZnwO54GAxV8V8bg&oe=656AA1B0" />
          </Tooltip>
          <Tooltip title="quanghuydev">
            <Avatar
              sx={{ fontSize: 20 }}
              alt="quanghuydev"
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/353817796_3430709953868970_374175792483119879_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7sRCxELTJwwAX-pAd6K&_nc_ht=scontent.fhan2-3.fna&oh=00_AfDgSJSFtcQaKHGtc-jaC6JN78BScOhIIitgGWD-bfAkIA&oe=656A6D84" />
          </Tooltip>
          <Tooltip title="quanghuydev">
            <Avatar
              sx={{ fontSize: 20 }}
              alt="quanghuydev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/359797383_1681779908914623_2909394688743114620_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h3PRdr3IonAAX_JdOXA&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCdkdeNwIU9lKhuDYose_o4dPuw7rD3n943Y1G2NIRWQQ&oe=656B245A" />
          </Tooltip>
          <Tooltip title="quanghuydev">
            <Avatar
              sx={{ fontSize: 20 }}
              alt="quanghuydev"
              src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/351108183_813954133482848_3633154861397883237_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K9qsaPbRT_AAX9zfOG4&_nc_ht=scontent.fhan17-1.fna&oh=00_AfC2jRv_nk9RNSVvGNRrEboDYcpOCSbZnwO54GAxV8V8bg&oe=656AA1B0" />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
