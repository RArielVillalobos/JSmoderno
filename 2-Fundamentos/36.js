var metodoPago='tarjetaCredito';

switch (metodoPago) {
    case 'efectivo':
        console.log(`el usuario pago con ${metodoPago}`);
        break;

    case 'tarjetaCredito':
        console.log(`el usuario pago con ${metodoPago}`);
        
        break;

    default:
     console.log('indefinido');
        break;
}