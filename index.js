// Carregando Módulos
const Twit = require('twit')
require('dotenv').config()

// Criando o bot
const bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,

    timeout_ms: 60 * 100,
})

// Funções
// Configurações de pesquisa
function botIniciar () {
    var query = {
        q: 'pizza',
        result_type: 'recent',
        lang: 'pt',
    }
    
// Localiza tweets   
bot.get('search/tweets', query, localizaTT)

function localizaTT (error, data, response) {
    if(error) {
        console.log('Nao foi possivel achar os  tweets: ' + error)
    } else {
        var id = {
        id: data.statuses[0].id_str
    }
}

// Retweet nos tweets encontrados 
bot.post('statuses/retweet/:id', id, retweetTT)
    function retweetTT(error, response) {
        if(error) {
            console.log('O bot não conseguiu dar Retweet: ' + console.error)
        } else {
            console.log('O bot deu retweet em: ' + id.id)
            }
        }
    }
}

    
// Chama função pela primeira vez
botIniciar()
// Chama função depois de 5 minutos
setInterval(botIniciar, 5 * 60 * 1000)