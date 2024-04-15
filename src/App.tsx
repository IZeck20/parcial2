import React, { useState, useEffect } from 'react';
import './App.css';

// Importar módulos de Firebase
import appFirebase from './credenciales';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from './componentes/Login.tsx';
import Home from './componentes/Home.tsx';

const auth = getAuth(appFirebase);

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
      setCargando(false);
    });

    // Limpiar el efecto
    return () => unsubscribe();
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
    </div>
  );
}

export default App;
