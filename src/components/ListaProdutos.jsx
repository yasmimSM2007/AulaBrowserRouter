import { useState } from "react"

export default function ListaProdutos ({listaProdutos}){
return(
    <div class = "central">
        {listaProdutos.map((produto)=>
        <div key= {produto.id} class="card">
            <img src={produto.imagem}/>
            <h2>{produto.nome}</h2>
            <p>{produto.}</p>
            <p>{produto.}</p>
    )}
)

}