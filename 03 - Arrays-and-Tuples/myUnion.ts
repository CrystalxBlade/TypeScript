let score: number | string = 22

score = "Blade"


type User =
{
    name: string
    id: number
}

type Admin =
{
    userName: string
    id: number
}

let blade: User | Admin = {name: "crystal", id: 1234}

blade = {userName: "skull", id: 4321}

// array

const data: number[] = [1, 2, 3, 4]
const data2: string[] = ["1", "2", "3", "4"]
const data3: string[] | number[] = [1, 2, 3, 4]
const data4: (string | number)[] = ["1", "2", 3, 4]