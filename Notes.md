# General notes

How to start localhost dev:
type in the terminal the following:
mkdocs serve

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

### Mod Page
- Meta
- Sidebar JS
- Banner
- Showcase
- Description
- Commands
- Misc
- Dependencies

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
  - Drops (XP: Animal: 1 + nextInt(3); Hostile: 5)
  - Type (Boss)
  - Behavior
- Story *Kursiv*
- ---
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
  - Loot
  - Trading
- Usage
- Trivia

### Blocks
- Meta
- Title
- Box
  - Id
  - Renewable
  - Blast Resistance
  - Hardness
  - Luminous
  - Transparent
  - Waterloggable
  - Flammable
- Description
- Obtaining
  - Crafting
  - Loot
  - Trading
- Usage
- Trivia

### Structures
- Meta
- Title
- Box
  - Id
  - Dimension
  - Biome
- Description
- Generation

### Enchantments
- Meta
- Title
- Box
  - Id
  - Level
  - Primary Items
  - Enchantment Weight
- Description
- Obtaining
  - Loot
- Usage
- Commands

### Random

#### Example Recipe
`Types:  vanilla_crafting; smithing; furnace_smelting; anvil; fletching; brewing; stonecutting;`
```md
<div id="crafting-table">
<div class="crafting-element" crafting-type="vanilla_crafting">
input[ 3=ender_pearl, Ender Pearl, https://minecraft.wiki/w/Ender_Pearl; 5=stick, Stick, https://minecraft.wiki/w/Stick; 7=ender_pearl, Ender Pearl, https://minecraft.wiki/w/Ender_Pearl ]
output[adventurez:ender_flute, Ender Flute]
</div>
</div>
```
