const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
  {
    languageName: "Javascript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
  {
    languageName:"C++",
    languageFileName:"cpp"
  },
  {
    languageName:"C",
    languageFileName:"c"
  },
  {
    languageName:"HTML",
    languageFileName:"html"
  },
  {
    languageName:"CSS",
    languageFileName:"css"
  },
];

myCoding.forEach((item) => {
  console.log(`${item.languageName}:${item.languageFileName}`);
  
});

