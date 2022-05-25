const validateFields = require("./utils/validate-fields");
const createNews = require("./controllers/newsCreator")
import mongoose from "mongoose";

module.exports = (payload) => {
    try{
        const {
            nameNews,
            description,
            updateDate,
            linkNews,
            likes,
            operation
        } = payload.body;

        const fieldsPayload = [
            {
                name: 'nameNews',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            },{
                name: 'updateDate',
                type: 'string'
            },{
                name: 'linkNews',
                type: 'string'
            },{
                name: 'likes',
                type: 'inteiro'
            },
            {
                name: 'operation',
                type: 'string'
            }    
        ]
        const validateFieldsBody = validateFields(
            fieldsPayload,
            payload.body
        )
        
        if(validateFieldsBody){
            throw new Error({
                validateFieldsBody
            })
        }

        var data = {
            nameNews,
            description,
            updateDate,
            linkNews,
            likes,
        }

                
        //Connectando no mongo
        const uri = "{YourMongoConnectionAPI}";
        mongoose.connect(uri);
        //----


        if(operation === "create"){
            createNews.handle(data)
        }
        
    }
    catch(err){
        throw new Error(
            {
                'message':'Unfortunately, it was not possible to process your request. Try again later.'
            }
        );
    }
    return payload
}