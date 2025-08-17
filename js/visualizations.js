// Minimal D3 chart demo (static data)
window.renderRevenueMix = function () {
  const el = document.getElementById('chart');
  if (!el) return;
  el.innerHTML = '';
  const w = el.clientWidth, h = el.clientHeight, m = 24;
  const svg = d3.select(el).append('svg').attr('viewBox', `0 0 ${w} ${h}`);
  const data = [
    {label: 'Cards', value: 42},
    {label: 'Lending', value: 26},
    {label: 'Wealth', value: 18},
    {label: 'Other', value: 14}
  ];
  const x = d3.scaleBand().domain(data.map(d => d.label)).range([m, w-m]).padding(0.2);
  const y = d3.scaleLinear().domain([0, d3.max(data, d => d.value)]).nice().range([h-m, m]);
  svg.append('g').attr('transform', `translate(0,${h-m})`).call(d3.axisBottom(x));
  svg.append('g').attr('transform', `translate(${m},0)`).call(d3.axisLeft(y));
  svg.selectAll('rect').data(data).enter().append('rect')
     .attr('x', d => x(d.label)).attr('y', d => y(d.value))
     .attr('width', x.bandwidth()).attr('height', d => y(0) - y(d.value));
};
