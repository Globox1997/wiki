# General notes

Add the following meta on top of every page with the right info
```
---
title: AdventureZ
project: adventurez
summary: adventurez wiki
---
```
### Render
1000 pixel resolution + Modelfix mod
Render items use Wiki preset (Rotation: 335, Slant: 8) 
Render blocks use dimetric preset (Rotation: 135, Slant: 30) 
Render entities use dimetric preset (Rotation: 135, Slant: 30), fit scale and position to screen (use red help lines)

### Entities
- Meta
- Title
- Box
  - ID
  - Health Points
  - Armor Points
  - Attack Damage
  - Projectile Damage
    - Special Attacks
  - Spawn
  - Drops
  - Type (Boss)
  - Behavior
- Story
- Behavior
- Commands
- Trivia
  
### Items
- Meta
- Title
- Box
  - Id
  - Rarity
  - Durability
  - Renewable
  - Stackable
  - Restores
- Description
- Obtaining
  - Crafting
  - Mob Loot
  - Trading
- Usage
- Trivia

### Blocks


### Random

#### Example Recipe
`Types:  vanilla_crafting; smithing; furnace_smelting; anvil; fletching; brewing;`
```md
<div id="crafting-table">
<div class="crafting-element" crafting-type="vanilla_crafting">
input[ 3=ender_pearl, Ender Pearl, https://minecraft.wiki/w/Ender_Pearl; 5=stick, Stick, https://minecraft.wiki/w/Stick; 7=ender_pearl, Ender Pearl, https://minecraft.wiki/w/Ender_Pearl ]
output[adventurez:ender_flute, Ender Flute]
</div>
</div>
```
