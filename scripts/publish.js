'use strict';

const path = require('path');
const ghpages = require('gh-pages');

const sourcePath = path.join(process.cwd(), 'www');

console.info('Publish site content to gh pages ...');
ghpages.publish(sourcePath, function(err) {
  if (err) {
    console.error('Error occured');
    console.error(err.stack || err.message || err);
  }

  console.info('Site content has been published successfully');
});
