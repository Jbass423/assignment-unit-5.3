console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];



function addToCollection(collection, artist, yearPublished, title, tracks) {
  let newalbum = {
    artist: artist,
    yearPublished: yearPublished,
    title: title,
    tracks: tracks
  };
  collection.push(newalbum);
  return newalbum;
};

addToCollection(myCollection, "korn", 1995, "follow the leader");
addToCollection(myCollection, "tool", 1996, "schism");
addToCollection(myCollection, "limp bizkit", 1999, "break stuff");
addToCollection(myCollection, "alfon", 2020, "basta boi");
addToCollection(myCollection, "pantra", 1988, "walk");
addToCollection(myCollection, "lil wayne", 2005, "watch my shoes");

myCollection.forEach(album => console.log(album));
console.log(myCollection);



function showCollection(collection) {
  collection.forEach(album => [
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}, tracks ${album.tracks}`)
  ]);
};

console.log("testing showCollection function:");
showCollection(myCollection);

function findByArtist(collection, artist) {
  let results = []; 

  collection.forEach(album => {
    if (album.artist === artist) {
      results.push(album);
    }
  });
  return results;
};
 console.log("\nTesting findByArtist function:");

 console.log("Albums by artist:", findByArtist(myCollection, "korn"));

console.log("Ablums by unknown artist:", findByArtist(myCollection, "gucci") );

console.log("Albums by tool:", findByArtist(myCollection, "tool"));



function search(collection, artist, yearPublished){
  for (let  i= 0;  i < myCollection.length; i++ ) 
   if (myCollection.artist === artist && myCollection.yearPublished === yearPublished){
    console.log("we found a match:", artist, "and:", yearPublished);
  }
  return collection
  
};








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
