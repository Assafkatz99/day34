// ### EX1 ###
const func = (arg: string | number | boolean) : object => {
    return{"value": arg, "type": typeof(arg)}};

// console.log(func(2));

// ### EX2 ###
// interface IRectangle {
//     length: number,
//     width: number
// }

// class Rectangle {
//     rect: IRectangle;
    
//     constructor (rect: IRectangle){
//         this.rect = rect
//     }
    
    
//     getParimeter():number{
//         return this.rect.length*2 + this.rect.width*2
//     }
    
//     getArea():number{
//         return this.rect.length*this.rect.width
//     }
    
// }

// let a:Rectangle = new Rectangle ({length:5,width:8})

// console.log(a.getArea())
// console.log(a.getParimeter())


// ### EX3 ###

interface IPoints {
    x:number,
    y:number
}

const distance = (first:IPoints, second:IPoints) => {
let dx: number = first.x-second.x;
let dy: number = first.y-second.y;

return (Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2)))
}

// console.log(distance({x:2,y:3},{x:4,y:5}))

// ### EX4 ###

enum CardRank{
    Ace =1, 
    Two, 
    Three, 
    Four, 
    Five, 
    Six, 
    Seven, 
    Eight, 
    Nine, 
    Ten, 
    Jack, 
    Queen, 
    King
}

interface Card{
    suit:string,
    rank:CardRank
}

const higherRankedCard = (c1:Card, c2:Card): Card => {
    return ((c1.rank>c2.rank)?c1:c2)
}

// console.log(higherRankedCard({suit:"",rank:CardRank.Jack}, {suit:"",rank:CardRank.Five}))


// ### EX5 ###

class Person{
    name: string;
    age: number;
    email: string;

    constructor(name:string, age:number, email:string){
        this.name = name
        this.age = age
        this.email = email
    }
}

let matar = new Person("matar",25,"mj@gmail.com")

// console.log(matar)

// ### EX6 ###

interface IRectangle{
    length: number,
    width: number
}

interface ICircle{
    radius: number
}

type IShape = IRectangle & ICircle;

const MyShape = (s:IShape) => {
    return(s.length*s.radius*s.width)
}

// console.log(MyShape({length:5, width:8, radius:9}))

// ### EX7 ###

const swap = <T>(a1:T, a2:T):Array<T> => {
    return([a1,a2])
}

// console.log(swap("a","b"))

// ### EX8 ###

const minMax = <T>(arr:T[]):T[] => {

return ([arr.sort()[0],arr.sort()[arr.length-1]])

}

// console.log(minMax<string>(["a","c","b"]))