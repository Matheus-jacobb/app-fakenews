const _ = require('lodash')

function isNumeric(str){
    if(typeof str != "string") return false

    return !isNaN(str) && !isNaN(parseFloat(str));
}

module.exports = async (fields, parameters) => {

    for(const field of fields){
        const existParam = _.get(parameters, `${field.name}`, '@error@') !== '@error@'
        const fieldValue = _.get(parameters, `${field.name}`)
        const paramIsNull = _.get(parameters, `${field.name}`) === null

        //validações gerais
        const nullValidation = existParam && paramIsNull;
        const stringValidation = field.type === "string" && typeof(fieldValue) !== "string"
        const numberValidation = field.type === "number" && typeof(fieldValue) !== "number"

        if(nullValidation){
            return `The value of the ${field.name} field cannot be null`
        }
        else if(stringValidation){
            return `The value of the ${field.name} field must be a string`
        }
        else if(numberValidation){
            return `The value of the ${field.name} field must be a number`
        }
        else
            return null
    }
}