// Flag downloader script for Halloween 12 Levels game
// This script downloads flag images from flagcdn.com

const https = require('https');
const fs = require('fs');
const path = require('path');

// Country codes for all countries in our game
const countryCodes = {
    // Easy level countries
    'USA': 'us',
    'CANADA': 'ca',
    'JAPAN': 'jp',
    'FRANCE': 'fr',
    'ITALY': 'it',
    'CHINA': 'cn',
    'SPAIN': 'es',
    'EGYPT': 'eg',
    'BRAZIL': 'br',
    'INDIA': 'in',
    'GERMANY': 'de',
    'RUSSIA': 'ru',
    'MEXICO': 'mx',
    'UNITED KINGDOM': 'gb',
    'SOUTH KOREA': 'kr',
    
    // Medium level countries
    'AUSTRALIA': 'au',
    'GREECE': 'gr',
    'TURKEY': 'tr',
    'THAILAND': 'th',
    'ARGENTINA': 'ar',
    'POLAND': 'pl',
    'CHILE': 'cl',
    'PERU': 'pe',
    'COLOMBIA': 'co',
    'VIETNAM': 'vn',
    'PHILIPPINES': 'ph',
    'MOROCCO': 'ma',
    'KENYA': 'ke',
    'NIGERIA': 'ng',
    'ISRAEL': 'il',
    'INDONESIA': 'id',
    'MALAYSIA': 'my',
    'SINGAPORE': 'sg',
    
    // Hard level countries
    'SWITZERLAND': 'ch',
    'NETHERLANDS': 'nl',
    'NORWAY': 'no',
    'SWEDEN': 'se',
    'PORTUGAL': 'pt',
    'IRELAND': 'ie',
    'SOUTH AFRICA': 'za',
    'NEW ZEALAND': 'nz',
    'FINLAND': 'fi',
    'DENMARK': 'dk',
    'BELGIUM': 'be',
    'AUSTRIA': 'at',
    'CZECH REPUBLIC': 'cz',
    'HUNGARY': 'hu',
    'CROATIA': 'hr',
    'ROMANIA': 'ro',
    'BULGARIA': 'bg',
    'SERBIA': 'rs',
    'SLOVENIA': 'si',
    'SLOVAKIA': 'sk',
    'ESTONIA': 'ee',
    'LATVIA': 'lv',
    'LITHUANIA': 'lt',
    'ICELAND': 'is',
    'LUXEMBOURG': 'lu',
    'BANGLADESH': 'bd',
    'PAKISTAN': 'pk',
    'NEPAL': 'np',
    'SRI LANKA': 'lk',
    'MYANMAR': 'mm',
    'CAMBODIA': 'kh',
    'LAOS': 'la',
    'MONGOLIA': 'mn',
    'KAZAKHSTAN': 'kz',
    'UZBEKISTAN': 'uz',
    'GEORGIA': 'ge',
    'ARMENIA': 'am',
    'AZERBAIJAN': 'az',
    'JORDAN': 'jo',
    'LEBANON': 'lb',
    'UAE': 'ae',
    'QATAR': 'qa',
    'SAUDI ARABIA': 'sa',
    'UKRAINE': 'ua',
    'BELARUS': 'by'
};

const flagsDir = './images/flags/';

// Ensure flags directory exists
if (!fs.existsSync(flagsDir)) {
    fs.mkdirSync(flagsDir, { recursive: true });
}

// Function to download a flag image
function downloadFlag(countryName, countryCode) {
    return new Promise((resolve, reject) => {
        const filename = `${countryCode}.png`;
        const filepath = path.join(flagsDir, filename);
        
        // Skip if file already exists
        if (fs.existsSync(filepath)) {
            console.log(`✓ Flag for ${countryName} already exists`);
            resolve(filename);
            return;
        }
        
        // Download from flagcdn.com (256x192 size for good quality)
        const url = `https://flagcdn.com/256x192/${countryCode}.png`;
        
        console.log(`📥 Downloading flag for ${countryName}...`);
        
        const file = fs.createWriteStream(filepath);
        
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                
                file.on('finish', () => {
                    file.close();
                    console.log(`✅ Downloaded flag for ${countryName}`);
                    resolve(filename);
                });
                
                file.on('error', (err) => {
                    fs.unlink(filepath, () => {}); // Delete partial file
                    console.error(`❌ Error saving flag for ${countryName}:`, err.message);
                    reject(err);
                });
            } else {
                file.close();
                fs.unlink(filepath, () => {}); // Delete empty file
                console.error(`❌ Failed to download flag for ${countryName}: HTTP ${response.statusCode}`);
                reject(new Error(`HTTP ${response.statusCode}`));
            }
        }).on('error', (err) => {
            file.close();
            fs.unlink(filepath, () => {}); // Delete partial file
            console.error(`❌ Network error downloading flag for ${countryName}:`, err.message);
            reject(err);
        });
    });
}

// Download all flags
async function downloadAllFlags() {
    console.log('🏁 Starting flag download process...');
    console.log(`📊 Total countries to download: ${Object.keys(countryCodes).length}`);
    
    let successful = 0;
    let failed = 0;
    
    for (const [countryName, countryCode] of Object.entries(countryCodes)) {
        try {
            await downloadFlag(countryName, countryCode);
            successful++;
            
            // Small delay to be respectful to the server
            await new Promise(resolve => setTimeout(resolve, 100));
        } catch (error) {
            failed++;
            console.error(`❌ Failed to download ${countryName}: ${error.message}`);
        }
    }
    
    console.log('\n🎉 Flag download complete!');
    console.log(`✅ Successfully downloaded: ${successful} flags`);
    console.log(`❌ Failed downloads: ${failed} flags`);
    
    if (failed === 0) {
        console.log('🎊 All flags downloaded successfully!');
    }
}

// Run the download process
downloadAllFlags().catch(console.error);