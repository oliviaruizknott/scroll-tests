import { useRef, useEffect } from "react";
import CanvasScrollClip from "canvas-scroll-clip";

const CanvasScroll = ({ firstFrame, frameCount, frameScrollArea }) => {
  const ref = useRef();

  useEffect(() => {
    const csc = new CanvasScrollClip(ref.current, {
      framePath: firstFrame,
      frameCount: frameCount,
      scrollArea: frameScrollArea,
    });

    csc.events.on("viewport.scroll", (scrollTop) => {
      // console.log(scrollTop);
    });
  }, []);

  return <div ref={ref}></div>;
};

export default CanvasScroll;
