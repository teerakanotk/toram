const WEAPON = [
  {
    type: "weapon",
    title: "Blade Skill",
    href: "#blade",
    image: "/2025/skill/blade.png",
  },
  {
    type: "weapon",
    title: "Shot Skill",
    href: "#shot",
    image: "/2025/skill/shot.png",
  },
  {
    type: "weapon",
    title: "Magic Skill",
    href: "#magic",
    image: "/2025/skill/magic.png",
  },
  {
    type: "weapon",
    title: "Martial Skill",
    href: "#martial",
    image: "/2025/skill/martial.png",
  },
  {
    type: "weapon",
    title: "DualSword Skill",
    href: "#dualsword",
    image: "/2025/skill/dualsword.png",
  },
  {
    type: "weapon",
    title: "Mononofu Skill",
    href: "#mononofu",
    image: "/2025/skill/mononofu.png",
  },
  {
    type: "weapon",
    title: "Barehand Skill",
    href: "#barehand",
    image: "/2025/skill/barehand.png",
  },
  {
    type: "weapon",
    title: "Crusher Skill",
    href: "#crusher",
    image: "/2025/skill/crusher.png",
  },
  {
    type: "weapon",
    title: "Sprite Skill",
    href: "#sprite",
    image: "/2025/skill/sprite.png",
  },
];

const BUFF = [
  {
    type: "buff",
    title: "Guard Skill",
    href: "#guard",
    image: "/2025/skill/guard.png",
  },
  {
    type: "buff",
    title: "Shield Skill",
    href: "#shield",
    image: "/2025/skill/shield.png",
  },
  {
    type: "buff",
    title: "Dagger Skill",
    href: "#dagger",
    image: "/2025/skill/dagger.png",
  },
  {
    type: "buff",
    title: "Knight Skill",
    href: "#knight",
    image: "/2025/skill/knight.png",
  },
  {
    type: "buff",
    title: "Priest Skill",
    href: "#priest",
    image: "/2025/skill/priest.png",
  },
  {
    type: "buff",
    title: "Assassin Skill",
    href: "#assassin",
    image: "/2025/skill/assassin.png",
  },
  {
    type: "buff",
    title: "Wizard Skill",
    href: "#wizard",
    image: "/2025/skill/wizard.png",
  },
  {
    type: "buff",
    title: "Hunter Skill",
    href: "#hunter",
    image: "/2025/skill/hunter.png",
  },
  {
    type: "buff",
    title: "DarkPower Skill",
    href: "#darkpower",
    image: "/2025/skill/darkpower.png",
  },
  {
    type: "buff",
    title: "MagicBlade Skill",
    href: "#magicblade",
    image: "/2025/skill/magicblade.png",
  },
  {
    type: "buff",
    title: "Ninja Skill",
    href: "#ninja",
    image: "/2025/skill/ninja.png",
  },
  {
    type: "buff",
    title: "Partisan Skill",
    href: "#partisan",
    image: "/2025/skill/partisan.png",
  },
];

export const ASSIST = [
  {
    type: "assist",
    title: "Survival Skill",
    href: "#survival",
    image: "/2025/skill/survival.png",
  },
  {
    type: "assist",
    title: "Support Skill",
    href: "#support",
    image: "/2025/skill/support.png",
  },
  {
    type: "assist",
    title: "Minstrel Skill",
    href: "#minstrel",
    image: "/2025/skill/minstrel.png",
  },
  {
    type: "assist",
    title: "Dancer Skill",
    href: "#dancer",
    image: "/2025/skill/dancer.png",
  },
  {
    type: "assist",
    title: "Battle Skill",
    href: "#battle",
    image: "/2025/skill/battle.png",
  },
];

export const OTHER = [
  {
    type: "other",
    title: "Smith Skill",
    href: "#smith",
    image: "/2025/skill/smith.png",
  },
  {
    type: "other",
    title: "Alchemy Skill",
    href: "#alchemy",
    image: "/2025/skill/alchemy.png",
  },
  {
    type: "other",
    title: "Tamer Skill",
    href: "#tamer",
    image: "/2025/skill/tamer.png",
  },
  {
    type: "other",
    title: "Scroll Skill",
    href: "#scroll",
    image: undefined,
  },
];

export const SKILL = [...WEAPON, ...BUFF, ...ASSIST, ...OTHER];
