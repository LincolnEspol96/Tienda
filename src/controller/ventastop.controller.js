const dbConnection = require('../config/database');

let getVentastop = async(req,res)=>{
    await dbConnection.query("select StoreID, Store_Sales from Stores order by Store_Sales desc limit 20;", (err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });
}
module.exports = {
    getVentastop
}