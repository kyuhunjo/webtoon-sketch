import React, { useRef, useEffect, useState } from 'react';
import './ToolInterface.css';

const ToolInterface = () => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [context, setContext] = useState(null);
    const [drawHistory, setDrawHistory] = useState([]);
    const [currentTool, setCurrentTool] = useState('pencil');

    useEffect(() => {
        const canvas = canvasRef.current;
        setContext(canvas.getContext('2d'));
    }, []);

    useEffect(() => {
        const handleDrawing = (event) => {
            const x = event.clientX - canvasRef.current.offsetLeft;
            const y = event.clientY - canvasRef.current.offsetTop;

            if (isDrawing) {
                context.lineTo(x, y);
                context.stroke();
            }
        };

        if (context) {
            context.lineJoin = 'round';
            context.lineCap = 'round';
            context.lineWidth = 2; // Adjust as needed

            if (currentTool === 'pencil') {
                context.strokeStyle = 'black'; // Pencil color
            } else if (currentTool === 'eraser') {
                context.strokeStyle = 'white'; // Eraser color (assumes a white canvas)
            }

            canvasRef.current.addEventListener('mousemove', handleDrawing);
        }

        return () => {
            canvasRef.current.removeEventListener('mousemove', handleDrawing);
        };
    }, [isDrawing, context, currentTool]);

    const startDrawing = (event) => {
        setIsDrawing(true);
        context.beginPath();
        context.moveTo(
            event.clientX - canvasRef.current.offsetLeft,
            event.clientY - canvasRef.current.offsetTop
        );
    };

    const stopDrawing = () => {
        setIsDrawing(false);
        setDrawHistory([...drawHistory, context.getImageData(0, 0, canvasRef.current.width, canvasRef.current.height)]);
    };

    const handleToolChange = (tool) => {
        setCurrentTool(tool);
    };

    const undoLastAction = () => {
        if (drawHistory.length > 0) {
            context.putImageData(drawHistory[drawHistory.length - 1], 0, 0);
            setDrawHistory(drawHistory.slice(0, -1));
        }
    };

    return (
        <div className="tool-interface">
            <div className="canvas-container">
                <canvas
                    ref={canvasRef}
                    id="webtoonCanvas"
                    width={800}
                    height={600}
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseOut={stopDrawing}
                ></canvas>
                <aside id="toolbar" className="toolbar">
                    <div className="tool-group">
                        <button className="tool-button" onClick={() => handleToolChange('pencil')}>Pencil</button>
                        <button className="tool-button" onClick={() => handleToolChange('eraser')}>Eraser</button>
                    </div>
                    <div className="tool-group">
                        <button className="tool-button" onClick={undoLastAction}>Undo</button>
                        {/* Redo functionality can be added similarly if needed */}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default ToolInterface;
