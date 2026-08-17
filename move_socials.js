const fs = require('fs');
let nav = fs.readFileSync('frontend/src/components/common/Navbar.tsx', 'utf8');

// Remove the socials block from after nav-shell
const socialsRegex = /<\/motion\.nav>\s*<motion\.div\s*className="header-socials"[\s\S]*?<\/motion\.div>/;
const socialsMatch = nav.match(socialsRegex);

if (socialsMatch) {
  // Extract the socials div
  let socialsDiv = socialsMatch[0].replace('</motion.nav>', '').trim();
  
  // Remove from old location
  nav = nav.replace(socialsRegex, '</motion.nav>');
  
  // Insert before closing nav-shell
  nav = nav.replace('</motion.nav>', `\n        ${socialsDiv}\n      </motion.nav>`);
  
  fs.writeFileSync('frontend/src/components/common/Navbar.tsx', nav);
  console.log('Navbar updated');
} else {
  console.log('Could not find socials block to move.');
}
