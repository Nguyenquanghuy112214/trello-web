import Box from '@mui/material/Box'
import Column from './Column/Column'
import { Button } from '@mui/material'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
function ListColumns() {

  return (
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
      <Column />
      <Column />
      {/* add new column */}
      <Box sx={{
        color: 'white',
        minWidth: '200px',
        maxWidth: '200px',
        mx: 2,
        borderRadius: '6px',
        height: 'fit-content',
        bgcolor: '#ffffff3d'
      }}>
        <Button
          startIcon={<LibraryAddIcon />}
          sx={{
            color: 'white',
            width: '100%',
            justifyContent: 'flex-start',
            pl: 2.5,
            py: 1
          }}
        >Add new column</Button>
      </Box>
    </Box>
  )
}

export default ListColumns