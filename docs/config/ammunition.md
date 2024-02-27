# Ammunation Config

## Builtin Configuration
This is the builtin configuration for the ammunition config directory.

```yaml
deserteagle_ammo:
  name: '&8Desert Eagle Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 7
  actionType: DAMAGE

huntingrifle_ammo:
  name: '&8Hunting Rifle Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 5
  actionType: DAMAGE

doublebarreledshotgun_ammo:
  name: '&8Double-Barreled Shotgun Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 2
  actionType: DAMAGE

taser_ammo:
  name: '&8Taser Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 1
  actionType: DAMAGE

glock_ammo:
  name: '&8Glock Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 15
  actionType: DAMAGE

mk7_ammo:
  name: '&8MK7 Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 20
  actionType: DAMAGE

mp7a1_ammo:
  name: '&8MP7-A1 Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 30
  actionType: DAMAGE

mcx_ammo:
  name: '&8MCX Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 25
  actionType: DAMAGE

m58b_ammo:
  name: '&8M58B Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 20
  actionType: DAMAGE

m47d1_ammo:
  name: '&8M47D1 Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 20
  actionType: DAMAGE

g36c_ammo:
  name: '&8G36C Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 30
  actionType: DAMAGE

mk18_ammo:
  name: '&8MK18 Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 25
  actionType: DAMAGE

m1911_ammo:
  name: '&8M1911 Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 10
  actionType: DAMAGE

mk2_ammo:
  name: '&8MK2 Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 10
  actionType: DAMAGE

g45_ammo:
  name: '&8G45 Ammo'
  lore:
    - '&7Ammo: &f<Ammo>'
  material: IRON_INGOT
  ammo: 12
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
