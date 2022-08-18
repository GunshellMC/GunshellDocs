# Ammunation Config

## Builtin Configuration
This is the builtin configuration for the ammunition config directory.

```yaml
revolver_ammo:
  name: '&8Revolver Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 5
  actionType: DAMAGE
deserteagle_ammo:
  name: '&8Desert Eagle Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 5
  actionType: DAMAGE
awg_ammo:
  name: '&8AWG Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 15
  actionType: DAMAGE
awp_ammo:
  name: '&8AWP Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 3
  actionType: DAMAGE
ballista_ammo:
  name: '&8Ballista Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 8
  actionType: DAMAGE
barett50_ammo:
  name: '&8Barett50 Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 4
  actionType: DAMAGE
fad_ammo:
  name: '&8FAD Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 18
  actionType: DAMAGE


magnum44_ammo:
  name: '&8Magnum44 Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 8
  actionType: DAMAGE
waltherp99_ammo:
  name: '&8Walterp99 Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 10
  actionType: DAMAGE
glock19_ammo:
  name: '&8Glock19 Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 10
  actionType: DAMAGE
mk14_ammo:
  name: '&8MK14 Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 3
  actionType: DAMAGE
barret50_ammo:
  name: '&8Barret50 Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 4
  actionType: DAMAGE
m16a4_ammo:
  name: '&8M16A4 Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 15
  actionType: DAMAGE
m1a_ammo:
  name: '&8M1A Ammo'
  lore:
    - '&6Officieel Minetopia Ammo.'
    - ''
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  nbt:
    key: mtcustom
    value: revolver_bullets
  ammo: 15
  actionType: DAMAGE
```

## name
**Type:** ``STRING``\
**Explanation:** This is the name of the ammunition item.

## lore
**Type:** ``LIST``\
**Explanation:** This is the lore of the ammunition item.

## hideItemFlags
**Type:** ``BOOLEAN``\
**Default:** ``true``\
**Explanation:** This is a boolean that determines if the item should be hidden.

## material
**Type:** [``MATERIAL``](https://github.com/CryptoMorin/XSeries/blob/master/src/main/java/com/cryptomorin/xseries/XMaterial.java) \
**Explanation:** This is the material of the ammunition item.

## nbt.key
**Type:** ``STRING``\
**Explanation:** This is the key of the nbt tag.

## nbt.value
**Type:** ``STRING``\
**Explanation:** This is the value of the nbt tag.

## customModelData
**Type:** ``INTEGER``\
**Explanation:** This is the custom model data of the ammunition item.

## ammo
**Type:** ``INTEGER``\
**Explanation:** This is the amount of ammo that is given to a weapon.

## actionType
**Type:** ``STRING``\
**Explanation:** This is the action type of the ammunition item.\
**Values:** [DAMAGE](https://github.com/Jazzkuh/Gunshell/blob/master/src/main/java/com/jazzkuh/gunshell/api/enums/BuiltinAmmoActionType.java)