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
    id: "unit-1",
    unit: 1,
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Native American Societies",
        terms: ["Pueblo", "Iroquois Confederacy", "Mississippian", "Aztec"],
      },
      {
        name: "Spanish Conquistadors",
        terms: ["Hernán Cortés", "Francisco Pizarro", "Hernando de Soto", "Christopher Columbus"],
      },
      {
        name: "Columbian Exchange (To Americas)",
        terms: ["Smallpox", "Horses", "Cattle", "Wheat"],
      },
      {
        name: "Colonial Labor & Control",
        terms: ["Encomienda", "Mestizo", "Catholic Missionaries", "Repartimiento"],
      },
    ],
  },
  {
    id: "unit-2",
    unit: 2,
    title: "Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "New England Colonies",
        terms: ["Mayflower Compact", "Puritans", "Salem Witch Trials", "Town Meetings"],
      },
      {
        name: "Southern Colonies",
        terms: ["Jamestown", "Tobacco Economy", "Indentured Servants", "Bacon's Rebellion"],
      },
      {
        name: "Colonial Conflicts",
        terms: ["King Philip's War", "Pueblo Revolt", "Stono Rebellion", "Pequot War"],
      },
      {
        name: "Middle Colonies",
        terms: ["William Penn", "Quakers", "New Amsterdam", "Patroon System"],
      },
    ],
  },
  {
    id: "unit-3",
    unit: 3,
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Causes of Revolution",
        terms: ["Stamp Act", "Boston Massacre", "Intolerable Acts", "Common Sense"],
      },
      {
        name: "Revolutionary War",
        terms: ["Valley Forge", "Saratoga", "Yorktown", "Treaty of Paris 1783"],
      },
      {
        name: "Founding Documents",
        terms: ["Declaration of Independence", "Articles of Confederation", "Constitution", "Bill of Rights"],
      },
      {
        name: "Early Republic Debates",
        terms: ["Federalists", "Anti-Federalists", "XYZ Affair", "Alien & Sedition Acts"],
      },
    ],
  },
  {
    id: "unit-4",
    unit: 4,
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Market Revolution",
        terms: ["Erie Canal", "Lowell Mills", "Cotton Gin", "Interchangeable Parts"],
      },
      {
        name: "Jacksonian Democracy",
        terms: ["Indian Removal Act", "Nullification Crisis", "Spoils System", "Bank War"],
      },
      {
        name: "Reform Movements",
        terms: ["Temperance Movement", "Seneca Falls Convention", "Abolitionism", "Horace Mann"],
      },
      {
        name: "Expansion & Sectionalism",
        terms: ["Louisiana Purchase", "Missouri Compromise", "Monroe Doctrine", "Manifest Destiny"],
      },
    ],
  },
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
  {
    id: "unit-9",
    unit: 9,
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Reagan Revolution",
        terms: ["Reaganomics", "Supply-Side Economics", "Iran-Contra Affair", "Cold War Escalation"],
      },
      {
        name: "End of the Cold War",
        terms: ["Fall of Berlin Wall", "Soviet Collapse", "Gulf War", "NAFTA"],
      },
      {
        name: "Post-9/11 America",
        terms: ["USA PATRIOT Act", "War in Afghanistan", "Iraq War", "Department of Homeland Security"],
      },
      {
        name: "Contemporary Issues",
        terms: ["Great Recession", "Tea Party Movement", "Affordable Care Act", "Black Lives Matter"],
      },
    ],
  },
];

export function getGameByUnit(unit: number): GameSet | undefined {
  return gameSets.find((g) => g.unit === unit);
}
