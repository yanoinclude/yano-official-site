import { readFile, writeFile } from "node:fs/promises";

// Coastlines are derived from OpenStreetMap data (ODbL) downloaded through
// the public map API. The source files stay in /tmp; only simplified paths ship.
const files = ["/tmp/nakajima.osm", "/tmp/kutsuna-west.osm"];
const nodes = new Map();
const ways = [];

for (const file of files) {
  const xml = await readFile(file, "utf8");
  for (const match of xml.matchAll(
    /<node id="(\d+)"[^>]*lat="([^"]+)"[^>]*lon="([^"]+)"/g,
  )) {
    nodes.set(match[1], { lat: Number(match[2]), lon: Number(match[3]) });
  }
  for (const match of xml.matchAll(/<way id="(\d+)"[\s\S]*?<\/way>/g)) {
    const block = match[0];
    if (!/<tag k="natural" v="coastline"\/>/.test(block)) continue;
    const refs = [...block.matchAll(/<nd ref="(\d+)"\/>/g)].map(
      (item) => item[1],
    );
    const points = refs.map((ref) => nodes.get(ref)).filter(Boolean);
    if (points.length > 1) ways.push(points);
  }
}

const bounds = { west: 132.45, east: 132.66, south: 33.9, north: 34.04 };
const project = ({ lat, lon }) => ({
  x: 56 + ((lon - bounds.west) / (bounds.east - bounds.west)) * 392,
  y: 112 + ((bounds.north - lat) / (bounds.north - bounds.south)) * 262,
});
const pathFor = (points) =>
  points
    .map((point, index) => {
      const { x, y } = project(point);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
const isNakajima = (points) => {
  const center = points.reduce(
    (sum, point) => ({ lat: sum.lat + point.lat, lon: sum.lon + point.lon }),
    { lat: 0, lon: 0 },
  );
  center.lat /= points.length;
  center.lon /= points.length;
  return (
    center.lat >= 33.9427 &&
    center.lat <= 34.0185 &&
    center.lon >= 132.5779 &&
    center.lon <= 132.6525
  );
};

const coastlines = ways
  .map(
    (points) =>
      `<path class="${isNakajima(points) ? "nakajima" : "island"}" d="${pathFor(points)}"/>`,
  )
  .join("\n      ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 480" role="img" aria-labelledby="map-title map-desc">
  <title id="map-title">日本の中での忽那諸島と中島の位置</title>
  <desc id="map-desc">四国北西部から忽那諸島を示し、実際の海岸線データをもとに中島を黄土色で示した線画地図</desc>
  <style>
    .outline,.island,.nakajima,.guide{fill:none;stroke:#302d28;stroke-linecap:round;stroke-linejoin:round}
    .outline{stroke-width:1.4}.island{stroke-width:1}.nakajima{fill:#b89744;stroke:#7b642d;stroke-width:1.2}
    .guide{stroke-width:1;stroke-dasharray:3 7}.label{fill:#302d28;font:14px "Noto Sans JP",sans-serif;letter-spacing:.16em}
    .accent{fill:#7b642d;font-weight:500}
  </style>
  <g aria-hidden="true">
    <path class="outline" d="M560 305c18-8 34-5 49-13 19-10 34-9 51-3 18 6 35 1 48 11 11 9 12 24 22 32 8 7 17 9 24 17v67H560Z"/>
    <path class="outline" d="M536 263c-10-7-24-5-30 5-6 9 1 19 11 20 11 1 24-4 26-13 2-5-1-9-7-12Z"/>
    <path class="guide" d="M570 304C520 274 481 231 438 198"/>
    <circle cx="574" cy="304" r="3" fill="#302d28"/>
  </g>
  <g>
    <rect x="32" y="42" width="448" height="360" rx="0" fill="none" stroke="#d8d2c5"/>
    <g>
      ${coastlines}
    </g>
    <text class="label" x="72" y="82">忽那諸島</text>
    <path class="guide" d="M318 126l38-26"/>
    <text class="label accent" x="364" y="98">中島</text>
  </g>
</svg>`;

await writeFile("src/assets/images/scenery/nakajima-map.svg", svg);
