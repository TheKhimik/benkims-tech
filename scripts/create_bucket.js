const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

function loadEnv(envPath) {
  const text = fs.readFileSync(envPath, 'utf8');
  const lines = text.split(/\r?\n/);
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx);
    const val = trimmed.slice(idx + 1);
    env[key] = val;
  }
  return env;
}

(async () => {
  try {
    const repoRoot = path.resolve(__dirname, '..');
    const env = loadEnv(path.join(repoRoot, '.env.local'));

    const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
    const SERVICE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;
    const BUCKET = env.SUPABASE_STORAGE_BUCKET || 'site-images';

    if (!SUPABASE_URL || !SERVICE_KEY) {
      console.error('Missing SUPABASE_URL or SERVICE_KEY in .env.local');
      process.exit(1);
    }

    const supabaseAdmin = createClient(SUPABASE_URL, SERVICE_KEY);

    console.log('Creating bucket', BUCKET);
    const res = await supabaseAdmin.storage.createBucket(BUCKET, { public: true });
    if (res.error) {
      console.error('Create bucket error:', res.error.message || res.error);
      process.exit(1);
    }

    console.log('Bucket created or already exists:', res.data);
    process.exit(0);
  } catch (err) {
    console.error('Unexpected error:', err);
    process.exit(1);
  }
})();
