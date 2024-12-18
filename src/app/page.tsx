'use client'
import Flicking, { MoveEvent, WillChangeEvent, ViewportSlot } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { Arrow } from "@egjs/flicking-plugins";

const FlickingCarrousel = () => {

  const arrowPlugin = new Arrow({
    prevEl: ".flicking-arrow-prev",
    nextEl: ".flicking-arrow-next"
  });

  return (
    <div>
      <Flicking
        viewportTag="div"
        cameraTag="div"
        align="center"
        onMove={(e: MoveEvent) => {
          console.log("move", e);
        }}
        onWillChange={(e: WillChangeEvent) => {
          console.log("will change", e);
        }}
        horizontal={true}
        circular={true}
        plugins={[arrowPlugin]}
      >
        <div style={{ width: "100%", height: "200px", backgroundColor: "lightblue" }}>Panel 0</div>
        <div style={{ width: "100%", height: "200px", backgroundColor: "lightcoral" }}>Panel 1</div>
        <div style={{ width: "100%", height: "200px", backgroundColor: "lightgreen" }}>Panel 2</div>
        <ViewportSlot>
          <span className="flicking-arrow-prev" style={{ cursor: "pointer" }}>←</span>
          <span className="flicking-arrow-next" style={{ cursor: "pointer" }}>→</span>
        </ViewportSlot>
      </Flicking>
    </div>
  );
};

export default FlickingCarrousel;
