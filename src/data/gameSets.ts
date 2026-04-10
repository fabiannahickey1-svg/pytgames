export interface GameTerm {
  term: string;
  definition: string;
}

export interface GameGroup {
  name: string;
  terms: GameTerm[];
}

export interface GameSet {
  id: string;
  unit: number;
  puzzle?: number;   // 1-indexed; defaults to 1 if omitted
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
        terms: [
          { term: "Pueblo", definition: "Southwestern farming peoples who built multi-story stone and adobe villages in what is now New Mexico and Arizona." },
          { term: "Iroquois Confederacy", definition: "Alliance of five (later six) northeastern Native nations united under a shared democratic government before European contact." },
          { term: "Mississippian", definition: "Mound-building culture of the Mississippi River Valley known for large ceremonial earthworks and maize agriculture." },
          { term: "Aztec", definition: "Powerful Mesoamerican empire centered at Tenochtitlán, conquered by Spanish forces under Hernán Cortés in 1521." },
        ],
      },
      {
        name: "Spanish Conquistadors",
        terms: [
          { term: "Hernán Cortés", definition: "Spanish conquistador who conquered the Aztec Empire in 1521, claiming Mexico for Spain." },
          { term: "Francisco Pizarro", definition: "Spanish conquistador who defeated the Inca Empire in Peru in the 1530s, opening South America to Spanish colonization." },
          { term: "Hernando de Soto", definition: "Spanish explorer who led the first European expedition through the southeastern United States in search of gold." },
          { term: "Christopher Columbus", definition: "Italian explorer sailing for Spain who reached the Americas in 1492, initiating sustained contact between Europe and the New World." },
        ],
      },
      {
        name: "Columbian Exchange (To Americas)",
        terms: [
          { term: "Smallpox", definition: "Deadly disease brought by Europeans that killed millions of Native Americans who had no prior immunity to it." },
          { term: "Horses", definition: "European animals introduced to the Americas that transformed the hunting and warfare practices of Plains Native peoples." },
          { term: "Cattle", definition: "European livestock brought to the Americas that reshaped land use and diets across the continent." },
          { term: "Wheat", definition: "European grain introduced to the Americas that became a major staple crop across the continent." },
        ],
      },
      {
        name: "Colonial Labor & Control",
        terms: [
          { term: "Encomienda", definition: "Spanish colonial labor system granting settlers the right to demand tribute and labor from Native peoples in exchange for protection and religious instruction." },
          { term: "Mestizo", definition: "Person of mixed Spanish and Native American ancestry; a major social category in Spanish colonial society." },
          { term: "Catholic Missionaries", definition: "Spanish priests who sought to convert Native Americans to Christianity, often forcing them to abandon their own cultures." },
          { term: "Repartimiento", definition: "Spanish forced labor system requiring Native Americans to perform rotating periods of labor for the colonial government." },
        ],
      },
    ],
  },
  {
    id: "unit-1-2",
    unit: 1,
    puzzle: 2,
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Columbian Exchange (From Americas)",
        terms: [
          { term: "Corn", definition: "Staple crop domesticated in Mesoamerica and introduced to Europe after 1492; became a vital food source across the world." },
          { term: "Potatoes", definition: "South American crop brought to Europe after contact; became a dietary staple, especially in Ireland and Eastern Europe." },
          { term: "Tobacco", definition: "Native American plant introduced to Europe after contact; became a major cash crop in the English colonies and fueled demand for enslaved labor." },
          { term: "Tomatoes", definition: "Mesoamerican fruit introduced to Europe after 1492; transformed European cuisines, especially in Spain and Italy." },
        ],
      },
      {
        name: "Native Peoples of North America",
        terms: [
          { term: "Algonquian", definition: "Diverse group of Native peoples along the Eastern Seaboard who first encountered English settlers; spoke a family of related languages." },
          { term: "Cherokee", definition: "Southeastern Native nation with a complex society; later developed a written language and were forcibly removed on the Trail of Tears in 1838." },
          { term: "Powhatan", definition: "Powerful confederacy of Algonquian-speaking tribes in the Virginia tidewater region; chief Wahunsenacah led them at the time of English settlement at Jamestown." },
          { term: "Sioux", definition: "Large nation of the Great Plains known for buffalo hunting and horse culture; later led major resistance to U.S. westward expansion in the 19th century." },
        ],
      },
      {
        name: "Non-Spanish Explorers",
        terms: [
          { term: "Henry Hudson", definition: "English explorer sailing for the Dutch who explored the Hudson River (1609), establishing Dutch claims to the region that became New Netherland." },
          { term: "Jacques Cartier", definition: "French explorer who sailed the St. Lawrence River in the 1530s, claiming the region for France and laying the groundwork for New France." },
          { term: "John Cabot", definition: "Italian explorer sailing for England who reached North America in 1497, providing the basis for England's later colonial land claims." },
          { term: "Giovanni da Verrazzano", definition: "Italian explorer sailing for France who explored the Atlantic coast of North America in 1524, including what is now New York Harbor." },
        ],
      },
      {
        name: "Spanish Colonial Systems",
        terms: [
          { term: "Hacienda", definition: "Large Spanish-owned landed estate worked by Native or mestizo laborers; the dominant economic unit of the Spanish colonial countryside." },
          { term: "Viceroy", definition: "Royal governor who administered a large Spanish colonial territory (viceroyalty) on behalf of the Spanish crown." },
          { term: "Casta System", definition: "Spanish colonial racial hierarchy classifying people by ancestry — Spanish, Indigenous, African, and mixed — which determined social and legal status." },
          { term: "Syncretism", definition: "Blending of Native American and Catholic religious beliefs and practices that emerged as Indigenous peoples adapted to Spanish colonization." },
        ],
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
        terms: [
          { term: "Mayflower Compact", definition: "1620 agreement among Pilgrim settlers establishing self-governance in Plymouth, an early precedent for democratic rule." },
          { term: "Puritans", definition: "English Calvinist settlers who founded Massachusetts Bay Colony seeking to reform the Church of England and build a godly community." },
          { term: "Salem Witch Trials", definition: "1692 crisis in Massachusetts in which 20 people were executed after mass hysteria led to accusations of witchcraft." },
          { term: "Town Meetings", definition: "New England practice of direct democratic governance where colonists gathered to debate and vote on local laws and issues." },
        ],
      },
      {
        name: "Southern Colonies",
        terms: [
          { term: "Jamestown", definition: "First permanent English settlement in America (1607), founded in Virginia and nearly destroyed by disease and starvation." },
          { term: "Tobacco Economy", definition: "Virginia's plantation-based economy centered on tobacco, which drove demand for cheap labor including enslaved Africans." },
          { term: "Indentured Servants", definition: "Workers who traded several years of labor for passage to the colonies; a key labor source before slavery expanded." },
          { term: "Bacon's Rebellion", definition: "1676 armed uprising in Virginia led by Nathaniel Bacon against the colonial government, driven by frontier grievances and economic inequality." },
        ],
      },
      {
        name: "Colonial Conflicts",
        terms: [
          { term: "King Philip's War", definition: "1675–1676 conflict between New England colonists and a Native alliance led by Metacom, one of the bloodiest per-capita wars in American history." },
          { term: "Pueblo Revolt", definition: "1680 uprising in which Pueblo peoples expelled Spanish colonizers from New Mexico for 12 years in response to forced labor and religious suppression." },
          { term: "Stono Rebellion", definition: "1739 slave revolt in South Carolina in which enslaved Africans marched toward Spanish Florida seeking freedom, the largest slave uprising in colonial America." },
          { term: "Pequot War", definition: "1636–1638 conflict between English colonists and the Pequot tribe in Connecticut, resulting in the near-destruction of the Pequot people." },
        ],
      },
      {
        name: "Middle Colonies",
        terms: [
          { term: "William Penn", definition: "Quaker founder of Pennsylvania who established a colony based on religious tolerance and fair dealings with Native Americans." },
          { term: "Quakers", definition: "Religious group (Society of Friends) who settled Pennsylvania; known for pacifism, equality, and early opposition to slavery." },
          { term: "New Amsterdam", definition: "Dutch colonial settlement on Manhattan Island, captured by England in 1664 and renamed New York." },
          { term: "Patroon System", definition: "Dutch colonial land-grant system giving large estates to wealthy landlords who brought settlers to farm the land in New Netherland." },
        ],
      },
    ],
  },
  {
    id: "unit-2-2",
    unit: 2,
    puzzle: 2,
    title: "Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Colonial Economy",
        terms: [
          { term: "Mercantilism", definition: "Economic theory that colonies exist to enrich the mother country by providing raw materials and buying finished goods; guided British colonial policy." },
          { term: "Navigation Acts", definition: "Series of British laws requiring colonial trade to pass through English ships and ports, benefiting British merchants at colonial expense." },
          { term: "Triangular Trade", definition: "Three-way Atlantic trade network linking the Americas, Europe, and Africa; colonists traded raw goods for manufactured items and enslaved people." },
          { term: "Salutary Neglect", definition: "Unofficial British policy of loosely enforcing trade laws in the colonies, allowing them to develop economically with little interference." },
        ],
      },
      {
        name: "The Great Awakening",
        terms: [
          { term: "Jonathan Edwards", definition: "Puritan minister who led the Great Awakening with fiery sermons like 'Sinners in the Hands of an Angry God,' emphasizing human sinfulness and God's power." },
          { term: "George Whitefield", definition: "Charismatic English preacher who toured the colonies in the 1730s–40s, drawing massive crowds and helping ignite the Great Awakening." },
          { term: "New Lights", definition: "Supporters of the Great Awakening who embraced emotional, revivalist religion and challenged the authority of established churches." },
          { term: "Enlightenment", definition: "18th-century intellectual movement emphasizing reason, science, and individual rights; influenced American founders like Jefferson, Franklin, and Madison." },
        ],
      },
      {
        name: "Types of Colonies",
        terms: [
          { term: "Proprietary Colony", definition: "Colony granted by the king to a private individual or group who governed it, such as Pennsylvania (Penn) and Maryland (Calvert)." },
          { term: "Royal Colony", definition: "Colony under direct control of the English crown, governed by a royal governor appointed by the king; Virginia became the first in 1624." },
          { term: "Charter Colony", definition: "Colony governed by a royal charter giving colonists significant self-rule; Connecticut and Rhode Island operated this way." },
          { term: "Dominion of New England", definition: "1686–1689 attempt by King James II to consolidate New England colonies under a single royal governor, eliminating their assemblies; ended with the Glorious Revolution." },
        ],
      },
      {
        name: "Slavery in Colonial America",
        terms: [
          { term: "Middle Passage", definition: "Brutal transatlantic voyage that brought enslaved Africans to the Americas; millions died from disease, violence, and starvation in overcrowded ships." },
          { term: "Slave Codes", definition: "Colonial laws that stripped enslaved people of all legal rights, defined slavery as a lifelong hereditary condition, and tightly controlled their daily lives." },
          { term: "Chattel Slavery", definition: "System in which enslaved people were treated as personal property that could be bought, sold, and inherited, with no legal rights whatsoever." },
          { term: "African Diaspora", definition: "Forced dispersal of millions of African people across the Atlantic world through the slave trade, creating diverse African-descended communities in the Americas." },
        ],
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
        terms: [
          { term: "Stamp Act", definition: "1765 British tax on printed materials in the colonies, provoking widespread protest under the slogan 'no taxation without representation.'" },
          { term: "Boston Massacre", definition: "1770 confrontation in which British soldiers fired on a crowd of colonists, killing five and inflaming anti-British sentiment." },
          { term: "Intolerable Acts", definition: "1774 British laws punishing Massachusetts after the Boston Tea Party, which united the colonies against British authority." },
          { term: "Common Sense", definition: "1776 pamphlet by Thomas Paine arguing for American independence from Britain, widely read and hugely influential in shifting colonial opinion." },
        ],
      },
      {
        name: "Revolutionary War",
        terms: [
          { term: "Valley Forge", definition: "Harsh 1777–1778 winter encampment of Washington's Continental Army; soldiers endured extreme cold and starvation but emerged more disciplined." },
          { term: "Saratoga", definition: "1777 American victory over British forces in New York that convinced France to enter the war as an American ally." },
          { term: "Yorktown", definition: "1781 siege where American and French forces trapped British General Cornwallis, effectively ending the Revolutionary War." },
          { term: "Treaty of Paris 1783", definition: "Peace agreement ending the Revolutionary War in which Britain recognized American independence and ceded territory east of the Mississippi River." },
        ],
      },
      {
        name: "Founding Documents",
        terms: [
          { term: "Declaration of Independence", definition: "1776 document proclaiming American independence from Britain and asserting natural rights including life, liberty, and the pursuit of happiness." },
          { term: "Articles of Confederation", definition: "America's first national constitution (1781–1789), which created a weak central government unable to tax or regulate commerce." },
          { term: "Constitution", definition: "1787 document establishing the current U.S. government with three branches and a system of checks and balances." },
          { term: "Bill of Rights", definition: "First ten amendments to the Constitution (1791), guaranteeing individual freedoms such as speech, religion, and due process." },
        ],
      },
      {
        name: "Early Republic Debates",
        terms: [
          { term: "Federalists", definition: "Political faction led by Hamilton and Adams who favored a strong central government and ratification of the Constitution." },
          { term: "Anti-Federalists", definition: "Opponents of the Constitution who feared centralized power and demanded a Bill of Rights to protect individual liberties." },
          { term: "XYZ Affair", definition: "1797 diplomatic scandal in which French agents demanded bribes from U.S. diplomats, sparking an undeclared naval war with France." },
          { term: "Alien & Sedition Acts", definition: "1798 laws that made it illegal to criticize the government and restricted immigration; seen by opponents as unconstitutional violations of free speech." },
        ],
      },
    ],
  },
  {
    id: "unit-3-2",
    unit: 3,
    puzzle: 2,
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Founding Fathers",
        terms: [
          { term: "George Washington", definition: "Commander of the Continental Army and first U.S. President; set key precedents including the two-term limit and civilian control of the military." },
          { term: "Thomas Jefferson", definition: "Author of the Declaration of Independence and third U.S. President; championed agrarian democracy, states' rights, and religious freedom." },
          { term: "James Madison", definition: "'Father of the Constitution' who drafted the Virginia Plan and the Bill of Rights; fourth U.S. President during the War of 1812." },
          { term: "John Adams", definition: "First Vice President and second U.S. President; a Federalist who navigated foreign crises and lost reelection to Jefferson in the 'Revolution of 1800.'" },
        ],
      },
      {
        name: "Hamilton's Economic Plan",
        terms: [
          { term: "National Bank", definition: "Hamilton's proposal for a federally chartered bank to stabilize currency and manage government finances; controversial but upheld in McCulloch v. Maryland (1819)." },
          { term: "Assumption of Debt", definition: "Hamilton's plan for the federal government to take over states' Revolutionary War debts, binding states more closely to the national government." },
          { term: "Protective Tariff", definition: "Tax on imported goods designed to shield American manufacturers from foreign competition; central to Hamilton's vision for an industrial economy." },
          { term: "Whiskey Rebellion", definition: "1794 uprising by western Pennsylvania farmers against a federal excise tax on whiskey; Washington's use of troops demonstrated federal authority under the new Constitution." },
        ],
      },
      {
        name: "Early Foreign Policy",
        terms: [
          { term: "Jay's Treaty", definition: "1794 agreement with Britain resolving lingering Revolutionary War disputes; criticized as too favorable to Britain and bitterly opposed by Democratic-Republicans." },
          { term: "Pinckney's Treaty", definition: "1795 agreement with Spain granting Americans navigation rights on the Mississippi River and access to the port of New Orleans." },
          { term: "Proclamation of Neutrality", definition: "Washington's 1793 declaration that the U.S. would not take sides in the war between France and Britain, establishing a precedent for American neutrality." },
          { term: "Washington's Farewell Address", definition: "1796 speech warning against permanent foreign alliances and political factions; shaped American foreign policy for over a century." },
        ],
      },
      {
        name: "Post-Revolution Society",
        terms: [
          { term: "Republican Motherhood", definition: "Post-Revolution ideal that women's role was to raise virtuous, patriotic citizens; expanded women's access to education while keeping them in the domestic sphere." },
          { term: "Northwest Ordinance", definition: "1787 law governing settlement of the Northwest Territory; established a path to statehood and banned slavery north of the Ohio River." },
          { term: "Gradual Emancipation", definition: "Post-Revolution process in northern states of slowly freeing enslaved people over time; did not apply to the South, deepening the sectional divide over slavery." },
          { term: "Land Ordinance of 1785", definition: "Law dividing western lands into townships for organized sale, funding public education and enabling orderly settlement of the frontier." },
        ],
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
        terms: [
          { term: "Erie Canal", definition: "1825 artificial waterway linking the Great Lakes to New York City, dramatically cutting shipping costs and boosting western settlement." },
          { term: "Lowell Mills", definition: "Massachusetts textile factories that employed young women workers, pioneering industrial labor practices in early America." },
          { term: "Cotton Gin", definition: "1793 machine invented by Eli Whitney that rapidly separated cotton fibers from seeds, expanding cotton production and demand for enslaved labor." },
          { term: "Interchangeable Parts", definition: "Manufacturing method using standardized, identical components that allowed mass production and easy repair of goods." },
        ],
      },
      {
        name: "Jacksonian Democracy",
        terms: [
          { term: "Indian Removal Act", definition: "1830 law signed by President Jackson authorizing the forced relocation of Native American tribes from the Southeast to west of the Mississippi." },
          { term: "Nullification Crisis", definition: "1832–1833 standoff in which South Carolina claimed the right to void a federal tariff, threatening secession; Jackson responded forcefully." },
          { term: "Spoils System", definition: "Practice of rewarding political supporters with government jobs; expanded under Jackson and later called 'patronage.'" },
          { term: "Bank War", definition: "Jackson's campaign against the Second Bank of the United States, which he saw as a tool of the wealthy elite; he vetoed its recharter in 1832." },
        ],
      },
      {
        name: "Reform Movements",
        terms: [
          { term: "Temperance Movement", definition: "19th-century campaign to reduce or eliminate alcohol consumption, often led by women and linked to broader moral reform efforts." },
          { term: "Seneca Falls Convention", definition: "1848 women's rights gathering in New York that produced the Declaration of Sentiments demanding equal rights, including the right to vote." },
          { term: "Abolitionism", definition: "Movement demanding the immediate end to slavery, led by figures like Frederick Douglass, William Lloyd Garrison, and Harriet Tubman." },
          { term: "Horace Mann", definition: "Massachusetts education reformer who championed public schooling and teacher training in the 1830s–40s, expanding access to education." },
        ],
      },
      {
        name: "Expansion & Sectionalism",
        terms: [
          { term: "Louisiana Purchase", definition: "1803 land deal in which the U.S. bought roughly 828,000 square miles from France, doubling the size of the country." },
          { term: "Missouri Compromise", definition: "1820 agreement admitting Missouri as a slave state and Maine as a free state, banning slavery north of 36°30' in the Louisiana Territory." },
          { term: "Monroe Doctrine", definition: "1823 foreign policy statement declaring the Western Hemisphere off-limits to further European colonization, asserting U.S. dominance in the Americas." },
          { term: "Manifest Destiny", definition: "19th-century belief that American expansion across the continent to the Pacific was inevitable, justified, and divinely ordained." },
        ],
      },
    ],
  },
  {
    id: "unit-4-2",
    unit: 4,
    puzzle: 2,
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Antebellum Culture",
        terms: [
          { term: "Second Great Awakening", definition: "Early 19th-century religious revival emphasizing personal salvation and social reform; inspired abolition, temperance, and women's rights movements." },
          { term: "Transcendentalism", definition: "Philosophical movement led by Emerson and Thoreau stressing individual conscience, the spiritual power of nature, and rejection of materialism." },
          { term: "Utopian Communities", definition: "Experimental communities like Brook Farm and the Oneida Community that attempted to build ideal societies based on shared values and cooperative labor." },
          { term: "Nativism", definition: "Anti-immigrant sentiment targeting Catholic Irish and German newcomers; led to the formation of the Know-Nothing Party in the 1840s–50s." },
        ],
      },
      {
        name: "Transportation Revolution",
        terms: [
          { term: "National Road", definition: "First major federally funded highway stretching from Maryland to Illinois; stimulated westward migration and interstate commerce." },
          { term: "Steamboats", definition: "Steam-powered riverboats that dramatically cut travel time on American rivers, integrating the inland economy and enabling rapid westward trade." },
          { term: "Railroads", definition: "Expanding rail network of the 1830s–50s that transformed transportation, linked distant markets, and accelerated industrialization." },
          { term: "Turnpikes", definition: "Privately built toll roads that improved overland travel and commerce in the early 19th century, often funded by state-chartered companies." },
        ],
      },
      {
        name: "Westward Expansion",
        terms: [
          { term: "Texas Annexation", definition: "1845 admission of Texas to the Union after its independence from Mexico; escalated tensions that led directly to the Mexican-American War." },
          { term: "Oregon Trail", definition: "2,000-mile overland route used by hundreds of thousands of settlers migrating to the Pacific Northwest between the 1840s and 1860s." },
          { term: "Mexican-American War", definition: "1846–1848 conflict triggered by the Texas border dispute; the U.S. victory resulted in Mexico ceding nearly half its territory." },
          { term: "Treaty of Guadalupe Hidalgo", definition: "1848 peace treaty ending the Mexican-American War; Mexico ceded present-day California, New Mexico, Arizona, Nevada, Utah, and Colorado to the U.S." },
        ],
      },
      {
        name: "Antebellum Slavery",
        terms: [
          { term: "Underground Railroad", definition: "Network of secret routes and safe houses that helped enslaved people escape to freedom in the North and Canada, aided by 'conductors' like Harriet Tubman." },
          { term: "Harriet Tubman", definition: "Escaped enslaved woman who made 13 missions to rescue approximately 70 people via the Underground Railroad; later served as a Union spy during the Civil War." },
          { term: "Nat Turner's Rebellion", definition: "1831 Virginia slave revolt that killed 55 white people; led to harsher slave codes across the South and suppression of abolitionist literature." },
          { term: "Slave Auctions", definition: "Public sales at which enslaved people were bought and sold, often separating families; a central symbol of slavery's brutality targeted by abolitionists." },
        ],
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
        terms: [
          { term: "Kansas-Nebraska Act", definition: "1854 law allowing settlers of new territories to vote on whether to allow slavery, effectively repealing the Missouri Compromise." },
          { term: "Dred Scott", definition: "Enslaved man who sued for his freedom; the 1857 Supreme Court ruling declared Black people were not citizens and Congress could not ban slavery in the territories." },
          { term: "John Brown's Raid", definition: "1859 armed assault on Harpers Ferry, Virginia by abolitionist John Brown attempting to spark a slave revolt; he was captured and executed." },
          { term: "Bleeding Kansas", definition: "1854–1861 wave of violent conflict between pro-slavery and antislavery settlers in Kansas following the Kansas-Nebraska Act." },
        ],
      },
      {
        name: "Civil War Battles",
        terms: [
          { term: "Gettysburg", definition: "July 1863 battle in Pennsylvania; the Union victory ended the Confederacy's last major northern invasion and was a turning point of the war." },
          { term: "Antietam", definition: "September 1862 battle in Maryland; the bloodiest single day in U.S. history; Union victory gave Lincoln cover to issue the Emancipation Proclamation." },
          { term: "Fort Sumter", definition: "April 1861 Confederate attack on a Union fort in South Carolina that started the Civil War." },
          { term: "Vicksburg", definition: "July 1863 Union siege of a Mississippi River fortress; its fall gave the Union control of the river and split the Confederacy in two." },
        ],
      },
      {
        name: "Reconstruction Amendments",
        terms: [
          { term: "13th Amendment", definition: "1865 constitutional amendment abolishing slavery throughout the United States." },
          { term: "14th Amendment", definition: "1868 constitutional amendment granting citizenship to all persons born in the U.S. and guaranteeing equal protection under the law." },
          { term: "15th Amendment", definition: "1870 constitutional amendment prohibiting states from denying the right to vote based on race, color, or previous condition of servitude." },
          { term: "Civil Rights Act 1866", definition: "First federal law to define citizenship and affirm that all citizens are equally protected by the law, later reinforced by the 14th Amendment." },
        ],
      },
      {
        name: "Key Figures",
        terms: [
          { term: "Abraham Lincoln", definition: "16th U.S. President who led the nation through the Civil War, issued the Emancipation Proclamation, and was assassinated in 1865." },
          { term: "Frederick Douglass", definition: "Escaped enslaved man who became a leading abolitionist speaker and writer, advocating for Black equality before and after the Civil War." },
          { term: "Ulysses S. Grant", definition: "Union general who led the Army to victory in the Civil War; later served two terms as president during Reconstruction." },
          { term: "Robert E. Lee", definition: "Commander of the Confederate Army of Northern Virginia and the Confederacy's greatest general; surrendered at Appomattox in 1865." },
        ],
      },
    ],
  },
  {
    id: "unit-5-2",
    unit: 5,
    puzzle: 2,
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Civil War Policies",
        terms: [
          { term: "Emancipation Proclamation", definition: "Lincoln's 1863 executive order declaring enslaved people in Confederate states 'forever free,' transforming the war into a fight against slavery." },
          { term: "Conscription Acts", definition: "Civil War draft laws passed by both the Union and Confederacy; the Union's 1863 draft sparked violent riots in New York City by working-class men who could not buy exemptions." },
          { term: "Copperheads", definition: "Northern Democrats who opposed the Civil War and called for a negotiated peace with the Confederacy; Lincoln's administration suppressed some of their activities." },
          { term: "Total War", definition: "Military strategy used by Union General Sherman targeting civilian infrastructure and morale to break the South's will and ability to fight." },
        ],
      },
      {
        name: "Reconstruction Plans",
        terms: [
          { term: "Lincoln's 10% Plan", definition: "Lincoln's lenient Reconstruction proposal allowing a Southern state to rejoin the Union when 10% of its 1860 voters swore loyalty and accepted emancipation." },
          { term: "Radical Republicans", definition: "Congressional faction demanding harsh Reconstruction terms, full protection of Black civil rights, and punishment of Confederate leaders." },
          { term: "Freedmen's Bureau", definition: "Federal agency (1865–1872) providing food, education, and legal assistance to formerly enslaved people and poor white Southerners after the Civil War." },
          { term: "Wade-Davis Bill", definition: "1864 Radical Republican Reconstruction plan requiring 50% of a state's voters to swear loyalty before readmission; passed Congress but was pocket-vetoed by Lincoln." },
        ],
      },
      {
        name: "Resistance to Reconstruction",
        terms: [
          { term: "Carpetbaggers", definition: "Derogatory term for Northerners who moved to the South after the Civil War, often to participate in Reconstruction governments or business opportunities." },
          { term: "Scalawags", definition: "Derogatory term for white Southerners who supported the Republican Party during Reconstruction, viewed as traitors by former Confederates." },
          { term: "Ku Klux Klan", definition: "Terrorist organization founded in 1865 that used violence and intimidation against Black Southerners and white Republicans to undermine Reconstruction." },
          { term: "Black Codes", definition: "Laws passed by Southern states after the Civil War to restrict the freedom of Black people and maintain a cheap agricultural labor force close to enslavement." },
        ],
      },
      {
        name: "End of Reconstruction",
        terms: [
          { term: "Compromise of 1877", definition: "Backroom deal settling the disputed 1876 election; Hayes became president in exchange for withdrawing federal troops from the South, effectively ending Reconstruction." },
          { term: "Sharecropping", definition: "System in which formerly enslaved people farmed land owned by whites in exchange for a share of the crop; kept Black Southerners in a cycle of debt and poverty." },
          { term: "Redeemer Democrats", definition: "White Southern Democrats who 'redeemed' Southern states from Republican Reconstruction governments by disenfranchising Black voters and restoring white supremacy." },
          { term: "Poll Taxes", definition: "Fees required to vote, used after Reconstruction to prevent poor Black Southerners from participating in elections; banned in federal elections by the 24th Amendment (1964)." },
        ],
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
        terms: [
          { term: "Andrew Carnegie", definition: "Steel magnate who built one of the largest fortunes in American history through vertical integration and later gave away most of his wealth." },
          { term: "John D. Rockefeller", definition: "Oil magnate who used horizontal integration to control the Standard Oil monopoly, dominating the American petroleum industry." },
          { term: "J.P. Morgan", definition: "Powerful banker and financier who reorganized railroads, created U.S. Steel, and bailed out the federal government during financial crises." },
          { term: "Cornelius Vanderbilt", definition: "Railroad and shipping tycoon who built one of the largest railroad networks in the country after the Civil War." },
        ],
      },
      {
        name: "Progressive Reforms",
        terms: [
          { term: "Pure Food & Drug Act", definition: "1906 law requiring honest labeling of food and medicine, sparked in part by Upton Sinclair's exposé of the meatpacking industry." },
          { term: "19th Amendment", definition: "1920 constitutional amendment granting women the right to vote, the culmination of decades of suffrage activism." },
          { term: "Initiative & Referendum", definition: "Progressive-era reforms allowing citizens to propose laws (initiative) and vote directly on legislation (referendum), bypassing state legislatures." },
          { term: "Sherman Antitrust Act", definition: "1890 law prohibiting business monopolies and practices that restrained trade, used to break up trusts under Presidents Cleveland and Roosevelt." },
        ],
      },
      {
        name: "Labor Movement",
        terms: [
          { term: "AFL", definition: "American Federation of Labor; craft union founded by Samuel Gompers in 1886, focused on skilled workers' wages and conditions rather than radical reform." },
          { term: "Pullman Strike", definition: "1894 national railroad strike led by Eugene Debs that paralyzed rail traffic until President Cleveland sent federal troops to break it." },
          { term: "Haymarket Affair", definition: "1886 Chicago labor rally that turned violent when a bomb exploded killing police officers, severely damaging the labor movement's public image." },
          { term: "Knights of Labor", definition: "Early national labor union open to all workers regardless of skill, race, or gender; declined sharply after the Haymarket Affair." },
        ],
      },
      {
        name: "Immigration & Urbanization",
        terms: [
          { term: "Ellis Island", definition: "Federal immigration station in New York Harbor that processed millions of European immigrants entering the U.S. between 1892 and 1954." },
          { term: "Settlement Houses", definition: "Neighborhood community centers like Jane Addams's Hull House that provided social services to urban immigrants and the poor." },
          { term: "Tenements", definition: "Overcrowded, poorly maintained apartment buildings housing working-class and immigrant families in American cities in the late 19th century." },
          { term: "Chinese Exclusion Act", definition: "1882 federal law barring Chinese laborers from entering the U.S., the first major law restricting immigration by nationality." },
        ],
      },
    ],
  },
  {
    id: "unit-6-2",
    unit: 6,
    puzzle: 2,
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Populist Movement",
        terms: [
          { term: "Farmers' Alliance", definition: "Late 19th-century organization of farmers advocating cooperative economics and government regulation of railroads; a precursor to the Populist Party." },
          { term: "Populist Party", definition: "Third party founded in 1892 representing farmers and workers; demanded government ownership of railroads, a graduated income tax, and direct election of senators." },
          { term: "William Jennings Bryan", definition: "Democratic and Populist politician famous for his 'Cross of Gold' speech advocating silver coinage to help debtors; ran for president three times without winning." },
          { term: "Free Silver", definition: "Populist demand for unlimited coinage of silver to expand the money supply and ease debt burdens on farmers; the movement collapsed after Bryan lost in 1896." },
        ],
      },
      {
        name: "American Imperialism",
        terms: [
          { term: "Spanish-American War", definition: "1898 war in which the U.S. defeated Spain and gained control of Cuba, Puerto Rico, Guam, and the Philippines; marked the U.S. emergence as a global power." },
          { term: "Yellow Journalism", definition: "Sensationalist newspaper reporting by Hearst and Pulitzer that exaggerated Spanish atrocities in Cuba, stoking public demand for war." },
          { term: "Rough Riders", definition: "Volunteer cavalry regiment co-led by Theodore Roosevelt in Cuba during the Spanish-American War; his charge up San Juan Hill made him a national hero." },
          { term: "USS Maine", definition: "U.S. battleship that exploded in Havana Harbor in 1898; blamed on Spain by the yellow press, the incident helped trigger the Spanish-American War." },
        ],
      },
      {
        name: "Progressive Presidents",
        terms: [
          { term: "Theodore Roosevelt", definition: "26th President known for trust-busting, conservation, and the Square Deal; expanded federal power to regulate business and protect consumers and natural resources." },
          { term: "Woodrow Wilson", definition: "28th President whose 'New Freedom' agenda created the Federal Reserve, Clayton Antitrust Act, and Federal Trade Commission to curb corporate power." },
          { term: "Square Deal", definition: "Roosevelt's domestic program balancing the interests of business, labor, and the public through consumer protections, labor regulation, and conservation." },
          { term: "New Freedom", definition: "Wilson's 1912 campaign platform favoring competition over regulation, calling for banking reform, lower tariffs, and breaking up monopolies rather than supervising them." },
        ],
      },
      {
        name: "Muckrakers",
        terms: [
          { term: "Jacob Riis", definition: "Journalist and photographer whose book How the Other Half Lives (1890) exposed the squalid living conditions in New York City tenements, shocking middle-class readers." },
          { term: "Ida Tarbell", definition: "Investigative journalist whose exposé of Standard Oil's monopolistic practices helped lead to its Supreme Court-ordered breakup in 1911." },
          { term: "Lincoln Steffens", definition: "Muckraking journalist who exposed political corruption in American cities in The Shame of the Cities (1904), fueling Progressive-era reform." },
          { term: "Upton Sinclair", definition: "Author of The Jungle (1906), a novel exposing unsanitary conditions in the meatpacking industry; helped pass the Pure Food and Drug Act." },
        ],
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
        terms: [
          { term: "Lusitania", definition: "British ocean liner sunk by a German submarine in 1915, killing 1,198 people including 128 Americans, inflaming U.S. public opinion against Germany." },
          { term: "Zimmermann Telegram", definition: "1917 secret German proposal offering Mexico the return of Texas, New Mexico, and Arizona in exchange for an alliance against the U.S., helping push America into WWI." },
          { term: "Treaty of Versailles", definition: "1919 peace treaty ending WWI that punished Germany with war guilt, reparations, and territorial losses; its harsh terms helped cause WWII." },
          { term: "League of Nations", definition: "International peacekeeping organization proposed by Woodrow Wilson after WWI; the U.S. Senate refused to join, fatally weakening it." },
        ],
      },
      {
        name: "Roaring Twenties Culture",
        terms: [
          { term: "Harlem Renaissance", definition: "1920s–30s flourishing of African American art, literature, and music centered in Harlem, New York, celebrating Black culture and identity." },
          { term: "Flappers", definition: "Young women of the 1920s who defied social conventions by wearing short dresses, cutting their hair, and challenging traditional gender roles." },
          { term: "Jazz Age", definition: "1920s era named for jazz music, characterized by prosperity, cultural experimentation, and social change, especially among urban youth." },
          { term: "Prohibition", definition: "1920–1933 constitutional ban on the manufacture and sale of alcohol; led to widespread bootlegging and the rise of organized crime." },
        ],
      },
      {
        name: "Great Depression",
        terms: [
          { term: "Black Tuesday", definition: "October 29, 1929, the day of the catastrophic stock market crash that triggered the Great Depression." },
          { term: "Dust Bowl", definition: "1930s ecological disaster in which severe drought and poor farming stripped the Great Plains bare, displacing hundreds of thousands of families." },
          { term: "Hoovervilles", definition: "Shanty towns of makeshift shelters built by homeless Americans during the Great Depression, mockingly named after President Herbert Hoover." },
          { term: "Bank Failures", definition: "Collapse of thousands of banks during the early 1930s that wiped out savings and deepened the economic crisis of the Great Depression." },
        ],
      },
      {
        name: "New Deal Programs",
        terms: [
          { term: "CCC", definition: "Civilian Conservation Corps; New Deal program that employed young men in outdoor conservation work, providing jobs and building national infrastructure." },
          { term: "Social Security Act", definition: "1935 law establishing the federal retirement insurance program for elderly Americans, a cornerstone of the New Deal and modern welfare state." },
          { term: "TVA", definition: "Tennessee Valley Authority; New Deal agency that built dams and hydroelectric power plants in the rural South, bringing electricity and economic development." },
          { term: "WPA", definition: "Works Progress Administration; New Deal program that employed millions in public works including roads, buildings, parks, and arts projects." },
        ],
      },
    ],
  },
  {
    id: "unit-7-2",
    unit: 7,
    puzzle: 2,
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "WWI Home Front",
        terms: [
          { term: "War Industries Board", definition: "Federal agency that coordinated industrial production during WWI, directing factories to produce war materials and setting prices to prevent inflation." },
          { term: "Committee on Public Information", definition: "Government propaganda agency led by George Creel that used posters, films, and speakers to build public support for WWI and suppress dissent." },
          { term: "Espionage Act", definition: "1917 law making it illegal to obstruct the draft or criticize the war effort; used to prosecute socialists and anti-war activists, including Eugene Debs." },
          { term: "Great Migration", definition: "Mass movement of over a million Black Southerners to northern cities during and after WWI, seeking jobs and escape from Jim Crow; reshaped American cities and culture." },
        ],
      },
      {
        name: "1920s Tensions",
        terms: [
          { term: "Red Scare", definition: "Post-WWI wave of anti-communist hysteria that led to mass arrests and deportations of suspected radicals under Attorney General A. Mitchell Palmer." },
          { term: "Scopes Trial", definition: "1925 Tennessee trial of teacher John Scopes for teaching evolution; pitted modern science against religious fundamentalism in a media spectacle covered nationally." },
          { term: "Emergency Quota Act", definition: "1921 law sharply restricting immigration by establishing national-origin quotas, heavily targeting Southern and Eastern European immigrants." },
          { term: "KKK Revival", definition: "Resurgence of the Ku Klux Klan in the 1920s targeting Black Americans, Catholics, Jews, and immigrants; the organization reached 4–5 million members at its peak." },
        ],
      },
      {
        name: "Great Depression Causes",
        terms: [
          { term: "Overproduction", definition: "Factories and farms produced far more goods than consumers could buy throughout the 1920s, creating economic imbalances that worsened the Depression." },
          { term: "Stock Speculation", definition: "Rampant gambling on rising stock prices in the 1920s using borrowed money; when prices collapsed in 1929, over-leveraged investors were wiped out." },
          { term: "Smoot-Hawley Tariff", definition: "1930 law raising tariffs to record levels to protect American industry; other nations retaliated with their own tariffs, shrinking global trade and deepening the Depression." },
          { term: "Buying on Margin", definition: "Purchasing stocks with borrowed money (a small 'margin' of actual cash); when prices fell, investors couldn't repay loans, triggering a cascading financial collapse." },
        ],
      },
      {
        name: "New Deal Critics",
        terms: [
          { term: "Father Coughlin", definition: "Catholic priest whose popular radio show turned against FDR, accusing the New Deal of favoring bankers; he later promoted antisemitic conspiracy theories." },
          { term: "Huey Long", definition: "Louisiana senator who challenged FDR from the left with his 'Share Our Wealth' plan before his assassination in 1935." },
          { term: "Share Our Wealth", definition: "Huey Long's radical plan to redistribute income by capping personal fortunes at $3 million and guaranteeing every American family a minimum annual income." },
          { term: "Court-Packing Plan", definition: "FDR's controversial 1937 proposal to add up to six new justices to the Supreme Court after it struck down New Deal programs; Congress rejected it as an abuse of power." },
        ],
      },
    ],
  },
  {
    id: "cold-war-1",
    unit: 8,
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Containment Policies",
        terms: [
          { term: "Truman Doctrine", definition: "1947 foreign policy pledging U.S. support for nations resisting communist takeover, beginning with aid to Greece and Turkey." },
          { term: "Marshall Plan", definition: "1948 U.S. program providing over $13 billion in economic aid to rebuild war-devastated Western Europe and prevent the spread of communism." },
          { term: "NATO", definition: "North Atlantic Treaty Organization; 1949 military alliance among the U.S., Canada, and Western European nations for collective defense against Soviet aggression." },
          { term: "Domino Theory", definition: "Cold War belief that if one nation fell to communism its neighbors would follow, used to justify U.S. military intervention in Korea and Vietnam." },
        ],
      },
      {
        name: "Cold War Crises",
        terms: [
          { term: "Bay of Pigs", definition: "1961 failed CIA-backed invasion of Cuba by anti-Castro exiles, embarrassing the Kennedy administration and strengthening Castro's position." },
          { term: "Cuban Missile Crisis", definition: "1962 thirteen-day standoff between the U.S. and Soviet Union over Soviet nuclear missiles in Cuba, the closest the Cold War came to nuclear war." },
          { term: "Berlin Airlift", definition: "1948–1949 U.S. and British operation to supply West Berlin by air after the Soviet Union blockaded all ground routes into the city." },
          { term: "Korean War", definition: "1950–1953 conflict in which U.S.-led UN forces defended South Korea against a North Korean and Chinese invasion; ended in an armistice near the original border." },
        ],
      },
      {
        name: "Civil Rights Leaders",
        terms: [
          { term: "MLK Jr.", definition: "Baptist minister and leader of the civil rights movement who championed nonviolent resistance; delivered the 'I Have a Dream' speech; assassinated in 1968." },
          { term: "Rosa Parks", definition: "Civil rights activist whose 1955 arrest for refusing to give up her bus seat sparked the year-long Montgomery Bus Boycott." },
          { term: "Malcolm X", definition: "Black nationalist leader who advocated Black pride and self-defense rather than nonviolence; later moderated his views before his 1965 assassination." },
          { term: "Thurgood Marshall", definition: "NAACP attorney who argued Brown v. Board of Education; later became the first Black Justice on the U.S. Supreme Court." },
        ],
      },
      {
        name: "Domestic Programs",
        terms: [
          { term: "Great Society", definition: "President Johnson's 1960s domestic program creating Medicare, Medicaid, federal education funding, and major civil rights legislation." },
          { term: "New Frontier", definition: "President Kennedy's domestic agenda promising economic growth, space exploration, and social progress; partly realized through later Great Society legislation." },
          { term: "Interstate Highways", definition: "Eisenhower's 1956 Interstate Highway System, a massive public works project linking the nation and transforming American transportation and suburbs." },
          { term: "GI Bill", definition: "1944 law providing veterans with college tuition, low-cost mortgages, and job training, fueling postwar suburbanization and middle-class growth." },
        ],
      },
    ],
  },
  {
    id: "unit-8-2",
    unit: 8,
    puzzle: 2,
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Civil Rights Milestones",
        terms: [
          { term: "Montgomery Bus Boycott", definition: "1955–1956 yearlong boycott of Montgomery's bus system after Rosa Parks's arrest; ended with a Supreme Court ruling that bus segregation was unconstitutional." },
          { term: "Sit-ins", definition: "Nonviolent protests beginning in 1960 in which Black students sat at segregated lunch counters and refused to leave; the tactic spread across the South." },
          { term: "Freedom Rides", definition: "1961 interracial bus trips through the South to challenge segregation at interstate travel facilities; riders faced violent attacks from white mobs." },
          { term: "March on Washington", definition: "August 1963 civil rights rally of 250,000 people where MLK delivered the 'I Have a Dream' speech; helped build momentum for the Civil Rights Act of 1964." },
        ],
      },
      {
        name: "McCarthyism",
        terms: [
          { term: "HUAC", definition: "House Un-American Activities Committee; congressional body that investigated suspected Communist influence in American institutions, especially Hollywood." },
          { term: "Hollywood Ten", definition: "Group of film industry workers who refused to cooperate with HUAC and were blacklisted and imprisoned for contempt of Congress." },
          { term: "Rosenbergs", definition: "Julius and Ethel Rosenberg, executed in 1953 for passing atomic bomb secrets to the Soviet Union; their trial became a defining Cold War controversy." },
          { term: "Army-McCarthy Hearings", definition: "1954 televised Senate hearings in which attorney Joseph Welch challenged McCarthy's tactics; McCarthy's decline in public opinion led to his censure by the Senate." },
        ],
      },
      {
        name: "Vietnam War",
        terms: [
          { term: "Gulf of Tonkin Resolution", definition: "1964 congressional authorization giving President Johnson broad power to escalate U.S. military involvement in Vietnam after a disputed naval incident." },
          { term: "Tet Offensive", definition: "January 1968 coordinated North Vietnamese and Viet Cong attacks on South Vietnamese cities; shocked Americans and turned public opinion sharply against the war." },
          { term: "Draft Resistance", definition: "Widespread opposition to military conscription during Vietnam, including draft card burning, college deferments, conscientious objector claims, and flight to Canada." },
          { term: "War Powers Act", definition: "1973 law requiring the president to notify Congress within 48 hours of committing troops abroad and limiting deployments to 60 days without congressional approval." },
        ],
      },
      {
        name: "Social Movements",
        terms: [
          { term: "Students for a Democratic Society", definition: "New Left student organization founded in 1960 that opposed the Vietnam War and pushed for civil rights and participatory democracy on college campuses." },
          { term: "NOW", definition: "National Organization for Women; founded in 1966 to advocate for legal equality and women's rights in education, employment, and reproductive freedom." },
          { term: "American Indian Movement", definition: "Native American activist organization founded in 1968 to address poverty, police brutality, and treaty rights; famously occupied Wounded Knee, South Dakota in 1973." },
          { term: "United Farm Workers", definition: "Labor union co-founded by César Chávez and Dolores Huerta in 1962 to advocate for the rights and wages of migrant farm laborers through strikes and boycotts." },
        ],
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
        terms: [
          { term: "Reaganomics", definition: "President Reagan's economic policy combining tax cuts, deregulation, and reduced domestic spending, based on supply-side theory." },
          { term: "Supply-Side Economics", definition: "Theory that cutting taxes for businesses and the wealthy stimulates investment and job creation, benefiting all economic levels ('trickle-down')." },
          { term: "Iran-Contra Affair", definition: "1986–1987 scandal in which Reagan administration officials secretly sold weapons to Iran and used the proceeds to illegally fund Nicaraguan rebels." },
          { term: "Cold War Escalation", definition: "Reagan's massive military buildup and aggressive anti-Soviet rhetoric in the 1980s, designed to pressure the USSR economically and diplomatically into collapse." },
        ],
      },
      {
        name: "End of the Cold War",
        terms: [
          { term: "Fall of Berlin Wall", definition: "November 9, 1989 event when East Germany opened its borders and crowds tore down the wall dividing Berlin, symbolizing the collapse of communist Europe." },
          { term: "Soviet Collapse", definition: "1991 dissolution of the Soviet Union into 15 independent republics, ending the Cold War and leaving the U.S. as the world's sole superpower." },
          { term: "Gulf War", definition: "1990–1991 U.S.-led coalition war that expelled Iraqi forces from Kuwait after Saddam Hussein's invasion, demonstrating U.S. military dominance in the post-Cold War era." },
          { term: "NAFTA", definition: "North American Free Trade Agreement (1994) eliminating trade barriers between the U.S., Canada, and Mexico; debated for its effect on American manufacturing jobs." },
        ],
      },
      {
        name: "Post-9/11 America",
        terms: [
          { term: "USA PATRIOT Act", definition: "2001 law expanding government surveillance powers in response to the 9/11 attacks, controversial for its impact on civil liberties." },
          { term: "War in Afghanistan", definition: "U.S.-led military campaign begun in October 2001 to dismantle Al-Qaeda and remove the Taliban government that harbored them." },
          { term: "Iraq War", definition: "2003 U.S.-led invasion of Iraq to remove Saddam Hussein, justified by claims of weapons of mass destruction that were not found; led to prolonged occupation." },
          { term: "Department of Homeland Security", definition: "Cabinet agency created in 2002 to coordinate domestic anti-terrorism efforts, combining 22 federal agencies under one department." },
        ],
      },
      {
        name: "Contemporary Issues",
        terms: [
          { term: "Great Recession", definition: "2007–2009 severe economic downturn triggered by the collapse of the housing market and subprime mortgage crisis; worst crisis since the Great Depression." },
          { term: "Tea Party Movement", definition: "Conservative grassroots political movement that emerged around 2009 opposing the stimulus package, healthcare reform, and federal spending." },
          { term: "Affordable Care Act", definition: "2010 healthcare reform law ('Obamacare') expanding health insurance coverage through Medicaid expansion and regulated insurance marketplaces." },
          { term: "Black Lives Matter", definition: "Movement founded in 2013 to protest police violence against Black Americans and systemic racism; gained renewed prominence after George Floyd's murder in 2020." },
        ],
      },
    ],
  },
  {
    id: "unit-9-2",
    unit: 9,
    puzzle: 2,
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Reagan Era Social Issues",
        terms: [
          { term: "Moral Majority", definition: "Conservative political organization founded by Jerry Falwell Sr. in 1979 that mobilized evangelical Christians as a voting bloc for Reagan and the Republican Party." },
          { term: "War on Drugs", definition: "Reagan-era federal campaign escalating drug enforcement and mandatory minimum sentences; critics argued it disproportionately targeted minority communities." },
          { term: "AIDS Crisis", definition: "1980s epidemic initially affecting gay men and intravenous drug users; the Reagan administration faced intense criticism for its slow public health response as tens of thousands died." },
          { term: "Religious Right", definition: "Broad coalition of conservative Christian voters and organizations that aligned with the Republican Party beginning in the late 1970s, shaping the culture wars of the 1980s–90s." },
        ],
      },
      {
        name: "Clinton Administration",
        terms: [
          { term: "Welfare Reform Act", definition: "1996 law replacing the federal welfare guarantee with block grants to states and imposing work requirements and time limits on recipients." },
          { term: "Government Shutdown", definition: "1995–1996 budget standoff between Clinton and the Republican Congress led by Newt Gingrich that shut down the federal government twice." },
          { term: "DOMA", definition: "Defense of Marriage Act (1996); federal law defining marriage as between a man and a woman, later struck down by the Supreme Court in United States v. Windsor (2013)." },
          { term: "Clinton Impeachment", definition: "1998 House impeachment of President Clinton on charges of perjury and obstruction related to the Monica Lewinsky scandal; the Senate voted to acquit him." },
        ],
      },
      {
        name: "Post-Cold War Foreign Policy",
        terms: [
          { term: "Somalia Intervention", definition: "1993 U.S. humanitarian mission in Somalia that ended in the 'Black Hawk Down' battle, killing 18 U.S. soldiers and leading to a hasty withdrawal." },
          { term: "Bosnia Intervention", definition: "1995 U.S.-led NATO airstrikes that ended the Bosnian War and produced the Dayton Accords, halting ethnic cleansing in the former Yugoslavia." },
          { term: "Kosovo Bombing", definition: "1999 NATO air campaign against Serbia to stop the ethnic cleansing of Albanians in Kosovo; the first major NATO military action without UN Security Council authorization." },
          { term: "Rwandan Genocide", definition: "1994 mass killing of approximately 800,000 Tutsis in Rwanda; the Clinton administration's decision not to intervene remains a defining moral failure of U.S. foreign policy." },
        ],
      },
      {
        name: "Obama Era",
        terms: [
          { term: "American Recovery Act", definition: "2009 economic stimulus package of $787 billion responding to the Great Recession; included infrastructure spending, tax cuts, and aid to states." },
          { term: "Dodd-Frank Act", definition: "2010 financial reform law creating new regulations on banks and Wall Street to prevent a repeat of the 2008 financial crisis." },
          { term: "DACA", definition: "Deferred Action for Childhood Arrivals (2012); executive order protecting undocumented immigrants brought to the U.S. as children from deportation." },
          { term: "Citizens United", definition: "2010 Supreme Court ruling that corporations and other groups can spend unlimited money in elections as a form of free speech, dramatically reshaping campaign finance." },
        ],
      },
    ],
  },
];

export function getGameByUnit(unit: number): GameSet | undefined {
  return gameSets.find((g) => g.unit === unit);
}

export function getGamesByUnit(unit: number): GameSet[] {
  return gameSets
    .filter((g) => g.unit === unit)
    .sort((a, b) => (a.puzzle ?? 1) - (b.puzzle ?? 1));
}
