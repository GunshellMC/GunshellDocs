# Melee Config

## Builtin Configuration
This is the builtin configuration for the melee config directory.

```yaml
# DEFAULT CONFIGURATION
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