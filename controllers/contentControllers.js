const { create } = require("domain");
const contents = []



exports.create = async(req,res) => {
        try{
        const{title,others,author,content} = req.body;
        const data = {id:generateID(),title,others,author,content};
        contents.push(data)    
        
        const response = {
            data : {
                msg:"inserção concluida",
            }
        }
        return res.status(201).send(response);
    }catch(error){
            return res.status(500).send({error: error})
        }
    }


function generateID() {
    return Math.random().toString(36).substr(2,9)
 }