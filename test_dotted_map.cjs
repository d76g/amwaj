const DottedMap = require('dotted-map').default;

const map = new DottedMap({ height: 20, grid: 'diagonal' });

// Check if we can get points for specific countries
const usaMap = new DottedMap({ height: 20, grid: 'diagonal', countries: ['USA'] });
const usaPoints = usaMap.getPoints();

console.log('USA Points sample:', usaPoints[0]);

const worldMap = new DottedMap({ height: 20, grid: 'diagonal' });
const worldPoints = worldMap.getPoints();

console.log('World Points count:', worldPoints.length);
console.log('USA Points count:', usaPoints.length);
