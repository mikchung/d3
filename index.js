const svg=d3.select('svg')
const arc=d3.arc()

const height= +svg.attr('width');
const width= +svg.attr('height');

const circle=svg.append('circle')
  .attr('r',height/3)
  .attr('cx',width/2)
  .attr('cy',height/2)
  .attr('fill','yellow')
  .attr('stroke','black');

const leftEye=svg.append('circle')
  .attr('r',30)
  .attr('cx',width/2-70)
  .attr('cy',height/2-50)
  .attr('fill','black')

const rightEye=svg.append('circle')
  .attr('r',30)
  .attr('cx',width/2+70)
  .attr('cy',height/2-50)
  .attr('fill','black')

const g = svg.append('g')
  .attr('transform', `translate(${width / 2}, ${height / 2})`);

const mouth=g
  .append('path')
    .attr('d', d3.arc()({
      innerRadius: 150,
      outerRadius: 170,
      startAngle: Math.PI / 2,
      endAngle: Math.PI * 3 / 2
  }));
