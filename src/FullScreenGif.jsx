import { useEffect, useRef } from "react";

function FullScreenGif() {
  const canvasRef = useRef(null);
  const imgRef = useRef(new Image());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = imgRef.current;

    // Define o GIF e desenha no canvas
    img.src = "/bg.gif";
    img.crossOrigin = "anonymous"; // Evita problemas de CORS
    img.onload = () => {
      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      return () => window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block" }} />;
}

export default FullScreenGif;
