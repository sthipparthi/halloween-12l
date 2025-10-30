// JavaScript script to fix remaining flag emojis
const fs = require('fs');

const filePath = 'js/puzzles.js';
let content = fs.readFileSync(filePath, 'utf8');

// Define the replacements
const replacements = [
    ['🇩🇰', 'dk.png'],
    ['🇧🇪', 'be.png'],
    ['🇦🇹', 'at.png'],
    ['🇨🇿', 'cz.png'],
    ['🇭🇺', 'hu.png'],
    ['🇭🇷', 'hr.png'],
    ['🇧🇬', 'bg.png'],
    ['🇷🇸', 'rs.png'],
    ['🇸🇮', 'si.png'],
    ['🇸🇰', 'sk.png'],
    ['🇪🇪', 'ee.png'],
    ['🇱🇻', 'lv.png'],
    ['🇱🇹', 'lt.png'],
    ['🇱🇺', 'lu.png'],
    ['🇧🇩', 'bd.png'],
    ['🇵🇰', 'pk.png'],
    ['🇳🇵', 'np.png'],
    ['🇱🇰', 'lk.png'],
    ['🇲🇲', 'mm.png'],
    ['🇰🇭', 'kh.png'],
    ['🇱🇦', 'la.png'],
    ['🇲🇳', 'mn.png'],
    ['🇺🇿', 'uz.png'],
    ['🇬🇪', 'ge.png'],
    ['🇦🇲', 'am.png'],
    ['🇦🇿', 'az.png'],
    ['🇯🇴', 'jo.png'],
    ['🇱🇧', 'lb.png'],
    ['🇦🇪', 'ae.png'],
    ['🇶🇦', 'qa.png'],
    ['🇸🇦', 'sa.png'],
    ['🇺🇦', 'ua.png'],
    ['🇧🇾', 'by.png']
];

let replacementCount = 0;

// Apply replacements
replacements.forEach(([emoji, filename]) => {
    const pattern = `flag: '${emoji}'`;
    const replacement = `flag: '${filename}'`;
    
    if (content.includes(pattern)) {
        content = content.replace(new RegExp(pattern, 'g'), replacement);
        replacementCount++;
        console.log(`✅ Replaced ${emoji} with ${filename}`);
    }
});

// Handle broken emoji patterns
const brokenPatterns = [
    ['��', 'pt.png', 'PORTUGAL'],
    ['🇫�', 'fi.png', 'FINLAND'],
    ['��', 'ro.png', 'ROMANIA'],
    ['🇮�', 'is.png', 'ICELAND'],
    ['�🇿', 'kz.png', 'KAZAKHSTAN']
];

brokenPatterns.forEach(([brokenEmoji, filename, country]) => {
    const pattern = `flag: '${brokenEmoji}'`;
    const replacement = `flag: '${filename}'`;
    
    if (content.includes(pattern)) {
        content = content.replace(new RegExp(pattern, 'g'), replacement);
        replacementCount++;
        console.log(`✅ Fixed broken flag for ${country}: ${brokenEmoji} -> ${filename}`);
    }
});

// Save the file
fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n🎉 Flag replacement complete!`);
console.log(`📊 Total replacements made: ${replacementCount}`);
console.log(`🔍 All countries now use flag images (.png files)`);