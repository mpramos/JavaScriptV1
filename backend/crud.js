const express= require('express')
const app= express()
const cors= require('cors')
app.use(cors())
app.use(express.json())   

let usuarios=[
    {id:1,nombre:'Juan',edad:23},
    {id:2,nombre:'Maria',edad:30},
    {id:3,nombre:'Pedro',edad:33},
]

app.get('/usuarios',(req,resp)=>{
    resp.json(usuarios)
})
app.delete('/usuarios/:id',(req,resp)=>{
    const id= parseInt(req.params.id)
    const indice=usuarios.findIndex(usuario=> usuario.id===id)
    if(indice!==-1){
        usuarios.splice(indice,1)
        resp.sendStatus(204)
    } else{
        resp.status(404).json({mensaje:'Usuario no encontrado'})
    }
})
app.post('/usuarios',(req,resp)=>{
    const usuario=req.body
    usuario.id=usuarios.length+1
    usuarios.push(usuario)
    resp.status(201).json(usuario)
})
app.put('/usuarios/:id',(req,resp)=>{
    const id= parseInt(req.params.id)
    const usuario= usuarios.find(usuario=>usuario.id===id)
    if (usuario) {
        usuario.nombre= req.body.nombre
        usuario.edad=req.body.edad
        resp.json(usuario)
    } else {
        resp.status(404).json({mensaje:'Usuario no encontrado'})
    }
})
const port=3001
app.listen(port,()=>{
    console.log(`Servidor corriendo en el puerto http://localhost:${port}`)
})
