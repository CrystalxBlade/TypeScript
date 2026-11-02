interface TakePhoto
{
    cameraMode: string
    filter: string
    burst: number
}

interface Story
{
    createStory(): void
}

class Instagram implements TakePhoto
{
    constructor(
        public cameraMode: string, 
        public filter: string, 
        public burst: number
    ){}
}

class Youtube implements TakePhoto, Story
{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}

    createStory(): void 
    {
        console.log("Story was created");    
    }
}


/*

implements is a keyword a class uses to promise that it follows the shape of an interface (or type). TypeScript then checks that the class really has every property and method the interface requires.

implements vs extends

implements: “I will follow this shape” (a class and an interface, no code shared).
extends: “I inherit from this” (a class and a parent class, code is shared).

*/