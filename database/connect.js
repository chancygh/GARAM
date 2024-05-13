var client = null;

function connecter(url,callback){
    if (client=null){
        client = new MongoClient(url);

        client.connect((erreur)=>{
            if(erreur){
                client=null;
                callback(erreur);
            }else{
                callback();
            }
        })
    }
}

function database(){
    return new database (client,"db")
}

function fermer(){
    if (client){
        client.closer();
        client=null;
    }
}

module.exports = {connecter,database,fermer};