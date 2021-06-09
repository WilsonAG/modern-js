import { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {
  // State
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState('');
  const [total, setTotal] = useState(0);
  const [cargando, setCargando] = useState(false);

  let componente;
  componente =
    total === 0 ? (
      <Mensaje />
    ) : (
      <Resultado total={total} plazo={plazo} cantidad={cantidad} />
    );

  if (cargando) {
    componente = <Spinner />;
  }
  return (
    <>
      <Header
        titulo="Cotizador de prestamos"
        descripcion="Utiliza el formulario y obten una cotizacion"
      />

      <div className="container">
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          total={total}
          setTotal={setTotal}
          setCargando={setCargando}
        />
        <div className="mensajes">{componente}</div>
      </div>
    </>
  );
}

export default App;
