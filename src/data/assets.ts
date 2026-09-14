import fs from 'node:fs';
import path from 'node:path';

/**
 * Is this public asset actually on disk yet?
 *
 * The imported designs reference four photographs that still have to be
 * exported from the Claude Design projects. Until they are, pages render a
 * labelled slot instead of a broken image — and the moment a file is dropped
 * into public/photos/ the real photograph appears, with no code change.
 */
export const hasAsset = (publicPath: string) =>
  fs.existsSync(path.join(process.cwd(), 'public', publicPath.replace(/^\//, '')));
