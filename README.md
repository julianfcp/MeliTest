# Test Práctico - Frontend

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de
resultados, y la descripción del detalle del producto.

## Stack Utilizado

● Cliente:
  - HTML
  - JS (Deseable utilizar React o Backbone)
  - CSS (Deseable utilizar Sass)
● Servidor:
  - Node >= 6

## Setup

1. Clona el repositorio e instala las dependencias
```bash
git clone https://github.com/julianfcp/MeliTest.git
```
```bash
npm install
```
2. Ejecuta la aplicacion Backend puerto (3001)
```bash
npm run dev
```
2. Ejecuta la aplicacion Frontend puerto (3000)
```bash
npm start
```


## Routes

FrontEnd

El proyecto consta de diferentes rutas para las vistas tales como son:
○ Caja de Búsqueda: “/”
○ Resultados de la búsqueda: “/items?search=”
○ Detalle del producto: “/items/:id”

Backend

Endoints:
○ /api/items?q=:query
○ /api/items/:id


## Documentacion

Se creo un diccionario de componentes por medio de Storybook para lanzarlo debes ejecutar:

```bash
npm run storybook
```
 
ve a [Storybook](http://localhost:6006/)

Aqui encontraras la siguiente vista:

![Screen Shot 2022-07-18 at 12 05 37 PM](https://user-images.githubusercontent.com/8947334/179564806-27d11c4b-4a1f-451e-b37b-e7203f50217e.png)


### Como correr las pruebas unitarias

To start watch mode, just do:

```bash
npm run test
```

Por lo menos el ambiente Backend debera estar corriendo, ya que se emplearon mocks para verificar que la API esta funcionando.

![Screen Shot 2022-07-18 at 4 53 39 PM](https://user-images.githubusercontent.com/8947334/179623926-f3eebe05-2da2-4816-8a35-be56ef45884f.png)




---

This app was bootstraped based on the template provided by [`create-react-app`](https://github.com/facebook/create-react-app)
