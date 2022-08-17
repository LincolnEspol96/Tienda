const dbConnection = require('../config/database');
let getClientestop = async(req,res)=>{
    await dbConnection.query("select StoreID,Daily_Customer_Count from Stores order by Daily_Customer_Count asc;", (err,result)=>{
        if(result){
            res.send(result);
        }else{
            res.status(500).send(err);
        }
    });
}
module.exports = {
    getClientestop
}