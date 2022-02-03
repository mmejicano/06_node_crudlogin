

### Conocimientos

1. Librerias: dotenv, express, mongoose, morgan, cors, bcryptjs, express-validator, jsonwebtoken
2. http code error: 200, 404, 403, 500
3. http methods: get, put, delete, post
4. routes: parametros de segmento :id + req.params.id
5. post methods: express.json() + req.body
6. query params: ?q=hola&limit=5&desde=0 + req.query
7. heroku deploy = start: node app
8. postman environment & variables
9. estructura folder: models/-controllers+database/ +routes/ + middlewares/ + helpers
10. destructuracion extrae: {google, ...resto}
11: cifrar: 1.verificar si mail existe 2. generar salt + encryptpar 3. guardar db 4. no mandar password en la respuesta
12. express-validator: coleccion middleware, son funciones que se colocan en las rutas (array) y en el controller (errors)
13. VALIDATION es importante = model-Schema + express-validator + frontend
14. custom middlewares: req, res, next
15. envio implicito de args (rol): custom(esRoleValido) 
16. express.json() | .urlencoded({extended: true}) para <form>
17. sobreescritura de method.toJSON en el modelo: elimina password
18. metodos: find(), .save(), findById(), findByIdAndUpdate(), findByIdAndDelete() 
19. Paginacion: find().skip().limit() + .countDocument()
20. No se borra usuario para mantener integridad de la db
21: await Promise.all([]): para llamar varias promesas simultaneas

22. heroku cli: heroku --version
23. env en heroku
24. .env no se guarda en git: gitignore

### Mongo

- Libreria: mongoose
- FUncion connect + conectarDB
- MOdelos db, Schema, model

### GIT COMMANDS

_volver en el tiempo_
git checkout -- .
git push
git rm .env --cached

_release tag_
git tag -a v1.0.0 -m "Fin seccion 8"
git push --tags

git branch


### HEROKU CLI
heroku --version
heroku config
heroku config:set MONGO_CNN="mongodb"
heroku config:set PORT="8080"
heroku config:unset nombre="Fernando"
git push heroku main


### TOKENS: jwt.io
1. fisico
2. virtual: two facto auth

soluciona problema de las "variables de session"
jwt se divide en: 
1. header (algoritmo usado y tipo token), 
2. payload (data, siempre es descifrable, no grabar info sensible), 
3. firma (info de validacion del token)

session storage: se borra al cerrar browser
local storage: almacenamiento permanente por dominio



### LOGIN
