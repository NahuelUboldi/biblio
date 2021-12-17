const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => (d + " USD"))
  .style("color", (d) => {
    return d < 20 ? "red" : "green";
  } )
  .attr("class","container")
  /*the d return each individual data and the i is de index of the data*/
  .attr("x", (d, i) => {
   return i * 30
})

//MIN AND MAX FUNCTIONS
const notNestedData = [4,6,2,3,7,9];
const outputMin = d3.min(notNestedData) // method to get the min value of an array

const nestedData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
const outputMax = d3.max(nestedData, (d) => d[2]); // cb function to search in nested arrays
  
d3.select("body")
  .append("h2")
  .text(outputMax)