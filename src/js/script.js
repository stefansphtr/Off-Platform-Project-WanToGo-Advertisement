(() => {
    // Constants for iframe dimensions
    const IFRAME_HEIGHT = 1;
    const IFRAME_WIDTH = 1;

    // Content for the script to be injected
    const scriptContent = "window['__CF$cv$params']={r:'84951831093f6bab',t:'MTcwNTg5ODE3MS4zOTIwMDA='};";

    // Create and append a script to the head of the document
    const script = document.createElement('script');
    script.nonce = '';
    script.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
    document.head.appendChild(script);

    // Create and append an invisible iframe to the body of the document
    const iframe = document.createElement('iframe');
    iframe.height = IFRAME_HEIGHT;
    iframe.width = IFRAME_WIDTH;
    iframe.style.position = 'absolute';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);

    // Handler function to inject a script into the iframe
    const handler = () => {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc) {
            const script = doc.createElement('script');
            script.innerHTML = scriptContent;
            doc.head.appendChild(script);
        } else {
            console.error('Failed to access iframe document');
        }
    };

    // Call the handler function when the document is ready
    if (document.readyState !== 'loading') {
        handler();
    } else if (window.addEventListener) {
        document.addEventListener('DOMContentLoaded', handler);
    } else {
        const prev = document.onreadystatechange || (() => {});
        document.onreadystatechange = (e) => {
            prev(e);
            if (document.readyState !== 'loading') {
                document.onreadystatechange = prev;
                handler();
            }
        };
    }
})();