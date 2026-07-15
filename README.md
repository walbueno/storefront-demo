# storefront-demo

Mini e-commerce compacto, demonstrando a jornada completa de compra (Home, Categoria, Produto e Checkout), construído do zero, sem vínculo com nenhuma plataforma específica.

## Por que este projeto existe

Nenhum dos outros projetos do portfólio demonstra, na prática, a especialidade em e-commerce (performance, arquitetura de vitrine, carrinho e checkout) que sustenta a oferta comercial da Beez Creative em plataformas como Tray, Bagy e Nuvemshop. Como os temas fornecidos aos parceiros dessas plataformas são propriedade delas e não podem ser publicados, este projeto é uma demonstração conceitual própria dos mesmos princípios: performance, boas práticas de conversão e arquitetura de front-end, sem alegar vínculo com nenhuma plataforma real.

## O que o projeto faz

- Home: vitrine com categorias e produtos em destaque.
- Categoria: listagem de produtos filtrada por categoria.
- Produto (PDP): detalhes do produto e botão de adicionar ao carrinho.
- Checkout: resumo do carrinho (com edição de quantidade e remoção de itens) e formulário de dados simulado.
- Carrinho persistido no `localStorage`, compartilhado entre páginas via React Context.

## O que o projeto não faz (escopo fechado)

- Sem pagamento real e sem integração com gateway de pagamento (Stripe, Mercado Pago etc.).
- Sem login ou autenticação de usuário.
- Sem painel administrativo.
- Sem banco de dados, backend ou API externa. Todos os dados dos produtos são mockados em `data/products.ts`.

## Instalação e uso

```bash
npm install
npm run dev
```

## Rodando os testes

```bash
npm test
```

Os 11 testes cobrem a lógica pura do carrinho (adicionar, remover, atualizar quantidade, calcular total e formatar preço), sem depender de renderização ou do `localStorage`.

## Gerando o build de produção

```bash
npm run build
```

## Stack

Next.js 16 (App Router), TypeScript, React Context e Jest.
