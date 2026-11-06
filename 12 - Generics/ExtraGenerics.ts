const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number
{
    return val                                                // it can either be a number or a string it works 
                                                              //  same as type but only limited to number or     types 
} 

function identityTwo(val: any): any
{
    return val                                             // it might get any number and can return any string 
}

function identityThree<Type>(val: Type): Type
{
    return val                                             // it is only returning from what it's getting and
                                                           // don't need to define types real use of generics
}

identityThree(4)
identityThree("BLADE")


function identityFour<T>(val: T): T                        // short hand to type generics for lazy people 
{
    return val
}