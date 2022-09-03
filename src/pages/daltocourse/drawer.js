import { useRef, useEffect, useState } from 'react';

const Drawer = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#000');
  const [lineWidth, setlineWidth] = useState(5);

  useEffect(() => {
    const canvas = canvasRef.current;

    const context = canvas.getContext('2d');
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.strokeStyle = color;
    contextRef.current.lineWidth = lineWidth;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (isDrawing) {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
    }
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const changeColor = (e) => {
    setColor(e.target.value);
  };

  const changelineWidth = (e) => {
    setlineWidth(parseInt(e.target.value));
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-start pt-10">
      <div className="lg:flex hidden flex-col">
        <h3 className="m-auto my-3 text-3xl font-Roboto font-semibold tracking-wider">¡Dibuja!</h3>
        <canvas className="border border-black" width={500} height={300} ref={canvasRef} onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} />
        <div className="bg-black p-4">
          <input type="color" defaultValue={color} onChange={changeColor} />
          <input type="range" min={1} max={20} defaultValue={lineWidth} onChange={changelineWidth} />
        </div>
      </div>
      <div className="lg:hidden flex w-full min-h-screen top-0 bg-black text-white fixed">
        <span className="m-auto text-center p-5">Para probar este contenido debe conectarse desde un ordenador</span>
      </div>
    </div>
  );
};

export default Drawer;
