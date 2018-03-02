# Waterfall
find which walls have the most water trapped in it
every number is an adjacent vertical pipe with a width of 1


## input 
[1, 2, 3, 1, 2, 1, 3, 4] -> heights

## output
[2, 6, 5] -> [index, index, total-water]

## high-strategy
find the tips of the wells, and count the lesser values 
in between

## process



const waterwalls = (heights) => {
  -brute force O(n^2)- 
    // set max area to 0 and result to []
    // for each item in height at index i
      // for each item in height at index j
        // max area is the maximum between current max area and the (minimumbetweenheight[i] and height[j]) * (distance between index j and index i)
        // replace results array with [max area, i, j]
    // return results array	

}
