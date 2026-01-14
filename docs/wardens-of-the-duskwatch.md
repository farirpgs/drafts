---
title: Wardens of the Duskwatch
stylesheet:
  - output.css
  - https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=Crimson+Pro:wght@400;600&display=swap
css: |-
  .prose {
    font-family: 'Crimson Pro', serif;
  }
  .prose h1, .prose h2 {
    font-family: 'UnifrakturCook', cursive;
    font-weight: 700;
    letter-spacing: 0.01em;
  }
---

<!--

Writing Guidelines

- Use Pascal Case for all mechanical terms: Great Success, Bare Success, Draw, Vitae, Radiance, Complication, and so on.
- Use Pascal Case for creature types: Pallids, Thornmouths.
- When referencing an Action in text, use backticks like `Action Name`.
- Reserve the term Draw for the core resolution mechanic only. Use reveal when showing cards for tables, oracles, or random procedures.
- Write in third person only. Use the character, the player, or themselves. Never use you, your, or yourself.
- Use the Oxford comma in all lists.
- Avoid contractions. Write is not, do not, and cannot instead of isn't, don't, and can't.
- Never use em dashes. Use regular dashes, commas, or colons instead.
- Avoid the "X, not Y" or "X as Y, not Z" sentence structure. State what something is directly instead of contrasting it.
- List card suits in this order: Clubs, Spades, Diamonds, Hearts.
- Phrase Action outcomes using present participles (-ing verbs) directly after the result. Put mechanical effects first, then narrative flavor.
- Follow proper heading hierarchy. Never skip levels: h1 > h2 > h3 > h4. Each heading level must be nested under the previous level.

Action Format:

