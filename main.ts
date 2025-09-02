input.onButtonPressed(Button.A, function () {
    radio.sendString("1")
    radio.setGroup(2)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.clearScreen()
    radio.setGroup(3)
})
basic.showIcon(IconNames.SmallHeart)
basic.clearScreen()
radio.setGroup(2)
radio.setTransmitPower(0)
