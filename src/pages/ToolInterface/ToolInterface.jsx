import React, { useRef, useEffect } from 'react';
import './ToolInterface.css';

const ToolInterface = () => {
    const canvasRef = useRef(null);
    let isDrawing = false;

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        // Add more canvas setup here if needed

        const startDrawing = (event) => {
            isDrawing = true;
            
            context.beginPath();
            context.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        };

        const draw = (event) => {
            if (!isDrawing) return;
            context.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
            context.stroke();
        };

        const stopDrawing = () => {
            isDrawing = false;
            context.closePath();
        };

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseout', stopDrawing);

        return () => {
            canvas.removeEventListener('mousedown', startDrawing);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', stopDrawing);
            canvas.removeEventListener('mouseout', stopDrawing);
        };
    }, []);

    return (
        <div className="tool-interface">
            <div className="canvas-container">
                <canvas ref={canvasRef} id="webtoonCanvas" width={800} height={600}></canvas>
                <aside id="toolbar" className="toolbar">
                    {/* Toolbar buttons */}
                </aside>
            </div>
        </div>
    );
};

export default ToolInterface;