const Direction = Object.freeze({
    Up: 'Up',
    Down: 'Down',
    Left: 'Left',
    Right: 'Right',
})

const Turn = Object.freeze({
    Left: 'Left',
    Right: 'Right',
})

const direction = Direction.Left

class Draw {
    ctx
    canvas
    step = 20

    position

    constructor(ctx, canvas) {
        this.ctx = ctx
        this.canvas = canvas

        this.ctx.lineWidth = 2
        this.reset()
    }

    draw(direction) {
        this.ctx.beginPath()
        this.ctx.moveTo(this.position.x, this.position.y)

        switch (direction) {
            case Direction.Up:
                this.position.y -= this.step
                break

            case Direction.Right:
                this.position.x += this.step
                break

            case Direction.Down:
                this.position.y += this.step
                break

            case Direction.Left:
                this.position.x -= this.step
                break
        }

        this.ctx.lineTo(this.position.x, this.position.y)
        this.ctx.stroke()
    }

    reset() {
        this.position = { x: this.canvas.width / 2, y: this.canvas.height / 2 }
        this.direction = Direction.Right
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}
