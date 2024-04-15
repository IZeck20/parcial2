import React, { useState } from 'react';
import imagen from "../assets/iron.jpg";
import imagenProfile from "../assets/sasuke.png";
import appFirebase from "../credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

const Login = () => {
    const [registrando, setRegistrando] = useState(false);
    const [error, setError] = useState(null);

    const functAutenticacion = async (e) => {
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        try {
            if (registrando) {
                await createUserWithEmailAndPassword(auth, correo, contraseña);
            } else {
                await signInWithEmailAndPassword(auth, correo, contraseña);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={imagenProfile} alt="" className='estilo-profile' />
                            <form onSubmit={functAutenticacion}>
                                <input type='text' placeholder='Ingresar email' className='cajaTexto' id='email' />
                                <input type='password' placeholder='Ingresar contraseña' className='cajaTexto' id='password' />
                                <button className='btnform'>{registrando ? "Regístrate" : "Iniciar Sesión"}</button>
                            </form>
                            <h4 className='Texto'>
                                {registrando ? "¿Ya tienes cuenta?" : "¿No tienes cuenta?"}
                                <button className='btnswitch' onClick={() => setRegistrando(!registrando)}>
                                    {registrando ? "Iniciar Sesión" : "Regístrate"}
                                </button>
                            </h4>
                            {error && <p className="error-message">{error}</p>}
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={imagen} alt="" className='tamaño-imagen' />
                </div>
            </div>
        </div>
    );
};

export default Login;
