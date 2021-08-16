# Custom Wapens

::: danger
Vaak zien wij dat een wapen niet werkt omdat de optie ``ammo-type`` ingevuld is met een waarde die niet bestaat, controleer dit goed!
:::

In MT-Wapens is het mogelijk om je eigen wapens toe te voegen via de [config](/config/). Om uit te leggen hoe dit werkt volgt hier een voorbeeld.

---

## Weapon

Het maken van een eigen wapen gaat als volgt. Je kopieert een van de wapens die gegenereerd worden in de config, daarna pas je de naam van het wapen aan en de statistieken naar jouw preferentie.

::: tip
Kijk [hier](https://cdn.jazzkuh.com/public/static/MC-MATERIALS-1-12-2.txt) voor een lijst met valide materials.
:::

```yaml
  voorbeeld:
    name: '&8Voorbeeld Pistool'
    lore:
      - ''
      - 'Minetopia - Officieel Minetopia Wapen'
      - ''
      - '&fAmmo: &7<Ammo>&f/&7<MaxAmmo>'
      - ''
    material: STICK
    nbt: mtcustom
    nbtvalue: voorbeeldpistool_fullmodel
    sound: none
    reload-sound: none
    damage: 2.0
    max-ammo: 27
    attackspeed: 1.0
    scope: true # Dit is optioneel, nu kan je linkermuisknop gebruiken om te scopen. Als je dit niet wilt haal je scope: true weg of zet je het op false.
    ammo-type: voorbeeld
```
Dit plak je dan onder het kopje ``weapons``. Lees verder om te zien hoe het ``ammo-type`` wordt gemaakt.

## Ammo
Zoals je ziet moet je ook een ammo-type opgeven, die staan onder het kopje ``ammo`` en die kan je ook zelf aanmaken. Hier een voorbeeld voor de ammo bij dit wapen:

```yaml
  voorbeeld:
    name: 'Voorbeeld Ammo'
    lore:
      - 'Minetopia - Officieel Minetopia Bullet'
    material: IRON_INGOT
    nbt: mtcustom
    nbtvalue: voorbeeld_bullets
```
Dit plak je dan onder het kopje ``ammo``.
