function main() {
  const canvas = document.getElementsByName("canvas")[0];
  const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  if (!gl) {
    return;
  }

  gl.viewport(0,0,gl.drawingBufferWidth, gl.drawingBufferHeight);

  gl.clearColor(0,0,0,1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  



}


