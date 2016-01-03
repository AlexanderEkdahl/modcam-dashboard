export function swapChartActive(id) {
  return { type: 'SWAP_CHART_ACTIVE', id };
}

export function hoverChart(id) {
  return { type: 'HOVER_CHART', id };
}

export function unhoverChart(id) {
  return { type: 'UNHOVER_CHART', id };
}
