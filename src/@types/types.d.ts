declare module '@google/model-viewer';
declare module '*.gltf';
declare module 'react-model-viewer';

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
  ar: boolean;
  loading: string;
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