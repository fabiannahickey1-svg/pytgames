export interface GameGroup {
  name: string;
  terms: string[];
}

export interface GameSet {
  id: string;
  unit: number;
  title: string;
  subject: string;
  groups: GameGroup[];
}

export const gameSets: GameSet[] = [
  {
    id: "unit-5",
    unit: 5,
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Causes of the Civil War",
        terms: ["Kansas-Nebraska Act", "Dred Scott", "John Brown's Raid", "Bleeding Kansas"],
      },
      {
        name: "Civil War Battles",
        terms: ["Gettysburg", "Antietam", "Fort Sumter", "Vicksburg"],
      },
      {
        name: "Reconstruction Amendments",
        terms: ["13th Amendment", "14th Amendment", "15th Amendment", "Civil Rights Act 1866"],
      },
      {
        name: "Key Figures",
        terms: ["Abraham Lincoln", "Frederick Douglass", "Ulysses S. Grant", "Robert E. Lee"],
      },
    ],
  },
  {
    id: "unit-6",
    unit: 6,
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Industrialists",
        terms: ["Andrew Carnegie", "John D. Rockefeller", "J.P. Morgan", "Cornelius Vanderbilt"],
      },
      {
        name: "Progressive Reforms",
        terms: ["Pure Food & Drug Act", "19th Amendment", "Initiative & Referendum", "Sherman Antitrust Act"],
      },
      {
        name: "Labor Movement",
        terms: ["AFL", "Pullman Strike", "Haymarket Affair", "Knights of Labor"],
      },
      {
        name: "Immigration & Urbanization",
        terms: ["Ellis Island", "Settlement Houses", "Tenements", "Chinese Exclusion Act"],
      },
    ],
  },
  {
    id: "unit-7",
    unit: 7,
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "World War I",
        terms: ["Lusitania", "Zimmermann Telegram", "Treaty of Versailles", "League of Nations"],
      },
      {
        name: "Roaring Twenties Culture",
        terms: ["Harlem Renaissance", "Flappers", "Jazz Age", "Prohibition"],
      },
      {
        name: "Great Depression",
        terms: ["Black Tuesday", "Dust Bowl", "Hoovervilles", "Bank Failures"],
      },
      {
        name: "New Deal Programs",
        terms: ["CCC", "Social Security Act", "TVA", "WPA"],
      },
    ],
  },
  {
    id: "cold-war-1",
    unit: 8,
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

export function getGameByUnit(unit: number): GameSet | undefined {
  return gameSets.find((g) => g.unit === unit);
}
