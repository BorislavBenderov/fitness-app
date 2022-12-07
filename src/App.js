import { Route, Routes } from 'react-router-dom';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Fitness } from './components/fitness/Fitness';
import { FitnessPrograms } from './components/fitness-programs/FitnessPrograms';
import { AuthContextProvider } from './contexts/AuthContext';
import { FitnessContextProvider } from './contexts/FitnessContext';
import { FullBodyProgram } from './components/fitness-programs/FullBodyProgram';
import { UpperLowerProgram } from './components/fitness-programs/UpperLowerProgram';
import { PushPullLegsProgram } from './components/fitness-programs/PushPullLegsProgram';
import { Calories } from './components/calories/Calories';
import { Weight } from './components/weight/Weight';
import { Header } from './components/header/Header';

function App() {
  return (
    <AuthContextProvider>
      <FitnessContextProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Fitness />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/fitness-programs' element={<FitnessPrograms />} />
            <Route path='/fitness-programs/fullbody' element={<FullBodyProgram />} />
            <Route path='/fitness-programs/upper-lower' element={<UpperLowerProgram />} />
            <Route path='/fitness-programs/push-pull-legs' element={<PushPullLegsProgram />} />
            <Route path='/calories' element={<Calories />} />
            <Route path='/weight' element={<Weight />} />
          </Routes>
        </div>
      </FitnessContextProvider>
    </AuthContextProvider>
  );
}

export default App;
