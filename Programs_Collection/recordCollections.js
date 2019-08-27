// Setup
var collection = {
  "2548": {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"]
  },
  "2468": {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"]
  },
  "1245": {
    artist: "Robert Palmer",
    tracks: []
  },
  "5439": {
    album: "ABBA Gold"
  }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
// function updateRecords(id, prop, value) {
//   if (
//     collectionCopy.hasOwnProperty(id) &&
//     typeof collectionCopy[id] === "object"
//   ) {
//     if (prop === "tracks") {
//       if (collectionCopy[id].hasOwnProperty(prop)) {
//         console.log("tracks");
//         value
//           ? collectionCopy[id][prop].push(value)
//           : delete collectionCopy[id][prop];
//       } else {
//         console.log("tracks not there");
//         if (value) {
//           let tracks = [];
//           tracks.push(value);
//           collectionCopy[id]["tracks"] = tracks;
//         }
//       }
//     } else {
//       console.log("not tracks");
//       if (value !== "") {
//         collectionCopy[id][prop] = value;
//         console.log(collectionCopy[id].prop);
//       } else {
//         delete collectionCopy[id][prop];
//       }
//     }
//   }
//   console.log(JSON.stringify(collectionCopy));
//   return collectionCopy;
// }

// Better way
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (collectionCopy[id][prop]) {
      collectionCopy[id][prop].push(value);
    } else {
      collectionCopy[id][prop] = [value];
    }
  } else if (value !== "") {
    collectionCopy[id][prop] = value;
  } else {
    delete collectionCopy[id][prop];
  }
  console.log(collectionCopy);
  return collectionCopy;
}

// Alter values below to test your code
updateRecords(5439, "tracks", "Take a Chance on Me");
