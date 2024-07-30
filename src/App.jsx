
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Overview'
import UpdateCampaign from './pages/UpdateCampaign'
import MakeCall from './pages/MakeCall'
import CreateCampaign from './pages/CreateCampaign'
import CallStatus from './pages/CallStatus'
import Transcription from './pages/Transcription'
import PostCallAnalysis from './pages/PostCallAnalysis'
import Layout from './pages/Layout'
import SupportedLanguages from './pages/SupportedLanguages'
import SupportedVoices from './pages/SupportedVoices'
import Overview from './pages/Overview'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/supported-languages" element={<SupportedLanguages />} />
          <Route path="/supported-voices" element={<SupportedVoices />} />
          <Route path='/create' element={<CreateCampaign />} />
          <Route path="/update_campaign" element={<UpdateCampaign />} />
          <Route path='/make_call' element={<MakeCall />} />
          <Route path='/getStatus' element={<CallStatus />} />
          <Route path='/getTranscription' element={<Transcription />} />
          <Route path='/postCallAnalysis' element={<PostCallAnalysis />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
