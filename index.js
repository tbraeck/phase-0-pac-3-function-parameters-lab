// **Instructions:** Define a function called `introduction` that defines a
// parameter, `name`, and returns the phrase: "Hi, my name is ${name}."

function introduction(name) {
  return `Hi, my name is ${name}.`
}
introduction(Aki);


function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

introductionWithLanguage(Aki, Ember.js)


function introductionWithLanguageOptional(name, language= "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
introductionWithLanguageOptional(Gracie, language);

















// function introduction(name1) {

// return `Hi, my name is ${name1}.`;
 
// } 

// console.log(introduction("Aki"))

//   function introductionWithLanguage(name1, language) {
// return `Hi, my name is ${name1} and I am learning to program in ${language}.`


//   }

//   console.log(introductionWithLanguage("Aki", "JavaScript"))



//   function introductionWithLanguageOptional(name, language) {
//     return `Hi, my name is ${name} and I am learning to program in ${language}.`
    
    
//       }
    
//       console.log(introductionWithLanguageOptional("Gracie", "JavaScript"))


//       function introductionWithLanguageOptional(name, language = "JavaScript") {
//         return `Hi, my name is ${name} and I am learning to program in ${language}.`;
        
        
//           }
        
//           console.log(introductionWithLanguageOptional("Gracie", "JavaScript"))