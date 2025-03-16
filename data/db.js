const EQUIPMENT_1HSWORD = [
  {
    title: "Wood Sword",
    status: {
      atk: "10",
      stability: "40",
      def: null,
      content: null,
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: null,
        level: null,
      },
    },
    image: null,
  },
  {
    title: "Shortsword",
    status: {
      atk: "10",
      stability: "80",
      def: null,
      content: null,
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: "Pico",
        level: "1",
      },
    },
    image: null,
  },
  {
    title: "Longsword",
    status: {
      atk: "17",
      stability: "80",
      def: null,
      content: "MaxHP +50 \n Accuracy +1",
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: null,
        level: null,
      },
    },
    image: null,
  },
  {
    title: "Accordion-Fold Sword",
    status: {
      atk: "1",
      stability: "40",
      def: null,
      content: "Attack MP Recovery +3 \n Aggro +30%",
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: null,
        level: null,
      },
    },
    image: null,
  },
  {
    title: "Gladius",
    status: {
      atk: "25",
      stability: "40",
      def: null,
      content: "Critical Rate +3 \n Attack Speed +10%",
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: null,
        level: null,
      },
    },
    image: null,
  },
];
const EQUIPMENT_2HSWORD = [
  {
    title: "Iron Blade",
    status: {
      atk: "15",
      stability: "70",
      def: null,
      content: "Critical Rate +5",
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: "Pico",
        level: "1",
      },
    },
    image: null,
  },
  {
    title: "Heavy Blade",
    status: {
      atk: "25",
      stability: "70",
      def: null,
      content: "Critical Damage +5% \n Accuracy -5%",
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: null,
        level: null,
      },
    },
    image: null,
  },
];

const EQUIPMENT_BOW = [
  {
    title: "Bow",
    status: {
      atk: "6",
      stability: "60",
      def: null,
      content: null,
    },
    obtain: {
      npc: "Blacksmith",
      smith: true,
      monster: {
        name: null,
        level: null,
      },
    },
    image: null,
  },
];

export const EQUIPMENT = {
  "1h-sword": EQUIPMENT_1HSWORD,
  "2h-sword": EQUIPMENT_2HSWORD,
  bow: EQUIPMENT_BOW,
};
