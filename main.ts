input.onButtonPressed(Button.A, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.spring), SoundExpressionPlayMode.UntilDone)
    basic.showString("temp")
    basic.showNumber(envirobit.getTemperature())
    if (envirobit.getTemperature() < 18) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Sad)
        basic.pause(1000)
        basic.clearScreen()
    } else if (envirobit.getTemperature() > 24) {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
        basic.showIcon(IconNames.Angry)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.twinkle), SoundExpressionPlayMode.UntilDone)
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
