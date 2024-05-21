
  // Function to load PDF into modal
  function loadPdfIntoModal(pdfUrl) {
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = pdfUrl;
  }

  // Add event listener to button
  document.getElementById('previewCvBtn').addEventListener('click', function() {
    // URL of the PDF
    var pdfUrl = '/workshop/static/CV-HansDy.pdf';

    // Load PDF into modal
    loadPdfIntoModal(pdfUrl);

    // Show modal
    var pdfModal = new bootstrap.Modal(document.getElementById('pdfModal'));
    pdfModal.show();
  });
