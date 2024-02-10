import LoginForm from './Components/LoginForm/LoginForm';
import LoginVulneracion from './Components/LoginVulneracion/LoginVulneracion';
import LoginValidacion from './Components/LoginValidacion/LoginValidacion';
import LoginUsuarioInexistente from './Components/LoginUsuarioInexistente/LoginUsuarioInexistente';
import LoginPasswordIncorrecto from './Components/LoginPasswordIncorrecto/LoginPasswordIncorrecto';
import LoginUsuarioNoDisponible from './Components/LoginUsuarioNoDisponible/LoginUsuarioNoDisponible';
import LoginUsuarioSinPrivilegio from './Components/LoginUsuarioSinPrivilegio/LoginUsuarioSinPrivilegio';
import LoginCodigoIncorrecto from './Components/LoginCodigoIncorrecto/LoginCodigoIncorrecto';
import LoginPantallaPrincipal from './Components/LoginPantallaPrincipal/LoginPantallaPrincipal';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginForm />} path='/login' />
        <Route element={<LoginVulneracion />} path='/loginVulneracion' />
        <Route element={<LoginValidacion />} path='/loginValidacion' />
        <Route element={<LoginUsuarioInexistente />} path='/loginUsuarioInexistente' />
        <Route element={<LoginPasswordIncorrecto />} path='/loginPasswordIncorrecto' />
        <Route element={<LoginUsuarioNoDisponible />} path='/loginUsuarioNoDisponible' />
        <Route element={<LoginUsuarioSinPrivilegio />} path='/loginUsuarioSinPrivilegio' />
        <Route element={<LoginCodigoIncorrecto />} path='/loginCodigoIncorrecto' />
        <Route element={<LoginPantallaPrincipal/>} path='/loginPantallaPrincipal' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
