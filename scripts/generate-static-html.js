import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error("Index.html not found. Run build first.");
  process.exit(1);
}

const indexContent = fs.readFileSync(indexPath, 'utf-8');

const pages = [
  {
    path: '/about',
    title: 'About Us | Champatala High School',
    description: 'Learn about Champatala High School, our mission, vision, core values, and why we are a pillar of educational excellence in Purba Medinipur.',
  },
  {
    path: '/history',
    title: 'Our History | Champatala High School',
    description: 'Explore the rich history and journey of Champatala High School since its establishment in 1947.',
  },
  {
    path: '/faculty',
    title: 'Faculty & Staff | Champatala High School',
    description: 'Meet the dedicated educators, specialists, and administrative staff at Champatala High School.',
  },
  {
    path: '/academics',
    title: 'Academics | Champatala High School',
    description: 'Explore our academic programs, approach to education, secondary, and higher secondary curriculum at Champatala High School.',
  },
  {
    path: '/gallery',
    title: 'Photo Gallery | Champatala High School',
    description: 'Capturing moments of learning, achievement, and growth at Champatala High School.',
  },
  {
    path: '/contact',
    title: 'Contact Us | Champatala High School',
    description: 'Get in touch with Champatala High School. Find our address, phone number, email, and institution codes.',
  }
];

pages.forEach(page => {
  const pageDir = path.join(distDir, page.path);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  // Replace title and description in the new HTML
  let newContent = indexContent.replace(
    /<title>.*?<\/title>/,
    `<title>${page.title}</title>`
  );

  newContent = newContent.replace(
    /<meta name="description" content=".*?"\s*\/>/,
    `<meta name="description" content="${page.description}" />\n    <meta property="og:title" content="${page.title}" />\n    <meta property="og:description" content="${page.description}" />\n    <meta property="og:url" content="https://champatalahighschoolhs.netlify.app${page.path}" />\n    <meta name="twitter:title" content="${page.title}" />\n    <meta name="twitter:description" content="${page.description}" />`
  );

  // Output to the specific folder so it works as /about/index.html on static hosts
  fs.writeFileSync(path.join(pageDir, 'index.html'), newContent);
  console.log(`Generated HTML for ${page.path}`);
});

console.log("Static HTML generation complete!");
