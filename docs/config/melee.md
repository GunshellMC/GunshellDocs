# Melee Config

## Builtin Configuration
This is the builtin configuration for the melee config directory.

```yaml
karambit:
  name: "&9Karambit"
  lore:
    - '&6Officieel Minetopia Wapen.'
    - ''
    - '&7Durability: &f<Durability>'
  material: GOLD_SWORD
  nbt:
    key: "mtcustom"
    value: "knife1"
  damage: 6
  cooldown: 1
  grabCooldown: 1
  actionType: DAMAGE
lama_pickaxe:
  name: "&9Lama Pickaxe"
  lore:
    - '&6Officieel Minetopia Wapen.'
    - ''
    - '&7Durability: &f<Durability>'
  material: GOLD_SWORD
  nbt:
    key: "mtcustom"
    value: "lama_pickaxe"
  damage: 5
  cooldown: 1
  grabCooldown: 1
  actionType: DAMAGE
knuppel_birch:
  name: "&9Knuppel Birch"
  lore:
    - '&6Officieel Minetopia Wapen.'
    - ''
    - '&7Durability: &f<Durability>'
  material: FERMENTED_SPIDER_EYE
  nbt:
    key: "mtcustom"
    value: "knuppel_birch"
  damage: 6
  cooldown: 1
  grabCooldown: 1
  actionType: DAMAGE
zakmes:
  name: "&9Zakmes"
  lore:
    - '&6Officieel Minetopia Wapen.'
    - ''
    - '&7Durability: &f<Durability>'
  material: WOODEN_SWORD
  nbt:
    key: "mtcustom"
    value: "zakmes"
  damage: 5
  cooldown: 1
  grabCooldown: 1
  actionType: DAMAGE
boksbeugel:
  name: "&9Boksbeugel"
  lore:
    - '&6Officieel Minetopia Wapen.'
    - ''
    - '&7Durability: &f<Durability>'
  material: WOODEN_SWORD
  nbt:
    key: "mtcustom"
    value: "boksbeugel"
  damage: 4
  cooldown: 1
  grabCooldown: 1
  actionType: DAMAGE
```

## name
**Type:** ``STRING``\
**Explaination:** This is the name of the melee item.

## lore
**Type:** ``LIST``\
**Explaination:** This is the lore of the melee item.

## hideItemFlags
**Type:** ``BOOLEAN``\
**Default:** ``true``\
**Explaination:** This is a boolean that determines if the item should be hidden.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Explaination:** This is the material of the melee item.

## nbt.key
**Type:** ``STRING``\
**Explaination:** This is the key of the nbt tag.

## nbt.value
**Type:** ``STRING``\
**Explaination:** This is the value of the nbt tag.

## customModelData
**Type:** ``INTEGER``\
**Explaination:** This is the custom model data of the melee item.

## damage
**Type:** ``INTEGER``\
**Explaination:** This is the damage the melee item does.

## cooldown
**Type:** ``DOUBLE``\
**Explaination:** This is the cooldown of the melee item. This is in seconds.

## grabCooldown
**Type:** ``DOUBLE``\
**Explaination:** This is the cooldown of the melee item when it is grabbed. This is in seconds.

## actionType
**Type:** ``STRING``\
**Explaination:** This is the action type of the melee item.\
**Values:** [DAMAGE](https://github.com/Jazzkuh/Gunshell/blob/master/src/main/java/com/jazzkuh/gunshell/api/enums/BuiltinMeleeActionType.java)