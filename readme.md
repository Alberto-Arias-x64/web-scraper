# Web Scraper con Playwright

## Descripción del proyecto:

Este proyecto utiliza la biblioteca Playwright para scrapear datos de una página web (en este caso esta enfocado en Mercado libre Usados). Playwright es una herramienta de automatización web que permite controlar navegadores web como Chrome, Firefox y Chromium.

## Requisitos:

- Node.js
- Playwright

## DEV:

### Clonar el repositorio

```bash
git clone https://github.com/Alberto-Arias-x64/web-scraper.git
```

### Instalar depencias:

```bash
npm install
npx playwright install
```

## Configuracion:

Se recomienda solo modificar la propuedad ITEM para buscar elementos usados en la pagina de mercadolibre

- PAGE=https://listado.mercadolibre.com.co/
- ITEM=rx-6500
- CLASS_ELEMENT=andes-money-amount\_\_fraction
