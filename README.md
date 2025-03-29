# Eduardo Pereira Dev

## 🖥️ Sobre o Projeto
Este é um projeto desenvolvido com **Next.js**, **React**, **Tailwind CSS** e outras tecnologias modernas para proporcionar uma experiência web fluida e responsiva. O design foi cuidadosamente elaborado, utilizando animações e uma identidade visual única.

## 📸 Imagem de Perfil
A imagem utilizada no projeto foi gerada com ferramentas de Inteligência Artificial (IA), que converteram a foto do Eduardo em um desenho estilizado.

## 🚀 Tecnologias Utilizadas

- **Next.js** (13.5.3)
- **React.js** (18.2.0)
- **Tailwind CSS** (3.3.3)
- **Framer Motion** (para animações)
- **Redux & React-Redux** (gerenciamento de estado)
- **Styled Components** (estilização)
- **Swiper.js** (carrossel)
- **EmailJS** (envio de emails)
- **Axios** (requisições HTTP)
- **Formik & Yup** (validação de formulários)
- **Jest & Cypress** (testes automatizados)
- **Docker** (containerização)

## 📂 Estrutura do Projeto

```
├── public
├── src
│   ├── components
│   ├── pages
│   ├── styles
│   ├── utils
│   ├── hooks
│   ├── services
│   ├── store
│   ├── assets
├── .gitignore
├── tailwind.config.js
├── package.json
├── README.md
```

## 🎨 Configuração do Tailwind CSS

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Open Sans"'],
      handwriting: ["Caveat"],
      headline: ["Poppins"],
    },
    extend: {},
  },
  plugins: [],
};
```

## 📜 Estilos Customizados
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.translate-z-0 {
  transform: translateZ(0px);
}

.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets
  .swiper-pagination-bullet {
  background-color: #f52d1f;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  color: #f13024;
}

@layer base {
  body {
    @apply bg-secondary overflow-hidden leading-relaxed;
  }
  .page {
    @apply w-full h-screen overflow-hidden;
  }
  .h1 {
    @apply text-[28px] leading-tight sm:text-[35px] md:text-[60px] md:leading-[1.3] mb-8 font-semibold;
  }
  .h2 {
    @apply text-[28px] leading-tight sm:text-[35px] md:text-[54px] md:leading-[1.3] mb-4 font-semibold;
  }
  p {
    @apply leading-[1.8] text-white/60 font-light;
  }
  .btn, .input {
    @apply h-[52px];
  }
  .input {
    @apply w-full h-[52px] rounded-lg pl-6 capitalize;
  }
  .input, .textarea {
    @apply bg-transparent outline-none focus:ring-1 focus:ring-accent border border-white/20 placeholder:text-white/30 placeholder:font-light;
  }
  .textarea {
    @apply w-full h-[180px] p-6 capitalize rounded-lg resize-none;
  }
  .responsive-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4;
  }
  .responsive-padding {
    @apply p-4 md:p-6 lg:p-8;
  }
}
```

## 📦 Como Rodar o Projeto
```sh
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Para construir o projeto
npm run build

# Para iniciar o projeto em produção
npm run start
```

## 🌎 Deploy
O projeto está hospedado em **[eduardopereira-dev.vercel.app](https://eduardopereira-dev.vercel.app/)**

---
💡 **Feito por [Eduardo Pereira](https://eduardopereira-dev.vercel.app/)** 🚀

