const validateFields = require("./utils/validate-fields");

module.exports = (payload) => {
    try{
        const {
            nameNews,
            description,
            updateDate,
            linkNews,
            likes
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
            }  
        ]
        const validateFieldsBody = await validateFields(
            fieldsPayload,
            payload.body
        )

        if(validateFieldsBody){
            throw new Error({
                validateFieldsBody
            })
        }
    }
    catch(err){
        throw new Error(
            {
                'message':'Undortunately, it was not possible to process your request. Try again later.'
            }
        );
    }
    return payload
}