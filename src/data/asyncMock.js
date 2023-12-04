const productos = [
    {id: 1 , descripcion: "MicFull Iniciador", precio: 30, linea:"avicola"  },
    {id: 2 , descripcion: "MicFull Terminador", precio: 23, linea:"avicola"   },
    {id: 3 , descripcion: "MicFull Ultima Semana" , precio: 15, linea:"avicola"   },
    {id: 4 , descripcion: "Perfectos" , precio: 12, linea: "cerdos" },
    {id: 5 , descripcion: "Micromix Macro MAx", precio: 15, linea: "cerdos" },
    {id: 6 , descripcion: "Derby Entrenamiento", precio: 9, linea: "equinos" },
    {id: 7 , descripcion: "Derby Fibra Sport" , precio: 10, linea: "equinos" },
    {id: 8 , descripcion: "Macro corrector" , precio: 7, linea:  "rumiantes"},
    {id: 9 , descripcion: "Concentrado Novillo" , precio: 9, linea:  "rumiantes"},

  ]


export const mostrarLinea = (categoria) =>{

    return new Promise((resolve, reject)=>{

      if(productos.length>0){
        setTimeout(()=>{
          const productosFiltrados = categoria
            ? productos.filter((elem)=> elem.linea === categoria)
            : productos;

          resolve(productosFiltrados);
          resolve(productosFiltrados);
        }, 3000);
      }else{
        reject(new Error("No se encontraron Productos"));
      }
    });
  };


  export const seleccionarProducto = (id) => {

    return new Promise((resolve, reject) =>{
      if(productos.length>0){
        setTimeout(() => {
          resolve(productos.find((elem)=> elem.id === parseInt(id)));
        }, 3000);
      } else{
        reject (new Error ("No se encontraron prodcutos"));
      }
    });

  };