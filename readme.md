# Web Scraper con Playwright

## Descripción del proyecto:

Este proyecto utiliza la biblioteca Playwright para extraer datos de una página web en este caso esta enfocado en Mercado libre Colombia en su sección Usados.

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

Se recomienda solo modificar la propiedad ITEM para buscar elementos usados en la pagina de mercado Libre

- PAGE=https://listado.mercadolibre.com.co/
- ITEM=rx-6500
- CLASS_ELEMENT=andes-money-amount\_\_fraction
