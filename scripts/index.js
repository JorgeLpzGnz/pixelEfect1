const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')
canvas.width = 500;
canvas.heigth = 706;

const image1 = new Image();
image1.src = '../img/FTdTn7zWAAU20lz.jpeg'

image1.addEventListener('load', () => {
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.heigth/4)
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.heigth)
    console.log(pixels)
    let particlesArray = []
    const numberOfParticles = 5000

    let mappedImage = [];

    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width
            this.y = 0
            this.speed = 0
            this.velocity = Math.random() * 0.5
            this.size = Math.random() * 1.5 + 1
        }
        update(){
            this.y += this.velocity
            if(this.y >= canvas.heigth){
                this.y = 0
                this.x = Math.random() * canvas.width
            }
        }
        draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white'
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill()
        }
    }
    function init(){
        for(let i = 0; i < numberOfParticles; i++){
            particlesArray.push( new Particle )
        }
    }
    init()
    function animate(){
        ctx.drawImage(image1, 0, 0, canvas.width, canvas.heigth/4)
        ctx.globalAlpha = 0.05
        ctx.fillStyle = 'rgb(0,0,0)'
        ctx.fillRect(0,0, canvas.width, canvas.heigth)
        for( let i = 0; i < particlesArray.length; i++){
            particlesArray[i].update()
            particlesArray[i].draw()
        }
        requestAnimationFrame(animate)
    }
    animate()
})

//     to convert to grey scale


// image1.addEventListener('load', () => {
//     ctx.drawImage(image1, 0, 0, canvas.width, canvas.heigth/2);
//     const scanedImage = ctx.getImageData(0, 0, canvas.width, canvas.heigth)
//     console.log(scanedImage)
//     const scanedDatas = scanedImage.data
//     for(let i = 0; i < scanedDatas.length; i += 4){
//         const total = scanedDatas[i] + scanedDatas[i + 1] + scanedDatas[i + 2]
//         const avaregeColorValue = total/3
//         scanedDatas[i] = avaregeColorValue
//         scanedDatas[i+1] = avaregeColorValue
//         scanedDatas[i+2] = avaregeColorValue
//     }
//     scanedImage.data = scanedDatas
//     ctx.putImageData(scanedImage, 0, 0)
// })