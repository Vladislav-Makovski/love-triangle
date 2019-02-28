/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let firstLove;
  let secondLove;
  let thirdLove;
  let numberOfLoveTriangles = 0;
  for (let index = 0; index < preferences.length; index++) {
    firstLove = preferences[index];
    secondLove = preferences[firstLove-1];
    thirdLove = preferences[secondLove -1];
    if(thirdLove-1 === index){
      numberOfLoveTriangles++;
    }
  }
  console.log(numberOfLoveTriangles);
return Math.floor(numberOfLoveTriangles/3);
};
