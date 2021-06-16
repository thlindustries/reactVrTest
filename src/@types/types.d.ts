declare module '@google/model-viewer';
declare module '*.gltf';
declare module 'react-model-viewer';
declare module 'react-vanilla-tilt';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': ModelViewerJSX & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> ;
    }
  }
}

interface ModelViewerJSX {
  src: string
  poster?: string
  reveal?: string;
  ar?: boolean;
  loading?: string;
  exposure?: number;
  'shadow-intensity'?: number;
  'shadow-softness'?: number;
  'ar-status'?: 'not-presenting'|'session-started'|'object-placed'|'failed';
  'ar-placement'?: 'wall'|'floor';
  'animation-name'?: string;
  autoplay?: boolean;
  orientation?: string;
  // ... others
}

interface ModelViewerElement extends Element {
  model: {
    materials: Array<{
      name: string,
      pbrMetallicRoughness: {
        setBaseColorFactor: ((x: [number, number, number, number]) => void),
        setMetallicFactor: ((x: number) => void),
        setRoughnessFactor: ((x: number) => void),
        baseColorTexture: null | {
          texture: {
            source: {
              setURI: ((x: string) => void),
            }
          }
        }
        metallicRoughnessTexture: null | {
          texture: {
            source: {
              setURI: ((x: string) => void),
            }
          }
        }
        // ... others
      }
    }>
  }
}