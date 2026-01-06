const ejs = require('ejs');
const fs = require('fs');

console.log('Building...');

assetPath = 'middlewares/public';

const views = [
    { src: './middlewares/views/index.ejs', dest: './index.html' },
    { src: './middlewares/views/projects_page.ejs', dest: './projects_page.html' },
    { src: './middlewares/views/resume_page.ejs', dest: './resume_page.html' }
];

views.forEach(view => {
    ejs.renderFile(view.src,{ title: 'My Portfolio', assetPath }, (err, str) => {
        if (err) {
            console.error(`Error rendering ${view.src}:`, err);
            return;
        }

        // Logic: Replace "../public/" with "public/" because the HTML 
        // moved up one level to the root.
        const correctedHtml = str.replace(/\.\.\/public\//g, 'public/');

        fs.writeFileSync(view.dest, correctedHtml);
        console.log(`Successfully built: ${view.dest}`);
    });
});