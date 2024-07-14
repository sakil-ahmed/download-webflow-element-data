<script>

document.addEventListener('paste', function(e){
        let data = e.clipboardData.getData('application/json');
        let blob = new Blob([data], { type: 'application/json' })
        let a = document.createElement('a');
        var eDownload = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: false
        });
        a.download = 'webflow-object.json';
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
        a.dispatchEvent(eDownload);
        e.preventDefault();
});

</script>
