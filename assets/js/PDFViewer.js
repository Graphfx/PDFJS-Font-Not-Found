
var url = 'assets/res/fontNotFound.pdf';

 
PDFJS.getDocument(url).then(function getPdfHelloWorld(pdf) {
  
  pdf.getPage(1).then(function getPageHelloWorld(page) {
    var scale = 2.5;
    var viewport = page.getViewport(scale);

    
    var canvas = document.getElementById('pdf-viewer');
    var context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    //
    // Render PDF page into canvas context
    //
    var renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    page.render(renderContext);
  });
});