import { execSync } from 'child_process';

console.log("Getting untracked and modified files...");
const files = execSync('git ls-files -m -o --exclude-standard').toString().trim().split('\n').filter(Boolean);

console.log(`Found ${files.length} files to push.`);

for (const file of files) {
    console.log(`Processing ${file}...`);
    try {
        execSync(`git add "${file}"`);
        execSync(`git commit -m "Add ${file.replace(/\\/g, '/')}"`);
        console.log(`Committing ${file} - SUCCESS`);
        execSync(`git push`);
        console.log(`Pushing ${file} - SUCCESS`);
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
}

console.log("All done!");
