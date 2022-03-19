import gucciLemon from '../images/gucciLemon.png'
import gucciTennis1977 from '../images/gucciTennis1977.png'
import gucciLyrePatchBomberJacket from '../images/gucciLyrePatchBomberJacket.png'
import balenciagaSlimeLogo from '../images/balenciagaSlimeLogo.png'
import balenciagaTripleS from '../images/balenciagaTripleS-Sneakers.png'
import balenciagaDenimJacket from '../images/balenciagaDenimJacket.png'

const productos= [
    {id: 1, categoria: 'hoodies', nombre: "Gucci Lemon", precio: 18000, imagen: gucciLemon },
    {id: 2, categoria: 'sneakers', nombre: "Gucci Tennis 1977", precio: 16000, imagen: gucciTennis1977 },
    {id: 3, categoria: 'jackets', nombre: "Gucci Lyre Patch Bomber J.", precio: 44000, imagen: gucciLyrePatchBomberJacket},
    {id: 4, categoria: 'hoodies', nombre: "Balenciaga Slime Logo", precio: 16000, imagen: balenciagaSlimeLogo},
    {id: 5, categoria: 'sneakers', nombre: "Balenciaga Triple S", precio: 17000, imagen: balenciagaTripleS},
    {id: 6, categoria: 'jackets', nombre: "Balenciaga Denim Jacket", precio: 35000, imagen: balenciagaDenimJacket},
]

export const getFetch = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)                    
        }, 3000);
    } else {
        reject('400 - not found')        
    }
})

const producto = {id: 1, categoria: 'hoodies', nombre: "Gucci Lemon", precio: 18000, imagen: gucciLemon }

export const getFetchOne = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(producto)                    
        }, 3000);
    } else {
        reject('400 - not found')        
    }
})

