import React from 'react';
import PropTypes from 'prop-types';
import appFirebase from "../credenciales";
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Home = ({ correoUsuario }) => {
    const cerrarSesion = () => {
        signOut(auth)
            .then(() => {
                console.log('Sesión cerrada correctamente');
            })
            .catch((error) => {
                console.error('Error al cerrar sesión:', error.message);
            });
    };

    return (
       <div className='App'>
        <Popular/>
        
       </div>
    );
};

Home.propTypes = {
    correoUsuario: PropTypes.string.isRequired
};

export default Home;
