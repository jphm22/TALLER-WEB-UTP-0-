window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
  
    let isDrawing = false;
    
    function startDrawing(event) {
      isDrawing = true;
      draw(event);
    }
    
    function stopDrawing() {
      isDrawing = false;
    }
    
    function draw(event) {
      if (!isDrawing) return;
      
      const x = event.offsetX;
      const y = event.offsetY;
      
      context.fillStyle = 'black';
      context.fillRect(x, y, 5, 5);
    }
  });
  