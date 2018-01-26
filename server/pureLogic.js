const waterWalls = (array) => {
  
};

/* 
  * notes *
  const waterWalls = (height) => {
    // set max area to 0 and result to []
    // for each item in height at index i
      // for each item in heigh at index j
        // max area is the maximum between current max area and the (minimumbetweenheight[i] and height[j]) * (distance between index j and index i)
        // replace results array with [max area, i, j]
    // return results array
  }
*/

module.exports = {
	waterWalls: waterWalls
};