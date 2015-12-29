export function changeProjectName(name) {
  return { type: 'CHANGE_PROJECT_NAME', name };
}

export function changeOwnerName(name) {
  return { type: 'CHANGE_OWNER_NAME', name };
}

export function swapChartActive(id) {
  return { type: 'SWAP_CHART_ACTIVE', id };
}

export function hoverChart(id) {
  return { type: 'HOVER_CHART', id };
}

export function unhoverChart(id) {
  return { type: 'UNHOVER_CHART', id };
}
