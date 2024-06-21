//Download all website scripts in zip file

// Load JSZip library (you'll need to include it in your project)
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'; // Or your local path
document.head.appendChild(script);

script.onload = () => {
    // Gather and filter script tags (same as before)
    const scriptTags = document.querySelectorAll('script[src]');
    const jsScripts = Array.from(scriptTags).filter(script => 
        script.src.endsWith('.js') && !script.src.startsWith('data:')
    );

    // Create a new ZIP instance
    const zip = new JSZip();

    // Fetch and add each script to the ZIP
    Promise.all(jsScripts.map(script => 
        fetch(script.src)
            .then(res => res.blob())
            .then(blob => zip.file(script.src.split('/').pop(), blob)) 
    )).then(() => {
        // Generate the ZIP file
        zip.generateAsync({type:"blob"})
            .then(content => {
                // Create a download link for the ZIP
                const link = document.createElement('a');
                link.href = URL.createObjectURL(content);
                link.download = 'website_scripts.zip';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
    });
};
