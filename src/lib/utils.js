export const sort = (arr = [], fieldName = 'title', order = 'asc') => {
    return arr.sort((a, b) => {
        if(order == 'asc'){
            if(Array.isArray(a[fieldName])){
                return a[fieldName].length - b[fieldName].length;
            }
            return a[fieldName] - b[fieldName];
        }else{
            if(Array.isArray(a[fieldName])){
                return b[fieldName].length - a[fieldName].length;
            }
            return b[fieldName] - a[fieldName]; 
        }
    })
};

export const filterRecords = (arr =[], fieldName='', filterValue) => {
    return arr.filter((field) => {
        if( typeof field[fieldName] === 'string')
            return field[fieldName].includes(filterValue);
        else if(Array.isArray(field[fieldName])){
            return filterValue.length > 0 ? field[fieldName].some(val => filterValue.includes(val)) : true;
        }else if(filterValue){
            return field[fieldName] == filterValue;
        }
        return true;
    })
}