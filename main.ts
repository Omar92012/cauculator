input.onButtonPressed(Button.A, function () {
    soundExpression.happy.play()
    if (phs == 1) {
        num1 += 1
    } else {
        if (phs == 2) {
            equ += 1
        } else {
            if (phs == 3) {
                num2 += 1
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    soundExpression.slide.play()
    phs += 1
})
input.onButtonPressed(Button.B, function () {
    soundExpression.sad.play()
    if (phs == 1) {
        num1 += -1
    } else {
        if (phs == 2) {
            equ += -1
        } else {
            if (phs == 3) {
                num2 += -1
            }
        }
    }
})
let phs = 0
music.setBuiltInSpeakerEnabled(true)
let smle_fce_r_not = 0
basic.showIcon(IconNames.Happy)
soundExpression.hello.playUntilDone()
smle_fce_r_not += 1
let text_list = [
"+",
"-",
"*",
"/"
]
phs = 1
let num1 = 0
let equ = 0
let num2 = 0
basic.forever(function () {
    if (smle_fce_r_not == 1) {
        if (phs == 1) {
            basic.showNumber(num1)
        } else {
            if (phs == 2) {
                basic.showString("" + (text_list[equ]))
            } else {
                if (phs == 3) {
                    basic.showNumber(num2)
                } else {
                    if (phs == 4) {
                        if (equ == 0) {
                            basic.showNumber(num1 + num2)
                        } else {
                            if (equ == 1) {
                                basic.showNumber(num1 - num2)
                            } else {
                                if (equ == 2) {
                                    basic.showNumber(num1 * num2)
                                } else {
                                    if (equ == 3) {
                                        basic.showNumber(num1 / num2)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
