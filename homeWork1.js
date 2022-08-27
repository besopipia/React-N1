დავალება:

// 1) შექმენით მასივი,რომელიც შეიცავს როგორც დადებით ასევე უარყოფით რიცხვებს.გაფილტრეთ მოცემული მასივი შემდეგ კი დაითვალეთ მხოლოდ დადებითი რიცხვების ჯამი. გამოიყენეთ მასივის filter და reduce მეთოდები.


let array = [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52 ],
    positive = array.filter(function (a) { return a >= 0; }),
    sum = positive.reduce(function (a, b) { return a + b; });

console.log(sum);


// 2) შექმენით მასივი,რომელიც შედგება სტრინგებისგან(რომლებიც შეიძლება განმეორდეს). დაწერეთ კოდი,რომელიც დაითვლის რამდენჯერ მეორდება თითოეული სტრინგი მასივში და დააბრუნეთ ობიექტის სახით, მაგ: { a:1 , b: 6, c : 2}. გამოიყენეთ მასივის reduce მეთოდი.

let arr = ['a','b','c','d','d','e','a','b','c','f','g','h','h','h','e','a'];
let repeatCount = arr.reduce(function(prev, curr) {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});

console.log(repeatCount);


// 4) შექმენით ფუნქცია addAsync,რომელიც იღებს ორ პარამეტრს და აბრუნებს პრომისს. თუ ორივე პარამეტრი გადაეცემა(undefined არ არის და ორივე პარამეტრი რიცხვია) პრომისი უნდა დარიზოლვდეს(resolve), წინააღმდეგ შემთხვევაში დარიჯექთდეს(reject). გამოიძახეთ ფუნქცია რამდენიმეჯერ, სხვადასხვა პარამეტრით და კონსოლში გამოიტანეთ შედეგი.


const addSync = (num) => {
  new Promise((resolve, reject) => {
    if (num < 10) {
      resolve("Correct");
    } else {
      reject("Wrong!!");
    }
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

addSync(14); 


