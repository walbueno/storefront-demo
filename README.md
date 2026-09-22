# Storefront Demo

Storefront desenvolvido com **Next.js, React e TypeScript** para explorar conceitos de produto digital, experiência de compra e arquitetura de interfaces para e-commerce.

O projeto implementa uma jornada de compra demonstrativa, desde a navegação pelo catálogo até o checkout.

> **Status:** Projeto demonstrativo. Não utiliza processamento de pagamentos, backend ou plataforma de e-commerce real.

---

## 🎯 Objetivo

O objetivo é construir uma experiência de compra completa em uma aplicação web, explorando os principais momentos da jornada de um usuário em um e-commerce.

```text
Home
  ↓
Categoria
  ↓
Produto
  ↓
Carrinho
  ↓
Checkout
```

---

## 🛍️ Funcionalidades

O projeto contempla:

* página inicial;
* navegação por categorias;
* página de produto;
* gerenciamento de carrinho;
* atualização de quantidade;
* persistência do carrinho;
* fluxo de checkout;
* componentes reutilizáveis;
* testes automatizados da lógica do carrinho.

---

## 🛒 Gerenciamento do carrinho

O estado do carrinho é gerenciado através de **React Context**.

A persistência utiliza `localStorage`, permitindo que os itens permaneçam disponíveis durante a navegação da aplicação.

---

## 🏗️ Arquitetura

A aplicação utiliza Next.js e uma organização baseada em páginas, componentes, dados e funções auxiliares.

```text
app/
components/
data/
lib/
tests/
```

A separação busca manter responsabilidades mais claras entre interface, dados e regras utilizadas pela aplicação.

---

## 🧪 Testes

O projeto possui testes automatizados para a lógica relacionada ao carrinho.

Atualmente existem **11 testes** relacionados a esse fluxo.

Os testes ajudam a verificar operações como:

* adição de produtos;
* remoção;
* atualização de quantidade;
* cálculo relacionado ao carrinho.

---

## 🔐 Segurança e escopo

Este projeto é uma demonstração de Front-End e experiência de e-commerce.

Não possui:

* processamento real de pagamentos;
* autenticação;
* backend próprio;
* banco de dados;
* integração com gateway de pagamento;
* integração com Tray, Bagy ou outra plataforma de e-commerce.

Portanto, não deve ser utilizado como implementação de checkout de produção.

---

## 🧠 Decisões técnicas

O projeto explora principalmente:

* componentização;
* gerenciamento de estado;
* persistência local;
* organização de interfaces;
* experiência de compra;
* separação de responsabilidades;
* testes automatizados.

---

## 🚀 Possíveis evoluções

Uma evolução para produção poderia incluir:

* backend;
* banco de dados;
* autenticação;
* gerenciamento de estoque;
* integração com gateway de pagamento;
* cálculo de frete;
* pedidos;
* observabilidade;
* integração com plataformas de e-commerce.

---

## 💡 Relação com e-commerce

O projeto demonstra conceitos fundamentais presentes em produtos de comércio eletrônico, mas não representa uma integração com uma plataforma específica.

Minha experiência profissional com e-commerce inclui atuação em projetos utilizando diferentes ecossistemas, enquanto este repositório foi desenvolvido como laboratório técnico para explorar a construção de uma experiência de compra.

---

## 💡 O que este projeto demonstra

* Desenvolvimento Front-End;
* Next.js;
* React;
* TypeScript;
* arquitetura de interfaces;
* gerenciamento de estado;
* experiência de compra;
* testes automatizados;
* pensamento orientado a produto.

---

## 👨‍💻 Autor

**William Bueno**

Software Engineer · Web Applications · Digital Products

* [GitHub](https://github.com/walbueno)
* [LinkedIn](https://www.linkedin.com/in/walbueno)
* [Portfolio](https://williambueno.com.br)
* [Beez Creative](https://beezcreative.com.br)
