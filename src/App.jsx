
import Button from '@mui/material/Button'
import './App.css'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'
import {
  useColorScheme
} from '@mui/material/styles'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}
function App() {
  return (
    <div>
      <ModeToggle />
      <hr />
      <AccessAlarmIcon />
      <ThreeDRotation />
      <div>QuangHuydev</div>
      <Button variant="contained">Hello world</Button>
    </div>
  )
}

export default App
