export interface GameGroup {
  name: string;
  terms: string[];
}

export interface GameSet {
  id: string;
  title: string;
  subject: string;
  groups: GameGroup[];
}

export const gameSets: GameSet[] = [
  {
    id: "cold-war-1",
    title: "Cold War & Unit 7/8",
    subject: "APUSH",
    groups: [
      {
        name: "Containment Policies",
        terms: ["Truman Doctrine", "Marshall Plan", "NATO", "Domino Theory"],
      },
      {
        name: "Cold War Crises",
        terms: ["Bay of Pigs", "Cuban Missile Crisis", "Berlin Airlift", "Korean War"],
      },
      {
        name: "Civil Rights Leaders",
        terms: ["MLK Jr.", "Rosa Parks", "Malcolm X", "Thurgood Marshall"],
      },
      {
        name: "Domestic Programs",
        terms: ["Great Society", "New Frontier", "Interstate Highways", "GI Bill"],
      },
    ],
  },
];
