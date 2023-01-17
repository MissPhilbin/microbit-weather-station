input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    basic.showString("temp")
    basic.showNumber(envirobit.getTemperature())
    if (envirobit.getTemperature() < 18) {
        music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    } else if (envirobit.getTemperature() > 24) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.showIcon(IconNames.Angry)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
        for (let index = 0; index < 5; index++) {
            basic.showIcon(IconNames.Heart)
            basic.pause(500)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(500)
        }
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("light")
    basic.showNumber(envirobit.getLight())
    basic.clearScreen()
})
