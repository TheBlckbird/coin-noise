const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.height = innerHeight
canvas.width = innerWidth

draw = new Draw(ctx, canvas)

// document.getElementById('reset').addEventListener('click', () => {
//     draw.reset()
// })

function drawLoop() {
    let coin1 = Math.random() < 0.5
    let coin2 = Math.random() < 0.5

    if (coin1 && coin2) {
        draw.draw(Direction.Up)
    } else if (coin1 && !coin2) {
        draw.draw(Direction.Right)
    } else if (!coin1 && coin2) {
        draw.draw(Direction.Down)
    } else {
        draw.draw(Direction.Left)
    }

    requestAnimationFrame(drawLoop)
}

drawLoop()
