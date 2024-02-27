# Melee Config

## Builtin Configuration
This is the builtin configuration for the melee config directory.

```yaml
machete:
  name: "&9Machete"
  lore:
    - '&7Durability: &f<Durability>'
  material: WOODEN_HOE
  customModelData: 1
  damage: 6
  cooldown: 1
  grabCooldown: 1
  actionType: DAMAGE
knife:
  name: "&9Knife"
  lore:
    - '&7Durability: &f<Durability>'
  material: WOODEN_HOE
  customModelData: 2
  damage: 5
  cooldown: 1
  grabCooldown: 1
  actionType: DAMAGE
```

## name
**Type:** ``STRING``\
**Explanation:** This is the name of the melee item.

## lore
**Type:** ``LIST``\
**Explanation:** This is the lore of the melee item.

## hideItemFlags
**Type:** ``BOOLEAN``\
**Default:** ``true``\
**Explanation:** This is a boolean that determines if the item should be hidden.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Explanation:** This is the material of the melee item.

## nbt.key
**Type:** ``STRING``\
**Explanation:** This is the key of the nbt tag.

## nbt.value
**Type:** ``STRING``\
**Explanation:** This is the value of the nbt tag.

## customModelData
**Type:** ``INTEGER``\
**Explanation:** This is the custom model data of the melee item.

## damage
**Type:** ``INTEGER``\
**Explanation:** This is the damage the melee item does.

## cooldown
**Type:** ``DOUBLE``\
**Explanation:** This is the cooldown of the melee item. This is in seconds.

## grabCooldown
**Type:** ``DOUBLE``\
**Explanation:** This is the cooldown of the melee item when it is grabbed. This is in seconds.

## actionType
**Type:** ``STRING``\
**Explanation:** This is the action type of the melee item.\
**Values:** [DAMAGE](https://github.com/Jazzkuh/Gunshell/blob/master/src/main/java/com/jazzkuh/gunshell/api/enums/BuiltinMeleeActionType.java)
