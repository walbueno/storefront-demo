# storefront-demo

Mini e-commerce compacto, demonstrando a jornada completa de compra (Home, Categoria, Produto, Checkout), construido do zero, sem vinculo com nenhuma plataforma especifica.

## Por que este projeto existe

Nenhum dos outros projetos do portfolio demonstra, na pratica, a especialidade de e-commerce (performance, arquitetura de vitrine, carrinho, checkout) que sustenta a oferta comercial da Beez Creative em plataformas como Tray, Bagy e Nuvemshop. Como os temas fornecidos aos parceiros dessas plataformas sao propriedade delas e nao podem ser publicados, este projeto e uma demonstracao conceitual propria dos mesmos principios: performance, boas praticas de conversao e arquitetura de front-end, sem alegar vinculo com nenhuma plataforma real.

## O que o projeto faz

- Home: vitrine com categorias e produtos em destaque.
- Categoria: listagem de produtos filtrada por categoria.
- Produto (PDP): detalhes do produto e botao de adicionar ao carrinho.
- Checkout: resumo do carrinho (com edicao de quantidade e remocao de itens) e formulario de dados simulado.
- Carrinho persistido em localStorage, compartilhado entre paginas via React Context.

## O que o projeto nao faz (escopo fechado)

- Sem pagamento real, sem integracao com gateway (Stripe, Mercado Pago, etc.).
- Sem login ou autenticacao de usuario.
- Sem painel administrativo.
- Sem banco de dados, backend ou API externa. Todos os dados de produto sao mockados em data/products.ts.

## Instalacao e uso

    npm install
    npm run dev

## Rodando os testes

    npm test

Os 11 testes cobrem a logica pura do carrinho (adicionar, remover, atualizar quantidade, calcular total, formatar preco), sem depender de renderizacao ou localStorage.

## Rodando o build de producao

    npm run build

## Stack

Next.js 16 (App Router), TypeScript, React Context, Jest.
