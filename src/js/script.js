(() => {
    const js = "window['__CF$cv$params']={r:'84951831093f6bab',t:'MTcwNTg5ODE3MS4zOTIwMDA='};";
    const script = document.createElement('script');
    script.nonce = '';
    script.src = '/cdn-cgi/challenge-platform/scripts/jsd/main.js';
    document.head.appendChild(script);

    const iframe = document.createElement('iframe');
    iframe.height = 1;
    iframe.width = 1;
    iframe.style.position = 'absolute';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.border = 'none';
    iframe.style.visibility = 'hidden';
    document.body.appendChild(iframe);

    const handler = () => {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        if (doc) {
            const script = doc.createElement('script');
            script.innerHTML = js;
            doc.head.appendChild(script);
        }
    };

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