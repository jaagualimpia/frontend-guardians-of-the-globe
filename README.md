# Contexto
En este apartado se especifican las acciones necesarias a llevar a cabo para ejecutar de manera satisfactoria el proyecto de frontend guardians of the globe. La ejecución de este proyecto esta directamente ligada con el proyecto  [backend guardians of the globe](https://github.com/jaagualimpia/backend-guardians-of-the-globe.git). Es necesario antes de lanzar el proyecto del front que el backend anteriormente especificado ya se encuentre corriendo en la maquina.  

# Prerequisitos
- La maquina en la cual se quiera ejecutar el proyecto necesita de los siguientes elementos. 
1. git 
2. NodeJS
3. npm 


# Paso a paso
 1. Primero se debe instalar el proyecto en la maquina haciendo uso de `git clone` y adicionalmente ejecutando el comando `cd guardians_of_the_globe` para entrar al proyecto
 2. Ya habiendo entrado a la carpeta donde se almacena el proyecto se deberá de ejecutar el comando `npm install` para instalar los paquetes y dependencias necesarias para el correcto funcionamiento de todo el proyecto 
 3. Habiendo realizado esto se debe de crear un archivo .env cuya estructura debe de cumplir con el siguiente formato
	
		En caso de que se haya asignado el puerto propuesto en el instructivo para el backend:
		REACT_APP_API_URL=http://localhost:5050/api/v1
		
		En caso de que se haya escogido un puerto personalizado al lanzar el backend: 
		REACT_APP_API_URL=http://localhost:<puerto_personalizado>/api/v1

4. Finalmente se debe de ejecutar el comando `npm start`  para poder iniciar el proyecto. 