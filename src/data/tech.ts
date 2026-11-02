import { siHtml5, siCss, siJavascript, siReact, siTypescript, siClaude, siAstro } from 'simple-icons';

export interface Tech {
  name: string;
  path: string;
  hex: string;
  /** Spine height as a share of the shelf, and width in rem: each tool is a different book. */
  height: number;
  width: number;
  tone: 'grafito' | 'nogal' | 'papel' | 'laton' | 'hoja';
}

export const tech: Tech[] = [
  { name: 'HTML5', path: siHtml5.path, hex: siHtml5.hex, height: 0.82, width: 3.4, tone: 'grafito' },
  { name: 'CSS3', path: siCss.path, hex: siCss.hex, height: 0.9, width: 3.1, tone: 'papel' },
  { name: 'JavaScript', path: siJavascript.path, hex: siJavascript.hex, height: 0.94, width: 3.9, tone: 'nogal' },
  { name: 'React', path: siReact.path, hex: siReact.hex, height: 0.86, width: 3.3, tone: 'grafito' },
  { name: 'TypeScript', path: siTypescript.path, hex: siTypescript.hex, height: 0.95, width: 3.7, tone: 'hoja' },
  { name: 'Claude Code', path: siClaude.path, hex: siClaude.hex, height: 1, width: 4, tone: 'laton' },
  { name: 'Astro', path: siAstro.path, hex: siAstro.hex, height: 0.78, width: 3.2, tone: 'grafito' },
];
