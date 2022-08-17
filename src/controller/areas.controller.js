const dbConnection = require('../config/database');
let getAreas = async(req,res)=>{
    await dbConnection.query("select distinct StoreID, Store_Area from Stores order by Store_Area asc limit 5;", (err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });
}
module.exports = {
    getAreas
}