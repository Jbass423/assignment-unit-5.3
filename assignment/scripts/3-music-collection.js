console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [
];
const max = 100 ; 

function addToCollection(collection, title, artist, yearPublished) {
  myCollection.push(title)
  myCollection.push(collection)
  myCollection.push(artist)
  myCollection.push(yearPublished)
  return 
};

let Korn = {
  artist: "korn",
  album: `follow the leader`,
  yearPublished: "1995",
  collection: `rock`
};



let tool = {
  artist: "tool",
  album: "schism",
  yearPublished: "1996",
  collection: "rock"
}


addToCollection(Korn);
addToCollection(tool);
console.log(myCollection);



// dont write past this line its for the next problem 

function showCollection(collection) {
  for (let i = 0; i < myCollection.length; i++) {
    console.log("in collection", showCollection)
    
  }
  return 
}
 
  



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
