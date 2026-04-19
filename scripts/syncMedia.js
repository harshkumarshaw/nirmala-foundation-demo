const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '../media_links.csv');
const jsonPath = path.join(__dirname, '../src/data/mediaRegistry.json');

function syncMedia() {
  console.log('🔄 Syncing Media Manifest...');

  if (!fs.existsSync(csvPath)) {
    console.error('❌ media_links.csv not found!');
    process.exit(1);
  }

  const csvData = fs.readFileSync(csvPath, 'utf-8');
  const lines = csvData.split('\n').filter(line => line.trim() !== '' && !line.startsWith('Position'));

  const registry = {
    home: { hero_video: "", panels: {} },
    hubs: { admissions_hero: "", contact_hero: "" },
    institutes: {}
  };

  lines.forEach(line => {
    // Advanced split logic to handle commas inside descriptions (unlikely but safe)
    let [position, type, description, link] = line.split(',');
    if (!link) return;
    
    link = link.trim();
    position = position.trim();

    // Map the Positions to the JSON structure
    if (position === "Home Hero") {
      registry.home.hero_video = link;
    } else if (position.startsWith("Home Panel")) {
      const key = position.replace("Home Panel ", "").toLowerCase();
      registry.home.panels[key] = link;
    } else if (position === "Admissions Hub Hero") {
      registry.hubs.admissions_hero = link;
    } else if (position === "Contact Hub Hero") {
      registry.hubs.contact_hero = link;
    } else if (position.includes(" Video")) {
      let slug = position.replace(" Video", "").toLowerCase().trim();
      if (slug === "jmn medical") slug = "jmn";
      if (!registry.institutes[slug]) registry.institutes[slug] = { video: "", images: [] };
      registry.institutes[slug].video = link;
    } else if (position.startsWith("About ")) {
      const key = position.toLowerCase().replace(/ /g, "_");
      registry.hubs[key] = link;
    } else if (position.includes(" Img ")) {
      const imgSplit = position.split(" Img ");
      let slug = imgSplit[0].toLowerCase().trim();
      const numStr = imgSplit[1]?.trim();
      if (slug === "jmn medical") slug = "jmn";
      if (!registry.institutes[slug]) registry.institutes[slug] = { video: "", images: [] };
      const num = parseInt(numStr);
      // Img 0 → index 0, Img 1 → index 1, etc.
      const index = isNaN(num) ? 0 : num;
      registry.institutes[slug].images[index] = link;
    }
  });

  fs.writeFileSync(jsonPath, JSON.stringify(registry, null, 2));
  console.log('✅ Synchronized mediaRegistry.json from CSV successfully!');
}

syncMedia();
