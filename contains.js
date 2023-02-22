//Write a function called contains that searches 
//for a value in a nested object.
//It returns true if the object contains that value.
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}


function contains (obj, value) {
    return Object.keys(obj).some((key) => {
        if (typeof obj[key] === 'object') {
            return contains(obj[key], value)
        }
        if (obj[key] === value) {
            return true
        }
    })
}
console.log(contains(nestedObject, 44))

