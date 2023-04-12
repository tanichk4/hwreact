import { useState } from "react"

const MouseTracker = ({render}) => {
    const [position, setPosition] = useState({x: 0, y: 0})

    const handleMouseMove = (e) => setPosition({x: e.client.x, y: e.client.y})
    return (
        <div className={"container"} onMouseMove={handleMouseMove}>
            {render(position)}
        </div>
    )
}
export default MouseTracker