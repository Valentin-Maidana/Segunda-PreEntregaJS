alert("Bienvenido a Iphone.CdelU\n\nTenemos todos los modelos de iPhone comenzando desde el iPhone 8 en adelante.");


const productos = [
    { nombre: "Iphone 8", precio: "$200", descripcion: "Blanco y Negro\nCapacidad de espacio: 64gb y 128gb" },
    { nombre: "Iphone X", precio: "$300", descripcion: "Blanco, Negro y Dorado\nCapacidad de espacio: 64gb, 128gb y 256gb" },
    { nombre: "Iphone XR", precio: "$350", descripcion: "Blanco\nCapacidad de espacio: 64gb y 128gb" },
    { nombre: "Iphone 11", precio: "$400", descripcion: "Blanco, Violeta y Verde\nCapacidad de espacio: 128gb" },
    { nombre: "Iphone 12", precio: "$450", descripcion: "Negro\nCapacidad de espacio: 64gb y 128gb" },
    { nombre: "Iphone 13", precio: "$500", descripcion: "Blanco y Negro\nCapacidad de espacio: 128gb y 256gb" },
    { nombre: "Iphone 14", precio: "$600", descripcion: "Celeste y Negro\nCapacidad de espacio: 128gb y 512gb" },
    { nombre: "Iphone 15", precio: "$700", descripcion: "Negro, Rosa y Azul\nCapacidad de espacio: 128gb y 256gb" }
];


const contenedorCarrito = document.createElement('div');
contenedorCarrito.id = 'carrito';
document.body.prepend(contenedorCarrito);


const tituloCarrito = document.createElement('h2');
tituloCarrito.textContent = 'Tu Carrito';
contenedorCarrito.appendChild(tituloCarrito);


const listaCarrito = document.createElement('ul');
listaCarrito.id = 'itemsCarrito';
contenedorCarrito.appendChild(listaCarrito);


const totalCarritoElemento = document.createElement('p');
totalCarritoElemento.textContent = 'Total: $0'; 
contenedorCarrito.appendChild(totalCarritoElemento);


const contenedorProductos = document.createElement('section');
contenedorProductos.id = 'productos';
document.body.appendChild(contenedorProductos);


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


const calcularTotalCarrito = () => {
    let total = 0;
    carrito.forEach(item => {
        total += parseInt(item.precio.replace('$', ''));
    });
    return total;
};


const actualizarCarrito = () => {
    listaCarrito.innerHTML = '';
    carrito.forEach((item, index) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${item.nombre} - ${item.precio}`;
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', () => {
            eliminarDelCarrito(index);
        });
        itemLista.appendChild(botonEliminar);
        listaCarrito.appendChild(itemLista);
    });


    const total = calcularTotalCarrito();
    totalCarritoElemento.textContent = `Total: $${total}`;
    localStorage.setItem('carrito', JSON.stringify(carrito));
};


const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    actualizarCarrito();
};


const eliminarDelCarrito = (index) => {
    carrito.splice(index, 1);
    actualizarCarrito();
};


productos.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta';
    const tituloTarjeta = document.createElement('h3');
    tituloTarjeta.textContent = producto.nombre;
    const precioTarjeta = document.createElement('p');
    precioTarjeta.textContent = `Precio: ${producto.precio}`;
    const descripcionTarjeta = document.createElement('p');
    descripcionTarjeta.textContent = producto.descripcion;
    const botonAgregar = document.createElement('button');
    botonAgregar.textContent = 'Agregar al Carrito';
    botonAgregar.addEventListener('click', () => {
        agregarAlCarrito(producto);
    });

    tarjeta.appendChild(tituloTarjeta);
    tarjeta.appendChild(precioTarjeta);
    tarjeta.appendChild(descripcionTarjeta);
    tarjeta.appendChild(botonAgregar);

    contenedorProductos.appendChild(tarjeta);
});


actualizarCarrito();