1. Heading: Use level 4 heading (####) with the Action name.
2. Trigger: Start with "When a character [does something], Draw+[Score]." Use "Draw+appropriate Score" if multiple Scores apply.
3. Score Options (if appropriate Score): Use a bullet list starting with "If the character acts..." followed by "- With [method]: Draw+[Score]." End with "- If nothing else applies: Draw+Fortune."
4. Situational Modifiers: Use a blockquote (>) with "If [favorable condition], take 1 Advantage. If [unfavorable condition], take 1 Disadvantage."
5. Resolution Intro: Add "Then, resolve the Action as follows:" before the outcomes.
6. Outcomes: Use a bullet list with the following format:
   - Radiant: "When the outcome is Radiant, the character [narrative flavor], [mechanical effect]."
   - Bright: "When the outcome is Bright, the character [narrative flavor], [mechanical effect]."
   - Dire: "When the outcome is Dire, the character [narrative flavor], and there is a Complication."
7. Complication Table (optional): Add "When the outcome is Dire, the player may reveal a card to help determine the nature of the Complication:" followed by a suit-based bullet list in Clubs, Spades, Diamonds, Hearts order.

Creature Format:

1. Heading: Use level 2 heading (##) with the creature name.
2. Stats: Use bold labels for **Strength**, **Weakness**, **Armor** (if applicable), and **Wants**.
3. Atmospheric Quote: Use a blockquote (>) with a short, evocative description that sets the tone.
4. Description: Write a short paragraph describing the creature's nature and behavior.

-->

<br/>
<br/>
<br/>

![Logo](./wardens-of-the-duskwatch.svg)

---

# Wardens of the Duskwatch

A penitent walks into the Derweald to cleanse their soul before they are lost and judged in the final reckoning.

## Foreword

What you are reading is the ashcan version of Wardens of the Duskwatch. The text is not 100% complete and its layout is unpolished. That said, this is still a full game and playable.

I wrote this for three reasons. First, like usual, I had a night where I could not sleep after getting a couple mechanic ideas and wanted to experiment with them. Second, I am working on a game called Chronicles of the Boundless which takes place in the same setting as this game, and I thought it could be fun to release a smaller game to let people explore the world solo prior to launching the Backerkit campaign which has already over 850 signups. Third, I am a big fan of the Empire of the Vampire book series, and as I started reading the third installment my wife started reading the first. I wanted a nice little system we could play coop to explore a similar world and themes.

The main difference between Chronicles of the Boundless and this game is that the setting information is more condensed, you are not playing the same types of characters, and the underlying system is very different. Chronicles of the Boundless is based on the Boundless system (boundless.farirpgs.com) while this one uses a card-based system with resource management and trigger-based actions, making it very accessible for solo and duet play.

If you like what you see, tell me about it at link.farirpgs.com/bluesky or contact me for feedback at link.farirpgs.com/contact.

Now, onto the game.

## Acknowledgements

Wardens of the Duskwatch leverages mechanics and inspiration from several excellent games and other media. Thank you to their authors.

- Cairn, by Yochai Gal.
- Ironsworn, by Shawn Tomkin.
- Diablo, by Blizzard Entertainment.
- Empire of the Vampire series, by Jay Kristoff.

# Setting

## Lightfall

The Derweald is a living rot: ancient, patient, and eternally hungry. Once a thriving forest, now its roots burrow through soil and soul alike, drinking memories and blood. What dies beneath its boughs does not rest. The dead rise again as Pallids: bark-bound, hollow-eyed, and mindless, thralls to spirits the Church of the One Light swore it vanquished centuries ago.

If the claiming comes swift as the wind, a rare few rise again with their minds still intact, cursed with gifts they never asked for and the forest's hooks buried deep in their thoughts. These creatures are power, hunger, and forever. Thornmouths, vile monsters wielding the forest's corruption and magic to mask their true face, appearing as they once were before their bodies started to rot and be claimed by the roots.

Eventually, all who bear the thorn's mark face the same fate: bend to the will of the forest, or die in struggle against its powers.

The Duskwatch hunts Thornmouths without mercy. Few are the Thornmouths compared to the Pallid husk thralls, and fewer still are those with the will to fight the Pull of the corruption within. The Order searches for these rare souls with resolve enough to resist, welcoming them into their ranks as Wardens. Once part of the order, its priests carve into their forearms with consecrated steel and pack the wounds with blessed salt until the flesh rises into knotted patterns. Body and soul become a battleground against the Pull.

Armed with blessed blades, the Wardens are sent back into the thorns to seek their absolution and cleanse the corruption.

## A Brief History

**There are no Gods**

- Spirits have crossed between realms since the first breaths of the world, feeding on the emotions of the living. Some once mistook them for gods. There are no gods.
- The Church of the One Light despised the spirits, calling them abominations. Driven by holy fury, they marched through the veiled gates to purge them from existence.
- When the spirits were slained, their arcane essence torn apart and scattered like leaves in a storm.

**Magic**

- The magical energy that spilled from the spirits seeped into every crack of the world, bleeding into soil, stone, and sky.
- Common folk harvested this power to craft humble charms, while scholars shaped it into incantations capable of bending reality itself.
- Fearing a loss of power, the Church declared the use of magic a divine right reserved for their order alone.
- Those who defied them were branded heretics, tortured, and executed beneath the radiant banners of the One Light.

**Spirits Cannot Die**

- Death has no hold on spirits. When the veil tore once more, it did so in the Derweald.
- Thorned vines and slick fungal growths erupted from the soil like a living plague.
- The oily roots consumed kingdoms and souls alike. As the fallen exhaled their final breath, their bodies warped into wooden husks bound by ancient wills. The Pallids
- The spirits walked the land once more, driving their Pallid armies against the last bastions of warmth and light.

**The Church's Desperation**

- So much of the realm was lost to the forest's embrace. Castles, cities, palaces, dungeons, villages all swallowed whole.
- The Church of the One Light claims dominion over the last bastions, but their power is built on lies. The highest clergy know there are no gods, yet wield faith as a weapon to control the desperate.
- In their desperation, the Church has become what they claimed to destroy, weaponizing corruption itself by binding cursed souls with salt and steel.
- The Wardens are proof of this hypocrisy: corrupted souls wielding the forest's gifts to fight the forest's will, while the Church condemns others for the same sins.

## Play to Find Out

The setting holds many unanswered questions:

- Why does the Church hate spirits? What happened during the war beyond the veiled gates?
- Where does the Church's power come from if there are no gods?
- What do spirits gain from feeding on emotions?
- Can the Derweald be stopped?
- Can Wardens truly get absolution??

## The Last Bastions

The Derweald has consumed much of the land. What remains:

**Kelmora (North)**

- An icy bay where the Barahl Clans once rode dragons as feared raiders. Now they fight for survival under The Iron Rule.
- They battle Ithril the Calamity, whose power turned their wyrms against them.
- The cold spared them from the Derweald's hold. Mostly. The frost is thinning, and the roots are coming.

**The Free Cities (West)**

- Velmoor is on the shores, struggling to feed the cities as the Derweald presses closer.
- Naranth starves as the sea grows empty and has countless refugees fleeing to Eslora, where the grand cathedral of the One Light stands.
- The Shattered Isles loom on the horizon as a warning of what is to come.

**The Mireroads (Heart)**

- Market towns trapped between the Derweald, the wild sea, and the jagged peaks of the Ashen Teeth.
- Old horrors have returned: trolls, goblins, ghouls. A land of famine, sickness, and rot.
- The Church's reach is weak here. New beliefs spreading fast.

# Getting Started

## What Is Needed

One standard deck of cards shared among the table, paper, and pencil. The game can be played solo, cooperatively without a Game Master (GM), or with a GM and one to four players.

Card values follow this scale: Aces count as 1, numbered cards use their normal value, and face cards are valued at 11 for Jacks, 12 for Queens, and 13 for Kings.

After a card has been used, place it in a discard pile. Whenever the deck runs empty, or when revealing a Joker, shuffle the discard pile to form a new deck.

## Safety

This game explores themes of death, corruption, and violence. Before play begins, discuss boundaries and comfort levels with all players. Establish what topics are off-limits or should be handled with care, and respect those limits without question. Any player may pause the game at any time to discuss comfort, adjust content, or step away from a scene. The goal is for everyone to have a meaningful experience without crossing into discomfort.

## Making a Character

Players take a piece of paper (this will act as their character sheet) and write their name on it. Then, follow these steps to create a character:

### 1. Choose a Background

To create a character, reveal a card and match its value to one of the 13 backgrounds below. Each background represents who the character was before they fell to the Derweald and rose again to eventually become Warden.

Each background includes suggested names, context about their former life, and starting Records. Records are used to keep track of important facts about a character: specific items, bonds with non-player characters, pieces of intel, clues, lasting wounds, or other important notes. There is no limit to how many Records a character can have. Relevant Records can help or hinder a character when tackling challenging tasks or when trying to avoid a direct threat.

**Ace. The Nameless**

Raised in the ruins between the wars of old kingdoms, survived by scavenging what others left behind. The roots claimed you so long ago you no longer remember when you were last alive or how you died.

- Suggested Names: Wren, Lark, Fenn, Rilla, Wick
- Starting Records: Dagger, Cloak, Lockpicks, Scavenged Trinket, Pick, Chalk

**2. The Blood Heir**

Born into a cursed bloodline. The Derweald has claimed your family for generations. The roots claimed you after they came for you on your twenty-first year, as they came for your mother and her mother before her.

- Suggested Names: Orenya, Thalen, Sovae, Lysh, Nahl
- Starting Records: Heirloom Blade, Leather Armor, Family Relic, Mirror, Hourglass, Incense

**3. The Gravedigger**

Buried the dead for decades, noticed when they stopped staying buried. The roots claimed you after you fell into an open grave and the earth refused to let you climb back out.

- Suggested Names: Barlo, Rook, Marden, Mudge, Pate
- Starting Records: Mace, Leather Armor, Lantern, Rope, Shovel, Chalk

**4. The Bastard**

Illegitimate heir with no claim, sent to die honorably in the thorns rather than stain the family name. The roots claimed you after your family abandoned you at the forest's edge with your mother's name carved into your blade.

- Suggested Names: Corvan, Darion, Lyria, Othar, Roldan
- Starting Records: Sword, Leather Armor, Tarnished Signet Ring, Cloak, Rope, Tinderbox

**5. The Disgraced Knight**

Broke your oath or failed your lord, walked into the Derweald wearing your shattered heraldry. The roots claimed you after you sought an honorable death in single combat with something darker than night itself.

- Suggested Names: Severin, Thalia, Cassian, Vaeld, Sigvard
- Starting Records: Sword, Chain Armor, Broken Shield, Rope, Metal File, Tinderbox

**6. The Court Poisoner**

Served powerful nobles through subtle murder. The roots claimed you after your next victim realized who you were, forced you to drink your own poison, and threw your inert body in the city's river.

- Suggested Names: Sable, Nyra, Marlow, Marcell, Velian
- Starting Records: Dagger, Fine Cloak, Vials, Lockpicks, Glass Marbles, Mirror

**7. The Flesh Trader**

Smuggled corpses for Church experiments or sold the dead to scholars. The roots claimed you after your cargo stirred in the night and dragged you screaming into the thorns.

- Suggested Names: Pike, Garrin, Wick, Toller, Corin
- Starting Records: Axe, Leather Armor, Chain, Tarp, Cart, Rope

**8. The Plague Doctor**

Tended the sick in corrupted territories. The roots claimed you but not before they consumed the entire village you tried so desperately to protect.

- Suggested Names: Tobin, Keela, Cassian, Aeris, Fenna
- Starting Records: Quarterstaff, Plague Mask, Herbalist Kit, Vials, Soap, Large Sponge

**9. The Midwife**

Delivered children in remote villages, witnessed too many stillbirths and deformities as the Derweald crept closer. You died helping a mother birth something that should not have been born. The roots claimed you after the angry villagers threw your body into the thorns as punishment for your sins.

- Suggested Names: Mave, Tamsin, Hesta, Gudrun, Mira
- Starting Records: Dagger, Cloak, Birthing Kit, Herbalist Pouch, Soap, Bucket

**10. The Deserter**

Fled from war or Church service, ran until there was nowhere left to run. The roots claimed you after your former comrades found you, cut you down, and nailed your body to a tree.

- Suggested Names: Dane, Keir, Bram, Astrid, Einar
- Starting Records: Spear, Chain Armor, Bedroll, Compass, Rope, Tinderbox

**Jack. The Fool**

Accompanied a reputable knight to chronicle their deeds in verse and song. The roots claimed you after the knight took fright and abandoned you in the night to save themselves.

- Suggested Names: Lute, Tobin, Mave, Joss, Corinne
- Starting Records: Lute, Cloak, Journal, Dagger, Quill & Ink, Tinderbox

**Queen. The Hedge Witch**

Practiced old magics outside Church authority, traded charms for food. The roots claimed you after the villagers bound you to a stake and left you at the forest's edge on a pyre.

- Suggested Names: Briar, Nesta, Rowan, Iskra, Wren
- Starting Records: Dagger, Cloak, Ritual Chalk, Herb Bundles, Holy Water, Wolfsbane

**King. The Tyrant**

Ruled with cruelty until your people finally had enough. The roots claimed you after the mob dragged you to your family's crypt and sealed you inside with the bones of those who came before.

- Suggested Names: Severin, Cassian, Thalia, Darion, Velian
- Starting Records: Broken Crown, Fine Cloak, Signet Ring, Dagger, Manacles, Chain

> If a player prefers, they may choose their background instead of revealing a card. Players may also adjust their starting Records with GM approval, swapping weapons or gear that better fit their character concept.

> Significant amounts of coin, artifacts, valuable treasures, or debts should also be tracked as Records when acquired during play.

### 2. Gift

A Gift is power stolen from the Derweald and held by rite and restraint. Each Warden bears one, a curse and a weapon in equal measure. Choose one Gift and add it as a Record:

- **Stonehide**: Flesh hardens like stone, making it extremely hard to be wounded.
- **Bonegrind**: Channel brutal force, gaining unnatural strength.
- **Vinewright**: Control the roots and thorns to entangle, snare, pierce, or drag.
- **Wildtongue**: Command the warped creatures of the forest to do your bidding.
- **Soulgrip**: Seize hold of another's emotions and bend them to your will.

### 3. Scores

Scores measure a character's capabilities and resources.

**Core Scores** range from 0 to 5. During character creation, players distribute 8 points among the four Core Scores, with no single Score exceeding 3:

- **Strength**: Physical power. Governs brute force, heavy blows, and feats of might.
- **Dexterity**: Agility and precision. Governs quick reflexes, acrobatics, stealth, and ranged attacks.
- **Willpower**: Mental fortitude and presence. Governs resolve, perception, persuasion, and resisting corruption.
- **Constitution**: Endurance and toughness. Governs resilience, stamina, and resistance to physical hardship.

**Reserve Scores** fluctuate during play. Most Reserve Scores range from 0-5. During character creation, set all Reserve Scores to 5, except Fortune. Fortune ranges from -5 to +5 and starts at 0.

- **Vitae (5)**: Physical and mental health.
- **Faith (5)**: Inner light and resistance to corruption.
- **Supply (5)**: Provisions, ammunition, expendable gear, and purchasing power for everyday needs.
- **Fortune (3)**: Luck and fate's favor.

# Playing the Game

## Rules

### The Draw

Most of the game's mechanics are called Actions: things that trigger when characters do certain things in the fiction. When an Action is triggered, it will outline that the player must make a Draw, usually in the form of "When this happens, Draw+Score." Follow the steps below to resolve the Action's outcome.

#### Making a Draw

The player draws 1 Action card and adds the relevant Score to the card's numeral value. Then, 2 Challenge cards are drawn. The player compares their Action total against each Challenge card.

If the player's Action total is higher than both Challenge cards, the outcome is **Radiant**. When an Action revolves around determining the outcome of a character's efforts, they succeed with greater effect. When an Action revolves around determining something about the world, the character finds themselves in a great position.

If the player's Action total is higher than one Challenge card, the outcome is **Bright**. When an Action revolves around determining the outcome of a character's efforts, they succeed at what they were trying to do. When an Action revolves around determining something about the world, the character finds themselves in a good position.

If the player's Action total is higher than neither Challenge card, the outcome is **Dire**. When an Action revolves around determining the outcome of a character's efforts, they fail and there is a Complication. When an Action revolves around determining something about the world, the character finds themselves in a bad position.
Whenever an Action triggers a Complication, it shall always provide prompts to help determine its nature.

#### Using Advantage and Disadvantage

Advantage comes from favorable conditions, preparation, relevant Records, or invoking a Gift. For each level of Advantage, add 1 to the Action total.

Disadvantage comes from adverse conditions, wounds, missing gear, or hostile circumstances. For each level of Disadvantage, subtract 1 from the Action total.

Particularly impactful Advantages or Disadvantages may be worth more than 1 point to the Action total.

#### Using Fortune

Fortune can be spent or earned by pushing outcomes beyond what fate intended.

- **Press On**: When the outcome is Dire, the player may push it to Bright instead, losing 1 Fortune in the process.
- **Hold Back**: When the outcome is Radiant, the player may choose to accept a Bright outcome instead, restoring 1 Fortune in the process.

Fortune cannot go lower than 0 or higher than 5. A player cannot spend Fortune they do not have.

### Enemies and Combat

As characters journey through the land they may come into conflict with other characters, creatures, monsters, and threats born from the corruption itself. When this happens, they will do things in the fiction which will trigger Actions to help resolve the outcome.

When it comes to combat, enemies have a Strength rating which measures how much harm they can withstand before falling. When a character successfully strikes an enemy in combat, they deal Damage based on their weapon or method of attack:

- **Unarmed strikes**: Deal 1 Damage.
- **Basic weapons** (daggers, swords, bows): Deal 2 Damage.
- **Heavy weapons** (axes, greatswords, war hammers): Deal 3 Damage.
- **Environmental hazards or explosives**: Deal up to 5 Damage.

When a character deals Damage to an enemy, reveal 1 card for each point of Damage dealt and place those cards in a stack next to the enemy. When the number of cards in the stack matches or exceeds the enemy's Strength, the enemy is slain.

**Weaknesses and Resistances**

Some enemies have weaknesses or resistances that affect how Damage is dealt to them:

- **Weakness**: When a card matching the enemy's weakness is revealed (such as face cards, red suits, or specific values), that card counts as 2 cards toward the stack instead of 1.
- **Resistance**: When a card matching the enemy's resistance is revealed, that card is ignored and does not count toward the stack.

### The Oracle

The Oracle is used to answer questions when the fiction is uncertain. It can be consulted freely during play to resolve unknowns, or triggered by specific Actions. To consult the Oracle, frame a yes-or-no question. Determine how likely the answer is to be yes, then reveal cards accordingly.

The answer is **Yes** if any face card (Jack, Queen, or King) is revealed. Otherwise, the answer is **No**.

- **Very Likely**: Reveal 5 cards.
- **Likely**: Reveal 4 cards.
- **Uncertain**: Reveal 3 cards.
- **Unlikely**: Reveal 2 cards.
- **Very Unlikely**: Reveal 1 card.

If a positive outcome would benefit the character, use their Fortune score as the basis for the number of cards to reveal (3 +/- their Fortune score). When playing as a group, use the Fortune score of the character most directly affected by the outcome, or the highest Fortune score if the outcome affects the whole group.

### Spark Generator

If after consulting the Oracle a player is still uncertain how things should unfold or how the result should be interpreted, the player reveals 2 cards from the deck. Match the first card to the Spark Theme table and the second to the Spark Action table to generate a creative prompt.

**Spark Theme** (reveal first card)

| Card | ♣ Clubs   | ♠ Spades   | ♦ Diamonds | ♥ Hearts   |
| ---- | --------- | ---------- | ---------- | ---------- |
| A    | Path      | Death      | Secret     | Vow        |
| 2    | Barrier   | Wound      | Truth      | Bond       |
| 3    | Shelter   | Fear       | Knowledge  | Faith      |
| 4    | Weapon    | Corruption | Power      | Hope       |
| 5    | Tool      | Ruin       | Wealth     | Memory     |
| 6    | Labor     | Decay      | Prize      | Spirit     |
| 7    | Land      | Enemy      | Trade      | Innocence  |
| 8    | Ruins     | Curse      | Debt       | Fellowship |
| 9    | Passage   | Shadow     | Resource   | Family     |
| 10   | Nature    | Blood      | Advantage  | Duty       |
| J    | War       | Vengeance  | Destiny    | Sacrifice  |
| Q    | Beast     | Doom       | Legacy     | Soul       |
| K    | The Order | The Forest | The Roots  | The Light  |

**Spark Action** (reveal second card)

| Card | ♣ Clubs     | ♠ Spades | ♦ Diamonds | ♥ Hearts  |
| ---- | ----------- | -------- | ---------- | --------- |
| A    | Journey     | Hunt     | Acquire    | Swear     |
| 2    | Search      | Strike   | Gather     | Confess   |
| 3    | Explore     | Threaten | Trade      | Mourn     |
| 4    | Breach      | Ambush   | Secure     | Aid       |
| 5    | Fortify     | Pursue   | Hide       | Protect   |
| 6    | Endure      | Wound    | Evade      | Serve     |
| 7    | Escape      | Corrupt  | Deceive    | Follow    |
| 8    | Uncover     | Betray   | Manipulate | Remember  |
| 9    | Investigate | Consume  | Reveal     | Restore   |
| 10   | Build       | Destroy  | Bargain    | Forgive   |
| J    | Command     | Defy     | Steal      | Sacrifice |
| Q    | Advance     | Avenge   | Transform  | Embrace   |
| K    | Conquer     | Claim    | Surrender  | Bless     |

### Actions

#### Overcome a Challenge

When a character faces a challenge, Draw+appropriate Score. If the character acts...

- With brute force, aggression, or raw power: Draw+Strength.
- With speed, agility, precision, or stealth: Draw+Dexterity.
- With cunning, perception, persuasion, or mental fortitude: Draw+Willpower.
- With endurance, resilience, or toughness: Draw+Constitution.
- If nothing else applies: Draw+Fortune.

> If the character is well-prepared or conditions are favorable, take 1 Advantage. If the character is hindered or conditions are hostile, take 1 Disadvantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character greatly succeeds.
- **When the outcome is Bright**: The character succeeds.
- **When the outcome is Dire**: The character fails, and there is a Complication.

When the outcome is Dire, the player may reveal a card or pick the option that fits best to determine the nature of the Complication:

- **♣ Clubs**: Time. The character loses precious time or an opportunity slips away.
- **♠ Spades**: Danger. The character suffers harm or attracts a threat.
- **♦ Diamonds**: Loss. The character loses Supply or valuable gear is damaged.
- **♥ Hearts**: Trust. A relationship is strained or an ally is put at risk.

#### Avoid a Consequence

When a character tries to avoid a consequence from a hazard, hostile opposition, or dangerous environment, Draw+appropriate Score. If the character reacts...

- With brute force, blocking, or standing firm: Draw+Strength.
- With speed, dodging, or quick reflexes: Draw+Dexterity.
- With focus, willpower, or mental resistance: Draw+Willpower.
- With endurance, resilience, or toughness: Draw+Constitution.
- If nothing else applies: Draw+Fortune.

> If the threat is serious, take 1 Disadvantage. If the threat is dire, take 2 Disadvantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character avoids the consequence and gains an opportunity, taking 1 Advantage on their next Action.
- **When the outcome is Bright**: The character avoids the consequence.
- **When the outcome is Dire**: The character suffers the full consequence. When suffering harm, lose Vitae. When fighting corruption, lose Faith. If nothing else applies, the consequence is rooted in the fiction.

The amount of Vitae or Faith lost depends on the severity of the threat: minor threats deal 1, serious threats deal 2, and dire threats deal 3 or more.

If a character's Vitae ever reaches 0, it immediately triggers the use of the `Resist Death` Action.

#### Secure an Opportunity

When a character prepares for what lies ahead, whether through positioning, investigation, or building trust, Draw+appropriate Score. If the character acts...

- With intimidation, a show of force, or holding ground: Draw+Strength.
- With positioning, searching, sneaking, or observation: Draw+Dexterity.
- With patience, endurance, or sharing hardship: Draw+Constitution.
- With planning, deduction, persuasion, or reading people: Draw+Willpower.
- By paying for information or offering trade: Draw+Supply.
- If nothing else applies: Draw+Fortune.

> If the character has time to prepare, the situation is calm, or the source is cooperative, take 1 Advantage. If the character is rushed, under pressure, or the source is guarded, take 1 Disadvantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character secures the opportunity, creating 2 Advantage that can be used on future Actions. If relevant, add a bond, clue, or piece of intel as a Record.
- **When the outcome is Bright**: The character secureßs the opportunity, creating 1 Advantage that can be used on a future Action if applicable. If relevant, add a bond, clue, or piece of intel as a Record.
- **When the outcome is Dire**: The character fails to secure the opportunity, and there is a Complication.

When the outcome is Dire, the player may reveal a card or pick the option that fits best to determine the nature of the Complication:

- **♣ Clubs**: Time. The opportunity slips away, or an obligation is now owed.
- **♠ Spades**: Danger. The character attracts a threat or reveals something personal.
- **♦ Diamonds**: Loss. The character loses Supply, or a debt must be paid first.
- **♥ Hearts**: Trust. A relationship is strained, or word spreads about the character's methods.

#### Enter Combat

When a character initiates combat or reacts to an ambush, Draw+Dexterity.

> If the character is prepared or has the element of surprise, take 1 Advantage. If the character is caught off guard or outnumbered, take 1 Disadvantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character seizes initiative, taking 1 Advantage on their next Action.
- **When the outcome is Bright**: The character engages on equal footing.
- **When the outcome is Dire**: The character loses initiative, taking 1 Disadvantage on their next Action.

There is no turn order or rounds. This Action establishes who acts first, then the fiction flows back and forth between the characters and their enemies. Players usually act using `Inflict Harm`, `Overcome a Challenge`, or `Secure an Opportunity`. When enemies strike back, it prompts players to react using `Avoid a Consequence`.

#### Inflict Harm

When a character strikes at an enemy or engages a threat in combat, Draw+appropriate Score. If the character attacks...

- With a melee weapon or bare hands: Draw+Strength.
- With a ranged weapon or thrown object: Draw+Dexterity.
- With arcane power or a Gift: Draw+Willpower.

> If the character has the upper hand or the enemy is exposed, take 1 Advantage. If the enemy is armored, fortified, or has the upper hand, take 1 Disadvantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character strikes true and gains an opportunity. Deal Damage based on the weapon or attack and take 1 Advantage on their next Action.
- **When the outcome is Bright**: The character lands the strike. Deal Damage based on the weapon or attack.
- **When the outcome is Dire**: The character misses, and there is a Complication.

When the outcome is Dire, the player may reveal a card or pick the option that fits best to determine the nature of the Complication:

- **♣ Clubs**: Position. The enemy gains the upper hand or forces the character back.
- **♠ Spades**: Harm. The character suffers harm in retaliation. Lose 1 Vitae.
- **♦ Diamonds**: Loss. A weapon is damaged, dropped, or stuck.
- **♥ Hearts**: Exposure. An ally is put in danger or the character is left vulnerable.

When Damage is dealt, reveal cards equal to the Damage dealt and add them to the enemy's stack. When the number of cards in the stack matches or exceeds the enemy's Strength, the enemy is slain.

> The fiction dictates what is possible during combat. A blade or arrow cannot harm what it cannot reach or pierce. An armored creature will not fall to desperate slashing, etc.

#### Invoke Gift

When a character calls upon their Gift to overcome an obstacle or solve a problem, Draw+Willpower.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character invokes their Gift, keeping their Faith.
- **When the outcome is Bright**: The character invokes their Gift, losing 1 Faith.
- **When the outcome is Dire**: The character invokes their Gift but looses control, losing 2 Faith.

The outcome of invoking a Gift is rooted in the fiction. The character describes how they channel the forest's power, and the effect manifests according to the Gift's nature and the situation at hand.

If a character's Faith ever reaches 0, they must immediately use the `Resist the Forest` Action.

#### Treat Wounds

When a character tends to injuries or wounds, Draw+appropriate Score. If the character acts...

- To treat injuries on others: Draw+Dexterity.
- To treat wounds on themselves: Draw+Constitution.

> If the character has proper supplies or shelter, take 1 Advantage. If the character lacks supplies or is exposed, take 1 Disadvantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character treats the wounds effectively, restoring 2 Vitae.
- **When the outcome is Bright**: The character treats the wounds adequately, restoring 1 Vitae.
- **When the outcome is Dire**: The character fails to treat the wounds, and there is a Complication.

When the outcome is Dire, the player may reveal a card or pick the option that fits best to determine the nature of the Complication:

- **♣ Clubs**: Time. The treatment takes far longer than expected.
- **♠ Spades**: Complication. The wound worsens or becomes infected.
- **♦ Diamonds**: Waste. Supplies are consumed without effect. Lose 1 Supply.
- **♥ Hearts**: Strain. The effort takes a toll on the healer. Lose 1 Vitae.

#### Rest

When a character spends 6+ hours resting, Draw+appropriate Score. If the character rests...

- In a safe place or shelter: Draw+Constitution.
- In the wilds or while on the move: Draw+Supply.

> If the area is sheltered or defensible, take 1 Advantage. If finds a true sanctuary, take 2 Advantage. If the area is exposed or deep in corrupted territory, take 1 Disadvantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character rests fully, restoring all Vitae.
- **When the outcome is Bright**: The character rests adequately, restoring 2 Vitae.
- **When the outcome is Dire**: The character rests poorly, restoring only 1 Vitae, and there is a Complication.

When the outcome is Dire, the player may reveal a card or pick the option that fits best to determine the nature of the Complication:

- **♣ Clubs**: Delay. The rest takes longer than expected or an opportunity passes.
- **♠ Spades**: Disturbance. Something stirs in the night, danger approaches.
- **♦ Diamonds**: Consumption. Supplies are depleted or gear is damaged. Lose 1 Supply.
- **♥ Hearts**: Unease. Nightmares or troubled thoughts strain the mind. Lose 1 Faith.

> Rest is a good opportunity to journal about the character's journey. Reflect on what happened since the last time they rested, the choices made, the people met, and how the character feels about the path ahead.

After a character has rested, shuffle the discard pile back into the deck.

#### Resupply

When a character seeks to restock provisions, ammunition, or gear, Draw+appropriate Score. If the character acts...

- By purchasing goods at a safe haven, trading post, or settlement: Draw+Willpower.
- By foraging for food, water, or materials in the wild: Draw+Fortune.

> When foraging in an area that is fertile or lush, take 1 Advantage. If the area is barren or corrupted, take 1 Disadvantage.
>
> When selling minor valuables found during a Hunt, each item grants 1 Advantage. Exceptional artifacts or treasures cannot be sold through this Action. Their payment becomes a Record instead.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character acquires what they need and more, restoring 2 Supply.
- **When the outcome is Bright**: The character acquires enough to get by, restoring 1 Supply.
- **When the outcome is Dire**: The character acquires nothing, and there is a Complication.

When the outcome is Dire, the player may reveal a card or pick the option that fits best to determine the nature of the Complication:

- **♣ Clubs**: Time. The search or negotiation takes far longer than expected.
- **♠ Spades**: Danger. The character attracts predators, thieves, or unwanted attention.
- **♦ Diamonds**: Loss. Gear is damaged, lost, or the price is far higher than expected.
- **♥ Hearts**: Strain. The character suffers exhaustion or minor harm from the effort. Lose 1 Vitae.

#### Purify

When a character seeks to cleanse their soul and resist the forest's claim, Draw+Willpower.

> If the character is at a place of holiness (a shrine, altar, sacred grove, or sanctuary blessed by the Church), take 1 Advantage. If the character performs a rite of purification (confessing sins at a relic, holding vigil while fasting, praying over running water, or pouring blood into salt), take 1 Advantage.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character is imbued with the One Light, restoring all Faith.
- **When the outcome is Bright**: The character feels the touch of the One Light, restoring 2 Faith.
- **When the outcome is Dire**: The character is only lightly touched by the One Light, restoring 1 Faith.

#### Resist Death

When a character's Vitae reaches 0, the character is on the brink of death. Draw+Fortune.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character clings to life, regaining 1 Vitae but remaining conscious.
- **When the outcome is Bright**: The character barely survives, stabilizing at 1 Vitae but falling unconscious. Add a permanent wound as a Record.
- **When the outcome is Dire**: The character succumbs to their wounds.

If a character dies, the player must create a new character and introduce them into the fiction as soon as possible.

#### Resist the Forest

When a character's Faith reaches 0, the pull of the forest threatens to consume them. Draw+Fortune.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character resists the call, regaining 1 Faith.
- **When the outcome is Bright**: The character holds on, stabilizing at 1 Faith but feeling the roots take hold. Add a permanent mark of corruption as a Record.
- **When the outcome is Dire**: The character succumbs to the forest.

If a character succumbs to the forest, the player must create a new character and introduce them into the fiction as soon as possible.

#### Slay the Darkness

When a character completes a Hunt and slays corruption that plages the land, they Advance. Draw+1 for each of the following that is true:

- The corruption was ancient or powerful.
- The Hunt brought the character to the brink of death or claimed their Faith.
- The source of corruption was hidden and required investigation to uncover.
- The truth discovered was darker than expected.
- The character made a difficult choice or sacrifice to see the Hunt through.

Then, resolve the Action as follows:

- **When the outcome is Radiant**: The character grows stronger through struggle. Increase one Core Score by 1 (max 5).
- **When the outcome is Bright**: The character learns from the Hunt. Gain a new skill or ability as a Record, rooted in the fiction of what happened during the Hunt and reflecting something the character learned.
- **When the outcome is Dire**: The forest claims a piece of the character's soul. Decrease maximum Faith by 1 permanently.

## The First Session

Each player introduces their character: their name, what they look like, and one memory from before they died to the roots only to be brought back as a cursed soul. Then frame the opening: the group is already mid-mission, deep in the thorns, with their Hunt half-complete and trouble closing in.

## The Hunt

A Hunt is a mission, the purpose that keeps the Order's mercy pointed forward. When the group completes a Hunt, the group takes on a new Hunt.

To generate a Hunt, reveal one card from each table and combine the results. Or choose elements that speak to you.

**The Task** (reveal one card)

| Card | Task                       |
| ---- | -------------------------- |
| A    | Find                       |
| 2    | Bring back                 |
| 3    | Destroy                    |
| 4    | Free                       |
| 5    | Deliver to safety          |
| 6    | Learn the fate of          |
| 7    | Break the hold on          |
| 8    | Contain                    |
| 9    | Avenge                     |
| 10   | Recover the secret held by |
| J    | Consecrate                 |
| Q    | Protect                    |
| K    | Grant final rest to        |

**The Subject** (reveal one card)

| Card | Subject                                 |
| ---- | --------------------------------------- |
| A    | a child who wandered too deep           |
| 2    | a Warden who went silent                |
| 3    | a merchant who knew the old paths       |
| 4    | a noble's forsaken heir                 |
| 5    | a priest who sought forbidden knowledge |
| 6    | one who wears a stolen shape            |
| 7    | an elder who kept dangerous secrets     |
| 8    | a hunter who became the hunted          |
| 9    | the last keeper of a holy relic         |
| 10   | one who betrayed the Order              |
| J    | a voice that calls from the thorns      |
| Q    | a witch of the deep groves              |
| K    | something the forest remembers          |

**The Complication** (reveal one card, use suit)

| Suit       | Complication                          |
| ---------- | ------------------------------------- |
| ♣ Clubs    | Others hunt the same quarry           |
| ♠ Spades   | Someone here shares history with them |
| ♦ Diamonds | The path back has closed              |
| ♥ Hearts   | The truth is worse than told          |

**The Location** (reveal one card)

| Card | Location                              |
| ---- | ------------------------------------- |
| A    | a chapel swallowed by roots           |
| 2    | a village that went silent            |
| 3    | a ravine where the mist never lifts   |
| 4    | an abandoned Warden outpost           |
| 5    | a crossroads marked by the hanged     |
| 6    | a river that runs black after dark    |
| 7    | a grove where the trees have faces    |
| 8    | the ruins of a noble estate           |
| 9    | a cave network beneath the roots      |
| 10   | a bridge guarded by something patient |
| J    | a shrine to a forgotten god           |
| Q    | a clearing where nothing grows        |
| K    | the heart of an old corruption        |

# Principles

## Principles for Game Masters

**The Forest Lives**

- The Derweald is ancient, patient, and always hungry.
- Telegraph threats clearly. Let players see danger before it strikes.
- The forest remembers. Let the world react to what the characters do.

**Provide Information**

- Describe freely. Let players ask questions and explore.
- Describe what they see, not what it means. Let players interpret and decide for themselves.
- Do not hide crucial information behind Draws. Players cannot make smart decisions if they are blinded.

**Failure Means Complication**

- Failure imposes Complication which should be rooted in the fiction. Time lost, harm suffered, trust broken, supplies spent, etc.
- If no Complication makes sense, let failure be the complication and move forward.
- If something is impossible, explain why through the fiction.

**Threat, Not Numbers**

- Enemies and hazards do not need stats. Describe what they do, how dangerous they are, and let the fiction decide.
- Minor threats deal 1 Vitae or Faith. Serious threats deal 2. Dire threats deal 3 or more.
- Armored foes take more strikes. Ethereal foes might not fall to steel. Describe what happens, then let the players adapt.

**Reward Ingenuity**

- Gifts, Records, and preparation should matter. Give players opportunities to use what they have.
- Clever plans, the right gear, or an ally's help may reduce risk to the point where a challenge is no longer one and success is simply given.
- The rules serve the fiction. When in doubt, look at what makes sense in the story.

**NPCs Are People**

- Non-player characters have goals, fears, and reasons to exist. They are not obstacles or quest-givers.
- Most will talk before fighting. Most will flee before dying. Most remember debts and grudges.
- Let NPC decisions emerge from who they are and what they want.

**The Hunt Guides**

- Use the Hunt to frame scenes, establish stakes, and create urgency. Each Hunt is a journey into the thorns.
- When the fiction stalls, return to the Hunt. What stands in the way? What has changed? What is the next step?
- Completing a Hunt is a reward. Make it mean something. Let the characters catch their breath before the next one begins.

## Principles for Players

**Records Are Tools**

- Core Scores and Reserve Scores do not define the character. They are tools to help the mechanics.
- Records mark the character's journey. Invoke them when they help, accept when they complicate.
- Think like a problem-solver.

**Fiction Triggers Actions**

- Describe what the character does first. If it matches an Action's trigger, then Draw to see how it unfolds.
- Actions are only used when their trigger condition is met. Do not Draw unless the fiction calls for it.
- When an Action is triggered, embrace it. The mechanics create interesting situations and complications.

**Press Forward**

- The forest waits for no one. Keep moving, keep deciding, keep the fiction alive.
- When uncertain, consult the Oracle or reveal a card for inspiration.
- Be bold. The mechanics exist to support decisive action, not to punish it.

**Respect the Fiction**

- The fiction determines what is possible. A sword cannot harm what it cannot reach. Corruption does not vanish because of a single success.
- Ask questions. Listen to the answers. The GM provides information freely. Use it to make informed choices.
- Respect the stakes. When the GM says something is dangerous, believe them.

**Embrace Complications**

- Failure creates complications and turns the story in new directions.
- Accept hardship when it serves the story. Restore Fortune when the moment feels right.
- Let wounds, debts, and corruption shape who the character becomes over time.

**Work Together**

- The mission is what holds the group together. Honor it.
- Work together to overcome obstacles. Share Advantage, share risk, share the weight.
- When a character falls, create someone new and bring them into the fiction quickly. The Hunt continues.

## Principles for Solo Play

**Trust the Oracle**

- Consult the Oracle freely. Use it to determine what happens when uncertain.
- Frame questions as yes or no. Let the Oracle shape the path in broad strokes.
- When the Oracle gives a twist, lean into it. Unexpected results create the best stories.

**Play to Find Out**

- Do not plan the entire Hunt. Discover it through play.
- Use the Spark Generator to generate ideas when stuck. Reveal cards and interpret them through the lens of the fiction.
- Let NPCs surprise the character. Decide their goals, then ask the Oracle how they react.

**Structure of Play**

- Begin each scene by establishing where the character is and what they are doing. Use the Oracle to answer questions about the environment.
- As the character acts, check if their actions trigger any Actions. If so, Draw to resolve.
- When a scene concludes, fast forward to the next moment of uncertainty or use the Oracle to determine what happens next.

**Be Fair, Not Kind**

- Respect the fiction. If the character is outmatched, they are outmatched.
- Impose Costs when they make sense. Let the character suffer setbacks and complications.
- The keep the stakes are real, do not fudge Draws or ignore bad results.

**Pace Yourself**

- A Hunt should take multiple sessions. Let it unfold over time.
- Rest, resupply, and purify between major obstacles. Give the character breathing room.
- When the Hunt completes, take time to reflect before starting the next one.

## The First Session

Each player introduces their character: their name, what they look like, and one memory from before they died to the roots only to be brought back as a cursed soul. Then frame the opening: the group is already mid-mission, deep in the thorns, with their Hunt half-complete and trouble closing in.

# Bestiary

## Pallid Hound

**Strength**: 2
**Weakness**: Hearts
**Wants**: Please its master

> The stench of rotting flesh clings to the air as guttural growls shiver through the gloom.

Corrupted beasts driven by a warped need to please their unseen master. Wherever a pallid hound prowls, its master is never far behind.

## Pallid Shambler

**Strength**: 3
**Weakness**: Red suits
**Wants**: Feed the roots

> The creature moves with a jerky, puppet-like gait, its ribcage rattling against the thick roots that coil where organs used to be.

Hollowed monuments of bone and root woven into shapes that once held names. The forest gorged on them until flesh became sap and memory was lost to rot.

## Thornmouth

**Strength**: 13
**Weakness**: Face cards
**Armor**: Red suits
**Wants**: Live forever, break chains

> Skin pale as marble, eyes pooling with black ichor. It is looking at you and you feel absolutely worthless.

Beautiful and eternal. Taken early by the roots, their bodies are frozen in time, still very much human in all the wrong ways. Each rises with a Gift that is theirs alone and exerts power over pallid creatures. Yet they will always bend to the forces that gave them a second chance.

## Bandit

**Strength**: 4
**Armor**: Black suits
**Wants**: Take what they need

> Steel glints in the shadows. A whistle cuts the air. You are surrounded.

Outlaws who raid settlements, ambush travelers, and prey on the desperate. Groups of four or more travel with a leader bearing heavier armor (Armor: All suits) and deadlier weapons. When the leader falls, the others flee.

## Raider

**Strength**: 5
**Armor**: Red suits
**Wants**: Burn and plunder

> Smoke on the horizon. Warhorns in the distance. They do not come to bargain.

Organized warbands that strike hard and leave nothing standing. Better armed and more brutal than common bandits. Raiders fight to the death and take no prisoners unless they see profit in flesh. Often mounted, always merciless.

## Bear

**Strength**: 5
**Armor**: Clubs
**Wants**: Protect its territory

> The underbrush explodes. Muscle and fury rise on hind legs, blotting out the light.

Massive and territorial, bears avoid conflict unless provoked or protecting cubs. Once roused, they are relentless. Most will not pursue prey that flees, but a wounded or starving bear is another matter entirely.

## Boar

**Strength**: 3
**Wants**: Be left alone

> A snort. Hooves scrape dirt. It lowers its head and charges.

Ill-tempered and fearless, boars attack anything that startles them. Their tusks gore deep, and they do not stop until the threat is down or they are. Often found rooting through the underbrush near streams and dense thickets.

## Wolf

**Strength**: 2
**Wants**: Feed the pack

> Yellow eyes in the dark. One howl answered by many. They have your scent.

Cunning hunters that stalk prey in packs of six or more. Alone, a wolf will circle and test for weakness. Together, they coordinate to exhaust and surround. When one falls, the others may scatter, or press harder if the pack is hungry.

## Veilis

**Strength**: 5
**Weakness**: Hearts
**Wants**: Quiet the spirit's hunger

> A figure stands before you, their shadow moving out of step, fingers stretching longer than they should. When they speak, a second, older voice rides beneath their words.

Veiling was once a sacred rite: a willing bond where a chosen soul and a forest spirit walked as equals. In the age of the Derweald, spirits have grown desperate and cruel, forcing themselves into living minds without invite. Veilis are the fractured result, neither druid nor spirit, but something caught between.

## Bright Templar

**Strength**: 5
**Armor**: Red suits
**Wants**: Crush heresy, die in glory

> The knight's armor gleams with etched prayers, every plate a sermon hammered into metal. Their stance says they have already decided what you are: guilty.

Heavy-plated soldiers of the One Light, raised to believe armor is just another kind of altar. They are the Church's wall of steel, taught to see doubt and mercy as cracks in their faith. When reduced to 0 Strength, they may rise once more with half Strength and fight until taken out again.

[...more will be added to the bestiary soon]

<!--
## Bright Mage (TODO: THIS IS BAD, SYCN WITH CHRONICLES PDF)

**Strength**: 3
**Weakness**: Spades
**Wants**: Prove their superiority

> Sigils flicker across their robes as the air bends around them, heat shimmering off invisible lines of force. Their eyes weigh you the way a butcher weighs meat.

Arcane scholars turned living weapons, trained to burn the Church's enemies and any rival claim to magic. Their power is sanctioned, their cruelty wrapped in doctrine. Fire is their favored tool.

## Truthseeker

**Strength**: 4
**Armor**: Black suits
**Wants**: Force a confession

> Their gaze crawls over you, cataloging every twitch and hesitation like evidence. You get the sense they decided the verdict before they ever asked a question.

The Church's witch hunters of steel and ink. They do not chase spirits; they chase people. Interrogators, investigators, and executioners, they build cases like cages and leave no clean way out. Can summon Bright Templars to aid them.

## Barktroll

**Strength**: 6
**Weakness**: Hearts
**Armor**: Clubs
**Wants**: Spread its rot, feed on carrion

> A hulking shape lumbers from the mire, its skin a patchwork of bark, swollen knots, and oozing mushrooms. Every step leaves a smear of sap and black water.

Where Mireroad mud and Derweald spores fester together, trolls no longer grow from flesh alone. Sagging hulks of half-rotted wood and fungal meat. Fire blocks their regeneration. When slain, they explode in a cloud of spores.

## Wyrm (TODO: THIS IS BAD, SYCN WITH CHRONICLES PDF)

**Strength**: 8
**Weakness**: Face cards
**Armor**: All suits
**Wants**: Obey Ithril, be free

> The sky darkens as vast tattered wings blot out the light. Frost steams from its jaws, and behind its eyes there is a dull, chained rage that is not its own.

Once, the clans of Kelmora rode these dragons across frozen seas. Ithril the Calamity snapped those bonds, turning the wyrms into thralls whose frost-burned minds obey only its will. A successful challenge to their will with 3 Advantages can break the bondage; if freed, the wyrm turns on Ithril's servants first.

## Wildsoul (TODO: THIS IS BAD, SYCN WITH CHRONICLES PDF)

**Strength**: 4
**Armor**: Black suits
**Wants**: Feed the hunger, stay whole

> They stiffen, eyes gone wide, then topple boneless to the ground. A heartbeat later something invisible drags itself out of their shadow, stretching into a snarling shape.

The curse does not invite another spirit in; it splits the same soul across two truths. One shape is human, heavy with memory. The other is a beast of raw instinct and hunger. The human body can be killed; the beast cannot. Destroy the body to end the threat.

## Veilseed (TODO: THIS IS BAD, SYCN WITH CHRONICLES PDF)

**Strength**: 6
**Weakness**: Face cards
**Armor**: Black suits
**Wants**: Feed on emotion, rupture the veil

> The world judders, colors smearing as if someone dragged a thumb across wet paint. Something unseen presses against the edges of your mind, curious and starving.

Spiritual anomalies born where the veil tears and never quite seals. Not a body but a knot of will and emotion that learned how to want. Cannot be harmed by mundane attacks, only by Gifts, blessed weapons, or acts of pure will. Grows stronger when characters suffer fear, rage, or grief. -->

# Generators

The following tables can be used to generate details about the world during play. To use a table, reveal one card for each column and match each card's value to the corresponding row. Combine the results to create an evocative prompt.

These tables work best when interpreted loosely. Let the words spark ideas rather than define them. If a result does not fit the current situation, reveal again or choose what feels right.

## Land

### Terrain

| Card | State       | Place       | Feature         |
| ---- | ----------- | ----------- | --------------- |
| A    | War-scarred | Battlefield | Trenches        |
| 2    | Flooded     | Mire        | Standing Water  |
| 3    | Blighted    | Farmland    | Dead Crops      |
| 4    | Overgrown   | Crossroads  | Old Signs       |
| 5    | Quiet       | Graveyard   | Fresh Mounds    |
| 6    | Haunted     | Hollow      | Cold Air        |
| 7    | Scorched    | Clearing    | Charred Stumps  |
| 8    | Rocky       | Riverbed    | Dry Stones      |
| 9    | Ancient     | Circle      | Standing Stones |
| 10   | Windswept   | Ridge       | Distant View    |
| J    | Sheltered   | Grove       | Old Growth      |
| Q    | Forsaken    | Shrine      | Offerings       |
| K    | Corrupted   | Heartland   | Twisted Trees   |

### Weather

| Card | Intensity | Element | Effect      |
| ---- | --------- | ------- | ----------- |
| A    | Creeping  | Fog     | Chilling    |
| 2    | Bitter    | Frost   | Numbing     |
| 3    | Gentle    | Breeze  | Refreshing  |
| 4    | Steady    | Rain    | Soaking     |
| 5    | Thin      | Mist    | Clinging    |
| 6    | Still     | Heat    | Oppressive  |
| 7    | Pale      | Moon    | Eerie       |
| 8    | Warm      | Sun     | Comforting  |
| 9    | Harsh     | Sleet   | Biting      |
| 10   | Rolling   | Thunder | Rumbling    |
| J    | Howling   | Wind    | Deafening   |
| Q    | Bright    | Clouds  | Blinding    |
| K    | Endless   | Dark    | Suffocating |

### Corruption

| Card | Sign       | Form     | Intensity |
| ---- | ---------- | -------- | --------- |
| A    | Spreading  | Blight   | Faint     |
| 2    | Creeping   | Roots    | Subtle    |
| 3    | Whispering | Voices   | Distant   |
| 4    | Pulsing    | Veins    | Visible   |
| 5    | Weeping    | Sap      | Fresh     |
| 6    | Crawling   | Shadows  | Growing   |
| 7    | Breathing  | Walls    | Steady    |
| 8    | Watching   | Eyes     | Many      |
| 9    | Grasping   | Tendrils | Reaching  |
| 10   | Blooming   | Fungus   | Thick     |
| J    | Hatching   | Spores   | Spreading |
| Q    | Claiming   | Flesh    | Advanced  |
| K    | Awakening  | Hunger   | Ancient   |

### Omen

| Card | State      | Source    | Portent   |
| ---- | ---------- | --------- | --------- |
| A    | Circling   | Crows     | Death     |
| 2    | Restless   | Wolves    | Pursuit   |
| 3    | Weeping    | Statue    | Sacrifice |
| 4    | Cracked    | Bell      | Warning   |
| 5    | Blackened  | Icon      | Sorrow    |
| 6    | Dying      | Livestock | Blight    |
| 7    | Flickering | Candles   | Spirits   |
| 8    | Spoiled    | Well      | Poison    |
| 9    | Silent     | Birds     | Danger    |
| 10   | Wilting    | Crops     | Famine    |
| J    | Vivid      | Dream     | Truth     |
| Q    | Open       | Grave     | Return    |
| K    | Walking    | Shadow    | Reckoning |

## Locations

### Settlement

| Card | Condition  | Place        | Notable       |
| ---- | ---------- | ------------ | ------------- |
| A    | Dying      | Hamlet       | Empty Homes   |
| 2    | Wary       | Village      | Locked Gates  |
| 3    | Fortified  | Outpost      | Armed Guards  |
| 4    | Struggling | Refuge       | Rationed Food |
| 5    | Busy       | Trading Post | Full Market   |
| 6    | Desperate  | Ferry        | Long Queue    |
| 7    | Pious      | Priory       | Ringing Bells |
| 8    | Quiet      | Garrison     | Few Soldiers  |
| 9    | Recovering | Camp         | New Arrivals  |
| 10   | Rebuilding | Town         | Fresh Timber  |
| J    | Hidden     | Sanctuary    | Secret Paths  |
| Q    | Thriving   | Haven        | Full Stores   |
| K    | Last       | Bastion      | High Walls    |

### Haven

| Card | Style       | Feature     | Mood       |
| ---- | ----------- | ----------- | ---------- |
| A    | Crumbling   | Palisade    | Tense      |
| 2    | Makeshift   | Gate        | Hopeful    |
| 3    | Ancient     | Tower       | Watchful   |
| 4    | Fortified   | Wall        | Defiant    |
| 5    | Improvised  | Barricade   | Desperate  |
| 6    | Sturdy      | Portcullis  | Cautious   |
| 7    | Battle-worn | Watchtower  | Proud      |
| 8    | Patched     | Rampart     | Resilient  |
| 9    | Imposing    | Battlements | Confident  |
| 10   | Blessed     | Spire       | Peaceful   |
| J    | Abandoned   | Keep        | Eerie      |
| Q    | Reclaimed   | Citadel     | Determined |
| K    | Standing    | Bastion     | Unbroken   |

### Ruin

| Card | State      | Structure  | Danger     |
| ---- | ---------- | ---------- | ---------- |
| A    | Burned     | Homestead  | Collapse   |
| 2    | Collapsed  | Inn        | Unstable   |
| 3    | Desecrated | Chapel     | Cursed     |
| 4    | Flooded    | Mine       | Drowning   |
| 5    | Infested   | Mill       | Creatures  |
| 6    | Sealed     | Crypt      | Trapped    |
| 7    | Crumbling  | Watchtower | Falling    |
| 8    | Ransacked  | Manor      | Looters    |
| 9    | Overgrown  | Fortress   | Lost       |
| 10   | Haunted    | Monastery  | Spirits    |
| J    | Defiled    | Sanctuary  | Corruption |
| Q    | Forgotten  | Palace     | Secrets    |
| K    | Swallowed  | Cathedral  | The Forest |

### Interior

### Trouble

| Card | Nature      | Cause         | State      |
| ---- | ----------- | ------------- | ---------- |
| A    | Creeping    | Plague        | Contained  |
| 2    | Sudden      | Murder        | Recent     |
| 3    | Hidden      | Corruption    | Secret     |
| 4    | Escalating  | Feud          | Worsening  |
| 5    | Denied      | Shortage      | Ignored    |
| 6    | Prophesied  | Curse         | Feared     |
| 7    | Violent     | Uprising      | Bloody     |
| 8    | Mysterious  | Disappearance | Unsolved   |
| 9    | Sanctioned  | Execution     | Public     |
| 10   | Looming     | Invasion      | Imminent   |
| J    | Unspeakable | Possession    | Spreading  |
| Q    | Open        | Betrayal      | Bitter     |
| K    | Final       | Collapse      | Inevitable |

### Remains

| Card | Condition   | Discovery | Clue         |
| ---- | ----------- | --------- | ------------ |
| A    | Gnawed      | Bones     | Beast Attack |
| 2    | Scattered   | Armor     | Battle       |
| 3    | Shattered   | Blade     | Struggle     |
| 4    | Bloodied    | Journal   | Last Words   |
| 5    | Abandoned   | Cart      | Fled         |
| 6    | Defiled     | Relic     | Corruption   |
| 7    | Half-buried | Corpse    | Murder       |
| 8    | Rusted      | Chains    | Imprisonment |
| 9    | Burned      | Pyre      | Execution    |
| 10   | Preserved   | Medallion | Identity     |
| J    | Silver      | Weapon    | Warden       |
| Q    | Holy        | Symbol    | Church       |
| K    | Cursed      | Artifact  | Power        |

## People

### NPC

| Card | Demeanor | Role       | Secret    |
| ---- | -------- | ---------- | --------- |
| A    | Grieving | Farmer     | Witness   |
| 2    | Weary    | Innkeeper  | Harboring |
| 3    | Cautious | Merchant   | Indebted  |
| 4    | Pious    | Priest     | Faithless |
| 5    | Shrewd   | Soldier    | Deserter  |
| 6    | Haunted  | Hunter     | Cursed    |
| 7    | Gruff    | Herbalist  | Gifted    |
| 8    | Curious  | Pilgrim    | Carrier   |
| 9    | Kind     | Blacksmith | Supplier  |
| 10   | Devoted  | Guard      | Doubtful  |
| J    | Charming | Noble      | Corrupt   |
| Q    | Defiant  | Refugee    | Impostor  |
| K    | Resolute | Warden     | Marked    |

### Appearance

| Card | Build     | Dress       | Mark       |
| ---- | --------- | ----------- | ---------- |
| A    | Gaunt     | Ragged      | Pallor     |
| 2    | Stooped   | Mended      | Calluses   |
| 3    | Weathered | Practical   | Tan        |
| 4    | Scarred   | Layered     | Limp       |
| 5    | Wiry      | Travel-worn | Dust       |
| 6    | Sturdy    | Simple      | Muscles    |
| 7    | Lean      | Plain       | Cheekbones |
| 8    | Broad     | Armored     | Tattoos    |
| 9    | Tall      | Dark        | Gaze       |
| 10   | Short     | Colorful    | Smile      |
| J    | Striking  | Fine        | Posture    |
| Q    | Aged      | Faded       | Wrinkles   |
| K    | Imposing  | Holy        | Scars      |

### Voice

| Card | Tone      | Manner     | Quirk      |
| ---- | --------- | ---------- | ---------- |
| A    | Soft      | Guarded    | Pauses     |
| 2    | Rough     | Direct     | Curses     |
| 3    | Quiet     | Tired      | Sighs      |
| 4    | Trembling | Nervous    | Repeats    |
| 5    | Sharp     | Clipped    | Interrupts |
| 6    | Deep      | Measured   | Deliberate |
| 7    | Clear     | Earnest    | Stares     |
| 8    | Cold      | Formal     | Titles     |
| 9    | Warm      | Friendly   | Laughs     |
| 10   | Lilting   | Rambling   | Gestures   |
| J    | Booming   | Confident  | Commands   |
| Q    | Honeyed   | Flattering | Watches    |
| K    | Gravelly  | Cryptic    | Riddles    |

### Wants

| Card | Want       | Motive     | Method       |
| ---- | ---------- | ---------- | ------------ |
| A    | Escape     | Fear       | Secretly     |
| 2    | Revenge    | Anger      | Patiently    |
| 3    | Answers    | Grief      | Desperately  |
| 4    | Absolution | Guilt      | Openly       |
| 5    | Safety     | Hope       | Carefully    |
| 6    | Wealth     | Need       | Ruthlessly   |
| 7    | Respect    | Pride      | Boldly       |
| 8    | Truth      | Doubt      | Quietly      |
| 9    | Peace      | Weariness  | Gently       |
| 10   | Redemption | Shame      | Relentlessly |
| J    | Power      | Ambition   | Cleverly     |
| Q    | Love       | Loneliness | Devotedly    |
| K    | Freedom    | Duty       | Violently    |

### Heraldry

| Card | Color   | Symbol  | Motto Theme |
| ---- | ------- | ------- | ----------- |
| A    | Black   | Crow    | Vigilance   |
| 2    | Grey    | Wolf    | Loyalty     |
| 3    | Rust    | Sword   | Strength    |
| 4    | Silver  | Moon    | Mystery     |
| 5    | Crimson | Thorns  | Sacrifice   |
| 6    | Gold    | Sun     | Glory       |
| 7    | White   | Tower   | Defense     |
| 8    | Green   | Oak     | Endurance   |
| 9    | Brown   | Bear    | Ferocity    |
| 10   | Purple  | Crown   | Authority   |
| J    | Blue    | Serpent | Wisdom      |
| Q    | Bone    | Skull   | Death       |
| K    | Red     | Flame   | Passion     |
