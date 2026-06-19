// Shared utilities loaded on every page.

let _gardenData = null;

async function loadGardenData() {
  if (_gardenData) return _gardenData;
  const res = await fetch('garden-data.json');
  _gardenData = await res.json();
  return _gardenData;
}

function getZone(data, zoneId) {
  return data.zones.find(z => z.id === zoneId) || null;
}

function getPlant(zone, plantId) {
  return zone.plants.find(p => p.id === plantId) || null;
}

// Read ?param=value from the current URL
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

// Status badge color mapping
const STATUS_COLORS = {
  "Champion":    "#5a8a3c",
  "Thriving":    "#5a8a3c",
  "Producing":   "#6b9e4a",
  "Blooming":    "#c47c2b",
  "Established": "#4a7a8a",
  "Growing":     "#4a7a8a",
  "Climbing":    "#4a7a8a",
  "Active":      "#4a7a8a",
  "Recovering":  "#b8832a",
  "Slow Growing":"#888",
  "Struggling":  "#a04a4a",
};

function statusBadge(status) {
  const color = STATUS_COLORS[status] || "#666";
  return `<span class="status-badge" style="background:${color}">${status}</span>`;
}

// Dev mode: add ?dev=1 to URL to show hotspot coordinates
const DEV_MODE = getParam('dev') === '1';
