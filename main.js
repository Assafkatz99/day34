// ### EX1 ###
var func = function (arg) {
    return { "value": arg, "type": typeof (arg) };
};
var distance = function (first, second) {
    var dx = first.x - second.x;
    var dy = first.y - second.y;
    return (Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));
};
// console.log(distance({x:2,y:3},{x:4,y:5}))
// ### EX4 ###
var CardRank;
(function (CardRank) {
    CardRank[CardRank["Ace"] = 1] = "Ace";
    CardRank[CardRank["Two"] = 2] = "Two";
    CardRank[CardRank["Three"] = 3] = "Three";
    CardRank[CardRank["Four"] = 4] = "Four";
    CardRank[CardRank["Five"] = 5] = "Five";
    CardRank[CardRank["Six"] = 6] = "Six";
    CardRank[CardRank["Seven"] = 7] = "Seven";
    CardRank[CardRank["Eight"] = 8] = "Eight";
    CardRank[CardRank["Nine"] = 9] = "Nine";
    CardRank[CardRank["Ten"] = 10] = "Ten";
    CardRank[CardRank["Jack"] = 11] = "Jack";
    CardRank[CardRank["Queen"] = 12] = "Queen";
    CardRank[CardRank["King"] = 13] = "King";
})(CardRank || (CardRank = {}));
var higherRankedCard = function (c1, c2) {
    return ((c1.rank > c2.rank) ? c1 : c2);
};
// console.log(higherRankedCard({suit:"",rank:CardRank.Jack}, {suit:"",rank:CardRank.Five}))
// ### EX5 ###
var Person = /** @class */ (function () {
    function Person(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    return Person;
}());
var matar = new Person("matar", 25, "mj@gmail.com");
var MyShape = function (s) {
    return (s.length * s.radius * s.width);
};
// console.log(MyShape({length:5, width:8, radius:9}))
// ### EX7 ###
var swap = function (a1, a2) {
    return ([a1, a2]);
};
// console.log(swap("a","b"))
// ### EX8 ###
var minMax = function (arr) {
    return ([arr.sort()[0], arr.sort()[arr.length - 1]]);
};
// console.log(minMax<string>(["a","c","b"]))
