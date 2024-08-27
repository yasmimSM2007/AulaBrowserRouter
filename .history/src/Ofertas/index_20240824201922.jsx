import { useState } from "react"
import ListaProdutos from "../components/ListaProdutos"

export default function Ofertas (){
    const [ produtos, setProdutos ] = useState ([{
        nome: "Neon Gender",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Reinventando o Normal",
        preco: 2.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2023/04/Design-sem-nome-62.png",
      },

    {
        nome: "Antes Sol que Mal Iluminada",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Essencial",
        preco: 3.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2023/06/Design-sem-nome-2023-06-02T122054.078.png",
    },

    {
        nome: "Preconceito Flopou",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Nosso Metaverso",
        preco: 6.00,
        imagem: "https://www.risque.com.br/wp-content/uploads/2022/09/Design-sem-nome-93.png",
    },

    {
        nome: "Chega e Arrasa",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Livre Pra Brilhar",
        preco: 4.59,
        imagem: "https://www.risque.com.br/wp-content/uploads/2023/03/Design-sem-nome-56.png",
    },

    {
        nome: "Esse Marrom é Meu",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Risqué + Iza",
        preco: 5.50,
        imagem: "https://www.risque.com.br/wp-content/uploads/2022/03/risque-dandara-esse-marrom-e-meu-RGB_final.png",
    },

    {
        nome: "Top Coat Fixador",
        efeito: "Top Coat",
        ml: "9.5 ml",
        colecao: "Diamond Gel",
        preco: 8.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/img_0013_diamond-coat-pack.png",
    },

    {
        nome: "Inspiração Divina",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Deusas Inspiradoras",
        preco: 5.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2021/10/Sem-titulo-6.fw_.png",
    },

    {
        nome: "Cinza Granito",
        efeito: "Cremoso",
        ml: "9.5 ml",
        colecao: "Diamond Gel",
        preco: 10.60,
        imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/img_0014_diamond-cinza-pack.png",
    },

    {
        nome: "Gota dos Anjos",
        efeito: "Metálico",
        ml: "8 ml",
        colecao: "Essencial",
        preco: 6.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/regular-novos-gota-pack.png",
    },

    {
        nome: "Se Joga no Bege",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Revolução das Cores",
        preco: 7.00,
        imagem: "https://www.risque.com.br/wp-content/uploads/2021/02/Esmalte-Risque%CC%81-Cremoso-Nude-Se-Joga-no-Bege_ok.png",
    },

    {
        nome: "Oh! My! God!",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Coleção Friends",
        preco: 4.40,
        imagem: "https://www.risque.com.br/wp-content/uploads/2021/06/Crem-oh-my-god.png",
    },

    {
        nome: "Eu Sou Essa Coca-Cola Toda",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Coca-Cola",
        preco: 8.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/cocacola-preto-pack.png",
    },

    {
        nome: "Doce Pérola",
        efeito: "Cremoso",
        ml: "8 ml",
        colecao: "Essencial",
        preco: 1.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/regular-novos-perola-pack.png",
    },

    {
        nome: "As Mil Purpurinas",
        efeito: "Glitter",
        ml: "8 ml",
        colecao: "Essencial",
        preco: 2.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/efeitos-purpurinas-pack.png",
    },

    {
        nome: "Novo Azul",
        efeito: "Metálico",
        ml: "8 ml",
        colecao: "Escuros",
        preco: 3.99,
        imagem: "https://www.risque.com.br/wp-content/uploads/2020/04/escuros-azul-pack.png",
    }

    ])
    return(
        <ListaProdutos listaProdutos={produtos}/>
    )
}