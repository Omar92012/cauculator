def on_button_pressed_a():
    global num1, equ, num2
    soundExpression.happy.play()
    if phs == 1:
        num1 += 1
    else:
        if phs == 2:
            equ += 1
        else:
            if phs == 3:
                num2 += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global phs
    soundExpression.slide.play()
    phs += 1
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global num1, equ, num2
    soundExpression.sad.play()
    if phs == 1:
        num1 += -1
    else:
        if phs == 2:
            equ += -1
        else:
            if phs == 3:
                num2 += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

phs = 0
music.set_built_in_speaker_enabled(True)
smle_fce_r_not = 0
basic.show_icon(IconNames.HAPPY)
soundExpression.hello.play_until_done()
smle_fce_r_not += 1
text_list = ["+", "-", "*", "/"]
phs = 1
num1 = 0
equ = 0
num2 = 0

def on_forever():
    if smle_fce_r_not == 1:
        if phs == 1:
            basic.show_number(num1)
        else:
            if phs == 2:
                basic.show_string("" + (text_list[equ]))
            else:
                if phs == 3:
                    basic.show_number(num2)
                else:
                    if phs == 4:
                        if equ == 0:
                            basic.show_number(num1 + num2)
                        else:
                            if equ == 1:
                                basic.show_number(num1 - num2)
                            else:
                                if equ == 2:
                                    basic.show_number(num1 * num2)
                                else:
                                    if equ == 3:
                                        basic.show_number(num1 / num2)
basic.forever(on_forever)
