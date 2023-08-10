document.addEventListener('keypress', function(e) {
    console.log('keyyyy press')
    const width = window.innerWidth;
    const height = window.innerHeight;
    switch(e.code) {
        case "KeyS":
            console.log('sssss')
            window.scrollTo(0, height)
            break
        case "KeyW":
            window.scrollTo(0, height * -1)
            break
        case "KeyA":
            window.scrollTo(width * -1, 0)
            break
        case "KeyD":
            window.scrollTo(width, 0)
            break
        default:
            break
    }
})