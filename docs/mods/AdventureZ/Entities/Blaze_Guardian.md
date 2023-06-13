# Blaze Guardian
<div class="combi">
<div class="divthing">
<table class="tablething">
    <tbody>
        <tr>
            <td class="first-column">ID</td>
            <td class="second-column">
            ```
            adventurez:blaze_guardian
            ```
            </td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Health Points</td>
            <td class="second-column">40</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Attack Strength</td>
            <td class="second-column">9</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Fireball Damage</td>
            <td class="second-column">5<br>5s Flame</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Fire Explosion</td>
            <td class="second-column">60</td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Spawn</td>
            <td class="second-column"><a href="https://minecraft.fandom.com/wiki/Nether_Fortress" target="_blank">Nether Fortress</a><br><a href="https://minecraft.fandom.com/wiki/Nether_Wastes" target="_blank">Nether Wastes</a></td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Drops</td>
            <td class="second-column">0 - 1 <a href="https://minecraft.fandom.com/wiki/Blaze_Rod" target="_blank">Blaze Rod</a></td>
        </tr>
        <tr id="linear-top">
            <td class="first-column">Behavior</td>
            <td class="second-column">Hostile</td>
        </tr>
    </tbody>
</table>
</div>
<div class="div-img-center">
<img src="../../../../assets/adventurez/entities/blaze_guardian.png" loading="lazy" />
</div>
</div>

## Story

*The Blaze Guardian is the defender of all blazes, safeguarding both blaze spawners and the blazes themselves from players until its demise.*

---

## Behavior

The Blaze Guardian is hostile and attacks players from both close and long distances. Additionally, its presence deactivates nearby blaze spawners.

* **Melee:** The Blaze Guardian emanates swirling flames around itself, creating a dangerous veil of fire.
* **Range:** From a distance, the Blaze Guardian launches fireballs at players, dealing 5 points of damage and igniting them for 5 seconds with a searing flame.
* **Shielding:** The Blaze Guardian is shielded, but this protection can be broken by attacking it with melee weapons.
* **Special:** After a brief delay, the Blaze Guardian unleashes a formidable explosion, amplifying the intensity of the battle.

## Command
???+ bug "Shield not showing -> Relog into the world"
    === "Summon"
        ```mcfunction
        /summon adventurez:blaze_guardian
        ```