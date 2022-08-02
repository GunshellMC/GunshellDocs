# Throwables Config

## Builtin Configuration
This is the builtin configuration for the throwable config directory.

```yaml
# DEFAULT CONFIGURATION
```

## name
**Type:** ``STRING``\
**Explaination:** This is the name of the throwable item.

## lore
**Type:** ``LIST``\
**Explaination:** This is the lore of the throwable item.

## hideItemFlags
**Type:** ``BOOLEAN``\
**Default:** ``true``\
**Explaination:** This is a boolean that determines if the item should be hidden.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Explaination:** This is the material of the throwable item.

## nbt.key
**Type:** ``STRING``\
**Explaination:** This is the key of the nbt tag.

## nbt.value
**Type:** ``STRING``\
**Explaination:** This is the value of the nbt tag.

## customModelData
**Type:** ``INTEGER``\
**Explaination:** This is the custom model data of the throwable item.

## damage
**Type:** ``INTEGER``\
**Explaination:** This is the damage the throwable does.

## range
**Type:** ``INTEGER``\
**Explaination:** This is the range of the throwable.

## fuseTime
**Type:** ``INTEGER``\
**Explaination:** This is the fuse time of the throwable. This is in seconds.

## cooldown
**Type:** ``DOUBLE``\
**Explaination:** This is the cooldown of the throwable. This is in seconds.

## knockbackAmount
**Type:** ``INTEGER``\
**Explaination:** This is the knockback amount the throwable does to its victims.

## actionType
**Type:** ``STRING``\
**Explaination:** This is the action type of the throwable item.\
**Values:** [EXPLOSIVE, FLASHBANG, MOLOTOV](https://github.com/Jazzkuh/Gunshell/blob/master/src/main/java/com/jazzkuh/gunshell/api/enums/BuiltinThrowableActionType.java)