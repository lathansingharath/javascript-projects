function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }
 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
for (i = 0; i < 3; i++){
  console.log(randomSelection(happiness));
  console.log(randomSelection(words));
}

 //b) Have the code randomly pick one array, and then print 2 random items from it.
 let randomArr = Math.floor(Math.random() * 6);
 console.log("The random number is ",randomArr);
 if (randomArr <= 2) {
    for (i = 0; i < 2; i++){
      console.log(randomSelection(happiness));
    } 
  } else {
    for (i = 0; i < 2; i++) {
      console.log(randomSelection(words));

    }
  
 }

 //c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
 let pickedRandArr = [];
 console.log("Created a new array with one random item from happiness and words");

 let randHappiness = (Math.floor(Math.random() * happiness.length));
 let randWords = (Math.floor(Math.random() * words.length));

 pickedRandArr.push(happiness[randHappiness]);
 pickedRandArr.push(words[randWords]);
 
console.log(pickedRandArr);
 

