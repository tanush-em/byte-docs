import {Routes, Route} from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import NoteDetailPage from './pages/NoteDetailPage';
import { toast } from 'react-hot-toast';

const App = () => {
    return (
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/notes/:id" element={<NoteDetailPage />} />
          </Routes>
          <button onClick={() => toast.error("Content copied!")}>Click me</button>

        </div>
    )
}
export default App;