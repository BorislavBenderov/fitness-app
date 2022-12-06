import { Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Fitness } from './components/fitness/Fitness';
import { FitnessPrograms } from './components/fitness-programs/FitnessPrograms';
import { AuthContextProvider } from './contexts/AuthContext';
import { FullBodyProgram } from './components/fitness-programs/FullBodyProgram';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/fitness-programs' element={<FitnessPrograms />} />
          <Route path='/fitness-programs/fullbody' element={<FullBodyProgram />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
