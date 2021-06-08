import { useRef } from 'react';
export const Iframe = (props: any) => {
  const iframe_ref = useRef(null);

  const writeHTML = (frame: any) => {
    if (!frame) {
      return;
    }
    iframe_ref.current = frame;

    let doc = frame.contentDocument;

    doc.open();
    doc.write(props.content);
    doc.close();

    frame.style.width = '100%';
    frame.style.height = `${frame.contentWindow.document.body.scrollHeight}px`;
  };
  return (
    <iframe title="teste" src="about:blank" scrolling="no" frameBorder="0" ref={writeHTML} />
  );
};