import Flicking, { MoveEvent, ViewportSlot, WillChangeEvent } from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

const FlickingCarrousel = () => {
  return (
    <div >
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
      >
        <div style={{ width: "100%", height: "200px", backgroundColor: "lightblue" }}>Panel 0</div>
        <div style={{ width: "100%", height: "200px", backgroundColor: "lightcoral" }}>Panel 1</div>
        <div style={{ width: "100%", height: "200px", backgroundColor: "lightgreen" }}>Panel 2</div>
        <ViewportSlot>
        <span className="flicking-arrow-prev"></span>
        <span className="flicking-arrow-next"></span>
      </ViewportSlot>
      </Flicking>

      
    </div>

  )
}

export default FlickingCarrousel