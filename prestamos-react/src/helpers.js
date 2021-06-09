export function calcularTotal(cantidad, plazo) {
  let totalCantidad;

  if (totalCantidad <= 1000) {
    totalCantidad = cantidad * 0.25;
  } else if (cantidad > 1000 && cantidad <= 5000) {
    totalCantidad = cantidad * 0.2;
  } else if (cantidad < 5001 && cantidad <= 10000) {
    totalCantidad = cantidad * 0.15;
  } else {
    totalCantidad = cantidad * 0.1;
  }

  const interesesPlazo = {
    3: 0.05,
    6: 0.1,
    12: 0.15,
    24: 0.2,
  };

  const totalPlazo = cantidad * interesesPlazo[plazo];

  return totalCantidad + totalPlazo + cantidad;
}
