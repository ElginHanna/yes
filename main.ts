let a = 0
let tie = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = a + 1
    basic.showString("Team 1")
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    tie = tie + 1
    basic.showString("Ties")
    basic.showNumber(tie)
})
input.onButtonPressed(Button.B, function () {
    b = b + 1
    basic.showString("Team 2")
    basic.showNumber(b)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Team 1")
    basic.showNumber(a)
    basic.showString("Team 2")
    basic.showNumber(b)
    basic.showString("Ties")
    basic.showNumber(tie)
})
basic.forever(function () {
	
})
