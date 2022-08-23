import './App.css';

import { NeolandState } from './components/NeonaldState';
import { NeolandStateComplex } from './components/NeolandStateComplex';

function App() {


  return (
    <>
      <NeolandState name="Bruce Wayne" />
      <NeolandStateComplex />
    </>
  )
}

export default App
