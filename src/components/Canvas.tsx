'use client';

import React, { useEffect, useRef, useState } from 'react';

interface Node {
  name: string;
  icon: string; // Path to the icon image
}

const nodes: Node[] = [
  { name: 'GPT Protocol', icon: '/icons/gpt.png' },
  { name: 'WitnessChain', icon: '/icons/witnesschain.png' },
  { name: 'Astar zkEVM', icon: '/icons/astar.png' },
  { name: 'Polygon PoS', icon: '/icons/polygon.png' },
  { name: 'Polygon zkEVM', icon: '/icons/polygon-zk.png' },
  { name: 'Prism', icon: '/icons/prism.png' },
  { name: 'X Layer', icon: '/icons/xlayer.png' },
];

const EthereumCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [zoom, setZoom] = useState<number>(1); // Zoom level
  const [dragging, setDragging] = useState<boolean>(false);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);

  const centerX = 250;
  const centerY = 250;
  const radius = 150; // Radius of the circular layout

  // Calculate node angles dynamically
  const getNodePositions = () => {
    const angleIncrement = (2 * Math.PI) / nodes.length;
    return nodes.map((node, index) => {
      const angle = index * angleIncrement;
      return {
        ...node,
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
      };
    });
  };

  const handleWheel = (event: React.WheelEvent<HTMLCanvasElement>) => {
    event.preventDefault();
    const zoomDirection = event.deltaY > 0 ? 1.1 : 0.9;
    setZoom((prevZoom) => prevZoom * zoomDirection);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setDragging(true);
    setStartX(event.clientX - offsetX);
    setStartY(event.clientY - offsetY);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!dragging) return;
    const x = event.clientX - startX;
    const y = event.clientY - startY;
    setOffsetX(x);
    setOffsetY(y);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (context && canvas) {
      canvas.width = 500;
      canvas.height = 500;

      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Apply zoom and panning by adjusting the canvas context
      context.save();
      context.translate(offsetX, offsetY); // For panning
      context.scale(zoom, zoom); // For zooming

      // Draw the central Ethereum node
      context.beginPath();
      context.arc(centerX, centerY, 50, 0, Math.PI * 2);
      context.fillStyle = '#000';
      context.fill();
      context.closePath();

      // Load and draw the Ethereum icon
      const ethereumIcon = new Image();
      ethereumIcon.src = '/icons/ethereum.png';
      ethereumIcon.onload = () => {
        context.drawImage(ethereumIcon, centerX - 25, centerY - 25, 50, 50);
      };

      // Draw the surrounding nodes in a circular layout
      getNodePositions().forEach((node) => {
        // Draw connecting lines
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(node.x, node.y);
        context.strokeStyle = '#9b59b6';
        context.stroke();
        context.closePath();

        // Draw node circle
        context.beginPath();
        context.arc(node.x, node.y, 30, 0, Math.PI * 2);
        context.fillStyle = '#000';
        context.fill();
        context.closePath();

        // Load and draw the node icon
        const icon = new Image();
        icon.src = node.icon;
        icon.onload = () => {
          context.drawImage(icon, node.x - 15, node.y - 15, 30, 30);
        };

        // Add the text label
        context.fillStyle = '#fff';
        context.font = '12px Arial';
        context.textAlign = 'center';
        context.fillText(node.name, node.x, node.y + 45);
      });

      // Restore the context to prevent permanent scaling
      context.restore();
    }
  }, [zoom, offsetX, offsetY]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <canvas
        ref={canvasRef}
        className="border border-gray-500"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      />
      <div className="flex space-x-4 mt-4">
        <p className="text-white">Zoom: {zoom.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default EthereumCanvas;
