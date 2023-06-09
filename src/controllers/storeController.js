import db from "../database/database.connection.js";
import dayjs from "dayjs";


const loadStore = async (req, res) => {

    const name = "Matt Rodrigues"
    const userId = "06021998";
    let user;
    let sales;
    try{
        user = await db.collection("accounts").findOne({name: name});
        if(!user) return res.status(404).send("Usuário não encontrado");
        // return res.status(200).send(user.name);
    }catch(error){
        return res.status(422).send(error);
    }
    
    try{   
        const list = await db.collection("historic").find({userId: userId}).toArray();
        if(!list) return res.status(404).send("Nada encontrado");
        sales = list.slice(-3).reverse();
        const DATA = {user, sales};
        return res.status(200).send(DATA);
    }catch(error){
        return res.status(500).send(error)
    }
}

export default loadStore;