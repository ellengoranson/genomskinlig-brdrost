basic.forever(function () {
    if (input.temperature() < 22) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showString("" + (input.temperature()))
    }
})
