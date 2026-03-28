namespace SpriteKind {
    export const tower = SpriteKind.create()
    export const tower_kind = SpriteKind.create()
    export const damy_projectile = SpriteKind.create()
    export const UI = SpriteKind.create()
    export const bomb = SpriteKind.create()
}
/**
 * ダメージを各bulletが持つpowerで減算するように変更
 */
function enemy3_appear (state: number, x: number, y: number) {
    enemy3 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemy3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 4 b 
        b d d c d 5 5 b 5 4 4 4 4 4 b . 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . . . . b c . . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        b d d d b b d 5 5 5 4 4 4 4 4 b 
        b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
        b d c 5 5 5 5 d 5 5 5 5 5 b . . 
        c d d c d 5 5 b 5 5 5 5 5 5 b . 
        c b d d c c b 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . . b d d 5 5 5 5 5 5 5 5 b . . 
        . b d d d d 5 5 5 5 5 5 5 5 b . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        . b 5 5 b c d d 5 5 5 5 5 d b . 
        b b c c c d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 d 4 c . . 
        . . . . b 5 5 1 f f d d 4 4 4 b 
        . . . . b 5 5 d f b 4 4 4 4 b . 
        . . . b d 5 5 5 5 4 4 4 4 b . . 
        . b b d d d 5 5 5 5 5 5 5 b . . 
        b d d d b b b 5 5 5 5 5 5 5 b . 
        c d d b 5 5 d c 5 5 5 5 5 5 b . 
        c b b d 5 d c d 5 5 5 5 5 5 b . 
        c b 5 5 b c d d 5 5 5 5 5 5 b . 
        b b c c c d d d 5 5 5 5 5 d b . 
        . . . . c c d d d 5 5 5 b b . . 
        . . . . . . c c c c c b b . . . 
        `,img`
        . . . . . . . . . . b 5 b . . . 
        . . . . . . . . . b 5 b . . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . . . . b b 5 d 1 f 5 5 d f . . 
        . . . . b 5 5 1 f f 5 d 4 c . . 
        . . . . b 5 5 d f b d d 4 4 . . 
        . b b b d 5 5 5 5 5 4 4 4 4 4 b 
        b d d d b b d 5 5 4 4 4 4 4 b . 
        b b d 5 5 5 b 5 5 5 5 5 5 b . . 
        c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
        c b d c d 5 5 b 5 5 5 5 5 5 b . 
        . c d d c c b d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    if (state == 1) {
        enemy3.scale = 1.2
        sprites.setDataNumber(enemy3, "hp", ENEMY31_HP)
        x0 = 0
        y0 = 0
    } else {
        sprites.setDataNumber(enemy3, "hp", ENEMY32_HP)
        sprites.setDataBoolean(enemy3, "is_jitter", false)
        x0 = x
        y0 = y
    }
    enemy_theta(enemy3, 1, x0, y0)
    sprites.setDataNumber(enemy3, "theta", theta)
    sprites.setDataNumber(enemy3, "spawn_time", game.runtime())
    sprites.setDataNumber(enemy3, "x0", x0)
    sprites.setDataNumber(enemy3, "y0", y0)
    sprites.setDataNumber(enemy3, "state", state)
    sprites.setDataNumber(enemy3, "point", ENEMY3_POINT)
    sprites.setDataBoolean(enemy3, "is_reach", false)
    sprites.setDataBoolean(enemy3, "is_exist", true)
    sprites.setDataBoolean(enemy3, "is_invincibility", false)
    sprites.setDataBoolean(enemy3, "is_divide", false)
    enemy3_list.push(enemy3)
    enemy3.setVelocity(ENEMY31_SPEED * Math.cos(theta), ENEMY31_SPEED * Math.sin(theta))
    enemy_statusbar = statusbars.create(20, 2, StatusBarKind.Health)
    enemy_statusbar.max = sprites.readDataNumber(enemy3, "hp")
    enemy_statusbar.attachToSprite(enemy3)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprites.readDataNumber(sprite, "type") == 1) {
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
        sprite.setVelocity(0, 0)
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 3 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . 3 2 2 3 1 1 1 1 3 2 2 . . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . 3 3 1 1 1 1 1 1 1 1 3 3 . . 
            . . . 3 1 1 1 1 1 1 1 1 3 . . . 
            . . . . 3 1 1 1 1 1 1 3 . . . . 
            . . . . 2 1 1 1 1 1 1 2 . . . . 
            . . . . 2 1 1 3 3 1 1 2 . . . . 
            . . . . 3 3 3 2 2 2 3 3 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 3 3 . . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . 3 3 . . 3 1 3 . . 3 3 . . . 
            . . 3 1 3 . 3 1 3 2 3 1 3 . . . 
            . . . 3 1 3 3 1 3 2 1 3 . . . . 
            3 3 3 3 2 1 3 1 1 1 3 . . . . . 
            3 1 1 1 1 1 1 1 1 2 3 3 3 3 3 3 
            . 3 3 3 2 3 1 1 1 1 1 1 1 1 1 3 
            . . . . . 2 1 1 1 3 3 2 3 3 3 . 
            . . . . 3 1 3 1 3 1 2 . . . . . 
            . . . 3 1 3 2 1 3 3 1 3 . . . . 
            . . 3 1 3 . 2 1 3 . 3 1 3 . . . 
            . . 3 3 . . 3 1 3 . . 3 3 . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 1 3 . . . . . . . 
            . . . . . . 3 3 . . . . . . . . 
            `,img`
            . . 3 3 . . . 3 3 . . . . . . . 
            . 3 1 1 2 . . 3 1 3 . . 3 3 3 . 
            . 3 1 1 2 . . 3 1 3 . 3 1 1 3 . 
            . . 3 2 2 . . 2 1 2 . 2 1 1 3 . 
            . 3 3 . . . . . 2 2 . 2 2 2 . . 
            3 1 1 2 2 . . . . . . . 3 3 . . 
            3 1 1 1 2 . . . . . . 2 1 1 3 3 
            3 1 1 2 . . . . . . 3 1 1 1 1 3 
            . 3 2 2 . . . . . . . 2 1 1 3 . 
            . . . . . . . 2 . . . . 3 3 . . 
            . . 2 2 2 . 2 1 2 . . 2 2 2 . . 
            . 3 1 1 2 2 3 1 1 2 . 2 1 1 3 3 
            3 1 1 1 2 2 1 1 1 2 . 2 1 1 1 3 
            3 1 1 3 . . 3 1 3 . . . 3 1 1 3 
            3 3 3 . . . . 3 3 . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 3 . . . . . 
            . . . . . 3 . . . . 3 3 . . . . 
            . . . . 3 3 . . . . . 3 . . . . 
            . . . . 3 . . . 3 . . . . . . . 
            . . . . . . . . 3 . . . . . . . 
            . 3 . . . . . . . . . . 3 . . . 
            3 3 . . . . . . . . . . 3 3 . . 
            3 . . . . . . . . . . . . 3 . . 
            . . . . . . . . . . . . . . . . 
            . . . 3 . . . 3 . . . . . 3 . . 
            . . 3 3 . . . 3 . . . . . 3 3 . 
            . . 3 . . . . 3 . . . . . . 3 . 
            `],
        50,
        false
        )
        sprite.setKind(SpriteKind.damy_projectile)
        timer.after(250, function () {
            sprites.destroy(sprite)
        })
        sprites.changeDataNumberBy(otherSprite, "hp", -1 * BULLET1_ATTACK)
    } else if (sprites.readDataNumber(sprite, "type") == 2) {
        if (!(sprites.readDataBoolean(otherSprite, "is_invincibility"))) {
            sprites.changeDataNumberBy(otherSprite, "hp", -1 * sprites.readDataNumber(sprite, "power"))
            sprites.changeDataNumberBy(sprite, "hit_count", -1)
            if (sprites.readDataNumber(sprite, "hit_count") < 0) {
                sprites.destroy(sprite)
            }
            sprites.setDataBoolean(otherSprite, "is_invincibility", true)
            music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            timer.after(1000, function () {
                sprites.setDataBoolean(otherSprite, "is_invincibility", false)
            })
        }
    } else if (sprites.readDataNumber(sprite, "type") == 3) {
        sprites.changeDataNumberBy(otherSprite, "hp", -1 * sprites.readDataNumber(sprite, "power"))
    } else {
    	
    }
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value = sprites.readDataNumber(otherSprite, "hp")
    if (sprites.readDataNumber(otherSprite, "hp") <= 0) {
        sprites.setDataBoolean(otherSprite, "is_exist", false)
        MP += sprites.readDataNumber(otherSprite, "point")
        tower_statusbar_mp.value = MP
        sprites.destroy(otherSprite, effects.fire, 100)
    }
})
function hearts_update (hp: number) {
    for (let heart of hearts) {
        sprites.destroy(heart)
    }
    for (let カウンター = 0; カウンター <= hp - 1; カウンター++) {
        heart2 = sprites.create(img`
            . . . . . . . . . . . 
            . . f f f . f f f . . 
            . f 3 3 3 f 3 3 3 f . 
            . f 3 3 3 3 3 1 3 f . 
            . f 3 3 3 3 3 3 3 f . 
            . . f 3 b b b 3 f . . 
            . . f f b b b f f . . 
            . . . f f b f f . . . 
            . . . . f f f . . . . 
            . . . . . . . . . . . 
            `, SpriteKind.UI)
        heart2.setPosition(10 + カウンター * 11, 105)
        hearts.push(heart2)
    }
}
function fire_bullet2 () {
    bullet2_fired = true
    bullet_theta(target, artillery)
    if (bullet2_size == 1000000) {
        bullet2 = sprites.createProjectileFromSprite(assets.image`bullet2_max`, artillery, BULLET2_SPEED * Math.cos(theta), BULLET2_SPEED * Math.sin(theta))
    } else {
        bullet2 = sprites.createProjectileFromSprite(assets.image`bullet2`, artillery, BULLET2_SPEED * Math.cos(theta), BULLET2_SPEED * Math.sin(theta))
    }
    bullet2.rotation = theta
    pow(BULLET2_POWER, sprites.readDataNumber(bullet2, "power"))
    sprites.setDataNumber(artillery, "state", Math.floor(_return))
    sprites.setDataNumber(bullet2, "type", 2)
    bullet2.setScale(bullet2_size, ScaleAnchor.Middle)
    sprites.destroy(dummy_bullet)
    bullet2.sayText(sprites.readDataNumber(bullet2, "state"))
    bullet2.sayText(bullet2_size)
    if (bullet2_size < 1) {
        sprites.setDataNumber(bullet2, "power", 10)
        sprites.setDataNumber(bullet2, "hit_count", 1)
    } else if (1 <= bullet2_size && bullet2_size < 1.8) {
        sprites.setDataNumber(bullet2, "power", 25)
        sprites.setDataNumber(bullet2, "hit_count", 5)
    } else if (1.8 <= bullet2_size) {
        sprites.setDataNumber(bullet2, "power", 60)
        sprites.setDataNumber(bullet2, "hit_count", 99999)
    } else {
    	
    }
    music.setVolume(VOLUME - 100)
    // 発射時と倒されたときに音を鳴らすように変更
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
    music.setVolume(VOLUME)
    bullet2_fired = true
    bullet2_size = BULLET2_MIN
}
function bullet_theta (target: Sprite, artillery: Sprite) {
    dx = target.x - artillery.x
    dy = target.y - artillery.y
    theta = Math.atan2(dy, dx)
}
function enemy2_update () {
    for (let i of enemy2_list) {
        if (sprites.readDataBoolean(i, "is_reach")) {
            continue;
        }
        lastX = i.x
        lastY = i.y
        t = game.runtime() - sprites.readDataNumber(i, "spawn_time")
        theta = sprites.readDataNumber(i, "theta")
        dist = t / 20 * ENEMY2_SPEED
        rad = t % ENEMY2_T / ENEMY2_T * Math.PI * 2
        wave = Math.sin(rad) * ENEMY2_AMP
        cosA = Math.cos(theta)
        sinA = Math.sin(theta)
        i.setPosition(sprites.readDataNumber(i, "x0") + dist * cosA + wave * (sinA * -1), sprites.readDataNumber(i, "y0") + dist * sinA + wave * cosA)
        currentDX = sprites.readDataNumber(i, "x") - sinA
        currentDY = sprites.readDataNumber(i, "y") - lastY
        if (Math.abs(currentDX) > 0.1 || Math.abs(currentDY) > 0.1) {
            abs_dx = Math.atan2(currentDY, currentDX) * 180 / Math.PI
            i.sayText(abs_dx)
        }
    }
}
function list_update (array: Sprite[]) {
    output_list = []
    for (let j of array) {
        if (j.x < -50 || j.x > 200 || (j.y < -50 || j.y > 170)) {
            sprites.setDataBoolean(j, "is_exist", false)
        }
        if (sprites.readDataBoolean(j, "is_exist")) {
            output_list.push(j)
        } else {
            sprites.destroy(j)
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_state == 1) {
        if (controller.A.isPressed()) {
            sp_attack()
        }
        dummy_bullet = sprites.create(img`
            . . . . . b b b b b b . . . . . 
            . . . b b 9 9 9 9 9 9 b b . . . 
            . . b b 9 9 9 9 9 9 9 9 b b . . 
            . b b 9 d 9 9 9 9 9 9 9 9 b b . 
            . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
            b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
            b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
            b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
            b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
            b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
            . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
            . b d 5 3 3 3 3 3 3 3 d 5 b b . 
            . . b d 5 d 3 3 3 3 5 5 b b . . 
            . . . b b 5 5 5 5 5 5 b b . . . 
            . . . . . b b b b b b . . . . . 
            `, SpriteKind.Player)
        dummy_bullet.setPosition(artillery.x, artillery.y)
        bullet2_fired = false
        bullet2_size = BULLET2_MIN
        dummy_bullet.setScale(bullet2_size, ScaleAnchor.Middle)
        freq = 400
    }
})
function gamestart () {
    game_state = 1
    init()
    music.setVolume(VOLUME)
    enemy2_list = []
    target = sprites.create(assets.image`myImage`, SpriteKind.Player)
    controller.moveSprite(target)
    target.z = 100
    target.setStayInScreen(true)
    tower2 = sprites.create(assets.image`myImage2`, SpriteKind.tower_kind)
    tower2.setScale(0.6, ScaleAnchor.Middle)
    tower2.y = 115
    tower_hp = TOWER_MAXHP
    tower_statusbar_mp = statusbars.create(50, 10, StatusBarKind.Magic)
    tower_statusbar_mp.max = MAX_MP
    tower_statusbar_mp.value = 0
    tower2.sayText(sprites.readDataNumber(tower2, "hp"))
    tower_statusbar_mp.attachToSprite(tower2, -10, 45)
    artillery = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........beeeeeeb........
        .......beeeeeeeeb.......
        ......beeeeeeeeeeb......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......eeeeeeeeeeee......
        ......ce77eeee67ee......
        ...668ce7768867788666...
        ..6776ee77777777667776..
        ...6776666eeee6766776...
        ....6776eeeeeeeee676....
        .....6eeeeeeeeeece6.....
        ......eeeeeeeeeece......
        ......eeeeeeeeeefe......
        ......eeceeeeeeefe......
        ......eeceeeeeeefe......
        ......eeceeeeeeece......
        ......eefeeeeeeece......
        ......ee6eeeeee6ce......
        ......ee77eeee67ee......
        ...668ee7768867788666...
        ..6776ee67777777667776..
        ...6777666eeee6667776...
        ....6776eeeeeeeee676....
        .....6feeeeeeeeeef6.....
        ......feeeeeeeeeefe.....
        ......eeeeeeeeeeeff.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeecf.....
        ......eeeeeeeeeeeef.....
        ......eeeeeeeeeeeef.....
        ......ee6eeeeee6cef.....
        ......ee77eeee67eeee....
        ...668ee7768867788666...
        ..6776ee67777777667776..
        ...6777666eeee6667776...
        ....6776eeeeeeeee676....
        .....6feeeeeeeeeef6.....
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.tower_kind)
    artillery.setScale(0.6, ScaleAnchor.Middle)
    artillery.y = 115
    hearts = []
    hearts_update(TOWER_MAXHP)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.tower_kind, function (sprite2, otherSprite2) {
    if (!(sprites.readDataBoolean(sprite2, "is_reach"))) {
        sprites.setDataBoolean(sprite2, "is_reach", true)
        sprite2.setVelocity(0, 0)
        timer.background(function () {
            while (sprites.readDataBoolean(sprite2, "is_exist")) {
                if (game_state != 1) {
                    break;
                }
                music.play(music.melodyPlayable(music.buzzer), music.PlaybackMode.InBackground)
                tower_hp += -1
                hearts_update(tower_hp)
                otherSprite2.sayText(sprites.readDataNumber(otherSprite2, "hp"), 500, false)
                pause(3000)
            }
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game_state == 1) {
        if (controller.B.isPressed()) {
            sp_attack()
        }
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
        bullet_theta(target, artillery)
        bullet1 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . 2 2 1 1 1 1 2 . . 
            . . . . 2 2 3 3 1 1 1 1 1 1 . . 
            . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
            . . . . . . 2 2 3 1 1 1 1 2 . . 
            . . . . . . . . . 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, artillery, BULLET1_SPEED * Math.cos(theta), BULLET1_SPEED * Math.sin(theta))
        bullet1.rotation = theta
        sprites.setDataNumber(bullet1, "type", 1)
    }
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (game_state == 1) {
        if (!(bullet2_fired)) {
            fire_bullet2()
        }
    }
})
// ENEMY2_AMP: 振れ幅
// ENEMY2_T: 振れ周期
// JITTER_AMP: enemy3ジッター振れ幅
// BULLET2_POWER: 強さの　係数
function init () {
    difficulty = 0
    MP = 0
    MAX_MP = 20
    ENEMY1_HP = 10
    ENEMY1_SPEED = 10
    ENEMY1_POINT = 10
    ENEMY2_HP = 30
    ENEMY2_SPEED = 0.2
    ENEMY2_AMP = 15
    ENEMY2_T = 2000
    ENEMY2_POINT = 10
    ENEMY31_HP = 20
    ENEMY32_HP = 5
    ENEMY31_SPEED = 10
    ENEMY32_SPEED = 10
    ENEMY3_POINT = 10
    JITTER_AMP = 1
    BULLET1_SPEED = 100
    BULLET1_ATTACK = 5
    BULLET2_SPEED = 100
    BULLET2_MIN = 0.4
    BULLET2_POWER = 1.8
    BULLET2_ATTACK = 10
    BOMB_AIRTIME = 2
    TOWER_MAXHP = 5
    VOLUME = 200
}
function enemy3_divide (enemy3: Sprite) {
    if (sprites.readDataBoolean(enemy3, "is_exist")) {
        sprites.setDataBoolean(enemy3, "is_exist", false)
        sprites.destroy(enemy3, effects.spray, 100)
        for (let カウンター2 = 0; カウンター2 <= 2; カウンター2++) {
            enemy3_appear(2, enemy3.x, enemy3.y)
            child = enemy3_list[enemy3_list.length - 1]
            spreadTheta = sprites.readDataNumber(child, "theta") + (カウンター2 - 1) * 0.5
            child.setVelocity(ENEMY32_SPEED * Math.cos(spreadTheta), ENEMY32_SPEED * Math.sin(spreadTheta))
        }
    }
}
function distance (mySprite: Sprite, mySprite2: Sprite) {
    dx = mySprite.x - mySprite2.x
    dy = mySprite.y - mySprite2.y
    dist = Math.sqrt(dx * dx + dy * dy)
}
function enemy3_update () {
    for (let k of enemy3_list) {
        if (sprites.readDataBoolean(k, "is_reach")) {
            continue;
        }
        distance(k, tower2)
        if (!(sprites.readDataBoolean(k, "is_jitter")) && dist < 70 && sprites.readDataNumber(k, "state") == 1) {
            sprites.setDataBoolean(k, "is_jitter", true)
            k.setVelocity(0, 0)
            tmp1 = k.x
            tmp2 = k.y
            timer.after(2000, function () {
                enemy3_divide(k)
            })
        }
        if (sprites.readDataBoolean(k, "is_jitter")) {
            k.setPosition(tmp1 + randint(-1 * JITTER_AMP, JITTER_AMP), tmp2 + randint(-1 * JITTER_AMP, JITTER_AMP))
        }
    }
}
function enemy1_appear () {
    enemy1 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemy1,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    x0 = 0
    y0 = 0
    enemy_theta(enemy1, ENEMY1_HP, x0, y0)
    sprites.setDataNumber(enemy1, "hp", ENEMY1_HP)
    sprites.setDataNumber(enemy1, "theta", theta)
    sprites.setDataNumber(enemy1, "spawn_time", game.runtime())
    sprites.setDataNumber(enemy1, "x0", x0)
    sprites.setDataNumber(enemy1, "y0", y0)
    sprites.setDataNumber(enemy1, "point", ENEMY1_POINT)
    sprites.setDataBoolean(enemy1, "is_reach", false)
    sprites.setDataBoolean(enemy1, "is_exist", true)
    sprites.setDataBoolean(enemy1, "is_invincibility", false)
    enemy1.setVelocity(ENEMY1_SPEED * Math.cos(theta), ENEMY1_SPEED * Math.sin(theta))
    enemy_statusbar = statusbars.create(20, 2, StatusBarKind.Health)
    enemy_statusbar.max = sprites.readDataNumber(enemy1, "hp")
    enemy_statusbar.attachToSprite(enemy1)
}
function disable () {
    tower_statusbar_hp = statusbars.create(50, 4, StatusBarKind.Health)
    tower_statusbar_hp.max = tower_hp
    tower_statusbar_hp.value = tower_hp
    tower_statusbar_hp.attachToSprite(tower2, -10, 40)
}
function enemy2_appear () {
    enemy2 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
    animation.runImageAnimation(
    enemy2,
    [img`
        . . f f f . . . . . . . . f f f 
        . f f c c . . . . . . f c b b c 
        f f c c . . . . . . f c b b c . 
        f c f c . . . . . . f b c c c . 
        f f f c c . c c . f c b b c c . 
        f f c 3 c c 3 c c f b c b b c . 
        f f b 3 b c 3 b c f b c c b c . 
        . c b b b b b b c b b c c c . . 
        . c 1 b b b 1 b b c c c c . . . 
        c b b b b b b b b b c c . . . . 
        c b c b b b c b b b b f . . . . 
        f b 1 f f f 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . c c . . c c . . . . . . . . 
        . . c 3 c c 3 c c c . . . . . . 
        . c b 3 b c 3 b c c c . . . . . 
        . c b b b b b b b b f f . . . . 
        c c b b b b b b b b f f . . . . 
        c b 1 b b b 1 b b c f f f . . . 
        c b b b b b b b b f f f f . . . 
        f b c b b b c b c c b b b . . . 
        f b 1 f f f 1 b f c c c c . . . 
        . f b b b b b b f b b c c . . . 
        c c f b b b b b c c b b c . . . 
        c c c f f f f f f c c b b c . . 
        . c c c . . . . . . c c c c c . 
        . . c c c . . . . . . . c c c c 
        . . . . . . . . . . . . . . . . 
        `,img`
        . f f f . . . . . . . . f f f . 
        f f c . . . . . . . f c b b c . 
        f c c . . . . . . f c b b c . . 
        c f . . . . . . . f b c c c . . 
        c f f . . . . . f f b b c c . . 
        f f f c c . c c f b c b b c . . 
        f f f c c c c c f b c c b c . . 
        . f c 3 c c 3 b c b c c c . . . 
        . c b 3 b c 3 b b c c c c . . . 
        c c b b b b b b b b c c . . . . 
        c b 1 b b b 1 b b b b f c . . . 
        f b b b b b b b b b b f c c . . 
        f b c b b b c b b b b f . . . . 
        . f 1 f f f 1 b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        `],
    200,
    true
    )
    x0 = 0
    y0 = 0
    enemy_theta(enemy2, ENEMY2_HP, x0, y0)
    sprites.setDataNumber(enemy2, "hp", ENEMY2_HP)
    sprites.setDataNumber(enemy2, "theta", theta)
    sprites.setDataNumber(enemy2, "spawn_time", game.runtime())
    sprites.setDataNumber(enemy2, "x0", x0)
    sprites.setDataNumber(enemy2, "y0", y0)
    sprites.setDataNumber(enemy2, "point", ENEMY2_POINT)
    sprites.setDataBoolean(enemy2, "is_reach", false)
    sprites.setDataBoolean(enemy2, "is_exist", true)
    sprites.setDataBoolean(enemy2, "is_invincibility", false)
    sprites.setDataBoolean(enemy2, "is_", true)
    enemy2_list.push(enemy2)
    enemy2.setVelocity(ENEMY2_SPEED * Math.cos(theta), ENEMY2_SPEED * Math.sin(theta))
    enemy_statusbar = statusbars.create(20, 2, StatusBarKind.Health)
    enemy_statusbar.max = sprites.readDataNumber(enemy2, "hp")
    enemy_statusbar.attachToSprite(enemy2)
}
function start () {
    scene.setBackgroundImage(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111111111111111111111111111111fffffffffff1111111111111
        1111111111111111111111111111111ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111111111111111111111111111111fffffffffff1111111111111
        1111111111111111111111111111111ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111111111111111111111111111111fffffffffff1111111111111
        1111111111111111111111111111111ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111111111111111111111111111111fffffffffff1111111111111
        11111111111111111fffffffffffffffffffffffff1111111111111ffff11111111111111fffffffffffffffffffffffff111fffffffffffffffffffffffff1111111111fffffffffff1111111111111
        11111111111111111fffffffffffffffffffffffff1111111111111ffff11111111111111fffffffffffffffffffffffff111fffffffffffffffffffffffff1111111111fffffffffff1111111111111
        11111111111111111fffffffffffffffffffffffff1111111111111ffff11111111111111fffffffffffffffffffffffff111fffffffffffffffffffffffff1111111111fffffffffff1111111111111
        11111111111111111fffffffffffffffffffffffff1111111111ffffffffffffffffff111fffffffffffffffffffffffff111fffffffffffffffffffffffff1111111111fffffffffff1111111111111
        1111111111111111111111111111111ffff11111111111111111ffffffffffffffffff1111111111ffff111111111111111111111111111ffff111111111111111111111fffffffffff1111111111111
        1111111111111111111111111111111ffff11111111111111111ffffffffffffffffff1111111111ffff111111111111111111111111111ffff111111111111111111111fffffffffff1111111111111
        1111111111111111111111111111111ffff11111111111111111ffffffffffffffffff1111111111ffff111111111111111111111111111ffff111111111111111111111fffffffffff1111111111111
        11111111111111111111ffffffffffffffffff1111111111ffff111111111111111111111111ffffffffffffffffff11111111111111ffff111111111111111111111111fffffff11111111111111111
        11111111111111111111ffffffffffffffffff1111111111ffff111111111111111111111111ffffffffffffffffff11111111111111ffff111111111111111111111111fffffff11111111111111111
        11111111111111111111ffffffffffffffffff1111111111ffff111111111111111111111111ffffffffffffffffff11111111111111ffff111111111111111111111111fffffff11111111111111111
        11111111111111111111ffffffffffffffffff1111111fffffff111111111111111111111fffffffffffffffffffffffff111111ffffffff111111111111111111111111fffffff11111111111111111
        1111111111111111111111111111111ffff1111111111ffff111111111111111111111111ffff111ffff111ffff111ffff111111ffff1111111111111111111111111111fffffff11111111111111111
        1111111111111111111111111111111ffff1111111111ffff111111111111111111111111ffff111ffff111ffff111ffff111111ffff1111111111111111111111111111fffffff11111111111111111
        1111111111111111111111111111111ffff1111111111ffff111111111111111111111111ffff111ffff111ffff111ffff111111ffff1111111111111111111111111111fffffff11111111111111111
        11111111111111111fffffffffffffffffffff1111111ffff111111111111111111111111ffff111ffff111ffff111ffff111111ffff1111111111111111111111111111111111111111111111111111
        11111111111111111fffffffffffffffffffff1111111ffff111111111111111111111111ffff111ffff111ffff111ffff111111ffff1111111111111111111111111111111111111111111111111111
        11111111111111111fffffffffffffffffffff1111111ffff111111111111111111111111ffff111ffff111ffff111ffff111111ffff1111111111111111111111111111111111111111111111111111
        11111111111111111fffffffffffffffffffffffff111fffffffffffffffffffffffff111ffffffffffffffffff111ffff111111ffffffffffffffffff11111111111111fffffff11111111111111111
        11111111111111111111fffffffffffffff111ffff111111ffffffffffffffffffffff111111fffffffffff1111111ffff1111111111ffffffffffffff11111111111111fffffff11111111111111111
        11111111111111111111fffffffffffffff111ffff111111ffffffffffffffffffffff111111fffffffffff1111111ffff1111111111ffffffffffffff11111111111111fffffff11111111111111111
        11111111111111111111fffffffffffffff111ffff111111ffffffffffffffffffffff111111fffffffffff1111111ffff1111111111ffffffffffffff11111111111111fffffff11111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    game_state = 0
    start_menu = miniMenu.createMenu(
    miniMenu.createMenuItem("スタート"),
    miniMenu.createMenuItem("あそびかた")
    )
    start_menu.setPosition(65, 85)
    miniMenu.setDimensions(start_menu, 100, 150)
    miniMenu.onButtonPressed(start_menu, miniMenu.Button.A, function (selection, selectedIndex) {
        miniMenu.close(start_menu)
        if (selectedIndex == 0) {
            scene.setBackgroundImage(assets.image`white_bg`)
            difficulty_menu = miniMenu.createMenu(
            miniMenu.createMenuItem("かんたん", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f . f f f f f . . 
                . . f f 3 3 3 f f f 3 3 3 f f . 
                . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
                . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
                . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
                . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
                . . f f 3 3 3 b b b 3 3 3 f f . 
                . . . f f 3 b b b b b 3 f f . . 
                . . . . f f b b b b b f f . . . 
                . . . . . f f b b b f f . . . . 
                . . . . . . f f b f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("ふつう", img`
                . . . . . . . 6 . . . . . . . . 
                . . . . . . 8 6 6 . . . 6 8 . . 
                . . . e e e 8 8 6 6 . 6 7 8 . . 
                . . e 2 2 2 2 e 8 6 6 7 6 . . . 
                . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
                . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
                e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
                e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
                e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
                e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
                e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
                e 2 2 2 2 2 2 2 4 e 2 e e c . . 
                e e 2 e 2 2 4 2 2 e e e c . . . 
                e e e e 2 e 2 2 e e e c . . . . 
                e e e 2 e e c e c c c . . . . . 
                . c c c c c c c . . . . . . . . 
                `),
            miniMenu.createMenuItem("むずかしい", img`
                . . . . . . . . . . b 5 b . . . 
                . . . . . . . . . b 5 b . . . . 
                . . . . . . . . . b c . . . . . 
                . . . . . . b b b b b b . . . . 
                . . . . . b b 5 5 5 5 5 b . . . 
                . . . . b b 5 d 1 f 5 5 d f . . 
                . . . . b 5 5 1 f f 5 d 4 c . . 
                . . . . b 5 5 d f b d d 4 4 . . 
                b d d d b b d 5 5 5 4 4 4 4 4 b 
                b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
                b d c 5 5 5 5 d 5 5 5 5 5 b . . 
                c d d c d 5 5 b 5 5 5 5 5 5 b . 
                c b d d c c b 5 5 5 5 5 5 5 b . 
                . c d d d d d d 5 5 5 5 5 d b . 
                . . c b d d d d d 5 5 5 b b . . 
                . . . c c c c c c c c b b . . . 
                `),
            miniMenu.createMenuItem("おに", img`
                . . f f f . . . . . . . . f f f 
                . f f c c . . . . . . f c b b c 
                f f c c . . . . . . f c b b c . 
                f c f c . . . . . . f b c c c . 
                f f f c c . c c . f c b b c c . 
                f f c 3 c c 3 c c f b c b b c . 
                f f b 3 b c 3 b c f b c c b c . 
                . c b b b b b b c b b c c c . . 
                . c 1 b b b 1 b b c c c c . . . 
                c b b b b b b b b b c c . . . . 
                c b c b b b c b b b b f . . . . 
                f b 1 f f f 1 b b b b f c . . . 
                f b b b b b b b b b b f c c . . 
                . f b b b b b b b b c f . . . . 
                . . f b b b b b b c f . . . . . 
                . . . f f f f f f f . . . . . . 
                `)
            )
            difficulty_menu.setPosition(69, 56)
            miniMenu.setDimensions(difficulty_menu, 100, 150)
            miniMenu.setTitle(difficulty_menu, "むずかしさ")
            miniMenu.onButtonPressed(difficulty_menu, miniMenu.Button.A, function (selection, selectedIndex) {
                miniMenu.close(difficulty_menu)
                difficulty = selectedIndex
                gamestart()
            })
            miniMenu.onButtonPressed(difficulty_menu, miniMenu.Button.B, function (selection, selectedIndex) {
                miniMenu.close(difficulty_menu)
                start()
            })
        } else if (selectedIndex == 1) {
            scene.setBackgroundImage(img`
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111ff1111111111111111111111111111111111111111111111111111111111111111111f1ff1111111111111111111111111111111111111111111111f1ff111111111111111
                111111111111111111111f1ff1111111111111111111111111f111111111111111111111111111ffff11111111111111111111111111ffff1111111111111111ffff1111111111111111111111111111
                111111fffffffff111fffffff11111111111fffffffff1fffffffff1111111111111ffff111111ffff11111ff1111111111111111111ffff11111fffffff1111ffff1111f11111ff1111111f11111111
                111111fffffffff111ffffff111111111111fffffffff1fffffffff1111111111111ffff111111111111111ff1111111111111111111111111111fffffff111111111111f11111ff1111111f11111111
                1111111111111ff11ff111ff1111111111111111111ff11111f111111111111111fff111ff111fffffff111ff1111111111111ff111fffffff111111111ff11fffffff11f1fffffff1fffffffff11111
                111111111111ff111ff111ff11fffffffff1111111ff111111f11111fffffffff11111111ff1f111111ff1f111111111111111fff1f111111ff11111111111f111111ff1f11111ff11111111ff111111
                11111111111f1111f111111ff1111111111111111f1111fffffffff111111111111111111ff11111111ff1f111111ff111ffffff111111111ff111111111111111111ff1f11111ff1111fffffff11111
                11111111ffffff11f111111ff1111111111111ffffff11fffffffff11111111111111111fff11111111ff1f11111fff11ffffffff11111111ff1f1111111111111111ff1f11111ff11f1fffffff11111
                11111111fff1ff11f111111ff1111111111111fff1ff111111f111111111111111111111ff111111111ff1f11111ff111ff111fff11111111ff1f1111111111111111ff1f11111ff11f11111ff111111
                111111fff1111ff11111111ff11111111111fff1111ff11111f11111111111111111ffff111111ffffff111fffff111111ffffff1111ffffff111ffffffff111ffffff11f111ff11111ffff111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1ff111111111111111111111111111111111111111111111
                111111111111111111111111111ff111111111111111111111f11111111111111111111111111111111111111111111111ffff1111111111111111111111111111111111111111111111111111111111
                111111fffffffff1fffff111111ffffffff11111111111fffffffff1111111111111ff1111111ff11f11111fffffff1111ffff1111f11111ff1111111f11111111111111111111111111111111111111
                111111fffffffff1fffff111111ffffffff11111111111fffffffff1111111111111ff1111111ff11f11111fffffff111111111111f11111ff1111111f11111111111111111111111111111111111111
                1111111111f1111111111111111ff1111ff111111111111111f111111111111111ffff1fff11ffffffff111111111ff11fffffff11f1fffffff1fffffffff11111111111111111111111111111111111
                1111111111f111111111111ff1f111fffff1fffffffff11111f11111fffffffff11ff1111ff1f1ff1f1ff11111111111f111111ff1f11111ff11111111ff111111111111111111111111111111111111
                1111111111f111111111111ff1f111111ff11111111111fffffffff111111111111ff1111111f1ff1f1ff111111111111111111ff1f11111ff1111fffffff11111111111111111111111111111111111
                1111111111f11111111111fff1f11111fff11111111111fffffffff111111111111ff1f11111f1ffff1ff1f1111111111111111ff1f11111ff11f1fffffff11111111111111111111111111111111111
                1111111111f11111111111ff11111111ff1111111111111111f1111111111111111ff1f11111f111f11ff1f1111111111111111ff1f11111ff11f11111ff111111111111111111111111111111111111
                111111fffffffff1ffffff111111ffff111111111111111111f111111111111111f1111ffff11fff11ff111ffffffff111ffffff11f111ff11111ffff111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111f1ff111111111111111111111111111111111111f1ff1111111111111111f1ff111111f1ff11111111111111111111111111111111111111111111111111111111111111111
                111111111111111111111111111111111111111111111111111111111ff1111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111
                111111fffff1ff1111111f11111ff111111111ff1111111fffffff111ffffffff11111111111ffffff111111ff11ff1111ff111111fffffffff1111111111111ff1111111ff111ff1111111111111111
                111111fffff1ff1111111f11111ff111111111ff1111111fffffff111ffffffff11111111111ffffff111111ff11ff1111ff111111fffffffff1111111111111ff1111111ff111ff1111111111111111
                1111111111f1ff11fffffffff11ff1111111ffff1fff11f111f11ff11ff111ff1111111111111111111ff1fffff11ff1ffff1fff1111111f111111ffff1111ffff1fff11f111111ff111111111111111
                1111111ffff1ff11111111ff11f1111111111ff1111ff1f111f11ff1f11111ff11fffffffff1ffffff1ff11ff11f1ff11ff1111ff11fffffff11fff111ff111ff1111ff1f1ffff111111111111111111
                111111f111ffff1111fffffff1f111111ff11ff1111111f1ff111ff1f11111ff1111111111111111111ff11ff11f1ff11ff111111111111f1111111111ff111ff1111111fff111ff1111111111111111
                111111f1fffffff1f1fffffff1f11111fff11ff1f11111f1ff111ff1f1111fff111111111111111111fff1fff11f1ff11ff1f11111ffffffff11111111ff111ff1f11111fff111ff1111111111111111
                111111f1ff11fff1f11111ff11f11111ff111ff1f11111f1ff111ff111111f11111111111111111111ff11f1111f11111ff1f11111ffffffff11111111ff111ff1f11111111111ff1111111111111111
                111111fff11f11111ffff111111fffff1111f1111ffff11ff111ff1111fff111111111111111ffffff1111f111f11111f1111ffff11fffff1ff111ffff1111f1111ffff11fffff111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                11111111111f1ff1111111111111111f1ff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                111111111111111111ffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111f1111111ffff11111ff111111111ff111ff11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111f1111111111111111ff111111111ff111ff11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                11111111fffffff11fffffff111ff1111111ffffff1ff11ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111ff1111111f111111ff1f11111111111ff111111f11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                111111f1111111111111111ff1f111111ff11fffffff11f111111ff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                111111f1111111111111111ff1f11111fff1fffffffff1f11111fff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                111111f1111111111111111ff1f11111ff11f1ff111ff1f11111ff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111ffffffff111ffffff111fffff11111fff11ff111fffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                11111111111111111111111111111111111111111111111111111111111111111111ff11111111111111111111111111111111111111ffff111111ffff11111111111111111111111111111111111111
                11111111ff111111111111fff111111f111111ff111111fffffffff111111f1111fffffffff111ff11111111ff111ff1fff111fff111ffff111111ffff11111111111111111111111111111111111111
                11111111ff111111111111fff111111f111111ff111111fffffffff111111f1111fffffffff111ff11111111ff111ff1fff111fff1111111111111ffff11111111111111111111111111111111111111
                111111ffff1fff111111ff1111fffffffff111ff1111111111f11111fffffffff11ff1111111ffff1fff11ffffff1ff11111ff11111fffffff1111ffff11111111111111111111111111111111111111
                1111111ff1111ff11fff111111111111ff111ff1ff111111ff111111111111ff111fffffff111ff1111ff111ff111111fffffffff1f111111ff111fff111111111111111111111111111111111111111
                1111111ff1111111f111111111111111ff111ff111ff111ff111111111fffffff1f111f11ff11ff11111111fffffff1111ff1111111111111ff111fff111111111111111111111111111111111111111
                1111111ff1f11111ffff111111f11111ff11fff111ff111ff1111111f1fffffff1f1fff11ff11ff1f11111fffffffff11fff1111111111111ff111fff111111111111111111111111111111111111111
                1111111ff1f111111fff111111f111111111f11111ff111ff1111111f11111ff1111ff1111111ff1f11111f1ff111ff11ff11111111111111ff111111111111111111111111111111111111111111111
                111111f1111ffff11111ffff111fffffff11f11111fff111ffffff111ffff1111111fffffff1f1111ffff11fff11ff1111ffffff1111ffffff1111fff111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
                `)
            pause(200)
            pauseUntil(() => controller.anyButton.isPressed())
            start()
        }
    })
}
function sp_attack () {
    MP = MAX_MP
    if (!(is_bomb)) {
        steps = 10
        max_size = 2.5
        interval = BOMB_AIRTIME * 1000 / (steps * 2)
        diff = (max_size - 1) / steps
        if (MP >= MAX_MP) {
            music.play(music.createSoundEffect(
            WaveShape.Square,
            5000,
            2384,
            VOLUME,
            VOLUME * 0.5,
            BOMB_AIRTIME * 1000,
            SoundExpressionEffect.None,
            InterpolationCurve.Linear
            ), music.PlaybackMode.InBackground)
            bomb = sprites.create(img`
                . . . . . . . e c 7 . . . . . . 
                . . . . e e e c 7 7 e e . . . . 
                . . c e e e e c 7 e 2 2 e e . . 
                . c e e e e e c 6 e e 2 2 2 e . 
                . c e e e 2 e c c 2 4 5 4 2 e . 
                c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
                c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
                c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
                . e e e 2 2 2 2 2 2 2 2 2 4 e . 
                . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
                . . 2 e e 2 2 2 2 2 4 4 2 e . . 
                . . . 2 2 e e 4 4 4 2 e e . . . 
                . . . . . 2 2 e e e e . . . . . 
                `, SpriteKind.bomb)
            sprites.setDataNumber(bomb, "type", 3)
            sprites.setDataNumber(bomb, "power", 9999)
            MP = 0
            is_bomb = true
            tower_statusbar_mp.value = 0
            bomb.scale = 0.5
            bomb.setPosition(artillery.x, artillery.y)
            bomb.setVelocity((target.x - artillery.x) / BOMB_AIRTIME, (target.y - artillery.y) / BOMB_AIRTIME)
            timer.background(function () {
                for (let カウンター = 0; カウンター <= steps - 1; カウンター++) {
                    if (bomb) {
                        bomb.scale += diff
                        pause(interval)
                    }
                }
                for (let カウンター = 0; カウンター <= steps - 1; カウンター++) {
                    if (bomb) {
                        bomb.scale += diff * -1
                        pause(interval)
                    }
                }
                if (bomb) {
                    bomb.setKind(SpriteKind.Projectile)
                    music.play(music.createSoundEffect(
                    WaveShape.Noise,
                    935,
                    847,
                    VOLUME,
                    VOLUME * 0.5,
                    500,
                    SoundExpressionEffect.None,
                    InterpolationCurve.Linear
                    ), music.PlaybackMode.InBackground)
                    scene.cameraShake(4, 500)
                    bomb.setVelocity(0, 0)
                    animation.runImageAnimation(
                    bomb,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . 4 5 5 4 . . . . . . 
                        . . . . . . 2 5 5 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . 4 . . . . . 
                        . . . . 2 . . . . 4 4 . . . . . 
                        . . . . 2 4 . . 4 5 4 . . . . . 
                        . . . . . 2 4 d 5 5 4 . . . . . 
                        . . . . . 2 5 5 5 5 4 . . . . . 
                        . . . . . . 2 5 5 5 5 4 . . . . 
                        . . . . . . 2 5 4 2 4 4 . . . . 
                        . . . . . . 4 4 . . 2 4 4 . . . 
                        . . . . . 4 4 . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . 3 . . . . . . . . . . . 4 . . 
                        . 3 3 . . . . . . . . . 4 4 . . 
                        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
                        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
                        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
                        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
                        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
                        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
                        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
                        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
                        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
                        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
                        . 4 4 d d 4 d d d 4 3 d d 4 . . 
                        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
                        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
                        . 4 4 . . . . . . . . . . 4 4 . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . b b . b b b . . . . . 
                        . . . . b 1 1 b 1 1 1 b . . . . 
                        . . b b 3 1 1 d d 1 d d b b . . 
                        . b 1 1 d d b b b b b 1 1 b . . 
                        . b 1 1 1 b . . . . . b d d b . 
                        . . 3 d d b . . . . . b d 1 1 b 
                        . b 1 d 3 . . . . . . . b 1 1 b 
                        . b 1 1 b . . . . . . b b 1 d b 
                        . b 1 d b . . . . . . b d 3 d b 
                        . b b d d b . . . . b d d d b . 
                        . b d d d d b . b b 3 d d 3 b . 
                        . . b d d 3 3 b d 3 3 b b b . . 
                        . . . b b b d d d d d b . . . . 
                        . . . . . . b b b b b . . . . . 
                        `],
                    150,
                    false
                    )
                    bomb.scale = 5
                    timer.after(450, function () {
                        sprites.destroy(bomb)
                        is_bomb = false
                    })
                }
            })
        }
    }
}
function enemy_theta (mySprite: Sprite, hp: number, x: number, y: number) {
    mySprite.setPosition(x, y)
    dx = tower2.x - mySprite.x
    dy = 110
    theta = Math.atan2(dy, dx)
}
// y = x ^ n
function pow (x: number, n: number) {
    _return = 1
    for (let index = 0; index < n; index++) {
        _return = x * _return
    }
}
let bomb: Sprite = null
let diff = 0
let interval = 0
let max_size = 0
let steps = 0
let is_bomb = false
let difficulty_menu: Sprite = null
let start_menu: Sprite = null
let enemy2: Sprite = null
let tower_statusbar_hp: StatusBarSprite = null
let enemy1: Sprite = null
let tmp2 = 0
let tmp1 = 0
let spreadTheta = 0
let child: Sprite = null
let BOMB_AIRTIME = 0
let BULLET2_ATTACK = 0
let JITTER_AMP = 0
let ENEMY32_SPEED = 0
let ENEMY2_POINT = 0
let ENEMY2_HP = 0
let ENEMY1_POINT = 0
let ENEMY1_SPEED = 0
let ENEMY1_HP = 0
let difficulty = 0
let BULLET1_SPEED = 0
let bullet1: Sprite = null
let MAX_MP = 0
let TOWER_MAXHP = 0
let tower_hp = 0
let tower2: Sprite = null
let freq = 0
let game_state = 0
let output_list: Sprite[] = []
let abs_dx = 0
let currentDY = 0
let currentDX = 0
let sinA = 0
let cosA = 0
let ENEMY2_AMP = 0
let wave = 0
let ENEMY2_T = 0
let rad = 0
let ENEMY2_SPEED = 0
let dist = 0
let t = 0
let lastY = 0
let lastX = 0
let enemy2_list: Sprite[] = []
let dy = 0
let dx = 0
let BULLET2_MIN = 0
let VOLUME = 0
let dummy_bullet: Sprite = null
let _return = 0
let BULLET2_POWER = 0
let BULLET2_SPEED = 0
let bullet2: Sprite = null
let bullet2_size = 0
let artillery: Sprite = null
let target: Sprite = null
let bullet2_fired = false
let heart2: Sprite = null
let hearts: Sprite[] = []
let tower_statusbar_mp: StatusBarSprite = null
let MP = 0
let BULLET1_ATTACK = 0
let enemy_statusbar: StatusBarSprite = null
let ENEMY31_SPEED = 0
let enemy3_list: Sprite[] = []
let ENEMY3_POINT = 0
let theta = 0
let ENEMY32_HP = 0
let y0 = 0
let x0 = 0
let ENEMY31_HP = 0
let enemy3: Sprite = null
gamestart()
game.onUpdate(function () {
    if (game_state == 1) {
        enemy3_update()
        if (tower_hp < 0) {
            game_state = -1
            game.setGameOverMessage(false, "GAME OVER!")
            game.gameOver(false)
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (game_state == 1) {
        list_update(enemy2_list)
        enemy2_list = output_list
        list_update(enemy3_list)
        enemy3_list = output_list
    }
})
forever(function () {
    enemy1_appear()
    pause(500)
})
game.onUpdateInterval(100, function () {
    if (game_state == 1) {
        if (bullet2_size < 2) {
            if (controller.B.isPressed() && !(bullet2_fired)) {
                bullet_theta(target, artillery)
                dummy_bullet.rotation = theta
                bullet2_size += 0.05
                dummy_bullet.setScale(bullet2_size, ScaleAnchor.Middle)
                music.play(music.createSoundEffect(
                WaveShape.Square,
                freq,
                freq + 50,
                VOLUME + 400,
                VOLUME + 400,
                100,
                SoundExpressionEffect.Tremolo,
                InterpolationCurve.Linear
                ), music.PlaybackMode.InBackground)
                freq += 50
            }
        } else {
            fire_bullet2()
        }
    }
})
