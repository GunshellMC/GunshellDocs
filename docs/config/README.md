# Config

::: danger
Werkt jouw config niet? Probeer eerst [dit](http://www.yamllint.com/) voordat je de support discord joined en om hulp vraagt.
:::

## Globale config opties
Hier vind je de uitleg van alle globale opties die mogelijk zijn en toegepast worden op **ALLE** wapens.
### Empty sound
Hier kan je het geluid instellen wat wordt afgespeeld als jouw wapen leeg is. Deze optie word aangeduid in de config via ``empty-sound``. Wil je geen geluid? Zet deze optie op ``none``.
### Weapon cooldown per weapon
Hiermee kan je toevoegen of je met meerdere wapens kan "scrollen". Zet op true om dit in te schakelen, dit staat standaard uit! Deze optie word aangeduid in de config via ``weaponCooldownPerWeapon``

## Wapen config opties
Hier vind je de uitleg van opties die je per wapen kan aanpassen/toevoegen, de meesten spreken voor zich maar de wat lasterigere hebben wij hieronder uitgelegd.
### Scope *(optioneel)*
Door deze optie op ``true`` te zetten kan je via left-click met een wapen scopen. Dit staat standaard op ``false``! Deze optie word aangeduid in de config via ``scope``
### Scope size *(optioneel)*
Hiermee kan je de zoom van de scope van een wapen aanpassen. Dit staat standaard op ``8`` en kan een variable integer zijn van ``0`` tot ``255``. Deze optie word aangeduid in de config via ``scope-size``
### Can only shoot when scoped *(optioneel)*
Door deze optie op ``true`` te zetten kan je alleen nog maar schieten met dit wapen wanneer je aan het scopen bent. Dit staat standaard op ``false``! Deze optie word aangeduid in de config via ``canOnlyShootWhenScoped``
### Disable durability *(optioneel)*
Door deze optie op ``true`` te zetten gaat er geen durability van een wapen af als je ermee schiet. Dit staat standaard op ``false``! Deze optie word aangeduid in de config via ``disable-durability``




## Default config

```yml
empty-sound: weapons.gunempty
weaponCooldownPerWeapon: false
weapons:
  deserteagle:
    name: '&8Desert Eagle'
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: deserteagle_fullmodel
    sound: none
    reload-sound: none
    damage: 2.0
    max-ammo: 7
    attackspeed: 1.0
    ammo-type: deserteagle
  magnum44:
    name: '&8Magnum 44'
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: magnum44_fullmodel
    sound: none
    reload-sound: none
    damage: 2.5
    max-ammo: 8
    attackspeed: 1.0
    ammo-type: magnum44
  waltherp99:
    name: '&8Walther P99'
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: waltherp99_fullmodel
    sound: none
    reload-sound: none
    damage: 3.0
    max-ammo: 10
    attackspeed: 1.0
    ammo-type: waltherp99
  glock19:
    name: '&8Glock 19'
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: glock19_fullmodel
    sound: none
    reload-sound: none
    damage: 3.3
    max-ammo: 10
    attackspeed: 1.0
    ammo-type: glock19
  m16a4:
    name: '&8M16A4'
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: WOOD_HOE
    nbt: mtcustom
    nbtvalue: m16a4_fullmodel
    sound: none
    reload-sound: none
    damage: 3.7
    max-ammo: 25
    attackspeed: 1.0
    ammo-type: m16a4
ammo:
  deserteagle:
    name: 'Desert Eagle Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: deserteagle_bullets
  magnum44:
    name: 'Magnum 44 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: magnum44_bullets
  waltherp99:
    name: 'Walther P99 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: waltherp99_bullets
  glock19:
    name: 'Glock 19 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: glock19_bullets
  m16a4:
    name: 'M16A4 Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: m16a4_bullets

```

## Messages config
```yml
Weapons:
  NoAmmo: '&cOut of ammo!'
  Durability: '&9Durability: &a<Durability>'
  Ammo: '&9Ammo: &a<Ammo>&f/&c<MaxAmmo>'
  Reloading:
    Message: '&eReloading...'
    Title: '&eReloading...'
    Subtitle: '&7Clickerdy click.'
  Menu:
    Durability:
      Remove: '&c<Identifier><Durability> Durability'
      Add: '&a<Identifier><Durability> Durability'
      Craft: '&aCraft Weapon: &2<Durability> &aDurability'
      Title: Weapon Builder <WeaponType>
    Weapon:
      Title: Weapon Menu
      Buttons:
        Close: '&cClose'
        Page: '&aPage <Page>'
  menu:
    Ammo:
      Title: Ammo Menu
    Switcher: '&aSwitch to &2<Menu>'
  CanShootWithoutScope: '&cSorry bro, no 360 noscope for you...'
```