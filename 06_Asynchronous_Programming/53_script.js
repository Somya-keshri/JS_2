function loadScript(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = function(){
        console.log("Script loaded with src: " + src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script with src: " + src);
        callback(new Error("Src got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src){
    if(error){
        console.log(error);
        return;
    }
    alert("Hello World " + src);
}

// Chintu's way of handling callback hell
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function gudmrng(error, src){
    if(error){
        console.log(error);
        sendEmergencyMessageToCeo();
        return;
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function gudmrng(error, src){
        if(error){
            console.log(error);
            sendEmergencyMessageToCeo();
            return;
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", function gudmrng(error, src){
            if(error){
                console.log(error);
                sendEmergencyMessageToCeo();
                return;
            }
        });
    });
})
