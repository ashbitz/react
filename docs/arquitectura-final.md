# Arquitectura final

En este proyecto se ha desarrollado una pequeña aplicación en React usando TypeScript con tipado estricto.

## Uso de genéricos

Se ha creado un componente genérico `DataTable<T>` que permite reutilizar la tabla con distintos tipos de datos sin duplicar código.

Gracias a esto:

- la tabla no depende de una estructura concreta
- se puede usar con cualquier entidad (por ejemplo `Student`)

## Uso de keyof

En las columnas se usa `keyof T` para asegurar que las claves que se indican existen realmente en el tipo de datos.

Esto evita errores como:

- escribir mal un campo (`emali` en vez de `email`)
- intentar mostrar propiedades que no existen

## Uso de Partial

Se ha utilizado `Partial<Student>` para el estado de edición.

Esto permite trabajar con objetos incompletos mientras el usuario edita datos, sin obligar a tener todos los campos definidos desde el principio.

## Uso de librerías externas tipadas

Se ha utilizado `date-fns` para calcular la diferencia entre fechas.

Se ha creado una función propia con tipos claros:

- recibe `Date`
- devuelve `number`

Esto asegura que no se usen formatos incorrectos.

## Conclusión

El uso de TypeScript en este proyecto ayuda a detectar errores antes de ejecutar la aplicación.

Comparado con JavaScript, se reduce el riesgo de:

- acceder a propiedades que no existen
- usar tipos incorrectos
- olvidar casos en la lógica

En resumen, se gana seguridad y mantenimiento del código.
