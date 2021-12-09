exports.isAllParametersPresent = (array) => {
    try {
        return  array.every(e => e !== undefined && e !== "")
    }catch(err){
        return false
    }
}
