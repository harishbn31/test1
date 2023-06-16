import React, { useEffect } from "react";
import * as d3 from "d3";

export default function ScatterPlot({data}) {
    // const ref = useD3(
    //       (svg) => {
  useEffect(() => {
    const svg = d3.select("svg")
    const margin = {top: 20, right: 30, bottom: 40, left: 60},
    width = 510 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;
    const xScale = d3.scaleLinear().domain([0, 1000]).range([0, width]),
    yScale = d3.scaleLinear().domain([-100, 100]).range([height, 0]);
    const colors = [
    '#CA466D',
    '#FF951A',
    '#FCD458',
    '#83DE3D',
    '#CAFE00',
    '#FFF900',
    '#FFFDB1',
    '#79FFC1',
    '#00FE89',
    '#00FFFF',
    '#009FFF',
    '#3824FF',
    '#9C24FF',
    '#FF19C9',
    '#ff0000',];
		
     // Title
     svg.append('text')
     .attr('x', width/2 + 100)
     .attr('y', 20)
     .attr('text-anchor', 'middle')
     .style('font-family', 'Helvetica')
     .style('font-size', 20)
     .text('Popualation Vs. Density Correlation');
     
     // X label
     svg.append('text')
     .attr('x', width/2 + 100)
     .attr('y', height +40)
     .attr('text-anchor', 'middle')
     .style('font-family', 'Helvetica')
     .style('font-size', 12)
     .text('Population Density');
     
     // Y label
     svg.append('text')
     .attr('text-anchor', 'middle')
     .attr('transform', 'translate(60,' + height/2 + ')rotate(-90)')
     .style('font-family', 'Helvetica')
     .style('font-size', 12)
     .text('Population Growth (%)');

    //  const tooltip = d3.select("#my_dataviz")
    //  .append("div")
    //  .style("opacity", 0)
    //  .attr("class", "tooltip")
    //  .style("background-color", "white")
    //  .style("border", "solid")
    //  .style("border-width", "1px")
    //  .style("border-radius", "5px")
    //  .style("padding", "10px")



    const g =  svg.append('g')
     g.append("g")
     .attr("transform", "translate(100," + height + ")")
     .call(d3.axisBottom(xScale));
    
    g.append("g")
    .attr("transform", "translate(100,0)")
     .call(d3.axisLeft(yScale));

     svg.append('g')
     .selectAll("dot")
     .data(data)
     .enter()
     .append("circle")
     .attr("cx", function (d) { return xScale(d.density*10.5); } )
     .attr("cy", function (d) { return yScale(d.population/20); } )
     .attr("r", function (d) { return d.rate*3.5 })
     .attr("transform", "translate(" + -80 + "," + 200 + ")")
  //    .on('mouseover', function (d, i) {
  //       tooltip
  //       .html("The exact value of<br>the Ground Living area is: " + d.country)
  //       .style("left", 200 + "px") // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
  //       .style("top", 10 + "px")
  //  })
  //  .on('mouseout', function (d, i) {
  //       d3.select(this).transition()
  //            .duration('200')
  //            .attr("r", 6)
  //           //  .style("opacity", 0);
  //  })
     .style("fill", function(){
       return colors[ Math.floor(Math.random() * data.length)]
     })
    // const margin = {top: 10, right: 30, bottom: 30, left: 60},
    // width = 460 - margin.left - margin.right,
    // height = 400 - margin.top - margin.bottom;

// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    // <div className="App">
    <div>
        
    <svg width="50vw" height="100vh"></svg>
    </div>
  );
        //   });
}