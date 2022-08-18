# Throwables Config

## Builtin Configuration
This is the builtin configuration for the throwable config directory.

```yaml
grenade:
  name: "&9Grenade"
  lore:
    - '&6Officieel Minetopia Wapen'
  material: IRON_INGOT
  nbt:
    key: "mtcustom"
    value: "grenade_3"
  damage: 16
  range: 5
  fuseTime: 4
  cooldown: 5
  knockbackAmount: 0.5
  actionType: EXPLOSIVE
molotov:
  name: "&cMolotov"
  lore:
    - '&6Officieel Minetopia Wapen'
  material: IRON_INGOT
  nbt:
    key: "mtcustom"
    value: "grenade_1"
  fuseTime: 2
  cooldown: 5
  actionType: MOLOTOV
  options:
    duration: 3
flashbang:
  name: "&9Flashbang"
  lore:
    - '&6Officieel Minetopia Wapen'
  material: IRON_INGOT
  nbt:
    key: "mtcustom"
    value: "grenade_4"
  range: 4
  fuseTime: 2
  cooldown: 5
  actionType: FLASHBANG
  options:
    duration: 10
    amplifier: 1

dev_credit:
  name: "&5Dev Credit"
  lore:
    - '&6Officieel Minetopia Wapen'
  material: REDSTONE_TORCH
  range: 6
  fuseTime: 4
  cooldown: 5
  knockbackAmount: 0.5
  actionType: END_CREDITS
dev_credit2:
  name: "&5Dev Credit (Demo Menu)"
  lore:
    - '&6Officieel Minetopia Wapen'
  material: REDSTONE_TORCH
  range: 6
  fuseTime: 4
  cooldown: 5
  knockbackAmount: 0.5
  actionType: DEMO_MENU
```

## name
**Type:** ``STRING``\
**Explanation:** This is the name of the throwable item.

## lore
**Type:** ``LIST``\
**Explanation:** This is the lore of the throwable item.

## hideItemFlags
**Type:** ``BOOLEAN``\
**Default:** ``true``\
**Explanation:** This is a boolean that determines if the item should be hidden.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Explanation:** This is the material of the throwable item.

## nbt.key
**Type:** ``STRING``\
**Explanation:** This is the key of the nbt tag.

## nbt.value
**Type:** ``STRING``\
**Explanation:** This is the value of the nbt tag.

## customModelData
**Type:** ``INTEGER``\
**Explanation:** This is the custom model data of the throwable item.

## damage
**Type:** ``INTEGER``\
**Explanation:** This is the damage the throwable does.

## range
**Type:** ``INTEGER``\
**Explanation:** This is the range of the throwable.

## fuseTime
**Type:** ``INTEGER``\
**Explanation:** This is the fuse time of the throwable. This is in seconds.

## cooldown
**Type:** ``DOUBLE``\
**Explanation:** This is the cooldown of the throwable. This is in seconds.

## knockbackAmount
**Type:** ``INTEGER``\
**Explanation:** This is the knockback amount the throwable does to its victims.

## actionType
**Type:** ``STRING``\
**Explanation:** This is the action type of the throwable item.\
**Values:** [EXPLOSIVE, FLASHBANG, MOLOTOV](https://github.com/Jazzkuh/Gunshell/blob/master/src/main/java/com/jazzkuh/gunshell/api/enums/BuiltinThrowableActionType.java)