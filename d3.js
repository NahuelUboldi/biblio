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