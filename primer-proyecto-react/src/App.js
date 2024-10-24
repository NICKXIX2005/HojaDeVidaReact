import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="name">
        <div className="content">
          <p className="p-1">Nicolás Gutiérrez Sánchez</p>
          <p className="p-2">19 años, Tecnólogo en Sistemas</p>
        </div>
      </div>

      <div className="info">
        <p className="TituloInfo">Información Personal</p>
        <p className="Tituloseccion">Nombres y Apellidos:</p>
        <p className="Infoseccion">Nicolás Gutiérrez Sánchez</p><br />
        <p className="Tituloseccion">Teléfono:</p>
        <p className="Infoseccion">3175646302</p><br />
        <p className="Tituloseccion">Dirección:</p>
        <p className="Infoseccion">Cl 42 #26-41</p><br />
        <p className="Tituloseccion">Email:</p>
        <p className="Infoseccion">ng364817@gmail.com</p><br />
        <p className="Tituloseccion">Fecha de Nacimiento:</p>
        <p className="Infoseccion">5 de agosto 2005</p><br />
        <p className="Tituloseccion">Cédula de Ciudadanía:</p>
        <p className="Infoseccion">1055752797</p>
      </div>

      <div className="info">
        <p className="TituloInfo">Experiencia Laboral</p>
        <p className="Tituloseccion">Universidad de Caldas:</p>
        <p className="Infoseccion">Sin Experiencia Laboral</p>
      </div>

      <div className="info">
        <p className="TituloInfo">Experiencia Académica</p>
        <p className="Tituloseccion">Normal Superior de Caldas:</p>
        <p className="Infoseccion">Bachillerato</p><br />
        <p className="Tituloseccion">Universidad de Caldas:</p>
        <p className="Infoseccion">Tecnología</p>
      </div>

      <div className="info">
        <p className="TituloInfo">Aptitudes y Hobbies</p>
        <p className="Tituloseccion">Aptitudes:</p>
        <p className="Infoseccion">Pensamiento crítico, trabajo en equipo, liderazgo</p><br />
        <p className="Tituloseccion">Hobbies:</p>
        <p className="Infoseccion">Jugar Fútbol, Gimnasio, Fiesta</p>
      </div>
    </div>
  );
}

export default App;
