# Ammunation Config

## Builtin Configuration
This is the builtin configuration for the ammunition config directory.

```yaml
# DEFAULT CONFIGURATION
```

## name
**Type:** ``STRING``\
**Explaination:** This is the name of the ammunition item.

## lore
**Type:** ``LIST``\
**Explaination:** This is the lore of the ammunition item.

## hideItemFlags
**Type:** ``BOOLEAN``\
**Default:** ``true``\
**Explaination:** This is a boolean that determines if the item should be hidden.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Explaination:** This is the material of the ammunition item.

## nbt.key
**Type:** ``STRING``\
**Explaination:** This is the key of the nbt tag.

## nbt.value
**Type:** ``STRING``\
**Explaination:** This is the value of the nbt tag.

## customModelData
**Type:** ``INTEGER``\
**Explaination:** This is the custom model data of the ammunition item.

## ammo
**Type:** ``INTEGER``\
**Explaination:** This is the amount of ammo that is given to a weapon.

## actionType
**Type:** ``STRING``\
**Explaination:** This is the action type of the ammunition item.\
**Values:** [DAMAGE](https://github.com/Jazzkuh/Gunshell/blob/master/src/main/java/com/jazzkuh/gunshell/api/enums/BuiltinAmmoActionType.java)