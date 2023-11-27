import Box from '@mui/material/Box';

export default function BoardContent() {
  return (
    <Box sx={{ width: '100%', height: (theme) => `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHieght})`, display: 'flex', alignItems: 'center', backgroundColor: 'primary.main' }}>
      Board Content
    </Box>
  )
}