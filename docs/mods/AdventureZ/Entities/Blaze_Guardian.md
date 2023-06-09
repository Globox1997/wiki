# Blaze Guardian
<div class="combi" markdown>
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
<div>
<img src="../../../../assets/adventurez/entities/blaze_guardian.png" loading="lazy" />
</div>
</div>

## Story

*He is the guardian of all blazes and he will defend blaze spawners & blazes from players until his death.*

---

## Behavior

He is hostile and will attack you from far away or close range.  
Blaze spawners are deactivated if a **blaze guardian** is nearby.

* **Melee:** sprinkles flames around him
* **Range:** shoots fireballs at players which deal 5 damage & 5s flame
* **Protection:** his surrounding shield can get destroyed with melee weapons
* **Special:** after a few moments a strong explosion occurs

## Command
???+ bug "Shield not showing -> Relog into the world"
    === "Summon"
        ```mcfunction
        /summon adventurez:blaze_guardian
        ```