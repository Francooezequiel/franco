const mercado = document.querySelector("#mercado")
const verCarrito = document.getElementById("verCarrito")
const headerContenedor = document.getElementById("header-contenedor")

const productos = [
    {
        id : 1,
        titulo : "\n plan de musculacion",
        detalle : "\n  No es un plan personalizado ,Es una Rutina de 5 Dias trabajaremos tanto tren inferior como tren superior y zona media",
        precio : 7000,
        imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_d5QwJAtfrhhyWQOWnq6SAsExUZhGCMac8PtiSkr&s",
    },
    {
        id : 2,
        titulo : "\n Plan Mensual",
        detalle : "\n  Las mujeres tendrán su enfoque en glúteos, piernas y abdomen pero también trabajaremos tren superior como hombros y espalda que harán que tu cintura visualmente se vea más chica. Hombres harán más énfasis en tren superior y zona media",
        precio : 10000,
        imagen : "https://cdn.create.vista.com/api/media/small/51076827/stock-photo-fitness-with-dumbbells",

    },
    {
        id : 3,
        titulo : "\n Plan tren Inferior",
        detalle : " \n Es Un plan enfocado En Piernas y gluteos ",
        precio : 6000,
        imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUU8y5508wuLSSGk6IVli-J-sT-cID6BLZtg&usqp=CAU",

    },
    {
        id : 4,
        titulo : "\n  Plan Mami Fit",
        detalle : "\n A veces estamos con poco tiempo, a lascorridas entre las responsabilidades que tenemos como mamás, mujeres , esposas, etc. ",
        precio : 6000,
        imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZSxES1MOZCKk3RgGLfuE6uy_5fnfhDFQ3w&usqp=CAU",

    },
    {
        id : 5,
        titulo : "\n  Plan BodyExtreme",
        detalle : "\n No es un plan personalizado ,una actividad aeróbica que utiliza el cuerpo libre, barras y discos para endurecer y modelar todos los grupos musculares.",
        precio : 8000,
        imagen : "https://images.fitnessfirst.com.au/29v1tt20s4yg/2p8ICL5HkFWhJMCr5qPkc0/28d20677dc19402a83d04933dd43ad68/600x300_0004_Fitness_First_HIIT.jpg?w=600&h=300&fl=progressive&q=100&fm=jpg",

    },
    {
        id : 6,
        titulo : "\n  Funcional Hit",
        detalle : "\n Circuito que se utiliza Para mejorar todas las cualidades fisicas",
        precio : 8000,
        imagen : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzrMUem31Du3GgEvh0OZ9vnnxdMKPmjYIEA&usqp=CAU",
        

    },
]


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach( (product) => {
let contenido = document.createElement("div");
contenido.classList.add("contenedor")
contenido.innerHTML = `
<div class="card-contenedor">
<img src="${product.imagen}"/>
<h3>${product.detalle}</h3>
<p>${product.precio}$</p>
<p>${product.titulo}</p>
`;

mercado.appendChild(contenido);


let boton = document.createElement("button")
boton.classList.add("contenedor-boton")
boton.innerText = "agregar"
boton.addEventListener("click",() =>{
    carrito.push(product)
    localStorage.setItem("carrito",JSON.stringify(carrito))

});
contenido.appendChild(boton)


} );
verCarrito.addEventListener("click", () => {


    const estructuraHeader = document.createElement("div")
    estructuraHeader.className = "estructuraHeader"
    estructuraHeader.innerHTML = `
    <h1 class ="header-title">Carrito</h1>
    `;
    headerContenedor.appendChild(estructuraHeader)
    


    
    const headerboton = document.createElement("button");
    headerboton.innerText = "comprar";
    headerboton.className = "header-boton"
    headerboton.addEventListener("click", () =>{
        carrito = [];
        headerContenedor.innerHTML = ""
        localStorage.setItem("carrito",JSON.stringify(carrito))
    } )
    
estructuraHeader.appendChild(headerboton)



    carrito.forEach((product) => {
        let carritoheader = document.createElement("div")
        let botoneliminar = document.createElement("button");
        botoneliminar.addEventListener("click", () =>{ 
            carrito = carrito.filter((product2) => product2.id !== product.id);
            headerContenedor.removeChild(carritoheader);
            localStorage.setItem("carrito", JSON.stringify(carrito)); 
        
            totalcarrito = carrito.reduce((acu, product2) => acu + product2.precio, 0);
            totalcarrito = totalcarrito - product.precio;
            totaal.innerHTML = `total : ${totalcarrito} `;
        });
        
        
        
        
        botoneliminar.innerText = "Eliminar"
        carritoheader.className = "carrito-contenedor"
        carritoheader.innerHTML = `
        <img src="${product.imagen}"/>
        <h3>${product.detalle}</h3>
        <p>${product.precio}$</p>
        <p>${product.titulo}</p>
        
        `;
        carritoheader.appendChild(botoneliminar)
        headerContenedor.appendChild(carritoheader)
    })
    
    const totalcarrito = carrito.reduce((acu ,productos) => acu +  productos.precio, 0);

    

    const totaal = document.createElement("div");
    totaal.className = "total-contenedor";
    totaal.innerHTML = `total : ${totalcarrito} `;
    headerContenedor.appendChild(totaal);


    
});
