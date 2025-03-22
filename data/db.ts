interface EQUIPMENT {
  id: number;
  name: string;
  type: string;
  status: {
    atk: number;
    stability: number;
    def: number | null;
    description: string | null;
  };
  obtain: {
    npc: boolean;
    smith: boolean;
    monster: {
      name: string;
      level: number;
    };
  };
  image: string | null;
}

export const equipment: EQUIPMENT[] = [
  {
    id: 1,
    name: "Wood Sword",
    type: "1h-sword",
    status: {
      atk: 10,
      stability: 40,
      def: null,
      description: null,
    },
    obtain: {
      npc: true,
      smith: true,
      monster: {
        name: "colon",
        level: 10,
      },
    },
    image: null,
  },
  {
    id: 2,
    name: "Bow",
    type: "bow",
    status: {
      atk: 10,
      stability: 40,
      def: null,
      description: null,
    },
    obtain: {
      npc: true,
      smith: true,
      monster: {
        name: "colon",
        level: 10,
      },
    },
    image: null,
  },
  {
    id: 3,
    name: "Adventure's Garb",
    type: "body-armor",
    status: {
      atk: null,
      stability: null,
      def: 9,
      description: "MaxHP +10",
    },
    obtain: {
      npc: true,
      smith: true,
      monster: {
        name: "colon",
        level: 10,
      },
    },
    image: null,
  },
];
