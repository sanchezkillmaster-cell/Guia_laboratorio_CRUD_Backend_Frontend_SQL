# LAB CRUD — Frontend

React + Vite para consumir el backend del laboratorio.

## Requisitos

- Node.js 20+
- Backend ejecutándose en `http://localhost:3000`
- Base de datos `lab_crud`

## Instalar

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

frontend:  `http://localhost:5173`

## Usuarios de prueba 

Admin:
- `admin@labcrud.local`
- `Password123!`

cliente:
- `cliente@labcrud.local`
- `Password123!`

## Responsabilidades

- `assets`:estilos y recursos.
- `components`: componentes reutilizables.
- `config`: configuracion del frontend.
- `context`: estado global de autenticación.
- `hooks`: hooks propios.
- `pages`:pantallas.
- `services`: comunicaicon con la API.
- `utils`: almacenamiento de sesión.

## flujo

Login -> AuthContex -> JWT en localStorage -> `api.js` agrega Bearer token -> backend verifica JWT -> autorización por rol

El botón eliminar solo aparece para `admin`, pero el backend tambien verifica el rol. Ocultar un botón en react no constituye seguridad.
