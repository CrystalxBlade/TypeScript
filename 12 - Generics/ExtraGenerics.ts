/*

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

*/

interface Bottle
{
    brand: string,
    type: number
}


function getSearchProducts<T>(products: T[]): T           // using normal function
{
    const myIndex = 4
    return products[myIndex]
}


const getMoreSearchProducts = <T>(products: T[]): T =>   // using arrow function  
    {
        const myIndex = 5
        return products[myIndex]
    }


const getProducts = <T,>(products: T[]): T =>   // here you can see theres a comma <T,> this is to mention that   
    {                                           // it's not a HTML tag it is a generic
        const myIndex = 5
        return products[myIndex]
    }

interface Database
{
    connection: string,
    username: string,
    password: string
}


function anotherFunction <T, U extends Database>(valOne: T, valTwo: U)
{
    return {valOne, valTwo}
}


interface Quiz
{
    name: string,
    type: string
}

interface Course
{
    name: string,
    author: string,
    subject: string
}

class sellable<T>
{
    public cart: T[] = []

    addToCart(product: T)
    {
        this.cart.push(product)
    }
} 



