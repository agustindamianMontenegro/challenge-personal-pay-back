<h1 align="center">Developer Applicant Interview Test- BACK - PERSONAL PAY</h1>


## INSTALAR DEPENDENCIAS 
```
npm i
```

## CONFIGURACION Y ENV NECESARIAS

```
Es necesario crear el archivo .env si se va levantar de forma local agregando las siguientes envs
API_KEY     (key de la api de openweathermap.org )
PORT

si por algun motivo las url de las api cambia se podran cambiar con las siguientes envs
URL_API_WEATHER
URL_API_IP
```

## CONSIDERACIONES 
```
si se va a probar de forma local agregar  el header x-forwarded-for con alguna ip sino tomar localhost y la api de ip-api arojara un error
```

## Curl de ejemplos
```
curl --location --request GET 'http://localhost:3030/v1/location' \
--header 'x-forwarded-for: 190.111.229.189'


curl --location --request GET 'http://localhost:3030/v1/current' \
--header 'x-forwarded-for: 190.111.229.189'


curl --location --request GET 'http://localhost:3030/v1/current/buenos aires' \
--header 'x-forwarded-for: 190.111.229.189'


curl --location --request GET 'http://localhost:3030/v1/forecast/buenos aires' \
--header 'x-forwarded-for: 190.111.229.189'


curl --location --request GET 'http://localhost:3030/v1/forecast' \
--header 'x-forwarded-for: 190.111.229.189'
```
##IMPORTANTE
```
El servicio ya se subio a heroku para que se pueda utilizar 
https://personal-pay-challenge.herokuapp.com/

curl de prueba en heroku


curl --location --request GET 'https://personal-pay-challenge.herokuapp.com//v1/location' 

curl --location --request GET 'https://personal-pay-challenge.herokuapp.com//v1/current' 

curl --location --request GET 'https://personal-pay-challenge.herokuapp.com//v1/current/buenos aires' 

curl --location --request GET 'https://personal-pay-challenge.herokuapp.com//v1/forecast/buenos aires' 

curl --location --request GET 'https://personal-pay-challenge.herokuapp.com//v1/forecast'
```