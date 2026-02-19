# Temperature

## Description
Temperature is a mechanic based on the biome temperature and affects the gameplay.

### Core Mechanic: Heat & Cold
The mod tracks a "Body Temperature" value for the [player](https://minecraft.wiki/w/Player). This value shifts based on the environment and current [equipment](https://minecraft.wiki/w/Equipment). Depending on the body temperature, several [status effects](https://minecraft.wiki/w/Effect) will affect the [player](https://minecraft.wiki/w/Player).

- Normal (0): The player is comfortable; no effects.
- Cold/Hot: Minor debuffs begin (e.g., slower movement or mining).
- Very Cold: The player begins taking periodic damage and begins to shake.
- Very Hot: The player begins to drastically drain [hydration](/wiki/mods/Dehydration/Mechanic/) or [hunger](https://minecraft.wiki/w/Hunger) (if the Dehydration mod is not loaded) and the vision starts to blur.

### Environmental Factors
The ambient temperature is influenced by several variables:

- Biomes: Each biome has a base temperature. Snowy biomes and the End are naturally "Very Cold," while Deserts and the Nether are "Very Hot."
- Time of Day: Temperatures drop at night and peak during the day.
- Weather: Rain and snow significantly lower the temperature. Being wet (from rain or swimming) also increases the rate at which you lose body heat.
- Height: Being at high altitudes (mountains) is colder than being at sea level.
- Proximity to Blocks: Standing near "Heat Sources" (Campfires, Torches, Lava, Magma) provides warmth. Standing near "Cooling Sources" (Ice, Packed Ice, Blue Ice) helps lower body temperature.

![temperature](/wiki/assets/environmentz/mechanic/temperature.png){ loading=lazy }

### Protection & Mitigation
- Insulated Armor: Players can craft "Insulated" versions of armor (often using wool or leather). This provides "Cold Protection," allowing the player to stay in snowy biomes longer without freezing.
- Armor Weight/Material: Heavy metal armor (like Iron or Diamond) typically makes you overheat faster in hot biomes. In the desert, removing armor or wearing lighter gear can help keep you cool.
- The Sun & Shade: In hot biomes, standing in the shade (under blocks or trees) will prevent your temperature from rising as quickly as it would in direct sunlight.
- Items:
  - Ice Pack: A craftable item that can be held or kept in the inventory to provide a cooling effect in hot climates.
  - Heating Stones: Another craftable item that will increase the body temperature as long as they are warm.
