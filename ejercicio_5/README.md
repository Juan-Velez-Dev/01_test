# Arquitectura del BackEnd

### Tecnologías
- Lenguaje de programacion: Typescript
- Entorno de ejecucion: Node.js
- Framework: Express
- Base de datos: PostgreSQL
- ORM: Sequelize
- API RESTful: CRUD
- Seguridad: HTTPS

### Estructura del proyecto

- Patron de diseño DDD (Domain, Driven, Design)
- Organizar el codigo en modulos logicos, seguir una estructura de carpetas como "controllers", "models", "routes".

### Autenticación y autorización:

- Firebase o JWT para el tema de autenticación al acceso.
- Impremetar un patron de autorización basado en roles para controlar el acceso a recursos especificos, "admin", "user", "superadmin".

### Otras cosas a tener en cuenta

- Manejo de errores robusto con mensajes claros
- Documentacion de la API, con buena informacion clara y entendible
- Implementacion de la pasarela de pago, "mercadopago", "paypal".
- Implementar patrones de seguridad.
- Servicios de mensajeria.

