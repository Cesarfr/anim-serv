const Webrtc2Imges = require('webrtc2images')

const rtc = new Webrtc2Imges({
    width: 200,
    height: 200,
    fames: 10,
    type: 'image/jpeg',
    quality: 0.4,
    interval: 200
})

// Iniciar
rtc.startVideo(function (err){
    
})

const record = document.querySelector('#record')
record.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Aqui graba el video
    rtc.recordVideo(function (err,frames) {
        console.log(frames)
    })
}, false);