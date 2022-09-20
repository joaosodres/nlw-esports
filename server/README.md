# Back-end

Sempre que você não souber qual DB utilizar sempre opte pelo banco relacional

## Entidades 

### Game

id
title
bannerUrl

CDN (Amazon S3) (Content Delivery Network) => Servir para gente uma url com os "arquivos" salvos

### Ad

id
gameId
name
yearsPlaying
weekDays
hourStart
hourEnd
useVoiceChannel
createdAt
title
bannerUrl

## Casos de uso

- Listagem de games com contagem de anuncios
- Criação de novo Anúncio
- Listagem de anúncio por games 
- Buscar discord pelo ID do anúncio

## Outras anotações

Querry params: 
Route params: Identificação de recuso (ex: acessa um determinado post pelo id na url)
Body params: 

##

HTTP Methods / API Restful Methods / HTTP Codes
HTTP Code que começam com 2 (Sucesso), 3(Redirecionamento), 
(Erros gerado pela aplicação), 5(Erros inesperados)

##

GET (LISTAGEM OU BUSCA DE ALGO), 
POST (CRIANDO ALGO, ENTIDADE OU RECUSO), 
PUT (EDITAR ALGUM CAMPO), 
PATCH (EDITAR INFORMAÇÃO MUITO ESPECÍFICA NA ENTIDADE), 
DELETE (REMOVER ALGUMA ENTIDADE DO BACKEND)