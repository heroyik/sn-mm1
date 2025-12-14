const https = require('https');

const url = 'https://sn-mm1.netlify.app/assets/models/sn_mm1.gltf';

console.log(`Fetching ${url}...`);

https.get(url, (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  console.log(`Status Code: ${statusCode}`);
  console.log(`Content-Type: ${contentType}`);

  let rawData = '';
  res.setEncoding('utf8');
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    console.log(`Total Length: ${rawData.length}`);
    console.log(`First 50 chars: '${rawData.substring(0, 50)}'`);
    console.log(`Last 50 chars: '${rawData.substring(rawData.length - 50)}'`);
    
    try {
      JSON.parse(rawData);
      console.log('JSON.parse: SUCCESS');
    } catch (e) {
      console.error('JSON.parse: FAILED');
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
});
