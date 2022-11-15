let delay = 0
let ring = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    for (let pixel = 0; pixel <= 23; pixel++) {
        delay = 1000 - 3 * input.lightLevel()
        ring.rotate(1)
        ring.setPixelColor(0, neopixel.rgb(pixel * 10, randint(0, 50), 230 - pixel * 10))
        ring.show()
        basic.pause(delay)
    }
})
