
alert("Bienvenido a Iphone.CdelU\n\nTenemos todos los modelos de iPhone comenzando desde el iPhone 8 en adelante.");

const productos = [
    { nombre: "Iphone 8", precio: "$200", colores: "Blanco y Negro\nCapacidad de espacio: 64gb y 128gb" },
    { nombre: "Iphone X", precio: "$300", colores: "Blanco, Negro y Dorado\nCapacidad de espacio: 64gb, 128gb y 256gb" },
    { nombre: "Iphone XR", precio: "$350", colores: "Blanco\nCapacidad de espacio: 64gb y 128gb" },
    { nombre: "Iphone 11", precio: "$400", colores: "Blanco, Violeta y Verde\nCapacidad de espacio: 128gb" },
    { nombre: "Iphone 12", precio: "$450", colores: "Negro\nCapacidad de espacio: 64gb y 128gb" },
    { nombre: "Iphone 13", precio: "$500", colores: "Blanco y Negro\nCapacidad de espacio: 128gb y 256gb" },
    { nombre: "Iphone 14", precio: "$600", colores: "Celeste y Negro\nCapacidad de espacio: 128gb y 512gb" },
    { nombre: "Iphone 15", precio: "$700", colores: "Negro, Rosa y Azul\nCapacidad de espacio: 128gb y 256gb" }
];


const mostrarProductos = () => {
    let listaProductos = "Lista de productos:\n\n";
    productos.forEach((producto) => {
        listaProductos += `${producto.nombre}\n`;
    });
    alert(listaProductos);

    const productoElegido = prompt("Ingrese el nombre del iPhone que desea comprar:").toLowerCase(); 
    return productoElegido;
};

let productoEncontrado;

do {
    const iphoneElegido = mostrarProductos();
    productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === iphoneElegido); 
    if (productoEncontrado) {
        alert(`Seleccionaste el ${productoEncontrado.nombre}\n\nPrecio: ${productoEncontrado.precio}\nDescripción: ${productoEncontrado.colores}`);
    } else {
        alert("El producto que deseas no está disponible\n\nPor favor, leer lista de productos y elija un modelo disponible");
    }
} while (!productoEncontrado);








// const iphoneElegido = mostrarProductos();

// let productoEncontrado = false;
// for (let i = 0; i < productos.length; i++) {
//     if (productos[i].nombre === iphoneElegido) {
//         alert(`Seleccionaste el ${iphoneElegido}`);
//         productoEncontrado = true;
//         break;
//     }
// }

// if (!productoEncontrado) {
//     alert("El producto que deseas no está disponible");
// }