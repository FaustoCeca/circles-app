import { useState } from "react";

interface Circle {
  position: {
    x: number;
    y: number;
  };
}

const App = () => {
  const [circleCount, setCircleCount] = useState<number>(0);
  const [circles, setCircles] = useState<Circle[]>(Array.from({ length: circleCount }));

  const handleAddCircle = () => {
    setCircleCount(circleCount + 1);
    setCircles([
      ...circles,
      {
        position: {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }
      }
    ]);
  }

  const handleRemoveCircle = () => {
    if (circleCount > 0) {
      setCircleCount(circleCount - 1);
      setCircles(circles.slice(0, -1));
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <button
        onClick={handleAddCircle}
        style={{
          position: 'absolute',
          top: 20,
          left: 20,
        }}
      >
        Add Circle
      </button>
      <button
        onClick={handleRemoveCircle}
        style={{
          position: 'absolute',
          top: 20,
          left: 120,
        }}
      >
        Remove Circle
      </button>
      {
        circles.map((circle, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              width: 40,
              height: 40,
              zIndex: -1,
              borderRadius: '50%',
              backgroundColor: 'red',
              top: circle.position.y,
              left: circle.position.x,
            }}
          />
        ))
      }
    </div>
  )
}

export default App;