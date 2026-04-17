export interface GameTerm {
  term: string;
  definition: string;
}

export interface GameGroup {
  name: string;
  terms: GameTerm[];
}

export interface GameTheme {
  code: string;   // e.g. "NAT"
  name: string;   // e.g. "American and National Identity"
}

export interface GameSet {
  id: string;
  unit: number;
  puzzle?: number;   // 1-indexed; defaults to 1 if omitted
  theme?: GameTheme;
  title: string;
  subject: string;
  groups: GameGroup[];
}

export const gameSets: GameSet[] = [
  {
    id: "unit-1-nat",
    unit: 1,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Native Identity and Governance",
        terms: [
          { term: "Iroquois Confederacy", definition: "Alliance of five (later six) northeastern Native nations united under the Great Law of Peace; one of the most sophisticated democratic governments in pre-contact North America." },
          { term: "Great Law of Peace", definition: "Founding constitution of the Iroquois Confederacy establishing democratic governance, individual rights, and collective decision-making — admired by some Founders as a model." },
          { term: "Tribal Sovereignty", definition: "The inherent authority of Native nations to govern themselves; recognized in various European treaties as independent political entities pre-dating European arrival." },
          { term: "Clan Mothers", definition: "In Iroquois society, elder women who held significant political power including the authority to select and remove male chiefs (sachems)." },
        ],
      },
      {
        name: "Puritan Identity",
        terms: [
          { term: "Puritans", definition: "English Calvinist settlers who founded Massachusetts Bay Colony in 1630 seeking to build a 'city upon a hill' — a godly model community for all of Christendom." },
          { term: "City Upon a Hill", definition: "John Winthrop's 1630 vision of Massachusetts as a moral exemplar watched by the world; became the foundational metaphor for American exceptionalism." },
          { term: "Covenant Theology", definition: "Puritan belief that God had made a special agreement with New England's settlers to build a godly society; failure would bring divine punishment on the whole community." },
          { term: "Mayflower Compact", definition: "1620 self-governance agreement signed by Pilgrim settlers before landing; an early precedent for the idea that government derives its authority from the consent of the governed." },
        ],
      },
      {
        name: "Tolerant Colonial Identities",
        terms: [
          { term: "Quakers", definition: "Society of Friends who settled Pennsylvania; practiced pacifism, gender equality, and early antislavery — the most radically tolerant religious community in colonial America." },
          { term: "William Penn", definition: "Quaker founder of Pennsylvania who established a colony based on religious tolerance and peaceful relations with Native peoples; his 'Holy Experiment' attracted diverse immigrants." },
          { term: "Roger Williams", definition: "Puritan minister expelled from Massachusetts for advocating separation of church and state; founded Rhode Island as a colony with full religious liberty." },
          { term: "Maryland Toleration Act", definition: "1649 law granting religious freedom to all Christians in Maryland; an early (if limited) experiment in religious tolerance in English North America." },
        ],
      },
      {
        name: "European Claims and Justifications",
        terms: [
          { term: "Doctrine of Discovery", definition: "Legal principle claiming Christian European nations could claim sovereignty over any land not ruled by Christians; used to legitimize colonization of Native lands." },
          { term: "Divine Providence", definition: "Belief that God had ordained European expansion as part of a divine plan; used by both Spanish conquistadors and English Puritans to justify conquest and colonization." },
          { term: "Requerimiento", definition: "Spanish legal document demanding Native submission to the Crown and Church; refusal justified military conquest — read aloud in Spanish to people who spoke neither Spanish nor Latin." },
          { term: "Charter Colony", definition: "English colony governed by a royal charter granting significant self-rule; Connecticut and Rhode Island operated this way — establishing precedents for colonial self-governance." },
        ],
      },
    ],
  },

  {
    id: "unit-1-wxt",
    unit: 1,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Columbian Exchange",
        terms: [
          { term: "Smallpox", definition: "Deadly European disease that killed 50–90% of Indigenous populations in many regions within a century of contact; the single most destructive consequence of the Columbian Exchange." },
          { term: "Horses", definition: "European animals reintroduced to the Americas that transformed Plains Native cultures — enabling buffalo hunting, long-distance travel, and new forms of warfare." },
          { term: "Tobacco", definition: "Native American plant introduced to Europe after contact; became Virginia's first profitable cash crop and the foundation of the Southern plantation economy." },
          { term: "Corn", definition: "Mesoamerican staple domesticated thousands of years before contact; introduced to Europe after 1492 and became one of the world's most important food crops." },
        ],
      },
      {
        name: "Colonial Trade System",
        terms: [
          { term: "Mercantilism", definition: "Economic theory that colonies exist to enrich the mother country by supplying raw materials and buying finished goods; the framework of all European colonial economic policy." },
          { term: "Navigation Acts", definition: "British laws requiring colonial trade to flow through English ships and ports; largely ignored under salutary neglect but fiercely resisted when enforced after 1763." },
          { term: "Triangular Trade", definition: "Three-way Atlantic commerce linking the Americas, Europe, and Africa; colonists traded raw goods for manufactured items and enslaved Africans." },
          { term: "Salutary Neglect", definition: "Britain's unofficial policy of loosely enforcing trade laws in the colonies from 1607–1763; allowed colonial economies to flourish and self-governance habits to deepen." },
        ],
      },
      {
        name: "Spanish Colonial Labor",
        terms: [
          { term: "Encomienda", definition: "Spanish colonial system granting settlers the right to demand tribute and labor from Native peoples in exchange for protection and conversion — enslavement in practice." },
          { term: "Mita", definition: "Andean forced labor system adapted by Spain requiring Indigenous communities to supply rotating workers for deadly silver mines like Potosí." },
          { term: "Hacienda", definition: "Large Spanish landed estate worked by Native or mestizo laborers under debt bondage; the dominant economic unit of the colonial countryside." },
          { term: "Atlantic Slave Trade", definition: "Forced transportation of millions of Africans to the Americas beginning in the 16th century; the labor system that made the plantation economy of the Americas possible." },
        ],
      },
      {
        name: "English Colonial Labor",
        terms: [
          { term: "Indentured Servants", definition: "Immigrants who traded 4–7 years of labor for Atlantic passage; the main labor source in early Virginia and Maryland before the expansion of chattel slavery." },
          { term: "Tobacco Economy", definition: "Virginia's plantation economy centered on tobacco; required constant labor, exhausted soil rapidly, and drove insatiable demand first for indentured servants and then enslaved Africans." },
          { term: "Chattel Slavery", definition: "System treating enslaved people as inheritable personal property with no legal rights; entrenched in colonial law by the 1660s and became the foundation of the Southern economy." },
          { term: "Bacon's Rebellion", definition: "1676 Virginia uprising by frontier settlers and indentured servants; its multiracial character alarmed planters and accelerated the shift from indentured servitude to African slavery." },
        ],
      },
    ],
  },

  {
    id: "unit-1-geo",
    unit: 1,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Native Culture Regions",
        terms: [
          { term: "Eastern Woodlands", definition: "Culture region east of the Mississippi characterized by dense forests, mixed farming and hunting, and diverse nations including the Iroquois and Algonquian peoples." },
          { term: "Great Plains", definition: "Vast grassland region between the Mississippi and Rockies; home to nations who hunted bison — their culture transformed after the reintroduction of horses by the Spanish." },
          { term: "Pacific Northwest", definition: "Coastal region of abundant salmon and cedar; home to nations like the Chinook and Tlingit known for complex stratified societies and potlatch ceremonies." },
          { term: "Southwest Desert", definition: "Arid region of present-day Arizona and New Mexico; home to Pueblo, Navajo, and Hopi peoples who mastered irrigation agriculture — and resisted Spanish rule in the 1680 Pueblo Revolt." },
        ],
      },
      {
        name: "Pre-Columbian Cities and Centers",
        terms: [
          { term: "Tenochtitlán", definition: "Aztec capital built on an island in Lake Texcoco with a population of 200,000 — larger than any European city at the time; destroyed by Cortés in 1521." },
          { term: "Cahokia", definition: "Largest pre-Columbian city north of Mexico, near present-day St. Louis; center of Mississippian culture with massive earthen mounds and a population of ~20,000." },
          { term: "Chaco Canyon", definition: "Major center of Ancestral Puebloan culture in present-day New Mexico; monumental great houses served as a regional hub for trade and ceremony." },
          { term: "Tenochtitlán Siege", definition: "1521 months-long destruction of the Aztec capital by Cortés and his Native allies; its fall ended the Aztec Empire and became the most consequential act of conquest in the Americas." },
        ],
      },
      {
        name: "Colonial Settlement Geography",
        terms: [
          { term: "Jamestown", definition: "First permanent English settlement in North America (1607), founded in a Virginia swamp; survived starvation and disease to become the base of England's colonial enterprise." },
          { term: "New Amsterdam", definition: "Dutch colonial settlement on Manhattan Island at the mouth of the Hudson River; captured by England in 1664 and renamed New York — a pivotal strategic port." },
          { term: "St. Augustine", definition: "Spanish settlement founded in Florida in 1565 — the oldest continuously occupied European settlement in North America; a base for missions and a refuge for escaped enslaved people." },
          { term: "Plymouth", definition: "1620 settlement by Pilgrim Separatists in Massachusetts; their Mayflower Compact established self-governance principles and their survival narrative became central to American mythology." },
        ],
      },
      {
        name: "Environmental Impact",
        terms: [
          { term: "Epidemic Disease", definition: "European diseases killed 50–90% of Indigenous populations within a century of contact, depopulating entire regions and opening land that colonists interpreted as divinely emptied for them." },
          { term: "Deforestation", definition: "English colonists cleared forests for farmland, timber, and fuel at a scale that altered watersheds, eliminated animal habitat, and erased the landscape management Native peoples had practiced." },
          { term: "Overgrazing", definition: "Introduced cattle, pigs, and sheep consumed vegetation faster than ecosystems could recover, causing soil erosion and displacing Native food sources across the continent." },
          { term: "Silver Mining", definition: "Spanish extraction at mines like Potosí used toxic mercury amalgamation and massive deforestation, poisoning soil and water while generating the wealth that fueled European capitalism." },
        ],
      },
    ],
  },

  {
    id: "unit-1-mig",
    unit: 1,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Motivations for European Exploration",
        terms: [
          { term: "God", definition: "Religious motivation driving European exploration; spreading Christianity justified conquest as a holy mission and gave European powers a moral framework for subjugating non-Christian peoples." },
          { term: "Gold", definition: "Economic motivation driving explorers to seek precious metals; Spanish extraction of silver and gold from the Americas transferred enormous wealth to Europe." },
          { term: "Glory", definition: "Nationalist motivation for exploration; monarchs competed for prestige, territorial claims, and international power through overseas discovery and colonization." },
          { term: "New Trade Routes", definition: "Desire to reach Asian markets without crossing Ottoman lands; the search for a western sea route to Asia led Columbus to the Americas in 1492." },
        ],
      },
      {
        name: "Explorers and Conquistadors",
        terms: [
          { term: "Hernán Cortés", definition: "Spanish conquistador who conquered the Aztec Empire in 1521 by forging alliances with rival Native peoples; his success opened Central America to Spanish colonization." },
          { term: "Columbus's 1492 Voyage", definition: "Spanish-funded expedition that reached the Caribbean, initiating sustained transatlantic contact and permanently altering the course of world history." },
          { term: "John Cabot", definition: "Italian explorer sailing for England who reached North America in 1497, providing the legal basis for England's later territorial claims on the continent." },
          { term: "Henry Hudson", definition: "English explorer sailing for the Dutch who explored the Hudson River (1609), establishing Dutch claims to the region that became New Netherland (later New York)." },
        ],
      },
      {
        name: "English Colonial Settlement Patterns",
        terms: [
          { term: "Jamestown", definition: "Virginia Company's 1607 settlement — the first permanent English colony; early settlers starved until tobacco cultivation under John Rolfe made it profitable." },
          { term: "Pilgrims", definition: "Separatist Puritans who sailed on the Mayflower and founded Plymouth Colony in 1620; sought complete separation from the Church of England, not just reform." },
          { term: "Great Migration", definition: "1630–1640 movement of roughly 20,000 Puritans from England to Massachusetts Bay; the largest single migration to colonial New England, driven by religious persecution and economic hardship." },
          { term: "Patroon System", definition: "Dutch colonial land-grant system giving large estates to wealthy landlords who brought settlers to farm; established the patronage patterns that shaped New York's land tenure long after English conquest." },
        ],
      },
      {
        name: "The Middle Passage and Forced Migration",
        terms: [
          { term: "Middle Passage", definition: "Brutal transatlantic voyage bringing enslaved Africans to the Americas; millions died from disease, violence, and dehydration in ships designed for cargo, not people." },
          { term: "African Diaspora", definition: "Forced dispersal of millions of Africans across the Atlantic world through the slave trade, creating diverse African-descended communities in every corner of the Americas." },
          { term: "Stono Rebellion", definition: "1739 South Carolina slave revolt in which 20 enslaved Africans marched toward Spanish Florida seeking freedom; the largest slave uprising in colonial North America." },
          { term: "Asiento", definition: "Contract granting a nation or company exclusive rights to supply enslaved Africans to Spanish colonies; the key commercial mechanism of the transatlantic slave trade." },
        ],
      },
    ],
  },

  {
    id: "unit-1-pce",
    unit: 1,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Civic Engagement" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Native Political Organization",
        terms: [
          { term: "Iroquois Confederacy", definition: "Alliance of five nations (Mohawk, Onondaga, Cayuga, Oneida, Seneca) governed by the Great Law of Peace; a model of federal democracy that may have influenced the U.S. Constitution." },
          { term: "Powhatan Confederacy", definition: "Alliance of ~30 Algonquian-speaking tribes in Virginia, led by Chief Wahunsenacah; initially traded with Jamestown settlers before launching major attacks to drive them out." },
          { term: "Aztec Triple Alliance", definition: "Political and military alliance of Tenochtitlán, Texcoco, and Tlacopan that dominated Mesoamerica through tribute extraction before the Spanish conquest." },
          { term: "Pueblo Revolt", definition: "1680 unified uprising in which Pueblo peoples under Popé expelled Spanish colonizers from New Mexico for 12 years — the most successful Native revolt against European colonization in North America." },
        ],
      },
      {
        name: "Colonial Self-Governance",
        terms: [
          { term: "Mayflower Compact", definition: "1620 agreement among Pilgrim men to govern themselves by majority rule before disembarking; an early precedent for the idea that political authority requires the consent of the governed." },
          { term: "House of Burgesses", definition: "Virginia's elected colonial legislature, founded in 1619 — the first representative assembly in English North America; established the precedent of elected self-governance." },
          { term: "Town Meetings", definition: "New England practice of direct democratic governance in which all male property owners gathered to vote on local laws; celebrated as the purest form of American self-rule." },
          { term: "Dominion of New England", definition: "1686–89 attempt by King James II to consolidate New England colonies under a royal governor and eliminate their assemblies; ended when the Glorious Revolution removed James from power." },
        ],
      },
      {
        name: "Colonial Rebellion and Conflict",
        terms: [
          { term: "Bacon's Rebellion", definition: "1676 Virginia uprising of frontier settlers against the colonial government; exposed class tensions between the planter elite and poor white settlers and accelerated the shift to African slavery." },
          { term: "King Philip's War", definition: "1675–76 conflict between New England colonists and a Native alliance led by Metacom (King Philip); proportionally the deadliest war in American history, devastating both sides." },
          { term: "Pequot War", definition: "1636–38 conflict in Connecticut in which English colonists and their Mohegan and Narragansett allies nearly destroyed the Pequot nation — establishing a brutal template for future Native-colonial wars." },
          { term: "Salem Witch Trials", definition: "1692 Massachusetts crisis in which 20 people were executed for witchcraft; rooted in social tensions, Puritan theology, and community conflict — and a lesson about the dangers of mass hysteria." },
        ],
      },
      {
        name: "Spanish Colonial Control",
        terms: [
          { term: "Viceroy", definition: "Royal governor administering a Spanish colonial territory on behalf of the Crown; wielded sweeping executive, judicial, and military powers." },
          { term: "Encomienda", definition: "Spanish system granting colonists the right to demand labor and tribute from Native peoples; condemned by Bartolomé de las Casas and partially reformed by the New Laws of 1542." },
          { term: "Bartolomé de las Casas", definition: "Spanish priest who documented atrocities against Indigenous peoples and argued passionately for their rights; his accounts shaped European debates about the morality of colonization." },
          { term: "Treaty of Tordesillas", definition: "1494 agreement dividing the non-Christian world between Spain and Portugal along a meridian; gave Spain most of the Americas — the foundational act of European colonial geopolitics." },
        ],
      },
    ],
  },

  {
    id: "unit-1-wor",
    unit: 1,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "European Colonial Powers",
        terms: [
          { term: "Spain", definition: "First European power to build a major colonial empire after 1492; dominated Central and South America through military conquest, the encomienda system, and Catholic missionary work." },
          { term: "France", definition: "Established New France (Canada and Louisiana) focused on the fur trade and Native alliances rather than settlement; founded Quebec in 1608 and contested Britain for North America." },
          { term: "England", definition: "Late entrant to colonization; established Jamestown in 1607 and expanded along the Atlantic coast through charter companies, proprietary grants, and religious refuge colonies." },
          { term: "Netherlands", definition: "Founded New Netherland (New York) in the early 1600s as a commercial enterprise; their liberal approach attracted diverse settlers and established patterns of religious tolerance." },
        ],
      },
      {
        name: "Transatlantic Connections",
        terms: [
          { term: "Columbian Exchange", definition: "Transfer of plants, animals, diseases, and people between the Old and New Worlds after 1492; the most consequential ecological event in human history, reshaping every society it touched." },
          { term: "Reconquista", definition: "Centuries-long Christian reconquest of Iberia completed in 1492; freed Spain's military and religious energy for overseas expansion and shaped the crusading ideology of the conquistadors." },
          { term: "Atlantic Slave Trade", definition: "Forced transportation of 12 million Africans to the Americas between the 16th and 19th centuries; the largest forced migration in history and the economic foundation of the colonial Atlantic world." },
          { term: "West African Kingdoms", definition: "Powerful states including Mali, Songhai, and Kongo that were drawn into or destabilized by the slave trade; their political complexity shaped who was enslaved and who profited." },
        ],
      },
      {
        name: "Colonial Rivalries",
        terms: [
          { term: "Beaver Wars", definition: "Series of 17th-century conflicts in which the Iroquois Confederacy — backed by Dutch and English guns — attacked rival nations for control of the lucrative fur trade." },
          { term: "King William's War", definition: "1689–97 North American theater of the European War of the League of Augsburg; the first of a series of colonial wars between England and France for control of North America." },
          { term: "Queen Anne's War", definition: "1702–13 North American conflict corresponding to the War of the Spanish Succession; Britain gained Acadia (Nova Scotia) from France, intensifying competition for the continent." },
          { term: "Fur Trade Alliances", definition: "French alliance with Huron and Algonquian nations against the Iroquois; Dutch and English alliance with the Iroquois — Native nations were indispensable military partners in the colonial rivalries." },
        ],
      },
      {
        name: "Navigation and Exploration Technology",
        terms: [
          { term: "Caravel", definition: "Maneuverable Portuguese sailing ship with lateen sails; its ability to sail into the wind made sustained long-distance Atlantic voyages possible for the first time." },
          { term: "Compass", definition: "Navigational device indicating magnetic north; adopted by European explorers from Arab and Chinese navigators — enabled open-ocean sailing without visible landmarks." },
          { term: "Astrolabe", definition: "Instrument measuring the altitude of celestial bodies; allowed sailors to determine their latitude, essential for navigation on the open Atlantic." },
          { term: "Trade Winds", definition: "Steady equatorial winds blowing westward across the Atlantic; their predictability allowed Columbus and later explorers to reliably sail from Europe to the Americas." },
        ],
      },
    ],
  },

  {
    id: "unit-1-arc",
    unit: 1,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Native Spiritual and Cultural Life",
        terms: [
          { term: "Animism", definition: "Belief that spirits inhabit all natural objects — animals, plants, rivers, and landforms; central to most Native American spiritual traditions and shaped how Native peoples related to the land." },
          { term: "Oral Tradition", definition: "Transmission of history, law, and culture through spoken word, song, and story; the primary means of preserving collective knowledge — and a target of colonial assimilation campaigns." },
          { term: "Potlatch", definition: "Pacific Northwest ceremonial feast in which hosts distribute wealth to build alliances and demonstrate status; attacked by Canadian and U.S. governments as incompatible with private property." },
          { term: "Pueblo Revolt", definition: "1680 uprising that drove out Spanish missionaries and destroyed mission churches; Pueblo peoples reasserted their spiritual traditions after decades of forced conversion and cultural suppression." },
        ],
      },
      {
        name: "Puritan Religious Culture",
        terms: [
          { term: "Puritans", definition: "English Calvinist colonizers of New England who sought to build a biblically ordered society; their culture of literacy (to read scripture), education, and communal obligation shaped American civic life." },
          { term: "Salem Witch Trials", definition: "1692 hysteria in which 20 people were executed; exposed the dangers of Puritan theocracy and communal conformity — and became America's defining cautionary tale about religious extremism." },
          { term: "Halfway Covenant", definition: "1662 Puritan compromise allowing partial church membership to the children of members who hadn't experienced conversion; a sign of declining religious intensity in New England." },
          { term: "Roger Williams", definition: "Puritan minister expelled for advocating church-state separation; founded Rhode Island with full religious liberty — the most radical colonial experiment in tolerance." },
        ],
      },
      {
        name: "The First Great Awakening",
        terms: [
          { term: "First Great Awakening", definition: "1730s–40s wave of Protestant revivalism that swept the colonies; emphasized personal conversion over church hierarchy, democratized religion, and indirectly fueled the Revolution." },
          { term: "Jonathan Edwards", definition: "Puritan theologian whose 'Sinners in the Hands of an Angry God' (1741) terrified audiences into conversion; the Awakening's intellectual architect." },
          { term: "George Whitefield", definition: "Charismatic English preacher who toured all 13 colonies drawing crowds of thousands; his itinerant preaching style and open-air services bypassed established church authority." },
          { term: "New Lights vs. Old Lights", definition: "Split in colonial Protestantism between revivalists (New Lights) who embraced emotional conversion and traditionalists (Old Lights) who feared enthusiasm as disorderly and theologically unsound." },
        ],
      },
      {
        name: "Spanish Catholic Cultural Influence",
        terms: [
          { term: "Missions", definition: "Spanish religious settlements combining Catholic worship, forced labor, and cultural assimilation; built across Florida, the Southwest, and California to convert Native peoples." },
          { term: "Franciscans", definition: "Catholic religious order that led North American missionary efforts; built a chain of missions from Florida to California and enforced cultural conversion on Native peoples." },
          { term: "Our Lady of Guadalupe", definition: "Apparition of the Virgin Mary said to appear to a Nahua man in 1531; became the most powerful religious symbol of colonial Mexico, blending Catholic and Indigenous devotion." },
          { term: "Syncretism", definition: "Blending of Native and Catholic religious practices; allowed Indigenous peoples to preserve elements of their spiritual traditions within the framework of forced Christian conversion." },
        ],
      },
    ],
  },

  {
    id: "unit-1-soc",
    unit: 1,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Native Peoples, Contact & Colonial America",
    subject: "APUSH",
    groups: [
      {
        name: "Colonial Slavery",
        terms: [
          { term: "Middle Passage", definition: "Brutal transatlantic voyage bringing enslaved Africans to the Americas; millions died from disease, violence, and dehydration — the most horrific leg of the triangular trade." },
          { term: "Slave Codes", definition: "Colonial laws defining enslaved people as chattel property with no rights; stripped them of family, freedom of movement, and legal personhood — enshrined in Virginia law by the 1660s." },
          { term: "Chattel Slavery", definition: "System treating enslaved people as inheritable personal property; distinguished American slavery from earlier forms by making it permanent, hereditary, and race-based." },
          { term: "Stono Rebellion", definition: "1739 South Carolina uprising of 20 enslaved Africans marching toward Spanish Florida; its suppression led to even harsher slave codes and restrictions on Black assembly." },
        ],
      },
      {
        name: "Native Social Organization",
        terms: [
          { term: "Matrilineal Descent", definition: "System in which lineage and clan membership pass through the mother's line; practiced by the Iroquois and many Southeastern nations — women held significant social and political power." },
          { term: "Two-Spirit", definition: "Tradition recognized in many Native cultures acknowledging people who embody both masculine and feminine spiritual qualities; often held specialized ceremonial and social roles." },
          { term: "Division of Labor", definition: "Gendered allocation of tasks in Native societies; women typically managed farming, food, and home life; men handled hunting, warfare, and long-distance trade — both roles essential and respected." },
          { term: "Extended Family", definition: "Core social and economic unit in most Native societies; grandparents, parents, children, and cousins lived and worked cooperatively — contrasting with the nuclear family ideal of European settlers." },
        ],
      },
      {
        name: "Spanish Colonial Hierarchy",
        terms: [
          { term: "Peninsulares", definition: "Spanish-born colonists who monopolized the highest government and Church positions in the Americas; their status over American-born Spaniards would eventually fuel independence movements." },
          { term: "Criollos", definition: "People of Spanish descent born in the Americas; despite often equal wealth, ranked below peninsulares — their frustrated ambitions would drive Latin American independence in the early 1800s." },
          { term: "Mestizos", definition: "People of mixed Spanish and Native heritage who grew to be the largest colonial population group; occupied a middle tier in the rigid racial hierarchy of Spanish colonial society." },
          { term: "Castas", definition: "Spanish colonial racial classification system with dozens of categories based on ancestry; one's casta determined legal rights, tax obligations, and social standing." },
        ],
      },
      {
        name: "Gender and Class in Colonial Society",
        terms: [
          { term: "Indentured Servants", definition: "Workers who traded years of labor for Atlantic passage; many were young English men who hoped to eventually own land — their vulnerability to exploitation contributed to Bacon's Rebellion." },
          { term: "Republican Motherhood (origins)", definition: "Proto-feminist ideals emerging even in colonial times; literacy campaigns for women in New England and Quaker gender equality planted seeds for later arguments about women's civic roles." },
          { term: "La Malinche", definition: "Nahua woman who served as translator and advisor to Cortés; her role as cultural intermediary was decisive in the conquest — and she became a symbol of both collaboration and victimhood in Mexican memory." },
          { term: "Coverture", definition: "English legal doctrine under which a married woman's legal identity merged into her husband's; she could not own property, sign contracts, or sue — the legal basis of colonial women's subordination." },
        ],
      },
    ],
  },

  {
    id: "unit-3-nat",
    unit: 3,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Revolutionary Ideals",
        terms: [
          { term: "Common Sense", definition: "Thomas Paine's 1776 pamphlet arguing for independence from Britain in plain language; shifted colonial opinion decisively toward separation." },
          { term: "Declaration of Independence", definition: "1776 document asserting that all men are created equal with unalienable rights to life, liberty, and the pursuit of happiness; justified revolution in enlightenment terms." },
          { term: "Natural Rights", definition: "Enlightenment concept that people are born with inherent rights that no government can take away; cornerstone of revolutionary ideology drawn from Locke." },
          { term: "Popular Sovereignty", definition: "Principle that government derives its just powers from the consent of the governed; used to justify independence and shape republican constitutions." },
        ],
      },
      {
        name: "Federalist vs. Anti-Federalist",
        terms: [
          { term: "Federalists", definition: "Faction led by Hamilton and Madison that supported ratifying the Constitution and favored a strong central government over state sovereignty." },
          { term: "Anti-Federalists", definition: "Opponents of ratification who feared tyranny from a strong central government; demanded a Bill of Rights before they would support the Constitution." },
          { term: "The Federalist Papers", definition: "85 essays written by Hamilton, Madison, and Jay under the pseudonym 'Publius' to persuade New York to ratify the Constitution." },
          { term: "Bill of Rights", definition: "First ten amendments to the Constitution (1791) guaranteeing freedoms of speech, religion, press, and due process; the Anti-Federalists' key demand." },
        ],
      },
      {
        name: "First Party System",
        terms: [
          { term: "Democratic-Republicans", definition: "Party founded by Jefferson and Madison opposing Federalist policies; favored agrarian democracy, states' rights, and a strict reading of the Constitution." },
          { term: "Revolution of 1800", definition: "Peaceful transfer of power from Federalist Adams to Democratic-Republican Jefferson; proved the Constitution could survive partisan conflict." },
          { term: "Alien & Sedition Acts", definition: "1798 Federalist laws criminalizing criticism of the government and targeting immigrants; rallied opposition and helped Jefferson win in 1800." },
          { term: "Virginia & Kentucky Resolutions", definition: "Jefferson and Madison's 1798–99 resolutions arguing states could nullify unconstitutional federal laws; laid groundwork for later nullification debates." },
        ],
      },
      {
        name: "Republican Civic Values",
        terms: [
          { term: "Republican Motherhood", definition: "Post-Revolution ideal that women's civic role was to raise virtuous, patriotic sons; justified expanding women's education while keeping them out of formal politics." },
          { term: "Civic Virtue", definition: "Belief that citizens must sacrifice personal interest for the public good; seen as essential to sustaining a republic and preventing tyranny." },
          { term: "Separation of Church and State", definition: "Principle embedded in the First Amendment keeping government from establishing or interfering with religion; a break from European state churches." },
          { term: "Washington's Farewell Address", definition: "1796 speech warning against political factions, sectionalism, and permanent foreign alliances; defined American republican ideals for generations." },
        ],
      },
    ],
  },

  {
    id: "unit-3-wxt",
    unit: 3,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Hamilton's Economic Program",
        terms: [
          { term: "Report on Manufactures", definition: "Hamilton's 1791 proposal to use tariffs and subsidies to build American industry; Congress rejected it but it anticipated 19th-century industrial policy." },
          { term: "Assumption of Debt", definition: "Hamilton's plan for the federal government to absorb all state Revolutionary War debts, making creditors loyal to the national government." },
          { term: "National Bank", definition: "Hamilton's federally chartered Bank of the United States (1791) to stabilize currency and manage government finances; opposed by Jefferson as unconstitutional." },
          { term: "Protective Tariff", definition: "Tax on imports designed to make foreign goods more expensive and encourage Americans to buy domestically produced goods." },
        ],
      },
      {
        name: "Agrarian Economy",
        terms: [
          { term: "Yeoman Farmers", definition: "Independent small landowners who Jefferson idealized as the backbone of republican democracy; contrasted with Hamilton's vision of industrial capitalism." },
          { term: "Whiskey Rebellion", definition: "1794 western Pennsylvania uprising against Hamilton's excise tax on whiskey; Washington's forceful response demonstrated federal authority." },
          { term: "Land Ordinance of 1785", definition: "Law surveying western lands into townships and sections for sale; funded public education and enabled orderly westward expansion." },
          { term: "Debt Peonage", definition: "Cycle of debt trapping poor farmers and laborers in perpetual servitude to creditors; a persistent feature of the early American economy, especially in the South." },
        ],
      },
      {
        name: "Trade and Commerce",
        terms: [
          { term: "Navigation Acts", definition: "British laws requiring colonial trade to flow through Britain; their enforcement after 1763 outraged colonists who had long evaded them." },
          { term: "Pinckney's Treaty", definition: "1795 agreement with Spain granting Americans the right to navigate the Mississippi River and use New Orleans as a port — essential for western farmers." },
          { term: "Jay's Treaty", definition: "1794 agreement with Britain resolving post-war trade disputes; gave U.S. merchants access to British West Indian ports but angered many Americans." },
          { term: "Non-Importation Agreements", definition: "Colonial boycotts of British goods in protest of tax acts; effective economic pressure that helped force repeal of the Townshend Acts." },
        ],
      },
      {
        name: "Post-War Economic Crises",
        terms: [
          { term: "Shays' Rebellion", definition: "1786–87 Massachusetts uprising of indebted farmers who closed courts to stop foreclosures; alarmed elites and accelerated calls for a stronger national government." },
          { term: "Currency Crisis", definition: "Post-Revolution chaos as states printed worthless paper money to pay debts; creditors suffered and trade was disrupted, highlighting the Articles' weakness." },
          { term: "Interstate Commerce Disputes", definition: "Conflicts between states over tariffs and trade routes under the Articles of Confederation; showed the need for federal regulation of commerce." },
          { term: "Annapolis Convention", definition: "1786 meeting of five states to discuss commercial disputes; led to the call for the Constitutional Convention after realizing reform required broader action." },
        ],
      },
    ],
  },

  {
    id: "unit-3-geo",
    unit: 3,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Revolutionary War Turning Points",
        terms: [
          { term: "Lexington and Concord", definition: "April 1775 battles that opened the Revolutionary War when British troops marched to seize colonial weapons and were met with armed resistance." },
          { term: "Saratoga", definition: "1777 American victory in upstate New York that convinced France to enter the war as an American ally — the war's decisive turning point." },
          { term: "Valley Forge", definition: "Brutal 1777–78 winter camp in Pennsylvania where Washington's army nearly collapsed from cold and starvation but emerged as a more disciplined force." },
          { term: "Yorktown", definition: "1781 Virginia siege where American and French forces trapped Cornwallis's British army, effectively ending major combat in the Revolutionary War." },
        ],
      },
      {
        name: "Western Lands and Expansion",
        terms: [
          { term: "Northwest Ordinance", definition: "1787 law organizing the territory north of the Ohio River into future states; banned slavery there and established a model for admitting new states." },
          { term: "Proclamation Line of 1763", definition: "British order forbidding colonists from settling west of the Appalachians; deeply resented and widely ignored, stoking colonial resentment." },
          { term: "Land Speculation", definition: "Buying large tracts of western land cheaply to sell at profit; a major occupation of early American elites and a source of conflict with Native peoples." },
          { term: "Ohio River Valley", definition: "Fertile contested region between the Appalachians and Mississippi; fought over by Britain, France, Native nations, and American settlers throughout the 18th century." },
        ],
      },
      {
        name: "Treaty Boundaries",
        terms: [
          { term: "Treaty of Paris 1783", definition: "Ended the Revolutionary War; Britain recognized American independence and ceded all land east of the Mississippi River, doubling the new nation's territory." },
          { term: "Mississippi River", definition: "Western boundary of the U.S. after 1783; Pinckney's Treaty (1795) secured American navigation rights, vital for western farmers to ship goods to market." },
          { term: "Great Lakes Border", definition: "Northern boundary with British Canada set by the Treaty of Paris; remained contested until the Rush-Bagot Agreement (1817) demilitarized the lakes." },
          { term: "Spanish Florida", definition: "Territory bordering the young U.S. to the south; Spain controlled it and blocked American access to Gulf ports until Pinckney's Treaty resolved disputes." },
        ],
      },
      {
        name: "Native Land and Conflict",
        terms: [
          { term: "Battle of Fallen Timbers", definition: "1794 U.S. victory over a Native confederacy in Ohio that broke Native resistance in the Northwest Territory and opened the region to American settlement." },
          { term: "Treaty of Greenville", definition: "1795 treaty in which defeated Native nations ceded most of Ohio and Indiana to the United States after Fallen Timbers." },
          { term: "Native Confederacy", definition: "Alliance of Great Lakes and Ohio Valley tribes who united to resist American expansion in the 1780s–90s, supported covertly by Britain from Canadian forts." },
          { term: "Proclamation of 1763", definition: "British attempt to prevent colonial-Native conflict by banning settlement west of the Appalachians; failed to stop settlers and angered both colonists and Native peoples." },
        ],
      },
    ],
  },

  {
    id: "unit-3-mig",
    unit: 3,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Loyalist Exodus",
        terms: [
          { term: "Loyalists", definition: "Colonists who remained loyal to Britain; roughly 20% of the population, many fled to Canada, Britain, or the Caribbean after the Revolution." },
          { term: "Confiscation Acts", definition: "State laws seizing Loyalist property after independence; drove tens of thousands of Loyalists to flee the new United States." },
          { term: "Black Loyalists", definition: "Enslaved people who answered British offers of freedom in exchange for fighting for the Crown; roughly 15,000 evacuated to Nova Scotia, Britain, and Sierra Leone." },
          { term: "Tory Diaspora", definition: "Mass emigration of roughly 80,000 American Loyalists after the Revolution, reshaping the demographics of Canada and the British Caribbean." },
        ],
      },
      {
        name: "Westward Movement",
        terms: [
          { term: "Boone's Wilderness Road", definition: "Daniel Boone's 1775 trail through the Cumberland Gap into Kentucky; opened the trans-Appalachian West to tens of thousands of settlers." },
          { term: "Cumberland Gap", definition: "Natural mountain pass through the Appalachians that became the main gateway for settlers moving into Kentucky and Tennessee." },
          { term: "Squatters", definition: "Settlers who occupied and farmed land they did not legally own; constant pressure on western frontier, often ahead of official surveys and treaties." },
          { term: "Land Companies", definition: "Speculative firms like the Ohio Company that bought western land grants and recruited settlers; drove expansion but frequently clashed with Native peoples." },
        ],
      },
      {
        name: "Immigrant Communities",
        terms: [
          { term: "Scots-Irish", definition: "Protestant immigrants from Ulster, Ireland, who settled heavily in the Appalachian backcountry; noted for fierce independence and resistance to authority." },
          { term: "German Immigrants", definition: "Largest non-English immigrant group; settled densely in Pennsylvania and the mid-Atlantic, maintaining German language and culture into the 19th century." },
          { term: "Indentured Servants", definition: "Immigrants who exchanged years of labor for Atlantic passage; the system declined after the Revolution as wages rose and free labor became more available." },
          { term: "Free Black Communities", definition: "Grew in northern cities after gradual emancipation; established churches, mutual aid societies, and schools as the foundation of African American civic life." },
        ],
      },
      {
        name: "Forced Migration and Slavery",
        terms: [
          { term: "Domestic Slave Trade", definition: "Sale and forced relocation of enslaved people within the U.S.; intensified after 1808 when international slave imports were banned, separating hundreds of thousands of families." },
          { term: "Gradual Emancipation", definition: "Northern state laws freeing enslaved people incrementally over decades; by 1804 all states north of Delaware had passed some form of emancipation." },
          { term: "Three-Fifths Compromise", definition: "Constitutional provision counting enslaved people as three-fifths of a person for apportionment; gave slaveholding states disproportionate political power." },
          { term: "Northwest Ordinance Slavery Ban", definition: "Prohibition of slavery in the Northwest Territory (Ohio, Indiana, Illinois, Michigan, Wisconsin) — the first federal limit on slavery's expansion." },
        ],
      },
    ],
  },

  {
    id: "unit-3-pce",
    unit: 3,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Civic Engagement" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Constitutional Debates",
        terms: [
          { term: "Constitutional Convention", definition: "1787 Philadelphia meeting of 55 delegates that replaced the Articles of Confederation with the current Constitution." },
          { term: "Great Compromise", definition: "Agreement creating a bicameral Congress with equal state representation in the Senate and population-based representation in the House." },
          { term: "Three-Fifths Compromise", definition: "Agreement counting enslaved people as three-fifths of a person for congressional apportionment and taxation — a concession to slaveholding states." },
          { term: "Checks and Balances", definition: "Constitutional design giving each branch of government powers to limit the others, preventing any one branch from accumulating unchecked power." },
        ],
      },
      {
        name: "Washington's Presidency",
        terms: [
          { term: "Precedent", definition: "Washington's conscious effort to establish norms for the presidency — two-term limit, cabinet governance, civilian supremacy — that shaped the office permanently." },
          { term: "Cabinet", definition: "Group of department heads advising the president; Washington established the practice by consulting Hamilton (Treasury), Jefferson (State), and Knox (War)." },
          { term: "Neutrality Proclamation", definition: "Washington's 1793 declaration keeping the U.S. out of the Anglo-French war, establishing the precedent that the president could define foreign policy." },
          { term: "Whiskey Rebellion Response", definition: "Washington personally led 13,000 troops to suppress the 1794 rebellion, demonstrating that the federal government could enforce its laws within the states." },
        ],
      },
      {
        name: "Jeffersonian Democracy",
        terms: [
          { term: "Jefferson's Inauguration", definition: "1801 peaceful transfer of power from Federalists to Democratic-Republicans; Jefferson declared 'we are all republicans, we are all federalists.'" },
          { term: "Marbury v. Madison", definition: "1803 Supreme Court case in which Marshall established judicial review — the power of courts to strike down unconstitutional laws." },
          { term: "Midnight Judges", definition: "Federalist judges Adams appointed in his final hours as president; Jefferson refused to deliver their commissions, triggering Marbury v. Madison." },
          { term: "Strict Construction", definition: "Jefferson's view that the federal government could only do what the Constitution explicitly permitted; opposed Hamilton's 'loose construction' of federal power." },
        ],
      },
      {
        name: "Taxation and Rebellion",
        terms: [
          { term: "No Taxation Without Representation", definition: "Colonial slogan protesting British taxes imposed without colonial legislative consent; became a foundational principle of American self-governance." },
          { term: "Stamp Act Congress", definition: "1765 meeting of delegates from nine colonies to coordinate opposition to the Stamp Act; an early step toward united colonial political action." },
          { term: "Sons of Liberty", definition: "Radical patriot network that organized protests, boycotts, and intimidation of tax collectors across the colonies; Samuel Adams was a key leader." },
          { term: "Shays' Rebellion", definition: "1786 uprising of indebted Massachusetts farmers; its suppression revealed the Articles' weakness and galvanized support for the Constitutional Convention." },
        ],
      },
    ],
  },

  {
    id: "unit-3-wor",
    unit: 3,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Foreign Alliances in the Revolution",
        terms: [
          { term: "French Alliance", definition: "1778 military alliance with France following Saratoga; French troops, naval power, and money proved essential to ultimate American victory." },
          { term: "Marquis de Lafayette", definition: "French noble who volunteered to fight for American independence, linking the Revolution to broader Enlightenment ideals in Europe." },
          { term: "Spanish Intervention", definition: "Spain entered the war against Britain in 1779, opening a second front in the Caribbean and Gulf Coast that stretched British military resources." },
          { term: "Baron von Steuben", definition: "Prussian officer who drilled Washington's army at Valley Forge into a disciplined fighting force, transforming the Continental Army's effectiveness." },
        ],
      },
      {
        name: "Early Republic Foreign Crises",
        terms: [
          { term: "XYZ Affair", definition: "1797 French demand for bribes before diplomatic talks; outraged Americans and sparked the undeclared Quasi-War with France (1798–1800)." },
          { term: "Quasi-War", definition: "Undeclared naval conflict with France (1798–1800) following the XYZ Affair; ended with the Convention of 1800 restoring peace." },
          { term: "Barbary Pirates", definition: "North African states that attacked American merchant ships and demanded tribute; Jefferson refused to pay and sent the Navy — the first U.S. overseas military action." },
          { term: "Impressment", definition: "British practice of seizing American sailors and forcing them into the Royal Navy; a persistent grievance that contributed to the War of 1812." },
        ],
      },
      {
        name: "Diplomacy and Treaties",
        terms: [
          { term: "Treaty of Paris 1783", definition: "Ended the Revolutionary War; Britain recognized U.S. independence and ceded all lands east of the Mississippi, a stunning diplomatic victory." },
          { term: "Jay's Treaty", definition: "1794 agreement resolving post-war disputes with Britain and securing trade rights; bitterly criticized as too favorable to Britain but kept peace." },
          { term: "Pinckney's Treaty", definition: "1795 agreement with Spain securing American navigation rights on the Mississippi and access to New Orleans — essential for western trade." },
          { term: "Convention of 1800", definition: "Agreement ending the Quasi-War with France and releasing the U.S. from the 1778 alliance; Jefferson used it to avoid European entanglements." },
        ],
      },
      {
        name: "Neutrality and Foreign Policy Principles",
        terms: [
          { term: "Neutrality Proclamation", definition: "Washington's 1793 declaration of U.S. neutrality in the Anglo-French war; set the precedent of staying out of European conflicts." },
          { term: "Washington's Farewell Address", definition: "1796 warning against permanent alliances with foreign nations and political factions at home; guided U.S. foreign policy for over a century." },
          { term: "Monroe Doctrine (origins)", definition: "Rooted in the early republic's desire to stay free of European power politics; fully articulated by Monroe in 1823 declaring the Western Hemisphere off-limits to European colonization." },
          { term: "Freedom of the Seas", definition: "American insistence on the right to trade with all nations without interference; constantly challenged by Britain and France during the Napoleonic Wars." },
        ],
      },
    ],
  },

  {
    id: "unit-3-arc",
    unit: 3,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Enlightenment and Religion",
        terms: [
          { term: "Deism", definition: "Enlightenment belief that God created the universe but does not intervene in it; embraced by Jefferson, Franklin, and other founders who rejected orthodox Christianity." },
          { term: "First Great Awakening", definition: "1730s–40s religious revival emphasizing personal conversion and emotional faith; democratized religion and encouraged questioning of authority, indirectly fueling the Revolution." },
          { term: "Disestablishment", definition: "Process of separating church from state; Virginia's 1786 Statute for Religious Freedom, written by Jefferson, became a model for the First Amendment." },
          { term: "Rationalism", definition: "Enlightenment faith that human reason — not scripture — could discover truth and guide society; shaped the Declaration of Independence and constitutional design." },
        ],
      },
      {
        name: "Revolutionary Print Culture",
        terms: [
          { term: "The Federalist Papers", definition: "85 essays by Hamilton, Madison, and Jay explaining and defending the Constitution; the most important work of American political theory." },
          { term: "Common Sense", definition: "Thomas Paine's 1776 bestselling pamphlet arguing for independence in plain, forceful language accessible to ordinary colonists." },
          { term: "Newspapers", definition: "Colonial and early republic newspapers spread political ideas rapidly; the patriot press was a key tool for organizing resistance and shaping public opinion." },
          { term: "Pamphlet Culture", definition: "Explosion of cheap printed political arguments in the Revolution era; enabled colonists to debate independence, constitutions, and rights in a public sphere." },
        ],
      },
      {
        name: "Regional Cultures",
        terms: [
          { term: "New England Town Meeting", definition: "Local direct-democracy tradition in which all male citizens gathered to vote on community matters; a model of participatory republican government." },
          { term: "Southern Gentry", definition: "Wealthy planter class that dominated Virginia and Carolina society; shaped by tobacco and rice agriculture, enslaved labor, and English aristocratic ideals." },
          { term: "Backcountry Culture", definition: "Rugged Scots-Irish settler culture in the Appalachian backcountry; fiercely independent, resistant to eastern elites, and prone to conflict with both Native peoples and colonial governments." },
          { term: "Philadelphia", definition: "Largest city in colonial America and center of the early republic; hosted the Continental Congress, Constitutional Convention, and served as the first national capital." },
        ],
      },
      {
        name: "Art and Architecture of the Republic",
        terms: [
          { term: "Neoclassicism", definition: "Architectural and artistic style modeled on ancient Greece and Rome; used by Jefferson and others to express republican virtue — the Capitol and Monticello are key examples." },
          { term: "Gilbert Stuart", definition: "Portrait painter whose iconic unfinished portrait of Washington became the defining image of the first president, reproduced on the dollar bill." },
          { term: "Phillis Wheatley", definition: "Enslaved African American poet who published the first book by a Black American (1773); her work challenged slavery by demonstrating Black intellectual achievement." },
          { term: "Federal Style Architecture", definition: "Post-Revolution American architectural style blending neoclassical symmetry with local materials; expressed the new nation's aspirations to order, reason, and permanence." },
        ],
      },
    ],
  },

  {
    id: "unit-3-soc",
    unit: 3,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Revolution & Early Republic",
    subject: "APUSH",
    groups: [
      {
        name: "Slavery and Freedom",
        terms: [
          { term: "Abolitionism (early)", definition: "Post-Revolution movement demanding an end to slavery; strongest in New England and Pennsylvania where Quakers and evangelicals organized the first antislavery societies." },
          { term: "Gradual Emancipation", definition: "Northern state laws freeing enslaved people incrementally; by 1804 every state north of Delaware had passed some form, but freedom often came only after years more servitude." },
          { term: "Slave Codes", definition: "Southern laws tightly controlling enslaved people's lives — restricting movement, assembly, literacy, and self-defense; tightened after the Revolution as slavery expanded." },
          { term: "Free Black Population", definition: "Grew dramatically in the North and upper South after the Revolution; established churches, schools, and mutual aid societies despite legal discrimination." },
        ],
      },
      {
        name: "Women in the Early Republic",
        terms: [
          { term: "Republican Motherhood", definition: "Ideology that women's highest civic duty was raising virtuous republican sons; justified educating women but confined their political role to the domestic sphere." },
          { term: "Abigail Adams", definition: "Wrote 'Remember the Ladies' to her husband John in 1776, asking that the new republic's laws protect women; a proto-feminist voice within the founding generation." },
          { term: "Coverture", definition: "Legal doctrine under which a married woman's legal identity was absorbed into her husband's; she could not own property, sign contracts, or vote." },
          { term: "Female Academies", definition: "New schools for women founded in the early republic to train republican mothers; institutions like the Philadelphia Young Ladies' Academy expanded women's education." },
        ],
      },
      {
        name: "Class and Social Hierarchy",
        terms: [
          { term: "Gentry Class", definition: "Wealthy landowning elite who dominated colonial and early republic politics; expected deference from lower classes and saw themselves as natural leaders." },
          { term: "Yeoman Farmers", definition: "Independent small farmers who were the majority of free white Americans; Jefferson idealized them as the backbone of republican democracy." },
          { term: "Artisans", definition: "Skilled craftsmen — printers, shoemakers, carpenters — who formed an urban middle class; politically active and often radicalized by revolutionary ideology." },
          { term: "Indentured Servitude (decline)", definition: "System of bonded labor faded after the Revolution as wages rose and free workers became available; replaced by wage labor in the North and expanded slavery in the South." },
        ],
      },
      {
        name: "Native American Societies",
        terms: [
          { term: "Iroquois Confederacy (post-Revolution)", definition: "Shattered by the Revolution; most nations had sided with Britain, and the 1783 treaty abandoned them — their lands were opened to massive American settlement." },
          { term: "Treaty of Greenville", definition: "1795 treaty in which Native nations ceded most of Ohio after defeat at Fallen Timbers; accelerated the dispossession of the Ohio Valley." },
          { term: "Civilization Policy", definition: "Federal program urging Native nations to adopt farming, private property, and Christianity — framed as benevolent assimilation but designed to free up land for settlers." },
          { term: "Tecumseh's Confederacy (origins)", definition: "Shawnee leader Tecumseh began building a pan-Native alliance in the early 1800s to halt American expansion; culminated in the War of 1812." },
        ],
      },
    ],
  },

  {
    id: "unit-4-nat",
    unit: 4,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Jacksonian Democracy",
        terms: [
          { term: "Andrew Jackson", definition: "7th U.S. president (1829–1837); championed the 'common man,' expanded white male democracy, destroyed the National Bank, and forcibly removed Native peoples." },
          { term: "Spoils System", definition: "Jackson's practice of rewarding loyal political supporters with government jobs; he saw it as democratic, critics called it corrupt." },
          { term: "Universal White Male Suffrage", definition: "By the 1830s most states dropped property requirements for voting, extending the franchise to all white men — but not women, Black people, or Native peoples." },
          { term: "Democratic Party", definition: "Party founded by Jackson and Van Buren in the 1820s–30s, championing states' rights, limited government, and the interests of farmers and laborers over bankers and elites." },
        ],
      },
      {
        name: "American Identity and Destiny",
        terms: [
          { term: "Manifest Destiny", definition: "Belief that the United States was divinely ordained to expand across the continent to the Pacific; justified territorial conquest and displacement of Native peoples and Mexicans." },
          { term: "American Exceptionalism", definition: "Conviction that the United States had a unique, God-given mission to spread democracy and liberty; used to justify both reform at home and expansion abroad." },
          { term: "Transcendentalism", definition: "Intellectual movement led by Emerson and Thoreau celebrating individual conscience, nature, and self-reliance as the essence of American identity." },
          { term: "Second Great Awakening", definition: "Early 19th-century religious revival stressing personal salvation and moral reform; reshaped American culture and energized reform movements including abolition and temperance." },
        ],
      },
      {
        name: "Nativism and Immigration",
        terms: [
          { term: "Nativism", definition: "Anti-immigrant ideology claiming native-born (white Protestant) Americans were superior to Catholic Irish and German newcomers; led to the Know-Nothing Party." },
          { term: "Know-Nothing Party", definition: "1850s nativist political party that opposed Catholic immigration and demanded longer naturalization periods; briefly a major force before collapsing over slavery." },
          { term: "Irish Immigration", definition: "Mass arrival of 1.5 million Irish Catholics fleeing the Famine (1845–52); faced intense discrimination but transformed northern cities and Democratic Party politics." },
          { term: "German Immigration", definition: "Roughly one million Germans arrived in the 1840s–50s fleeing revolution and poverty; settled heavily in the Midwest and brought liberal political ideas and labor organizing." },
        ],
      },
      {
        name: "Reform and Moral Identity",
        terms: [
          { term: "Abolitionism", definition: "Movement demanding the immediate end of slavery on moral grounds; led by Garrison, Douglass, and Tubman — defined the era's fiercest debate over American identity and values." },
          { term: "Temperance Movement", definition: "Campaign to ban alcohol, framed as a moral crusade to protect families; the era's largest reform movement and dominated by evangelical Protestant women." },
          { term: "Seneca Falls Convention", definition: "1848 gathering in New York that produced the Declaration of Sentiments demanding equal rights for women; launched the organized women's rights movement." },
          { term: "Declaration of Sentiments", definition: "Document drafted at Seneca Falls modeled on the Declaration of Independence, asserting that 'all men and women are created equal' and demanding women's suffrage." },
        ],
      },
    ],
  },

  {
    id: "unit-4-wxt",
    unit: 4,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Industrial Takeoff",
        terms: [
          { term: "Lowell Mills", definition: "Massachusetts textile factories that recruited young farm women as workers; the first large-scale American industrial labor system, complete with company boarding houses." },
          { term: "Interchangeable Parts", definition: "Eli Whitney's manufacturing innovation using standardized identical components; enabled mass production and transformed American industry." },
          { term: "Cotton Gin", definition: "Eli Whitney's 1793 machine that rapidly separated cotton fibers from seeds; made cotton enormously profitable and massively expanded demand for enslaved labor." },
          { term: "Waltham System", definition: "Factory model pioneered at Waltham, MA, that brought all stages of textile production under one roof with a largely female workforce; spread across New England." },
        ],
      },
      {
        name: "Transportation Revolution",
        terms: [
          { term: "Erie Canal", definition: "1825 canal linking the Great Lakes to the Hudson River and New York City; slashed shipping costs, made NYC the commercial capital, and opened the Midwest to settlement." },
          { term: "Steamboats", definition: "Steam-powered vessels that revolutionized river travel; Robert Fulton's 1807 Clermont cut trip times and freight costs, knitting the interior economy together." },
          { term: "Railroads", definition: "Expanding rail network of the 1830s–50s that surpassed canals, linked distant markets, and became the era's defining technology of economic integration." },
          { term: "National Road", definition: "First federally funded highway (1811), stretching eventually from Maryland to Illinois; an early example of internal improvements sparking debate over federal power." },
        ],
      },
      {
        name: "King Cotton and Slave Labor",
        terms: [
          { term: "Cotton Gin", definition: "Eli Whitney's 1793 invention that made cotton processing fast and cheap; the resulting cotton boom made the South dependent on enslaved labor and shaped the antebellum economy." },
          { term: "Plantation System", definition: "Agricultural economy organized around large cotton (or tobacco/sugar) plantations worked by enslaved people; dominated the South and generated enormous wealth for planters." },
          { term: "Domestic Slave Trade", definition: "Sale and forced relocation of enslaved people within the U.S. after the 1808 ban on importing enslaved Africans; separated hundreds of thousands of families." },
          { term: "King Cotton", definition: "Phrase expressing the South's belief that its cotton exports were so essential to the world economy that no power would dare challenge slavery; proved disastrously wrong during the Civil War." },
        ],
      },
      {
        name: "Banking and Finance",
        terms: [
          { term: "Second Bank of the United States", definition: "National bank chartered in 1816 to stabilize currency and credit; Jackson vetoed its recharter in 1832, calling it a corrupt tool of the wealthy." },
          { term: "Bank War", definition: "Jackson's campaign to destroy the Second Bank; his veto message cast it as a battle of the common man against entrenched privilege and shaped American populist politics." },
          { term: "Pet Banks", definition: "State banks Jackson deposited federal funds in after destroying the Second Bank; their loose lending fueled land speculation and contributed to the Panic of 1837." },
          { term: "Panic of 1837", definition: "Severe economic depression triggered by Jackson's bank policies and land speculation; banks failed, unemployment soared, and Van Buren's presidency was crippled." },
        ],
      },
    ],
  },

  {
    id: "unit-4-geo",
    unit: 4,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Westward Expansion Routes",
        terms: [
          { term: "Oregon Trail", definition: "2,000-mile overland route from Missouri to the Pacific Northwest; used by over 400,000 settlers between the 1840s and 1860s." },
          { term: "Santa Fe Trail", definition: "Commercial route from Missouri to Santa Fe, New Mexico; opened American trade with the Spanish Southwest and later guided the Mexican-American War." },
          { term: "Erie Canal", definition: "Artificial waterway completed in 1825 connecting the Great Lakes to the Hudson River; opened the Midwest to settlement and made New York City the nation's commercial hub." },
          { term: "Cumberland Gap", definition: "Mountain pass through the Appalachians used by settlers moving into Kentucky and Tennessee; Daniel Boone's Wilderness Road ran through it." },
        ],
      },
      {
        name: "Texas and the Southwest",
        terms: [
          { term: "Texas Annexation", definition: "1845 U.S. annexation of the Republic of Texas after its independence from Mexico; Mexico refused to recognize it, directly triggering the Mexican-American War." },
          { term: "Mexican-American War", definition: "1846–1848 war fought after the U.S. annexed Texas; ended with Mexico ceding 525,000 square miles — present-day California, the Southwest, and Great Basin." },
          { term: "Treaty of Guadalupe Hidalgo", definition: "1848 peace treaty ending the Mexican-American War; the U.S. paid $15 million for half of Mexico's territory — California, New Mexico, Arizona, Nevada, Utah, Colorado." },
          { term: "Manifest Destiny", definition: "Ideology holding that American continental expansion was God-given and inevitable; the driving force behind Texas annexation, the Oregon settlement, and the war with Mexico." },
        ],
      },
      {
        name: "Native Removal and the South",
        terms: [
          { term: "Indian Removal Act", definition: "1830 law authorizing the forced relocation of the Five Civilized Tribes from the Southeast to Indian Territory (present-day Oklahoma) west of the Mississippi." },
          { term: "Trail of Tears", definition: "1838–39 forced march of 16,000 Cherokee to Oklahoma in which roughly 4,000 died of cold, hunger, and disease — the most infamous result of Indian Removal." },
          { term: "Five Civilized Tribes", definition: "Cherokee, Choctaw, Chickasaw, Creek, and Seminole nations that had adopted many European customs; forcibly removed regardless under the Indian Removal Act." },
          { term: "Worcester v. Georgia", definition: "1832 Supreme Court ruling that Georgia had no jurisdiction over Cherokee lands; Jackson ignored it, reportedly saying 'Marshall has made his decision; now let him enforce it.'" },
        ],
      },
      {
        name: "Sectionalism and Geography",
        terms: [
          { term: "Missouri Compromise", definition: "1820 agreement admitting Missouri (slave) and Maine (free) and drawing the 36°30' line across the Louisiana Territory to separate slave and free zones." },
          { term: "36°30' Line", definition: "Geographical boundary set by the Missouri Compromise dividing the Louisiana Territory into slave (south) and free (north) zones; repealed by the Kansas-Nebraska Act in 1854." },
          { term: "Cotton Belt", definition: "Region stretching across the Deep South where climate and soil conditions made cotton king; the economic and social heart of the slaveholding South." },
          { term: "Free Soil Territory", definition: "Concept that new western territories should be kept free of slavery; debated fiercely as expansion raised the question of whether slavery would spread or be contained." },
        ],
      },
    ],
  },

  {
    id: "unit-4-mig",
    unit: 4,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "The Great Migration West",
        terms: [
          { term: "Oregon Trail", definition: "The era's great overland migration route; settlers traveled six months by wagon from Missouri to Oregon, driven by land hunger and Manifest Destiny." },
          { term: "Manifest Destiny", definition: "Belief that Providence destined Americans to spread across the continent; the ideological engine behind the era's mass westward migration and territorial conquest." },
          { term: "Homesteaders", definition: "Settlers who claimed western land under promises of cheap or free land; faced harsh conditions, isolation, and conflict with Native peoples and Mexican communities." },
          { term: "Texas Settlers", definition: "American settlers invited into Mexican Texas in the 1820s by empresarios like Stephen Austin; by 1835 outnumbered Tejanos and launched the Texas Revolution." },
        ],
      },
      {
        name: "Immigrant Waves",
        terms: [
          { term: "Irish Immigration", definition: "1.5 million Irish Catholics arrived during the Famine years (1845–52); crowded into northern cities, faced brutal discrimination, and reshaped urban America." },
          { term: "German Immigration", definition: "One million Germans arrived in the 1840s–50s; settled in Midwest cities like Cincinnati and Milwaukee, bringing skilled labor, political liberalism, and beer culture." },
          { term: "Nativism", definition: "Violent anti-immigrant backlash against Catholic newcomers; sparked riots, church burnings, and the Know-Nothing Party — a recurring pattern in American history." },
          { term: "Chain Migration", definition: "Process in which earlier immigrants write home about opportunities, encouraging family and neighbors to follow; explains the dense ethnic clustering in 19th-century American cities." },
        ],
      },
      {
        name: "Forced Removal of Native Peoples",
        terms: [
          { term: "Indian Removal Act", definition: "1830 law forcing the Five Civilized Tribes off their southeastern homelands and into 'Indian Territory' west of the Mississippi." },
          { term: "Trail of Tears", definition: "Forced 1838–39 march of 16,000 Cherokee to Oklahoma; roughly 4,000 died — a deliberate act of ethnic cleansing to open Native lands to white settlers." },
          { term: "Bureau of Indian Affairs", definition: "Federal agency established in 1824 to manage U.S. relations with Native nations; in practice administered removal, reservation confinement, and forced assimilation." },
          { term: "Seminole Wars", definition: "Series of Florida conflicts (1817–58) as Seminole people resisted removal; the longest and most expensive Indian wars in U.S. history — some Seminoles never surrendered." },
        ],
      },
      {
        name: "The Underground Railroad",
        terms: [
          { term: "Underground Railroad", definition: "Network of secret routes and safe houses helping enslaved people escape North; operated by both Black and white abolitionists across hundreds of miles." },
          { term: "Harriet Tubman", definition: "Escaped enslaved woman who returned South 13 times to free approximately 70 people; called 'Moses' by those she led to freedom." },
          { term: "Frederick Douglass", definition: "Escaped enslaved man who became the era's most powerful abolitionist speaker and writer; his autobiography exposed the brutality of slavery to northern audiences." },
          { term: "Fugitive Slave Act (1793)", definition: "Required northern states to return escaped enslaved people to their owners; bitterly resented in the North and routinely defied — foreshadowing the 1850 version that inflamed the sectional crisis." },
        ],
      },
    ],
  },

  {
    id: "unit-4-pce",
    unit: 4,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Civic Engagement" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Jackson's Presidency",
        terms: [
          { term: "Andrew Jackson", definition: "7th president; transformed the presidency into a populist institution, pioneered mass party politics, defied the Supreme Court, and destroyed the national bank." },
          { term: "Nullification Crisis", definition: "1832–33 showdown when South Carolina declared a federal tariff null and void; Jackson threatened force and Congress passed a compromise tariff, asserting federal supremacy." },
          { term: "Bank War", definition: "Jackson's destruction of the Second Bank of the United States; his 1832 veto message framed it as a war between the common people and a corrupt moneyed aristocracy." },
          { term: "Spoils System", definition: "Replacing government officials with loyal party members; Jackson expanded this practice dramatically, cementing the link between party loyalty and government employment." },
        ],
      },
      {
        name: "Second Party System",
        terms: [
          { term: "Whig Party", definition: "Party formed in the 1830s to oppose 'King Andrew' Jackson; favored the American System of tariffs, banks, and internal improvements; included Clay, Webster, and Lincoln." },
          { term: "Democratic Party", definition: "Jackson's party: pro-states' rights, anti-bank, anti-tariff; built a coalition of Southern planters, northern workers, and western farmers." },
          { term: "Henry Clay", definition: "Whig leader who championed the American System of protective tariffs, a national bank, and federally funded internal improvements to modernize the economy." },
          { term: "American System", definition: "Henry Clay's economic program combining a national bank, protective tariffs, and federally funded roads and canals to unify and strengthen the American economy." },
        ],
      },
      {
        name: "Reform Politics",
        terms: [
          { term: "Abolitionism", definition: "Movement demanding the immediate, unconditional end of slavery; William Lloyd Garrison's Liberator and Frederick Douglass's oratory radicalized northern opinion." },
          { term: "William Lloyd Garrison", definition: "Editor of The Liberator and founder of the American Anti-Slavery Society; his uncompromising demand for immediate abolition made him the era's most controversial reformer." },
          { term: "Seneca Falls Convention", definition: "1848 women's rights convention; produced the Declaration of Sentiments and launched organized political activism for women's suffrage and equal rights." },
          { term: "Liberty Party", definition: "First antislavery political party (1840); ran James Birney for president and pioneered the strategy of using electoral politics to fight slavery." },
        ],
      },
      {
        name: "States' Rights vs. Federal Power",
        terms: [
          { term: "Nullification", definition: "Theory that states could void federal laws they deemed unconstitutional; articulated by Calhoun in the South Carolina Exposition, tested in the Nullification Crisis." },
          { term: "John C. Calhoun", definition: "South Carolina senator and champion of states' rights and slavery; developed the nullification doctrine and later argued slavery was a 'positive good.'" },
          { term: "Missouri Compromise", definition: "1820 congressional deal drawing the 36°30' line; demonstrated that sectional conflict over slavery could be managed politically — but not resolved." },
          { term: "Worcester v. Georgia", definition: "1832 ruling affirming Cherokee sovereignty; Jackson's refusal to enforce it showed that federal power could be selectively applied, undermining the rule of law." },
        ],
      },
    ],
  },

  {
    id: "unit-4-wor",
    unit: 4,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Monroe Doctrine and Hemispheric Power",
        terms: [
          { term: "Monroe Doctrine", definition: "1823 declaration that the Western Hemisphere was closed to further European colonization and that any attempt to extend European power would be seen as a threat." },
          { term: "Roosevelt Corollary (roots)", definition: "The Monroe Doctrine's implicit claim of U.S. police power in the Americas; not yet fully articulated but already embedded in the era's expansionist thinking." },
          { term: "Pan-Americanism", definition: "Ideal of solidarity among Western Hemisphere nations; Henry Clay promoted it through the Congress of Panama (1826) as a way to extend American commercial influence." },
          { term: "Cuban and Latin American Trade", definition: "Growing American commercial ties with newly independent Latin American republics in the 1820s–40s; the Monroe Doctrine protected these markets from European competition." },
        ],
      },
      {
        name: "Expansion and War with Mexico",
        terms: [
          { term: "Texas Revolution", definition: "1835–36 revolt by American settlers in Mexican Texas; resulted in the Republic of Texas, which the U.S. later annexed, provoking war with Mexico." },
          { term: "Mexican-American War", definition: "1846–1848 war that Polk provoked to seize the Southwest; critics including Lincoln and Thoreau called it an unjust war of aggression against a weaker neighbor." },
          { term: "Manifest Destiny", definition: "The belief that God willed American expansion to the Pacific; used to justify war with Mexico and the seizure of half its territory as the nation's inevitable destiny." },
          { term: "Wilmot Proviso", definition: "1846 proposal to ban slavery from any territory acquired from Mexico; passed the House but failed in the Senate, intensifying the sectional crisis over slavery's expansion." },
        ],
      },
      {
        name: "Trade and Commerce Abroad",
        terms: [
          { term: "China Trade", definition: "Lucrative American merchant trade with China in the early 19th century; American ships carried furs, silver, and opium to China and returned with silk and tea." },
          { term: "Pacific Whaling", definition: "American whaling industry that dominated Pacific waters and opened U.S. interest in Pacific islands and Asia; the economic precursor to later Pacific expansion." },
          { term: "Clipper Ships", definition: "Fast American sailing ships built to maximize cargo speed; dominated global trade routes in the 1840s–50s before steam power made them obsolete." },
          { term: "Most Favored Nation Status", definition: "Trade agreements giving each signatory the best terms offered to any other country; the U.S. used these treaties to expand commercial access in Europe and Asia." },
        ],
      },
      {
        name: "War of 1812 Legacy",
        terms: [
          { term: "War of 1812", definition: "Conflict with Britain over impressment and western expansion; ended in a draw at Ghent (1814) but produced an intense surge of American nationalism." },
          { term: "Battle of New Orleans", definition: "Jackson's January 1815 victory (fought after the peace treaty was signed); made him a national hero and launched his political career." },
          { term: "Era of Good Feelings", definition: "1816–24 period of one-party Republican rule following the war; masked growing sectional tensions under a surface of national unity." },
          { term: "Rush-Bagot Agreement", definition: "1817 agreement demilitarizing the Great Lakes border with Canada; a model of peaceful dispute resolution and the beginning of the 'undefended border.'" },
        ],
      },
    ],
  },

  {
    id: "unit-4-arc",
    unit: 4,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Second Great Awakening",
        terms: [
          { term: "Second Great Awakening", definition: "Massive Protestant revival of the 1820s–40s emphasizing emotional conversion, personal responsibility, and social reform; the cultural engine of the antebellum reform era." },
          { term: "Charles Finney", definition: "The era's most famous revivalist preacher; his 'new measures' (protracted meetings, the anxious bench) made conversion dramatic and immediate in the Burned-Over District." },
          { term: "Burned-Over District", definition: "Western New York region swept repeatedly by religious revivals; birthplace of Mormonism, Adventism, Spiritualism, and dozens of reform movements — so 'burned over' by revival fire." },
          { term: "Camp Meetings", definition: "Outdoor revival gatherings lasting several days that drew thousands; the Second Great Awakening's defining ritual, mixing intense preaching, singing, and conversion experiences." },
        ],
      },
      {
        name: "Literary and Intellectual Culture",
        terms: [
          { term: "Transcendentalism", definition: "Philosophy championed by Emerson and Thoreau holding that truth comes through individual intuition and nature rather than institutions or tradition; defined New England intellectual life." },
          { term: "Ralph Waldo Emerson", definition: "Transcendentalist essayist and lecturer; his 'Self-Reliance' and 'The American Scholar' called for an original American culture independent of Europe." },
          { term: "Henry David Thoreau", definition: "Transcendentalist who lived at Walden Pond and wrote Civil Disobedience; argued individuals must resist unjust laws — foundational for later civil rights movements." },
          { term: "American Renaissance", definition: "Explosion of great American literature in the 1840s–50s: Hawthorne, Melville, Whitman, Poe, and Stowe all published masterworks in a single decade." },
        ],
      },
      {
        name: "Utopian Communities",
        terms: [
          { term: "Brook Farm", definition: "Transcendentalist commune in Massachusetts (1841–47) where intellectuals attempted cooperative living and labor; a famous experiment in utopian idealism that ultimately failed." },
          { term: "Oneida Community", definition: "New York religious commune founded by John Humphrey Noyes practicing 'complex marriage' and communal property; financially successful through silverware manufacturing." },
          { term: "Shakers", definition: "Celibate religious community known for spare, elegant furniture and communal living; at their 1840s peak had 6,000 members in 18 communities across the Northeast." },
          { term: "Mormon Church", definition: "Founded by Joseph Smith in the Burned-Over District (1830); faced intense persecution for polygamy and communalism, driving the church's migration to Utah under Brigham Young." },
        ],
      },
      {
        name: "Antebellum Popular Culture",
        terms: [
          { term: "Penny Press", definition: "Cheap mass-circulation newspapers launched in the 1830s (New York Sun, Herald); reached working-class readers for the first time and created a national shared information culture." },
          { term: "Minstrel Shows", definition: "Popular entertainment featuring white performers in blackface mocking African Americans; spread racist stereotypes nationally and revealed the depth of white racial anxiety." },
          { term: "Lyceum Movement", definition: "Network of public lecture halls and debate societies that spread knowledge and ideas to ordinary Americans; featured speakers like Emerson, Douglass, and Webster." },
          { term: "Uncle Tom's Cabin", definition: "Harriet Beecher Stowe's 1852 bestselling novel depicting slavery's cruelty; sold 300,000 copies in its first year and turned millions of northerners against slavery." },
        ],
      },
    ],
  },

  {
    id: "unit-4-soc",
    unit: 4,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Jacksonian Era & Market Revolution",
    subject: "APUSH",
    groups: [
      {
        name: "Slavery and Resistance",
        terms: [
          { term: "Nat Turner's Rebellion", definition: "1831 Virginia slave revolt; 55 white people killed before suppression. Led to brutal reprisals, tighter slave codes, and suppression of abolitionist mail in the South." },
          { term: "Frederick Douglass", definition: "The era's most powerful abolitionist voice; his 1845 Narrative exposed slavery's brutality and demolished claims that enslaved people were inferior or content." },
          { term: "Underground Railroad", definition: "Network of routes and safe houses that helped enslaved people escape North; Harriet Tubman made 13 missions south rescuing approximately 70 people." },
          { term: "Slave Codes", definition: "Laws controlling enslaved people's lives — banning literacy, restricting movement, legalizing brutal punishment; tightened dramatically after Nat Turner's Rebellion." },
        ],
      },
      {
        name: "Women's Rights",
        terms: [
          { term: "Seneca Falls Convention", definition: "1848 women's rights gathering that produced the Declaration of Sentiments demanding equal rights including suffrage; the founding event of the organized women's rights movement." },
          { term: "Declaration of Sentiments", definition: "Document drafted by Elizabeth Cady Stanton at Seneca Falls, modeled on the Declaration of Independence; declared all men and women equal and demanded women's right to vote." },
          { term: "Elizabeth Cady Stanton", definition: "Primary author of the Declaration of Sentiments and lifelong women's rights activist; co-organized Seneca Falls and co-founded the National Woman Suffrage Association." },
          { term: "Cult of Domesticity", definition: "Ideology confining middle-class women to the home as moral guardians of the family; created the 'separate spheres' doctrine that women's rights activists fought against." },
        ],
      },
      {
        name: "Labor and the Working Class",
        terms: [
          { term: "Lowell Mill Girls", definition: "Young farm women recruited to work in Lowell textile factories; lived in company boarding houses and organized some of the first labor strikes in American history." },
          { term: "Lowell Strikes", definition: "1830s–40s labor actions by Lowell mill women protesting wage cuts and speedups; early demonstrations that industrial workers — even young women — would organize and resist." },
          { term: "Journeymen's Unions", definition: "Early craft unions of skilled workers like shoemakers and printers; fought for the 10-hour workday and higher wages in the era's first sustained labor movement." },
          { term: "Commonwealth v. Hunt", definition: "1842 Massachusetts Supreme Court ruling that labor unions were legal; the first major legal recognition that workers had the right to organize and strike." },
        ],
      },
      {
        name: "Class and Social Reform",
        terms: [
          { term: "Second Great Awakening", definition: "Religious revival that drove the era's reform movements; the belief that personal and social sin could be conquered energized abolitionists, temperance crusaders, and prison reformers." },
          { term: "Temperance Movement", definition: "The era's largest reform movement; framed alcohol as the cause of poverty, domestic violence, and moral decay — a working-class family issue as much as a middle-class crusade." },
          { term: "Horace Mann", definition: "Massachusetts education reformer who created the first state board of education (1837) and championed universal public schooling as the foundation of a democratic society." },
          { term: "Prison Reform", definition: "Movement led by Dorothea Dix and others to replace brutal punishment with rehabilitation; established the first institutions for the mentally ill as a humane alternative to jails." },
        ],
      },
    ],
  },

  {
    id: "unit-5-nat",
    unit: 5,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "What the War Was About",
        terms: [
          { term: "Emancipation Proclamation", definition: "Lincoln's January 1, 1863 executive order freeing enslaved people in Confederate states; transformed the war's purpose from preserving the Union to destroying slavery." },
          { term: "Lost Cause Myth", definition: "Post-war Southern ideology romanticizing the Confederacy and claiming the Civil War was about states' rights, not slavery; shaped public memory for generations." },
          { term: "Confederate States of America", definition: "Government formed by 11 seceding Southern states in 1861; its constitution explicitly protected slavery as a cornerstone of the new nation." },
          { term: "Cornerstone Speech", definition: "Confederate VP Alexander Stephens' 1861 declaration that slavery — not states' rights — was the 'cornerstone' of the Confederacy; demolishes Lost Cause revisionism." },
        ],
      },
      {
        name: "Black Freedom and Citizenship",
        terms: [
          { term: "13th Amendment", definition: "1865 constitutional amendment abolishing slavery in the United States — the legal end of the institution after 246 years on American soil." },
          { term: "14th Amendment", definition: "1868 amendment granting birthright citizenship and equal protection under the law; overturned Dred Scott and became the foundation of modern civil rights law." },
          { term: "15th Amendment", definition: "1870 amendment prohibiting denial of the vote on account of race; enabled Black men to vote during Reconstruction before being systematically stripped of that right." },
          { term: "Freedmen's Bureau", definition: "Federal agency (1865–72) providing food, legal aid, and education to formerly enslaved people; established hundreds of schools including what became Howard University." },
        ],
      },
      {
        name: "Lincoln's Vision",
        terms: [
          { term: "Abraham Lincoln", definition: "16th president who held the Union together through the Civil War; his 1863 Gettysburg Address redefined the nation as 'conceived in liberty and dedicated to the proposition that all men are created equal.'" },
          { term: "Gettysburg Address", definition: "Lincoln's November 1863 speech dedicating a battlefield cemetery; 272 words that recast the war as a test of whether democratic self-government could survive." },
          { term: "Second Inaugural Address", definition: "Lincoln's March 1865 speech urging 'malice toward none' in reconstruction; called for healing the nation without vengeance toward the South." },
          { term: "Lincoln's 10% Plan", definition: "Lenient Reconstruction proposal allowing Southern states back when 10% of their 1860 voters swore loyalty; rejected by Radical Republicans as too forgiving." },
        ],
      },
      {
        name: "The Collapse of Reconstruction",
        terms: [
          { term: "Compromise of 1877", definition: "Secret deal giving Rutherford Hayes the presidency in exchange for withdrawing federal troops from the South; ended Reconstruction and abandoned Black Southerners to white supremacy." },
          { term: "Redeemer Democrats", definition: "White Southern Democrats who 'redeemed' Southern governments from Republican Reconstruction by disenfranchising Black voters through violence, fraud, and legal tricks." },
          { term: "Plessy v. Ferguson", definition: "1896 Supreme Court ruling upholding 'separate but equal' racial segregation; legitimized Jim Crow and wasn't overturned until Brown v. Board in 1954." },
          { term: "Jim Crow Laws", definition: "Southern state and local laws enforcing racial segregation in all public life after Reconstruction; created a system of legal apartheid that lasted until the 1960s." },
        ],
      },
    ],
  },

  {
    id: "unit-5-wxt",
    unit: 5,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Union War Economy",
        terms: [
          { term: "Morrill Tariff", definition: "1861 high protective tariff that funded the Union war effort and pleased Northern manufacturers; established high tariffs as Republican economic policy for decades." },
          { term: "National Banking Acts", definition: "1863–64 laws creating a national currency and federally chartered banks; ended the chaos of hundreds of different state bank notes and modernized American finance." },
          { term: "Pacific Railroad Act", definition: "1862 law authorizing the transcontinental railroad; gave railroad companies massive land grants and government bonds, transforming the western economy." },
          { term: "Greenbacks", definition: "Paper currency issued by the Union to finance the war; not backed by gold, which caused inflation — and a post-war political fight over whether to keep them in circulation." },
        ],
      },
      {
        name: "Labor After Emancipation",
        terms: [
          { term: "Sharecropping", definition: "System in which freedpeople and poor whites farmed land owned by planters in exchange for a share of the crop; high interest and debt kept workers trapped in poverty." },
          { term: "Crop Lien System", definition: "Arrangement in which merchants extended credit to sharecroppers secured by the future crop; chronic debt kept Black Southerners economically enslaved long after legal emancipation." },
          { term: "Black Codes", definition: "Southern laws passed in 1865–66 restricting Black people's freedom to move, work, or refuse labor contracts; designed to recreate slavery-like conditions after emancipation." },
          { term: "Freedmen's Bureau Labor Contracts", definition: "Contracts the Bureau supervised between freedpeople and planters; meant to ensure fair pay but often enforced terms that kept Black workers in exploitative arrangements." },
        ],
      },
      {
        name: "Industrialization and the War",
        terms: [
          { term: "Total War", definition: "Union strategy under Grant and Sherman of destroying Confederate economic infrastructure — railroads, farms, factories — to break Southern capacity to fight." },
          { term: "Sherman's March to the Sea", definition: "Union General Sherman's 1864 campaign burning a 60-mile-wide swath through Georgia; destroyed Confederate supply lines and broke civilian morale." },
          { term: "Ironclads", definition: "Steam-powered armored warships like the Monitor and Virginia (Merrimack); made wooden navies obsolete and transformed naval warfare permanently." },
          { term: "Railroads in the Civil War", definition: "The Union's superior railroad network allowed rapid troop movements and supply; the Confederacy's limited rail capacity was a fatal strategic weakness." },
        ],
      },
      {
        name: "Reconstruction Era Economy",
        terms: [
          { term: "Homestead Act", definition: "1862 law granting 160 acres of western land to settlers who farmed it for five years; opened the Great Plains to millions of settlers but mostly benefited white families." },
          { term: "Transcontinental Railroad", definition: "Completed in 1869 linking the coasts; built largely by Chinese and Irish immigrant labor, it transformed western settlement, trade, and Native displacement." },
          { term: "Panic of 1873", definition: "Economic depression triggered by railroad overbuilding and bank collapses; devastated Reconstruction governments and shifted political attention away from Black civil rights." },
          { term: "Forty Acres and a Mule", definition: "Promise made to freedpeople that they would receive land confiscated from Confederate planters; rescinded by Andrew Johnson, leaving freedpeople without economic independence." },
        ],
      },
    ],
  },

  {
    id: "unit-5-geo",
    unit: 5,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Key Battles and Campaigns",
        terms: [
          { term: "Fort Sumter", definition: "Confederate bombardment of a Union fort in Charleston, SC harbor on April 12, 1861; the first shots of the Civil War, forcing Lincoln to respond militarily." },
          { term: "Antietam", definition: "September 17, 1862 battle in Maryland — the bloodiest single day in American history (22,000 casualties); Union 'victory' gave Lincoln the moment to issue the Emancipation Proclamation." },
          { term: "Gettysburg", definition: "July 1–3, 1863 battle in Pennsylvania; the Union repelled Pickett's Charge and ended the Confederacy's last major northern invasion — the war's decisive turning point." },
          { term: "Vicksburg", definition: "Union siege ending July 4, 1863; capturing this Mississippi River fortress gave the Union control of the river, splitting the Confederacy and fulfilling the Anaconda Plan." },
        ],
      },
      {
        name: "Military Strategy and Geography",
        terms: [
          { term: "Anaconda Plan", definition: "Union strategy to blockade Southern ports, control the Mississippi River, and strangle the Confederacy economically rather than invading by land." },
          { term: "Naval Blockade", definition: "Union effort to seal Confederate ports from foreign trade; by 1865 severely limited Southern access to weapons, medicine, and manufactured goods." },
          { term: "Appomattox Court House", definition: "Virginia village where Lee surrendered to Grant on April 9, 1865; effectively ended the Civil War and became a symbol of reconciliation." },
          { term: "Sherman's March to the Sea", definition: "1864 campaign cutting a 300-mile path of destruction from Atlanta to Savannah; demonstrated that the Union could destroy the South's ability to sustain the war." },
        ],
      },
      {
        name: "Border States and the West",
        terms: [
          { term: "Border States", definition: "Slave states (Missouri, Kentucky, Maryland, Delaware) that did not secede; Lincoln used careful political maneuvering to keep them in the Union." },
          { term: "West Virginia", definition: "Broke away from Virginia in 1863 when western Virginians refused to secede; admitted as a free state, demonstrating how geography and slavery divided even individual states." },
          { term: "Battle of Glorieta Pass", definition: "1862 Union victory in New Mexico that stopped a Confederate attempt to capture the Southwest and its gold routes to California; the 'Gettysburg of the West.'" },
          { term: "Sand Creek Massacre", definition: "1864 slaughter of 150–200 Cheyenne and Arapaho people by Colorado militia; while the Civil War consumed the nation, violence against Native peoples on the Plains intensified." },
        ],
      },
      {
        name: "Reconstruction's Landscape",
        terms: [
          { term: "Freedmen's Bureau", definition: "Federal agency that set up offices across the South to provide food, education, and legal aid; its presence gave freedpeople a brief taste of federal protection." },
          { term: "Sea Islands Experiment", definition: "Union-occupied South Carolina islands where freedpeople farmed abandoned plantations during the war; the first large-scale experiment in Black land ownership — ended after the war." },
          { term: "Port Royal Experiment", definition: "1861 Union occupation of coastal South Carolina where freedpeople and Northern teachers tested Black freedom and self-sufficiency; proved freedpeople could manage their own affairs." },
          { term: "Homestead Act", definition: "1862 law offering 160 acres of public land in the West; designed to spread free labor across the continent — shaped postwar migration and western development." },
        ],
      },
    ],
  },

  {
    id: "unit-5-mig",
    unit: 5,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Freedpeople on the Move",
        terms: [
          { term: "Contraband Camps", definition: "Settlements where enslaved people who escaped to Union lines during the war were held; over 500,000 'contrabands' created a refugee crisis that forced emancipation onto the agenda." },
          { term: "Forty Acres and a Mule", definition: "Promise of land redistribution to freedpeople that was rescinded by Andrew Johnson; without land, most freedpeople had no choice but to work for their former enslavers." },
          { term: "Exodusters", definition: "40,000 Black Southerners who migrated to Kansas in 1879 fleeing Reconstruction's collapse; the first major post-war Black migration, led by Benjamin 'Pap' Singleton." },
          { term: "Freedmen's Bureau", definition: "Federal agency that tried to manage the massive displacement of four million formerly enslaved people; helped reunite families separated by the slave trade." },
        ],
      },
      {
        name: "Transcontinental Railroad and Western Settlement",
        terms: [
          { term: "Transcontinental Railroad", definition: "Completed 1869; the Central Pacific (Chinese workers west to east) and Union Pacific (Irish workers east to west) met at Promontory Summit, Utah." },
          { term: "Chinese Exclusion Act (context)", definition: "The massive Chinese immigrant workforce that built the Central Pacific railroad faced intense racism; their exploitation set the stage for the 1882 Chinese Exclusion Act." },
          { term: "Homestead Act", definition: "1862 law granting 160 acres of federal land to settlers; drove massive westward migration after the war, especially by freed Black families and European immigrants." },
          { term: "Sodbusters", definition: "Great Plains homesteaders who broke tough prairie sod to farm; faced grasshopper plagues, drought, and isolation — many failed and returned East or moved to cities." },
        ],
      },
      {
        name: "Native Displacement",
        terms: [
          { term: "Indian Wars", definition: "Series of conflicts (1860s–90s) between the U.S. Army and Plains nations as settlers poured into Native lands; ended Native military resistance and confined tribes to reservations." },
          { term: "Sand Creek Massacre", definition: "November 1864 slaughter of 150–200 peaceful Cheyenne and Arapaho by Colorado militia; sparked outrage among some in Congress but accelerated settler pressure on the Plains." },
          { term: "Plains Nations", definition: "Lakota, Comanche, Cheyenne, Arapaho, and others whose buffalo-based cultures were destroyed by railroad construction, buffalo hunters, and the U.S. Army in the postwar decades." },
          { term: "Reservation System", definition: "Federal policy confining Native peoples to limited territories; reservations were typically on land deemed worthless — until valuable resources were found on them." },
        ],
      },
      {
        name: "Immigration During the Civil War Era",
        terms: [
          { term: "Irish Immigrants", definition: "Heavily recruited for Union Army service (often right off the boat); the Irish Brigade suffered enormous casualties and resented being used as cannon fodder." },
          { term: "German-Americans", definition: "Large German immigrant community strongly antislavery; the 'Forty-Eighters' who fled Germany after the 1848 revolution brought liberal politics and military expertise to the Union." },
          { term: "New York Draft Riots", definition: "July 1863 uprising by mostly Irish working-class men against the federal draft; targeted Black New Yorkers, killed over 100 people, and revealed class and racial tensions in the North." },
          { term: "Buffalo Soldiers", definition: "Black Union Army veterans who became the 9th and 10th Cavalry regiments after the war; fought in the Indian Wars and earned their name from Plains nations they were sent to fight." },
        ],
      },
    ],
  },

  {
    id: "unit-5-pce",
    unit: 5,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Civic Engagement" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Road to Secession",
        terms: [
          { term: "Kansas-Nebraska Act", definition: "1854 law allowing settlers to vote on slavery in new territories, effectively repealing the Missouri Compromise and reigniting the sectional crisis." },
          { term: "Bleeding Kansas", definition: "1854–61 guerrilla war between pro-slavery and antislavery settlers in Kansas; a preview of the Civil War and proof that compromise on slavery was no longer possible." },
          { term: "Dred Scott v. Sandford", definition: "1857 Supreme Court ruling that Black people were not citizens and Congress could not ban slavery in any territory; electrified the antislavery movement and destroyed moderate compromise." },
          { term: "Election of 1860", definition: "Lincoln won with no Southern electoral votes; South Carolina seceded before his inauguration, arguing Republican rule meant the destruction of their way of life." },
        ],
      },
      {
        name: "Lincoln and Congress",
        terms: [
          { term: "Radical Republicans", definition: "Congressional faction demanding full racial equality and harsh terms for the South; clashed with both Lincoln and Johnson over the pace and terms of Reconstruction." },
          { term: "Wade-Davis Bill", definition: "1864 Radical Republican plan requiring 50% of voters to swear loyalty before readmission; Lincoln pocket-vetoed it, triggering a public break with congressional Republicans." },
          { term: "Tenure of Office Act", definition: "1867 law forbidding the president from removing cabinet members without Senate approval; Johnson's violation by firing Secretary Stanton triggered his impeachment." },
          { term: "Impeachment of Andrew Johnson", definition: "1868 House vote to impeach Johnson for violating the Tenure of Office Act; acquitted by one vote in the Senate — the first presidential impeachment in U.S. history." },
        ],
      },
      {
        name: "Reconstruction Governments",
        terms: [
          { term: "Military Reconstruction Act", definition: "1867 law dividing the South into five military districts under Army command; required states to ratify the 14th Amendment and allow Black male suffrage for readmission." },
          { term: "Carpetbaggers", definition: "Derogatory name for Northerners who moved South to participate in Reconstruction politics; many were idealistic reformers, teachers, and veterans, not corrupt opportunists." },
          { term: "Scalawags", definition: "Derogatory name for white Southern Republicans; included Unionists, small farmers, and moderates who saw Reconstruction as an opportunity for economic development." },
          { term: "Hiram Revels", definition: "Mississippi Republican who became the first Black U.S. senator in 1870, filling the seat Jefferson Davis had vacated when he became Confederate president." },
        ],
      },
      {
        name: "Suppression of Black Rights",
        terms: [
          { term: "Ku Klux Klan", definition: "Terrorist organization founded in 1865 by Confederate veterans; used murder, arson, and intimidation to destroy Reconstruction governments and drive Black voters from the polls." },
          { term: "Ku Klux Klan Acts", definition: "1870–71 federal laws giving the president power to use the Army against Klan terrorism; briefly effective but enforcement collapsed as Northern will faded." },
          { term: "Compromise of 1877", definition: "Secret deal ending the disputed 1876 election; Hayes got the presidency, the South got home rule — and Black Southerners lost federal protection." },
          { term: "Poll Taxes and Literacy Tests", definition: "Post-Reconstruction tools to disenfranchise Black voters without explicitly mentioning race; upheld by the Supreme Court and not fully abolished until the Voting Rights Act of 1965." },
        ],
      },
    ],
  },

  {
    id: "unit-5-wor",
    unit: 5,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Diplomacy of the Civil War",
        terms: [
          { term: "King Cotton Diplomacy", definition: "Confederate strategy of withholding cotton exports to pressure Britain and France into recognizing the Confederacy; failed because Britain found cotton elsewhere and opposed slavery." },
          { term: "British Neutrality", definition: "Britain officially stayed neutral despite Confederate pressure; Emancipation made it politically impossible for the British public to support the slaveholding side." },
          { term: "Trent Affair", definition: "1861 diplomatic crisis when a Union warship seized two Confederate diplomats from a British ship; Britain threatened war and Lincoln backed down, releasing the men." },
          { term: "CSS Alabama", definition: "Confederate commerce raider built in Britain that sank 65 Union merchant ships; the U.S. later won $15 million in damages from Britain for allowing its construction." },
        ],
      },
      {
        name: "Post-War Expansionism",
        terms: [
          { term: "Alaska Purchase", definition: "Secretary Seward's 1867 purchase of Alaska from Russia for $7.2 million ('Seward's Folly'); mocked at the time but proved enormously valuable for resources and strategic position." },
          { term: "Seward's Expansionism", definition: "Secretary of State William Seward envisioned a U.S. empire spanning the hemisphere; bought Alaska and the Midway Islands and sought Caribbean bases — a preview of 1890s imperialism." },
          { term: "Monroe Doctrine Enforcement", definition: "After the Civil War, Seward pressured France to withdraw from Mexico, where Napoleon III had installed Emperor Maximilian; the Monroe Doctrine was enforced with renewed vigor." },
          { term: "Midway Islands", definition: "Pacific atoll annexed in 1867 as a coaling station for transoceanic ships; the first U.S. territory outside North America and a step toward Pacific empire." },
        ],
      },
      {
        name: "Black Soldiers in the Civil War",
        terms: [
          { term: "54th Massachusetts Infantry", definition: "Most famous Black Union regiment; its assault on Fort Wagner, SC in July 1863 (immortalized in the film Glory) proved Black soldiers' courage and helped recruit 180,000 more." },
          { term: "United States Colored Troops", definition: "180,000 Black men who served in the Union Army; fought in over 400 engagements and suffered disproportionate casualties, often used in the most dangerous assaults." },
          { term: "Fort Pillow Massacre", definition: "April 1864 slaughter of surrendering Black Union soldiers by Confederate troops under Nathan Bedford Forrest; inflamed Northern opinion and stiffened Black soldiers' resolve." },
          { term: "Emancipation Proclamation", definition: "Beyond freeing enslaved people in Confederate states, it authorized the enlistment of Black men into the Union Army — transforming the war's military and moral character." },
        ],
      },
      {
        name: "The Confederacy and the World",
        terms: [
          { term: "Confederate Constitution", definition: "Explicitly protected slavery and limited central government power; showed the Confederacy was fighting for state sovereignty over slavery, not abstract states' rights." },
          { term: "French Intervention in Mexico", definition: "Napoleon III installed Maximilian as Mexican emperor during the Civil War; the U.S. invoked the Monroe Doctrine and pressured France to withdraw after the war ended." },
          { term: "Blockade Runners", definition: "Fast Confederate ships that slipped through the Union naval blockade bringing in European weapons and supplies; their capture increasingly strangled the Confederate war economy." },
          { term: "Confederate Diplomats in Europe", definition: "Commissioners Mason and Slidell lobbied for British and French recognition; failed because Britain needed good relations with the Union more than Southern cotton." },
        ],
      },
    ],
  },

  {
    id: "unit-5-arc",
    unit: 5,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Literature and Propaganda",
        terms: [
          { term: "Uncle Tom's Cabin", definition: "Harriet Beecher Stowe's 1852 novel depicting slavery's horror; sold 300,000 copies in year one and turned Northern public opinion against slavery more than any political speech." },
          { term: "Frederick Douglass's Narrative", definition: "1845 autobiography exposing slavery's brutality through eyewitness testimony; the most widely read slave narrative, it demolished pro-slavery arguments with lived experience." },
          { term: "Southern Fire-Eaters", definition: "Radical pro-slavery Southern writers and politicians who celebrated slavery as a 'positive good' and demanded its expansion; men like John C. Calhoun shaped Confederate ideology." },
          { term: "Walt Whitman", definition: "Poet who worked as a hospital volunteer during the war and wrote Drum-Taps (1865); his poetry mourned the dead and grappled with the meaning of the national trauma." },
        ],
      },
      {
        name: "Religion and the Civil War",
        terms: [
          { term: "Northern Churches and Abolition", definition: "Methodist, Baptist, and Presbyterian denominations split over slavery in the 1830s–40s; Northern churches became pillars of the abolitionist movement." },
          { term: "Southern Theology of Slavery", definition: "Southern ministers argued the Bible explicitly endorsed slavery; used scripture to morally justify the institution and sustain Confederate morale." },
          { term: "Black Churches", definition: "African American churches that became the foundation of Black community life; during Reconstruction, they were the primary institutions organizing Black political participation." },
          { term: "Spirituals", definition: "African American religious songs created under slavery; encoded messages of resistance and hope, and became the musical foundation of later gospel, blues, and jazz." },
        ],
      },
      {
        name: "Memory and Monument",
        terms: [
          { term: "Lost Cause Myth", definition: "Post-war Southern narrative recasting the Confederacy as a noble, doomed cause fighting for honor rather than slavery; spread through monuments, textbooks, and the United Daughters of the Confederacy." },
          { term: "Memorial Day", definition: "Holiday originating when formerly enslaved people in Charleston, SC honored Union dead in 1865; later nationalized and contested between North and South over whose sacrifices to honor." },
          { term: "Confederate Monuments", definition: "Most built not right after the war but during the Jim Crow era (1890s–1920s) and Civil Rights era (1950s–60s) as explicit statements of white supremacy, not just lost grief." },
          { term: "Gettysburg Address", definition: "Lincoln's 272-word speech redefining the war as a test of democratic self-government; became the most quoted definition of American identity — 'government of the people, by the people, for the people.'" },
        ],
      },
      {
        name: "Photography and New Media",
        terms: [
          { term: "Mathew Brady", definition: "Photographer who documented the Civil War with unflinching images of battlefield dead; his galleries brought the war's horror to Northern civilians for the first time." },
          { term: "Illustrated Newspapers", definition: "Publications like Harper's Weekly and Frank Leslie's Illustrated Newspaper brought wood-engraved battle scenes to mass audiences; shaped Northern public opinion throughout the war." },
          { term: "Telegraph", definition: "Allowed real-time communication of battlefield news; Lincoln used the War Department telegraph office obsessively to monitor campaigns — transformed how wars were commanded and reported." },
          { term: "Carte de Visite", definition: "Small photographic portrait cards exchanged between soldiers and families; by 1865 over 300 million had been produced — the first mass-market photograph format, binding the nation together through shared images." },
        ],
      },
    ],
  },

  {
    id: "unit-5-soc",
    unit: 5,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Civil War & Reconstruction",
    subject: "APUSH",
    groups: [
      {
        name: "Slavery and Emancipation",
        terms: [
          { term: "Emancipation Proclamation", definition: "Freed enslaved people in Confederate states on January 1, 1863; didn't immediately free anyone but destroyed slavery as a war aim — the South could not win without it surviving." },
          { term: "13th Amendment", definition: "Ratified December 1865; abolished slavery everywhere in the United States — including the border states Lincoln's proclamation had not covered." },
          { term: "Black Codes", definition: "Laws passed by Southern states in 1865–66 restricting Black people's movement, labor contracts, and rights; designed to recreate slavery-like conditions and triggered Military Reconstruction." },
          { term: "Sharecropping", definition: "Labor system that replaced slavery; freedpeople and poor whites farmed land they didn't own, surrendering half their crop to landlords — debt and crop liens kept them permanently poor." },
        ],
      },
      {
        name: "Women in the Civil War Era",
        terms: [
          { term: "Clara Barton", definition: "Civil War nurse who organized medical supplies for the front; later founded the American Red Cross — the war transformed nursing from an informal role to a respected profession." },
          { term: "Harriet Tubman", definition: "Led a Union Army raid on the Combahee River (1863) freeing 700 enslaved people; served as a spy, scout, and nurse in addition to her Underground Railroad work." },
          { term: "Women in the Workforce", definition: "The war drew women into nursing, factory work, and government clerical jobs; demonstrated women's capacity for public roles — but most were pushed back into domestic life after the war." },
          { term: "Elizabeth Cady Stanton and Susan B. Anthony", definition: "Suffragists who supported the war but were then told women's suffrage must wait; their betrayal by Republican men who gave the vote to Black men but not women radicalized the women's movement." },
        ],
      },
      {
        name: "Class and Race in the North",
        terms: [
          { term: "New York Draft Riots", definition: "July 1863 working-class uprising against the draft's $300 commutation fee that let rich men buy their way out; rioters targeted Black New Yorkers, killing over 100." },
          { term: "Copperheads", definition: "Northern Peace Democrats who opposed the war; many were working-class men who feared economic competition from freed Black workers and resented a rich man's war fought by the poor." },
          { term: "Contraband Camps", definition: "Refugee settlements for enslaved people who fled to Union lines; overcrowded, disease-ridden, and underfunded — a preview of the federal government's half-hearted commitment to Black welfare." },
          { term: "54th Massachusetts Infantry", definition: "First Black regiment from a free state; its assault on Fort Wagner demonstrated that Black men would fight and die for freedom, reshaping Northern attitudes about Black citizenship." },
        ],
      },
      {
        name: "Reconstruction's Social Revolution",
        terms: [
          { term: "Black Political Participation", definition: "During Reconstruction, Black men voted and held office across the South; 16 Black men served in Congress and hundreds in state legislatures — then were stripped of these rights after 1877." },
          { term: "Freedmen's Bureau Schools", definition: "Hundreds of schools established by the Bureau and northern missionaries; by 1870 over 250,000 Black students enrolled — an extraordinary burst of educational opportunity violently suppressed after Reconstruction." },
          { term: "Ku Klux Klan", definition: "Terrorist organization that systematically murdered Black officeholders, teachers, and voters; its violence destroyed Reconstruction governments and proved that without federal force, Black rights could not survive." },
          { term: "Plessy v. Ferguson", definition: "1896 Supreme Court ruling that 'separate but equal' facilities were constitutional; the legal cornerstone of Jim Crow that stood until Brown v. Board of Education in 1954." },
        ],
      },
    ],
  },

  {
    id: "unit-6-nat",
    unit: 6,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Gilded Age Ideology",
        terms: [
          { term: "Social Darwinism", definition: "Application of Darwin's survival of the fittest to society; used by men like Herbert Spencer to argue that wealth inequality was natural and government aid to the poor was counterproductive." },
          { term: "Gospel of Wealth", definition: "Andrew Carnegie's 1889 essay arguing the rich had a duty to give their wealth to public benefit; justified vast inequality while deflecting demands for workers' fair wages." },
          { term: "Horatio Alger Myth", definition: "Popular stories of poor boys rising to wealth through hard work and virtue; created the myth of a meritocratic America while obscuring the role of class, race, and luck." },
          { term: "Laissez-Faire", definition: "Economic doctrine that government should not regulate business; dominant Gilded Age ideology used to block labor laws, safety regulations, and antitrust enforcement." },
        ],
      },
      {
        name: "Progressive Identity",
        terms: [
          { term: "Progressivism", definition: "Early 20th-century reform movement believing government could and should fix the problems of industrial capitalism — corruption, inequality, unsafe products, and urban poverty." },
          { term: "Muckrakers", definition: "Investigative journalists who exposed corporate greed and political corruption; Roosevelt coined the term from Bunyan's Pilgrim's Progress to describe their relentless digging." },
          { term: "Theodore Roosevelt", definition: "26th president who defined Progressive identity: trust-busting, consumer protection, conservation, and the 'Square Deal' — government as honest broker between capital and labor." },
          { term: "New Nationalism", definition: "Roosevelt's 1910 program calling for strong federal regulation of big business, graduated income tax, and a welfare state; more radical than his Square Deal." },
        ],
      },
      {
        name: "Racial Identity and Exclusion",
        terms: [
          { term: "Chinese Exclusion Act", definition: "1882 law banning Chinese laborers from immigrating; the first federal law excluding a group by race — set the template for later restrictive immigration policy." },
          { term: "Plessy v. Ferguson", definition: "1896 Supreme Court ruling upholding 'separate but equal' Jim Crow laws; gave constitutional cover to racial segregation in all aspects of public life." },
          { term: "Booker T. Washington", definition: "Black leader who advocated economic self-sufficiency and vocational training over direct political agitation; his Atlanta Compromise (1895) accepted segregation in exchange for economic opportunity." },
          { term: "W.E.B. Du Bois", definition: "Black intellectual who rejected Washington's accommodation; demanded full civil and political rights immediately, co-founded the NAACP, and coined the concept of 'double consciousness.'" },
        ],
      },
      {
        name: "Women's Civic Identity",
        terms: [
          { term: "19th Amendment", definition: "Ratified in 1920 after 72 years of activism; granted women the right to vote — the Progressive Era's most sweeping expansion of American democracy." },
          { term: "Jane Addams", definition: "Co-founder of Hull House and leading Progressive; won the Nobel Peace Prize (1931) for her settlement house work and antiwar activism — defined women's public civic role." },
          { term: "National American Woman Suffrage Association", definition: "Major suffrage organization formed in 1890 combining two rival groups; led the state-by-state and federal campaign that finally won the 19th Amendment." },
          { term: "Triangle Shirtwaist Fire", definition: "1911 New York fire killing 146 garment workers, mostly young immigrant women; galvanized the labor and suffrage movements and led to landmark workplace safety laws." },
        ],
      },
    ],
  },

  {
    id: "unit-6-wxt",
    unit: 6,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Industrial Titans",
        terms: [
          { term: "Andrew Carnegie", definition: "Steel magnate who used vertical integration to control every stage of steel production from mines to railroads; gave away $350 million and wrote the Gospel of Wealth." },
          { term: "John D. Rockefeller", definition: "Founded Standard Oil and used horizontal integration to control 90% of U.S. oil refining; forced smaller companies out through secret railroad rebates and price wars." },
          { term: "J.P. Morgan", definition: "Banker who reorganized railroads and created U.S. Steel (the first billion-dollar corporation); his 1907 personal bailout of the banking system revealed dangerous private concentration of financial power." },
          { term: "Cornelius Vanderbilt", definition: "Railroad magnate who consolidated eastern trunk lines after the Civil War; his New York Central illustrated how railroad monopolies could charge farmers and shippers extortionate rates." },
        ],
      },
      {
        name: "Monopoly and Regulation",
        terms: [
          { term: "Trusts", definition: "Business arrangements in which multiple companies transferred control to a single board of trustees, creating monopoly power; Standard Oil pioneered the model." },
          { term: "Sherman Antitrust Act", definition: "1890 law prohibiting combinations in restraint of trade; initially used against labor unions more than corporations, until Roosevelt revived it for trust-busting." },
          { term: "Interstate Commerce Commission", definition: "Created by the Interstate Commerce Act (1887) to regulate railroad rates; the first federal regulatory agency, though initially weak — strengthened by the Hepburn Act (1906)." },
          { term: "Clayton Antitrust Act", definition: "1914 law strengthening antitrust enforcement, explicitly exempting labor unions from antitrust prosecution, and banning certain anti-competitive practices." },
        ],
      },
      {
        name: "Labor Conflict",
        terms: [
          { term: "Knights of Labor", definition: "First major national union (peak 1886), open to all workers regardless of skill, race, or gender; collapsed after being blamed for the Haymarket Affair." },
          { term: "AFL", definition: "American Federation of Labor; focused on skilled craft workers and 'bread and butter' issues — wages, hours, conditions — rather than radical political change. Led by Samuel Gompers." },
          { term: "Pullman Strike", definition: "1894 nationwide railroad strike called by Eugene Debs's ARU after Pullman cut wages but not rent; Cleveland used a federal injunction and Army troops to crush it." },
          { term: "Triangle Shirtwaist Fire", definition: "1911 fire killing 146 garment workers trapped behind locked doors; proved that voluntary corporate responsibility was insufficient and led directly to factory safety legislation." },
        ],
      },
      {
        name: "Technology and the Economy",
        terms: [
          { term: "Railroads", definition: "The Gilded Age's defining industry; 35,000 miles of track in 1865 grew to 200,000 by 1900, knitting the national market together and making industrial capitalism possible." },
          { term: "Steel", definition: "The Bessemer process made cheap mass production of steel possible from the 1870s; Carnegie's Carnegie Steel supplied the rails, bridges, and skyscrapers of industrial America." },
          { term: "Electricity", definition: "Edison's light bulb (1879) and AC power systems (Tesla/Westinghouse) transformed factories, homes, and cities; enabled the second industrial revolution." },
          { term: "Scientific Management", definition: "Frederick Taylor's system of breaking factory work into timed, measured tasks to maximize efficiency; increased output but reduced workers to machine-like components." },
        ],
      },
    ],
  },

  {
    id: "unit-6-geo",
    unit: 6,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Closing the Frontier",
        terms: [
          { term: "Turner Thesis", definition: "Frederick Jackson Turner's 1893 argument that the frontier shaped American democracy and individualism; warned that its closing in 1890 threatened America's defining character." },
          { term: "Homestead Act", definition: "1862 law granting 160 free acres to settlers; brought millions to the Great Plains but 160 acres was insufficient for dry-land farming — most homesteaders eventually failed." },
          { term: "Barbed Wire", definition: "Patented in 1873, it allowed cheap fencing of the open range; ended the cattle drives and the era of the cowboy, transforming the Plains into a patchwork of farms." },
          { term: "Wounded Knee Massacre", definition: "December 1890 U.S. Army slaughter of 250–300 Lakota men, women, and children; the last major armed conflict of the Indian Wars and the final act of continental conquest." },
        ],
      },
      {
        name: "Conservation Movement",
        terms: [
          { term: "Theodore Roosevelt", definition: "Set aside 230 million acres of federal land — national parks, forests, and monuments; the most consequential conservationist president in U.S. history." },
          { term: "John Muir", definition: "Naturalist and founder of the Sierra Club who lobbied for Yosemite and wilderness preservation; his preservationist vision clashed with Gifford Pinchot's utilitarian conservation." },
          { term: "Gifford Pinchot", definition: "First chief of the U.S. Forest Service; championed 'wise use' conservation — managing resources for sustainable human benefit rather than preserving wilderness for its own sake." },
          { term: "Hetch Hetchy Controversy", definition: "Muir's failed campaign to stop a dam in Yosemite's Hetch Hetchy Valley; the 1913 decision to flood the valley represented a victory for utilitarian conservation over preservation." },
        ],
      },
      {
        name: "Urbanization",
        terms: [
          { term: "Tenements", definition: "Cramped, poorly lit apartment buildings housing immigrant and working-class families; Jacob Riis's How the Other Half Lives shocked Americans with photos of New York's Lower East Side conditions." },
          { term: "Hull House", definition: "Jane Addams's 1889 Chicago settlement house; provided childcare, English classes, job training, and legal aid to immigrants while training a generation of social workers and Progressive reformers." },
          { term: "Skyscrapers", definition: "Steel-frame buildings enabled by Bessemer steel and elevators; transformed American cities upward from the 1880s and symbolized industrial capitalism's ambition." },
          { term: "Political Machines", definition: "Urban political organizations like Tammany Hall that traded jobs, services, and favors for immigrant votes; corrupt but functional — provided welfare the government didn't." },
        ],
      },
      {
        name: "American Empire",
        terms: [
          { term: "Spanish-American War", definition: "1898 war fought in Cuba and the Philippines; the U.S. emerged with an overseas empire — Puerto Rico, Guam, and the Philippines — and a new role as a Pacific power." },
          { term: "Panama Canal", definition: "Roosevelt's most ambitious project (completed 1914); the U.S. engineered Panamanian independence from Colombia, then built the canal connecting the Atlantic and Pacific." },
          { term: "Hawaii", definition: "Annexed in 1898 after American sugar planters overthrew Queen Liliuokalani with U.S. military support; provided a Pacific naval base and launched American empire in the Pacific." },
          { term: "Philippines", definition: "Ceded by Spain in 1898; Filipino independence fighters who had fought Spain now fought the U.S. in a brutal three-year war (1899–1902) that killed 200,000+ Filipinos." },
        ],
      },
    ],
  },

  {
    id: "unit-6-mig",
    unit: 6,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "New Immigration",
        terms: [
          { term: "New Immigrants", definition: "Post-1880 wave from Southern and Eastern Europe (Italians, Poles, Jews, Greeks, Slavs); spoke different languages, practiced Catholicism or Judaism, and faced intense nativist hostility." },
          { term: "Ellis Island", definition: "New York harbor immigration station (1892–1954) that processed 12 million immigrants; the gateway to America for most of the New Immigration wave." },
          { term: "Steerage", definition: "Cheapest ocean passage in the lowest decks of ships; conditions were squalid and disease-ridden, but millions endured it to reach America." },
          { term: "Padrone System", definition: "Labor broker network that exploited Italian immigrants by charging fees to find them jobs; an example of how ethnic communities were both supported and exploited by their own middlemen." },
        ],
      },
      {
        name: "Asian Immigration and Exclusion",
        terms: [
          { term: "Chinese Exclusion Act", definition: "1882 law banning Chinese laborers; the first race-based immigration ban, renewed in 1892 and made permanent in 1902 — not repealed until 1943." },
          { term: "Angel Island", definition: "San Francisco Bay immigration station where Asian immigrants (mainly Chinese) were detained for days to months while their eligibility was investigated under the Exclusion Act." },
          { term: "Gentleman's Agreement", definition: "1907 informal deal in which Japan agreed to stop issuing passports to laborers emigrating to the U.S. in exchange for Roosevelt's promise to end school segregation in San Francisco." },
          { term: "Anti-Japanese Sentiment", definition: "West Coast hostility toward Japanese immigrants driven by economic competition and racism; led to alien land laws barring Japanese from owning property and foreshadowed WWII internment." },
        ],
      },
      {
        name: "The Great Plains",
        terms: [
          { term: "Exodusters", definition: "40,000 Black Southerners who fled Reconstruction's collapse for Kansas in 1879; among the first to test the Homestead Act's promise of free land and a fresh start." },
          { term: "Sodbusters", definition: "Great Plains homesteaders who broke tough sod to farm wheat; faced grasshopper plagues, drought, railroad gouging, and isolation — the hardship that fueled the Populist movement." },
          { term: "Cattle Drives", definition: "Long drives of Texas Longhorn cattle north to railroad towns like Abilene; the iconic era of the cowboy (roughly 1867–85) ended when barbed wire fenced the open range." },
          { term: "Dawes Act", definition: "1887 law breaking up tribal reservation land into individual allotments; destroyed Native communal land ownership and transferred 90 million acres to white settlers and corporations." },
        ],
      },
      {
        name: "Urban Ethnic Communities",
        terms: [
          { term: "Settlement Houses", definition: "Community centers in immigrant neighborhoods offering education, childcare, and social services; Hull House (Chicago) and Henry Street Settlement (New York) were the most famous." },
          { term: "Chinatown", definition: "Segregated urban enclave where Chinese immigrants clustered for mutual protection and community; developed rich cultural and economic institutions despite — and because of — discrimination." },
          { term: "Little Italy", definition: "Italian immigrant neighborhood found in most major American cities; Catholicism, mutual aid societies, and family networks sustained community identity across generations." },
          { term: "Jewish Lower East Side", definition: "Dense Manhattan immigrant neighborhood housing hundreds of thousands of Eastern European Jews; produced a rich Yiddish press, labor movement, and intellectual culture." },
        ],
      },
    ],
  },

  {
    id: "unit-6-pce",
    unit: 6,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Civic Engagement" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Gilded Age Politics",
        terms: [
          { term: "Spoils System", definition: "Patronage appointments rewarding party loyalty over competence; the source of massive federal corruption — and the target of civil service reformers." },
          { term: "Pendleton Civil Service Act", definition: "1883 law creating a merit-based civil service for some federal jobs; passed after President Garfield was assassinated by a disappointed office-seeker." },
          { term: "Political Machines", definition: "Urban Democratic organizations like New York's Tammany Hall that delivered votes through patronage, contracts, and favors; corrupt but provided real services to immigrant communities." },
          { term: "Gilded Age Presidents", definition: "Hayes, Garfield, Arthur, Cleveland, Harrison, McKinley — largely weak executives dominated by Congress; defined more by political stalemate and corruption than policy achievement." },
        ],
      },
      {
        name: "Populist Movement",
        terms: [
          { term: "Farmers' Alliance", definition: "1880s cooperative movement of indebted farmers demanding railroad regulation, a graduated income tax, and government-owned storage facilities; the mass base of Populism." },
          { term: "Populist Party", definition: "People's Party (1892) representing farmers and workers; demanded government ownership of railroads, direct election of senators, secret ballot, and silver coinage." },
          { term: "William Jennings Bryan", definition: "Three-time Democratic presidential candidate; his 1896 'Cross of Gold' speech demanded silver coinage to relieve farm debt — his defeat ended agrarian Populism as a major force." },
          { term: "Cross of Gold Speech", definition: "Bryan's 1896 Democratic convention address attacking the gold standard on behalf of indebted farmers: 'You shall not crucify mankind upon a cross of gold.'" },
        ],
      },
      {
        name: "Progressive Reforms",
        terms: [
          { term: "17th Amendment", definition: "1913 amendment providing for direct election of U.S. senators, ending their selection by state legislatures — a Progressive victory against corporate control of government." },
          { term: "Initiative and Referendum", definition: "Progressive democracy tools allowing voters to propose laws (initiative) and approve or reject legislation directly (referendum), bypassing bought legislatures." },
          { term: "Recall", definition: "Progressive reform allowing voters to remove elected officials before their term ends; part of the direct democracy toolkit aimed at making government more responsive to the people." },
          { term: "Pure Food and Drug Act", definition: "1906 law requiring honest labeling and banning adulterated food and drugs; passed after The Jungle and muckraker exposes — the first major federal consumer protection law." },
        ],
      },
      {
        name: "Progressive Presidents",
        terms: [
          { term: "Theodore Roosevelt", definition: "Trust-buster who filed 44 antitrust suits, mediated the 1902 coal strike, created the FDA's predecessor, and conserved 230 million acres; redefined presidential power." },
          { term: "Woodrow Wilson", definition: "28th president whose 'New Freedom' created the Federal Reserve (1913), Federal Trade Commission, and Clayton Antitrust Act — preferred breaking up monopolies to regulating them." },
          { term: "Square Deal", definition: "Roosevelt's 1904 program for balancing corporate power, labor rights, and consumer protection — a 'square deal' for all Americans rather than special treatment for the wealthy." },
          { term: "New Freedom", definition: "Wilson's 1912 campaign vision: restore competition rather than regulate monopoly; lower tariffs, reform banking, and trust-bust — contrasted with Roosevelt's New Nationalism." },
        ],
      },
    ],
  },

  {
    id: "unit-6-wor",
    unit: 6,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Roots of Imperialism",
        terms: [
          { term: "Alfred Thayer Mahan", definition: "Naval theorist whose The Influence of Sea Power Upon History (1890) argued the U.S. needed a powerful navy and overseas bases to be a great power; inspired Roosevelt and imperial policy." },
          { term: "Josiah Strong", definition: "Protestant minister whose Our Country (1885) argued Anglo-Saxon Americans had a God-given duty to spread civilization and Christianity; provided religious justification for empire." },
          { term: "Manifest Destiny (global)", definition: "Gilded Age imperialists extended the old continental idea overseas: America's destiny now included the Pacific, the Caribbean, and Asia — not just the American West." },
          { term: "Social Darwinism", definition: "Applied to nations as well as individuals; imperialists argued stronger nations had a natural right — even duty — to dominate weaker ones as part of racial and civilizational progress." },
        ],
      },
      {
        name: "Spanish-American War",
        terms: [
          { term: "USS Maine", definition: "U.S. battleship that exploded in Havana Harbor in February 1898; yellow press blamed Spain and inflamed public opinion — 'Remember the Maine!' became the rallying cry for war." },
          { term: "Yellow Journalism", definition: "Sensationalist reporting by Hearst's New York Journal and Pulitzer's New York World; exaggerated Spanish atrocities in Cuba to sell papers and whip up support for war." },
          { term: "Spanish-American War", definition: "100-day war in 1898; the U.S. destroyed Spain's Pacific fleet at Manila Bay, invaded Cuba and Puerto Rico, and emerged with an overseas empire spanning the Caribbean and Pacific." },
          { term: "Rough Riders", definition: "Roosevelt's volunteer cavalry regiment whose charge up Kettle/San Juan Hill in Cuba made him a national hero and launched his political career toward the presidency." },
        ],
      },
      {
        name: "Empire and Its Critics",
        terms: [
          { term: "Philippines Annexation", definition: "After defeating Spain, the U.S. bought the Philippines for $20 million; Filipino nationalists who had fought Spain now fought the U.S. in a three-year war killing 200,000+ Filipinos." },
          { term: "Anti-Imperialist League", definition: "Organization including Mark Twain, Andrew Carnegie, and Jane Addams that opposed annexing the Philippines; argued empire violated American democracy and self-determination principles." },
          { term: "Platt Amendment", definition: "1901 condition imposed on Cuba limiting its sovereignty, giving the U.S. the right to intervene, and leasing Guantánamo Bay; made Cuba a de facto U.S. protectorate." },
          { term: "Insular Cases", definition: "Supreme Court rulings deciding that the Constitution did not fully apply in U.S. territories; allowed the U.S. to hold an empire without granting constitutional rights to its subjects." },
        ],
      },
      {
        name: "Roosevelt's World",
        terms: [
          { term: "Roosevelt Corollary", definition: "1904 addition to the Monroe Doctrine asserting the U.S. right to intervene in Latin American nations unable to maintain order; used to justify occupations of Haiti, Nicaragua, and the Dominican Republic." },
          { term: "Big Stick Diplomacy", definition: "Roosevelt's foreign policy motto ('speak softly and carry a big stick'); used military threat and intervention to enforce American interests in Latin America and Asia." },
          { term: "Panama Canal", definition: "Roosevelt engineered Panamanian independence from Colombia and began the canal (completed 1914); linked the Atlantic and Pacific and made U.S. naval power truly global." },
          { term: "Portsmouth Treaty", definition: "Roosevelt mediated the 1905 Russo-Japanese War peace settlement, winning the Nobel Peace Prize; demonstrated U.S. emergence as a great-power diplomatic player." },
        ],
      },
    ],
  },

  {
    id: "unit-6-arc",
    unit: 6,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Muckrakers and Reform Literature",
        terms: [
          { term: "Jacob Riis", definition: "How the Other Half Lives (1890) used photographs and prose to expose New York tenement conditions; shocked middle-class readers and triggered housing reform." },
          { term: "Ida Tarbell", definition: "Her 19-part McClure's exposé of Standard Oil (1902–04) showed how Rockefeller crushed competition through secret railroad rebates; helped break up Standard Oil in 1911." },
          { term: "Upton Sinclair", definition: "The Jungle (1906) described Chicago meatpacking conditions so vividly that Roosevelt read it over breakfast and immediately pushed for food safety legislation." },
          { term: "Lincoln Steffens", definition: "The Shame of the Cities (1904) exposed systematic corruption in St. Louis, Minneapolis, and Pittsburgh; showed urban machine politics was a national disease, not local aberration." },
        ],
      },
      {
        name: "Arts and Architecture",
        terms: [
          { term: "Chicago School of Architecture", definition: "Pioneered the steel-frame skyscraper in the 1880s–90s; architects like Louis Sullivan and Daniel Burnham transformed American cities with tall buildings and the 'form follows function' aesthetic." },
          { term: "Ashcan School", definition: "Realist painters led by Robert Henri who depicted gritty urban life — tenements, saloons, laundry alleys — rejecting genteel academic art for the raw energy of industrial America." },
          { term: "World's Columbian Exposition", definition: "1893 Chicago World's Fair showcasing American industrial and cultural achievement; the 'White City' introduced millions to neoclassical architecture, electricity, and the Ferris wheel." },
          { term: "Vaudeville", definition: "Popular variety entertainment featuring comedy, song, dance, and novelty acts; the era's dominant mass entertainment before film, reaching all classes and ethnic groups." },
        ],
      },
      {
        name: "African American Culture",
        terms: [
          { term: "Booker T. Washington", definition: "Tuskegee Institute founder who championed vocational education and economic self-reliance; his 1895 Atlanta Compromise accepted segregation in exchange for white tolerance of Black economic progress." },
          { term: "W.E.B. Du Bois", definition: "First Black Harvard PhD; his The Souls of Black Folk (1903) challenged Washington's accommodation and demanded full civil rights — coined 'double consciousness' to describe the Black American experience." },
          { term: "NAACP", definition: "National Association for the Advancement of Colored People, founded in 1909 by Du Bois and white progressives; used legal challenges and public advocacy to fight lynching and segregation." },
          { term: "Ragtime", definition: "Syncopated piano music pioneered by Scott Joplin in the 1890s–1900s; the era's most popular new sound, blending Black musical innovation with mainstream commercial appeal." },
        ],
      },
      {
        name: "Native American Culture Under Pressure",
        terms: [
          { term: "Dawes Act", definition: "1887 law allotting reservation land to individuals to assimilate Native peoples into American farming culture; destroyed communal land ownership and transferred 90 million acres to whites." },
          { term: "Carlisle Indian School", definition: "Federal boarding school founded 1879 with the mission to 'kill the Indian, save the man'; children were forbidden to speak their languages or practice their cultures." },
          { term: "Ghost Dance", definition: "Spiritual movement spreading through Plains nations in 1890 promising the return of the buffalo and dead warriors; the U.S. Army's suppression at Wounded Knee ended it." },
          { term: "Wounded Knee Massacre", definition: "December 1890 killing of 250–300 Lakota by the 7th Cavalry; the final military conquest of Native America, ending in the same South Dakota soil where the Ghost Dance had flourished." },
        ],
      },
    ],
  },

  {
    id: "unit-6-soc",
    unit: 6,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Gilded Age & Progressive Era",
    subject: "APUSH",
    groups: [
      {
        name: "Class and Inequality",
        terms: [
          { term: "Robber Barons", definition: "Derogatory term for Gilded Age industrialists like Carnegie, Rockefeller, and Morgan; critics charged their fortunes were built through exploitation of workers and corrupt deals." },
          { term: "Gospel of Wealth", definition: "Carnegie's argument that the rich had a duty to use surplus wealth for public benefit; built libraries and concert halls while paying workers poverty wages and crushing strikes." },
          { term: "Social Darwinism", definition: "Ideology holding that wealth inequality was natural and government intervention harmful; used to oppose unions, safety regulations, and aid to the poor as interference with natural selection." },
          { term: "Gilded Age Inequality", definition: "By 1890, the top 1% of Americans owned more wealth than the bottom 99% combined; the era's defining social fact and the engine driving Populist and Progressive reform demands." },
        ],
      },
      {
        name: "Women and Reform",
        terms: [
          { term: "Jane Addams", definition: "Hull House co-founder who combined social work with political activism; fought child labor, lobbied for factory safety laws, and won the Nobel Peace Prize — the era's most influential woman." },
          { term: "Florence Kelley", definition: "Socialist reformer at Hull House who led the National Consumers League; her investigative work on sweatshop conditions drove child labor laws and the 10-hour workday for women." },
          { term: "Triangle Shirtwaist Fire", definition: "1911 New York factory fire killing 146 young immigrant women workers; doors were locked to prevent theft — the outrage it generated produced 36 new labor laws in New York alone." },
          { term: "Temperance and Suffrage", definition: "The two great women's movements of the era; WCTU leader Frances Willard linked temperance to suffrage, arguing women needed the vote to protect their families from alcohol and industrial exploitation." },
        ],
      },
      {
        name: "Race and Jim Crow",
        terms: [
          { term: "Jim Crow Laws", definition: "State and local laws enforcing racial segregation across the South in transportation, schools, restaurants, and all public spaces; upheld by Plessy v. Ferguson." },
          { term: "Lynching", definition: "Extrajudicial murder of Black men (and occasionally women) by white mobs; over 4,000 documented between 1877 and 1950, used to terrorize Black communities and enforce white supremacy." },
          { term: "Ida B. Wells", definition: "Journalist and activist who documented lynching statistics and challenged the myth that victims were criminals; her anti-lynching crusade made her one of the era's most courageous reformers." },
          { term: "Plessy v. Ferguson", definition: "1896 Supreme Court ruling making 'separate but equal' constitutional; gave legal sanction to Jim Crow and wasn't reversed until Brown v. Board of Education in 1954." },
        ],
      },
      {
        name: "Labor and the Working Class",
        terms: [
          { term: "Haymarket Affair", definition: "May 1886 Chicago labor rally that turned violent when a bomb killed police; eight anarchists convicted on thin evidence — the backlash set back the labor movement and 8-hour day campaign." },
          { term: "Homestead Strike", definition: "1892 Carnegie Steel strike broken by 300 Pinkerton guards and the National Guard; Carnegie's personal reputation never recovered, revealing the gap between his philanthropy and his labor practices." },
          { term: "Eugene Debs", definition: "Socialist leader who organized the ARU and led the Pullman Strike; jailed for defying a federal injunction, he ran for president five times — including once from prison — as a Socialist." },
          { term: "IWW", definition: "Industrial Workers of the World ('Wobblies'); radical union founded 1905 organizing all workers regardless of skill, race, or gender; unlike the AFL, sought to overthrow capitalism itself." },
        ],
      },
    ],
  },

  {
    id: "unit-7-nat",
    unit: 7,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "Suppressing Wartime Dissent",
        terms: [
          { term: "Espionage Act", definition: "1917 law making it illegal to interfere with military recruitment or criticize the war; used to imprison socialists and pacifists, including Eugene Debs." },
          { term: "Sedition Act of 1918", definition: "Extended the Espionage Act to ban any spoken or printed criticism of the U.S. government, flag, or military during wartime." },
          { term: "Committee on Public Information", definition: "Government propaganda agency led by George Creel that used posters, films, and speakers to build support for WWI and crush dissent." },
          { term: "100% Americanism", definition: "Nativist ideology demanding complete assimilation and loyalty; used to justify hostility toward immigrants, radicals, and anyone seen as insufficiently patriotic." },
        ],
      },
      {
        name: "New Woman",
        terms: [
          { term: "19th Amendment", definition: "Ratified in 1920, it granted women the right to vote nationwide, the culmination of more than 70 years of suffrage activism." },
          { term: "Flappers", definition: "Young women of the 1920s who defied social convention with short hair, short skirts, and public independence, symbolizing a new era of gender freedom." },
          { term: "Margaret Sanger", definition: "Nurse and activist who championed birth control and women's reproductive rights, founding what became Planned Parenthood." },
          { term: "Eleanor Roosevelt", definition: "FDR's wife who transformed the role of First Lady by championing civil rights, women's rights, and humanitarian causes on a global stage." },
        ],
      },
      {
        name: "African American Identity",
        terms: [
          { term: "Harlem Renaissance", definition: "1920s–30s cultural explosion of Black art, literature, and music centered in Harlem, asserting African American identity and dignity." },
          { term: "Marcus Garvey", definition: "Black nationalist leader who founded the UNIA and promoted Pan-Africanism and a 'Back to Africa' movement, attracting millions of followers." },
          { term: "NAACP", definition: "National Association for the Advancement of Colored People; civil rights organization founded in 1909 that fought lynching, segregation, and discrimination through legal action." },
          { term: "Langston Hughes", definition: "Leading Harlem Renaissance poet whose work drew on blues and jazz rhythms to celebrate Black culture and challenge racial inequality." },
        ],
      },
      {
        name: "Prohibition and Moral Reform",
        terms: [
          { term: "18th Amendment", definition: "Ratified in 1919, it banned the manufacture, sale, and transportation of alcohol, launching the Prohibition era." },
          { term: "Prohibition", definition: "1920–1933 constitutional ban on alcohol; led to bootlegging, speakeasies, and the rise of organized crime while failing to eliminate drinking." },
          { term: "Volstead Act", definition: "Law enforcing Prohibition by defining 'intoxicating beverages' and setting penalties for their manufacture, sale, or possession." },
          { term: "Women's Christian Temperance Union", definition: "Women's reform organization that led the decades-long campaign for Prohibition, linking alcohol to poverty, domestic abuse, and moral decline." },
        ],
      },
    ],
  },

  {
    id: "unit-7-wxt",
    unit: 7,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "WWI Economic Mobilization",
        terms: [
          { term: "War Industries Board", definition: "Federal agency that coordinated industrial production during WWI, directing factories to produce war materials and setting prices to prevent inflation." },
          { term: "Food Administration", definition: "Hoover's WWI agency that promoted voluntary food conservation through 'Wheatless Mondays' and 'Meatless Tuesdays' to support the war effort." },
          { term: "Liberty Bonds", definition: "Government war bonds sold to the American public to finance WWI; promoted through patriotic campaigns featuring celebrities and rallies." },
          { term: "War Revenue Act", definition: "1917 law sharply raising income and corporate taxes to fund the war; established the progressive income tax as a major source of federal revenue." },
        ],
      },
      {
        name: "1920s Consumer Economy",
        terms: [
          { term: "Model T", definition: "Ford's affordable automobile that democratized car ownership and transformed American transportation, suburbs, and consumer culture." },
          { term: "Assembly Line", definition: "Ford's manufacturing innovation that mass-produced goods cheaply and quickly by breaking production into simple, repeated steps; revolutionized American industry." },
          { term: "Installment Buying", definition: "System of purchasing goods with small periodic payments; made consumer items accessible to more Americans but left them vulnerable to economic downturns." },
          { term: "Consumer Credit", definition: "Expansion of borrowing in the 1920s that fueled a spending boom on cars, appliances, and entertainment but increased personal debt loads dangerously." },
        ],
      },
      {
        name: "Great Depression Financial Collapse",
        terms: [
          { term: "Black Tuesday", definition: "October 29, 1929 stock market crash that wiped out billions in value in a single day and triggered the Great Depression." },
          { term: "Bank Runs", definition: "Panicked depositors withdrawing all their savings simultaneously, causing banks to collapse; thousands of banks failed in the early 1930s, wiping out life savings." },
          { term: "Smoot-Hawley Tariff", definition: "1930 law raising tariffs to historic highs; other nations retaliated, collapsing global trade and deepening the Depression." },
          { term: "Overproduction", definition: "Factories and farms produced far more goods than consumers could buy throughout the 1920s, creating economic imbalances that worsened the Depression." },
        ],
      },
      {
        name: "New Deal Financial Reform",
        terms: [
          { term: "FDIC", definition: "Federal Deposit Insurance Corporation; created to insure bank deposits up to $5,000, restoring public confidence in banks after thousands had collapsed." },
          { term: "Glass-Steagall Act", definition: "1933 law separating commercial and investment banking and establishing the FDIC to prevent the kind of speculation that contributed to the crash." },
          { term: "SEC", definition: "Securities and Exchange Commission; New Deal agency created to regulate stock markets, require disclosure, and prevent the fraud that contributed to the 1929 crash." },
          { term: "Social Security Act", definition: "1935 law establishing federal retirement insurance, unemployment compensation, and aid to dependent children — cornerstone of the U.S. welfare state." },
        ],
      },
    ],
  },

  {
    id: "unit-7-geo",
    unit: 7,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "The Dust Bowl",
        terms: [
          { term: "Dust Bowl", definition: "1930s ecological disaster in which drought and overplowing stripped Great Plains topsoil bare, destroying farms and displacing hundreds of thousands of families." },
          { term: "Okies", definition: "Nickname for Dust Bowl migrants — many from Oklahoma — who fled to California seeking farm work; faced discrimination, poverty, and desperate living conditions." },
          { term: "Soil Erosion", definition: "Destruction of topsoil by wind and water resulting from overplowing the Great Plains without protective cover crops; the environmental cause of the Dust Bowl." },
          { term: "Soil Conservation Service", definition: "New Deal agency that taught Great Plains farmers erosion-prevention techniques — contour plowing, terracing, windbreaks — to restore and protect the land." },
        ],
      },
      {
        name: "New Deal Environmental Infrastructure",
        terms: [
          { term: "TVA", definition: "Tennessee Valley Authority; New Deal agency that built dams and hydroelectric plants in the rural South, controlling floods and bringing electricity to millions." },
          { term: "Rural Electrification Administration", definition: "New Deal program that brought electricity to rural America; by 1945 nearly 90% of farms had power, transforming agricultural life." },
          { term: "Bonneville Dam", definition: "New Deal public works dam completed in 1938 on the Columbia River; provided cheap hydroelectric power to the Pacific Northwest." },
          { term: "Grand Coulee Dam", definition: "Massive New Deal dam on the Columbia River in Washington; the largest dam in the U.S. at completion, powering farms, cities, and later WWII war industries." },
        ],
      },
      {
        name: "WWI Battlefield Geography",
        terms: [
          { term: "Western Front", definition: "600-mile line of trenches stretching from the North Sea to Switzerland where WWI was fought to a bloody stalemate for four years." },
          { term: "Trench Warfare", definition: "WWI combat style in which armies dug miles of parallel trenches; created a deadlocked war of attrition with massive casualties and little territorial gain." },
          { term: "No Man's Land", definition: "Deadly strip of ground between opposing trenches swept by machine gun fire and artillery; soldiers who crossed it faced near-certain death." },
          { term: "Meuse-Argonne Offensive", definition: "1918 massive American-led Allied attack in France involving 1.2 million U.S. troops; broke German lines and effectively ended WWI." },
        ],
      },
      {
        name: "Urban Geography of the Depression",
        terms: [
          { term: "Hoovervilles", definition: "Shantytowns of makeshift shelters built by homeless Americans during the Depression, mockingly named after President Hoover for his failure to help." },
          { term: "Breadlines", definition: "Long queues of unemployed Americans waiting for free food from charities or government agencies; a visible symbol of Depression-era suffering in cities nationwide." },
          { term: "Bonus Army", definition: "43,000 WWI veterans who camped in Washington D.C. in 1932 demanding early bonus payments; General MacArthur violently dispersed them with tanks and tear gas." },
          { term: "Route 66", definition: "Highway from Chicago to Los Angeles that Dust Bowl migrants followed west; became a symbol of American escape, mobility, and the search for opportunity." },
        ],
      },
    ],
  },

  {
    id: "unit-7-mig",
    unit: 7,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "The Great Migration",
        terms: [
          { term: "Great Migration", definition: "Mass movement of over a million Black Southerners to northern cities during and after WWI, seeking industrial jobs and escape from Jim Crow violence." },
          { term: "Chicago Defender", definition: "Black newspaper based in Chicago that actively encouraged Southern Blacks to migrate North, reporting on jobs and dignity available in northern cities." },
          { term: "Pullman Porters", definition: "Black railroad workers who carried northern Black newspapers and news back to the South, spreading information that encouraged migration." },
          { term: "Jim Crow Laws", definition: "Southern racial segregation laws enforcing second-class citizenship for Black Americans; a primary push factor driving northward migration." },
        ],
      },
      {
        name: "Immigration Restriction",
        terms: [
          { term: "Emergency Quota Act", definition: "1921 law establishing national-origin quotas that sharply restricted immigration, especially from Southern and Eastern Europe." },
          { term: "National Origins Act", definition: "1924 law (Johnson-Reed Act) further slashing immigration quotas and effectively banning Asian immigration altogether." },
          { term: "Nativism", definition: "Political movement favoring native-born Americans over immigrants; peaked in the 1920s and drove the restrictive immigration laws of the era." },
          { term: "Literacy Test", definition: "1917 requirement that immigrants demonstrate reading ability; aimed at restricting poorer immigrants from Southern and Eastern Europe." },
        ],
      },
      {
        name: "Dust Bowl Migration",
        terms: [
          { term: "Grapes of Wrath", definition: "John Steinbeck's 1939 novel depicting the Joad family's harrowing migration from Oklahoma to California; galvanized national sympathy for migrant workers." },
          { term: "Farm Security Administration", definition: "New Deal agency that documented migrant worker conditions through photography and provided camps and aid to Dust Bowl refugees." },
          { term: "California Agricultural Labor", definition: "Exploitative farm work system that drew Dust Bowl migrants with promises of jobs but paid poverty wages and forced families into squalid labor camps." },
          { term: "Migrant Labor Camps", definition: "Government and private settlements housing Dust Bowl refugees in California; conditions ranged from squalid private camps to decent FSA facilities." },
        ],
      },
      {
        name: "Anti-Immigrant Hysteria",
        terms: [
          { term: "Red Scare", definition: "1919–1920 wave of anti-communist hysteria that targeted immigrant radicals and led to mass arrests, deportations, and attacks on civil liberties." },
          { term: "Palmer Raids", definition: "1919–1920 Justice Department raids arresting thousands of suspected immigrant anarchists and communists for deportation; led by Attorney General A. Mitchell Palmer." },
          { term: "Sacco and Vanzetti", definition: "Italian immigrant anarchists executed in 1927; many believed they were convicted largely due to anti-immigrant and anti-radical prejudice rather than evidence." },
          { term: "KKK Revival", definition: "1920s resurgence of the Ku Klux Klan now targeting not just Black Americans but also Catholics, Jews, and recent immigrants; reached four million members." },
        ],
      },
    ],
  },

  {
    id: "unit-7-pce",
    unit: 7,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Civic Engagement" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "Wilson and the Peace",
        terms: [
          { term: "Fourteen Points", definition: "Wilson's 1918 plan for a post-war world order based on self-determination, freedom of the seas, open diplomacy, and a League of Nations." },
          { term: "League of Nations", definition: "Wilson's proposed international peacekeeping organization; the U.S. Senate refused to ratify membership, fatally weakening the body." },
          { term: "Irreconcilables", definition: "Senate faction led by Borah and Johnson that absolutely refused to ratify any treaty containing the League of Nations under any conditions." },
          { term: "Lodge Reservationists", definition: "Senate Republicans led by Henry Cabot Lodge who would only accept the Treaty of Versailles with modifications protecting U.S. sovereignty." },
        ],
      },
      {
        name: "1920s Republican Rule",
        terms: [
          { term: "Return to Normalcy", definition: "Warren Harding's 1920 campaign slogan promising a retreat from progressive reform and wartime mobilization back to pre-war conservatism." },
          { term: "Teapot Dome Scandal", definition: "Harding-era corruption in which Interior Secretary Albert Fall secretly leased federal oil reserves to private companies in exchange for bribes." },
          { term: "Andrew Mellon", definition: "Treasury Secretary who drastically cut taxes on the wealthy in the 1920s, arguing the benefits would trickle down; his policies widened inequality." },
          { term: "Laissez-Faire", definition: "Republican policy of minimal government interference in the economy; dominant in the 1920s and widely blamed for allowing the conditions that caused the Depression." },
        ],
      },
      {
        name: "FDR and the New Deal",
        terms: [
          { term: "Fireside Chats", definition: "FDR's radio broadcasts directly to the American people explaining his policies in plain language; restored public confidence during the darkest years of the Depression." },
          { term: "Hundred Days", definition: "First 100 days of FDR's presidency in 1933, during which Congress passed 15 major New Deal programs in an unprecedented burst of legislative action." },
          { term: "Court-Packing Plan", definition: "FDR's 1937 proposal to add up to six new justices to the Supreme Court after it struck down New Deal laws; rejected by Congress as an abuse of presidential power." },
          { term: "Second New Deal", definition: "1935 wave of more ambitious reform legislation including Social Security, the Wagner Act, and a wealth tax; more focused on long-term reform than crisis relief." },
        ],
      },
      {
        name: "Opposition to the New Deal",
        terms: [
          { term: "Huey Long", definition: "Louisiana senator and governor who challenged FDR from the left with his Share Our Wealth plan before his assassination in 1935." },
          { term: "Father Coughlin", definition: "Catholic radio priest who turned against FDR, blaming bankers and Jews; his broadcasts reached 30 million listeners before his program was cancelled." },
          { term: "American Liberty League", definition: "Business-backed organization that attacked the New Deal as socialist tyranny threatening property rights and the Constitution." },
          { term: "Townsend Plan", definition: "Dr. Francis Townsend's proposal for a $200/month pension for all Americans over 60; attracted millions of supporters and pressured FDR toward Social Security." },
        ],
      },
    ],
  },

  {
    id: "unit-7-wor",
    unit: 7,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "U.S. Entry into WWI",
        terms: [
          { term: "Lusitania", definition: "British ocean liner sunk by Germany in 1915, killing 1,198 people including 128 Americans; galvanized public opinion against Germany." },
          { term: "Zimmermann Telegram", definition: "1917 secret German proposal offering Mexico the return of Texas, New Mexico, and Arizona in exchange for an alliance against the U.S." },
          { term: "Unrestricted Submarine Warfare", definition: "Germany's 1917 policy of attacking any ship in the war zone without warning; the immediate trigger for the U.S. declaration of war." },
          { term: "Sussex Pledge", definition: "1916 German promise to stop sinking passenger ships without warning; breaking it in 1917 pushed the U.S. to declare war." },
        ],
      },
      {
        name: "WWI Treaty and Aftermath",
        terms: [
          { term: "Treaty of Versailles", definition: "1919 peace treaty ending WWI that imposed war guilt, massive reparations, and territorial losses on Germany; its harshness helped cause WWII." },
          { term: "War Guilt Clause", definition: "Article 231 of the Treaty of Versailles declaring Germany solely responsible for starting WWI; used to justify the $33 billion in reparations imposed on Germany." },
          { term: "Reparations", definition: "Massive war payments imposed on Germany by the Versailles Treaty; contributed to German economic collapse, resentment, and ultimately the rise of Adolf Hitler." },
          { term: "Mandate System", definition: "League of Nations arrangement giving France and Britain control over former German and Ottoman territories in the Middle East and Africa." },
        ],
      },
      {
        name: "U.S. Military in WWI",
        terms: [
          { term: "AEF", definition: "American Expeditionary Forces; two million U.S. troops sent to France under General Pershing, providing the fresh manpower that tipped the war in the Allies' favor." },
          { term: "John 'Black Jack' Pershing", definition: "Commander of the AEF who insisted American troops fight as an independent force rather than be absorbed piecemeal into exhausted British and French units." },
          { term: "Selective Service Act", definition: "1917 law creating the military draft; registered 24 million men, with nearly three million ultimately inducted into the armed forces." },
          { term: "Belleau Wood", definition: "June 1918 battle in France where U.S. Marines stopped a German advance; helped prove American troops could fight effectively and boosted Allied morale." },
        ],
      },
      {
        name: "Interwar Isolationism",
        terms: [
          { term: "Neutrality Acts", definition: "1930s laws prohibiting U.S. arms sales and loans to warring nations; reflected Americans' determination to avoid being pulled into another European war." },
          { term: "Nye Committee", definition: "1934 Senate investigation concluding that arms manufacturers and bankers had manipulated the U.S. into WWI for profit; fueled isolationist sentiment." },
          { term: "Washington Naval Conference", definition: "1921–22 agreements among major powers to limit battleship construction; the first significant international arms control treaty." },
          { term: "Kellogg-Briand Pact", definition: "1928 international agreement renouncing war as an instrument of national policy; signed by 62 nations but had no enforcement mechanism and proved meaningless." },
        ],
      },
    ],
  },

  {
    id: "unit-7-arc",
    unit: 7,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "Jazz Age Culture",
        terms: [
          { term: "Jazz Age", definition: "1920s era named for jazz music, characterized by prosperity, cultural experimentation, and generational rebellion against Victorian norms." },
          { term: "Louis Armstrong", definition: "New Orleans-born jazz trumpeter whose virtuosity defined the era; his Hot Five recordings are landmarks of American music." },
          { term: "Duke Ellington", definition: "Jazz composer and bandleader whose Cotton Club performances blended jazz with orchestral sophistication, making him an international celebrity." },
          { term: "Speakeasies", definition: "Illegal bars that flourished during Prohibition, becoming underground centers of jazz music, dancing, and interracial socializing." },
        ],
      },
      {
        name: "Harlem Renaissance Arts",
        terms: [
          { term: "Zora Neale Hurston", definition: "Harlem Renaissance novelist and anthropologist who documented Black Southern folklore; wrote Their Eyes Were Watching God." },
          { term: "Claude McKay", definition: "Harlem Renaissance poet whose sonnet 'If We Must Die' defiantly demanded Black resistance to racial violence." },
          { term: "Aaron Douglas", definition: "Painter called the 'Father of African American Art' whose bold geometric style defined the visual aesthetic of the Harlem Renaissance." },
          { term: "Countee Cullen", definition: "Harlem Renaissance poet known for lyrical verse exploring Black identity, racial pride, and the tension between African heritage and American experience." },
        ],
      },
      {
        name: "Lost Generation Literature",
        terms: [
          { term: "Lost Generation", definition: "Term for American writers who came of age during WWI and rejected mainstream materialism; named by Gertrude Stein and adopted by Ernest Hemingway." },
          { term: "F. Scott Fitzgerald", definition: "Author of The Great Gatsby (1925); captured the glitter and emptiness of 1920s excess and the corruption of the American Dream." },
          { term: "Ernest Hemingway", definition: "WWI veteran and Lost Generation writer known for spare, understated prose; wrote The Sun Also Rises and A Farewell to Arms." },
          { term: "Sinclair Lewis", definition: "Satirist who mocked middle-class conformity in Main Street and Babbitt; first American to win the Nobel Prize for Literature (1930)." },
        ],
      },
      {
        name: "Cultural Conflicts of the 1920s",
        terms: [
          { term: "Fundamentalism", definition: "Protestant movement insisting on literal interpretation of the Bible; rose in reaction to modern science, urbanization, and social change." },
          { term: "Scopes Trial", definition: "1925 Tennessee trial of teacher John Scopes for teaching evolution; became a nationally covered clash between modern science and religious tradition." },
          { term: "KKK Revival", definition: "1920s resurgence of the Ku Klux Klan targeting Blacks, Catholics, Jews, and immigrants; reached four million members before scandals caused it to collapse." },
          { term: "Anti-Evolution Laws", definition: "State laws passed in the 1920s banning the teaching of evolution in public schools; driven by the fundamentalist movement and enforced in states like Tennessee." },
        ],
      },
    ],
  },

  {
    id: "unit-7-soc",
    unit: 7,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "WWI, Roaring 20s & Great Depression",
    subject: "APUSH",
    groups: [
      {
        name: "Race and Civil Rights",
        terms: [
          { term: "NAACP", definition: "National Association for the Advancement of Colored People; civil rights organization that fought lynching and segregation through legal challenges and public advocacy." },
          { term: "Tulsa Race Massacre", definition: "1921 white mob attack that burned and bombed the prosperous Black Greenwood district, killing hundreds and destroying 35 city blocks in one night." },
          { term: "Anti-Lynching Movement", definition: "Campaign by the NAACP and activists like Ida B. Wells to pass federal laws against lynching; repeatedly blocked in Congress by Southern senators." },
          { term: "Scottsboro Boys", definition: "Nine Black teenagers falsely accused of rape in Alabama in 1931; their case became an international symbol of racial injustice and drew massive protest." },
        ],
      },
      {
        name: "Women and Gender",
        terms: [
          { term: "19th Amendment", definition: "1920 amendment granting women the right to vote, the culmination of 72 years of suffrage activism beginning at Seneca Falls." },
          { term: "Equal Rights Amendment", definition: "Proposed in 1923 by Alice Paul to guarantee equal rights regardless of sex; debated for decades and never ratified despite passing Congress in 1972." },
          { term: "Women in the Workforce", definition: "WWI opened factory and office jobs to women; though many were displaced after the war, the experience permanently expanded ideas of women's economic roles." },
          { term: "Birth Control Movement", definition: "Campaign led by Margaret Sanger to give women access to contraception; challenged laws banning birth control information and laid groundwork for Planned Parenthood." },
        ],
      },
      {
        name: "Labor and Class Conflict",
        terms: [
          { term: "AFL", definition: "American Federation of Labor; largest union federation of the era representing skilled workers; led by Samuel Gompers and focused on wages and hours rather than politics." },
          { term: "Great Steel Strike of 1919", definition: "365,000 steelworkers walked out demanding union recognition; crushed by management, Red Scare hysteria, and federal intervention." },
          { term: "Open Shop", definition: "Workplace that refused to require union membership; anti-union employers promoted the 'open shop' as 'the American plan,' equating unions with socialism." },
          { term: "Yellow-Dog Contract", definition: "Agreement workers signed promising not to join a union as a condition of employment; widely used in the 1920s to prevent organizing." },
        ],
      },
      {
        name: "New Deal Social Programs",
        terms: [
          { term: "Wagner Act", definition: "1935 law (National Labor Relations Act) guaranteeing workers' right to organize unions and bargain collectively; transformed American labor relations." },
          { term: "Fair Labor Standards Act", definition: "1938 law establishing a federal minimum wage (25 cents/hour), 40-hour workweek, and restrictions on child labor." },
          { term: "CIO", definition: "Congress of Industrial Organizations; new union federation founded in 1935 that organized all workers in an industry (including unskilled), rivaling the AFL." },
          { term: "WPA", definition: "Works Progress Administration; employed 8.5 million Americans in public works, arts, and literacy projects — the largest New Deal employment program." },
        ],
      },
    ],
  },

  {
    id: "unit-8-nat",
    unit: 8,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Postwar American Dream",
        terms: [
          { term: "Baby Boom", definition: "Post-WWII surge in birth rates as returning veterans started families; the Baby Boom generation (born 1946–1964) would reshape American culture and politics for decades." },
          { term: "GI Bill", definition: "1944 law providing veterans with college tuition, low-cost mortgages, and job training; created a prosperous middle class and fueled postwar suburban expansion." },
          { term: "Nuclear Family", definition: "Post-WWII ideal of a married couple with children in a suburban home; promoted relentlessly by media and advertisers as the American standard of success." },
          { term: "Consumerism", definition: "Post-WWII culture of purchasing goods as a sign of prosperity; Americans were encouraged to buy cars, appliances, and suburban homes as expressions of freedom itself." },
        ],
      },
      {
        name: "Civil Rights Redefining Citizenship",
        terms: [
          { term: "Brown v. Board of Education", definition: "1954 Supreme Court ruling unanimously declaring racial segregation in public schools unconstitutional, overturning Plessy v. Ferguson and energizing the civil rights movement." },
          { term: "Civil Rights Act 1964", definition: "Landmark law banning discrimination based on race, color, religion, sex, or national origin in employment and public accommodations; the most sweeping civil rights law since Reconstruction." },
          { term: "Voting Rights Act 1965", definition: "Law eliminating literacy tests and other barriers to Black voter registration; resulted in a dramatic and immediate increase in Black political participation across the South." },
          { term: "24th Amendment", definition: "1964 constitutional amendment abolishing poll taxes in federal elections, removing a key financial barrier used to disenfranchise Black and poor voters." },
        ],
      },
      {
        name: "Counterculture and Alternative Identity",
        terms: [
          { term: "Beat Generation", definition: "1950s literary and cultural movement rejecting mainstream conformity; writers like Jack Kerouac and Allen Ginsberg celebrated spontaneity, nonconformity, and challenged postwar materialism." },
          { term: "Black Power", definition: "Post-1966 civil rights ideology emphasizing Black pride, self-determination, and community control rather than integration; associated with Stokely Carmichael and the Black Panther Party." },
          { term: "Chicano Movement", definition: "1960s–70s Mexican American civil rights movement seeking political empowerment, cultural pride, and labor rights; also called El Movimiento." },
          { term: "American Indian Movement", definition: "Native American activist organization founded in 1968 addressing urban poverty, police brutality, and treaty rights; seized Wounded Knee in 1973 in a dramatic standoff with federal agents." },
        ],
      },
      {
        name: "Cold War Conformity and Fear",
        terms: [
          { term: "McCarthyism", definition: "Anti-communist crusade led by Senator Joseph McCarthy using reckless accusations and guilt by association to destroy careers and silence dissent in the early 1950s." },
          { term: "Loyalty Oaths", definition: "Requirements that government employees and others swear they were not communists; used to purge suspected radicals from public life and enforce Cold War conformity." },
          { term: "Blacklisting", definition: "Practice of excluding suspected communist sympathizers from employment in Hollywood, academia, and other fields during the Red Scare, often destroying careers without evidence." },
          { term: "Duck-and-Cover Drills", definition: "Civil defense exercises teaching schoolchildren to hide under desks in case of nuclear attack; became a symbol of Cold War anxiety and the ever-present nuclear threat." },
        ],
      },
    ],
  },

  {
    id: "unit-8-wxt",
    unit: 8,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Space Race Milestones",
        terms: [
          { term: "Sputnik", definition: "Soviet satellite launched in 1957 — the first artificial Earth satellite; shocked Americans and triggered massive federal investment in science education and the U.S. space program." },
          { term: "NASA", definition: "National Aeronautics and Space Administration; created in 1958 in response to Sputnik to coordinate U.S. space exploration and compete with the Soviet space program." },
          { term: "Apollo 11", definition: "1969 NASA mission that landed Neil Armstrong and Buzz Aldrin on the Moon, fulfilling Kennedy's pledge and marking the decisive U.S. victory in the space race." },
          { term: "ARPANET", definition: "Defense Department computer network launched in 1969 allowing universities and research centers to share data across distances; the technological forerunner of the internet." },
        ],
      },
      {
        name: "Postwar Consumer Economy",
        terms: [
          { term: "Television", definition: "By the mid-1950s, most American homes had a TV; it transformed entertainment, advertising, journalism, and politics — including the pivotal 1960 Kennedy-Nixon debates." },
          { term: "Shopping Malls", definition: "Suburban retail centers that emerged in the 1950s–60s, symbolizing the consumer economy and replacing downtown commercial districts as the center of community life." },
          { term: "Credit Cards", definition: "Widely adopted in the 1950s–60s, enabling Americans to buy beyond their immediate income; transformed consumer culture and created modern personal debt." },
          { term: "Planned Obsolescence", definition: "Manufacturing strategy deliberately designing products to become outdated or wear out, encouraging repeated purchases; a defining feature of the postwar consumer economy." },
        ],
      },
      {
        name: "Labor in the Cold War Era",
        terms: [
          { term: "Taft-Hartley Act", definition: "1947 law restricting union activities, permitting states to pass 'right-to-work' laws, and requiring union leaders to swear they were not communists." },
          { term: "AFL-CIO", definition: "Merged federation of trade unions formed in 1955 combining the American Federation of Labor and Congress of Industrial Organizations; the dominant voice of organized labor in postwar America." },
          { term: "United Farm Workers", definition: "Labor union co-founded by César Chávez and Dolores Huerta in 1962 advocating for migrant farm laborers through strikes, marches, and the nationally publicized Delano grape boycott." },
          { term: "Automation", definition: "Increasing use of machines to replace human labor in factories and offices; threatened union jobs and began the long decline of manufacturing employment in the U.S." },
        ],
      },
      {
        name: "Military-Industrial Complex",
        terms: [
          { term: "NSC-68", definition: "1950 top-secret National Security Council report calling for a massive U.S. military buildup to match Soviet power; it tripled the defense budget and militarized the Cold War." },
          { term: "Defense Spending", definition: "Dramatic expansion of the federal military budget during the Cold War, from $13 billion in 1950 to over $50 billion by the early 1960s, reshaping the American economy." },
          { term: "Arms Race", definition: "U.S.-Soviet competition to build more and better nuclear weapons, creating a balance of terror and consuming enormous economic resources on both sides for four decades." },
          { term: "Military-Industrial Complex", definition: "Term coined by President Eisenhower in his 1961 farewell address warning of the dangerous alliance between defense contractors, the military, and Congress that could distort national priorities." },
        ],
      },
    ],
  },

  {
    id: "unit-8-geo",
    unit: 8,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Cold War Geographic Divisions",
        terms: [
          { term: "Iron Curtain", definition: "Metaphorical boundary dividing communist Eastern Europe from democratic Western Europe; coined by Winston Churchill in 1946 to describe Soviet-imposed separation of the continent." },
          { term: "Berlin Wall", definition: "Concrete barrier built by East Germany in 1961 dividing communist East Berlin from democratic West Berlin; stood as the most visible symbol of Cold War division until 1989." },
          { term: "38th Parallel", definition: "Line of latitude dividing North and South Korea; established as the postwar border in 1945, reinforced by the Korean War armistice in 1953, and militarized to this day." },
          { term: "DMZ", definition: "Demilitarized Zone; heavily fortified buffer zone separating North and South Vietnam (and later North and South Korea); a defining geographic feature of Cold War Asia." },
        ],
      },
      {
        name: "Nuclear Threat and Geography",
        terms: [
          { term: "Bikini Atoll", definition: "Pacific island used by the U.S. for nuclear weapons testing in the late 1940s–50s; its Marshall Islands residents were displaced and suffered long-term radiation exposure." },
          { term: "Fallout Shelters", definition: "Underground or reinforced structures built to protect against nuclear blast and radioactive fallout; their widespread construction reflected deep Cold War anxiety about nuclear war." },
          { term: "Nevada Test Site", definition: "Primary location for above-ground U.S. nuclear weapons testing from 1951–1963; soldiers and nearby residents were exposed to radiation until the Nuclear Test Ban Treaty ended atmospheric tests." },
          { term: "Mutually Assured Destruction", definition: "Cold War nuclear doctrine holding that any first strike would trigger devastating retaliation, making nuclear war suicidal for both sides; the grim logic that kept the peace — abbreviated MAD." },
        ],
      },
      {
        name: "Suburban Transformation",
        terms: [
          { term: "Levittown", definition: "Mass-produced suburban community built by William Levitt in New York after WWII; a model for postwar suburban development that was racially segregated by design through restrictive covenants." },
          { term: "Redlining", definition: "Practice by banks and federal agencies of denying mortgages in Black neighborhoods, marked in red on maps; systematically excluded minorities from postwar suburban prosperity and wealth-building." },
          { term: "Blockbusting", definition: "Real estate practice of convincing white homeowners to sell cheaply by warning that Black families were moving in, then reselling at higher prices; rapidly integrated and then resegregated neighborhoods." },
          { term: "Suburban Sprawl", definition: "Rapid outward expansion of metropolitan areas into surrounding countryside after WWII; enabled by cars, federal highways, and mortgage subsidies, fundamentally reshaping American geography and culture." },
        ],
      },
      {
        name: "Environmental Awakening",
        terms: [
          { term: "Rachel Carson", definition: "Marine biologist whose 1962 book Silent Spring documented how pesticides like DDT harmed ecosystems and human health; widely credited with launching the modern environmental movement." },
          { term: "Silent Spring", definition: "1962 book by Rachel Carson exposing environmental damage caused by pesticide use; led directly to the banning of DDT, creation of the EPA, and a new era of environmental legislation." },
          { term: "EPA", definition: "Environmental Protection Agency; federal agency created by Nixon in 1970 to enforce environmental regulations, set pollution standards, and protect public health from environmental hazards." },
          { term: "Earth Day", definition: "Annual environmental awareness event first held April 22, 1970; drew 20 million participants in its first year — then the largest civic event in American history — and spurred landmark environmental laws." },
        ],
      },
    ],
  },

  {
    id: "unit-8-mig",
    unit: 8,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "African American Migration",
        terms: [
          { term: "Second Great Migration", definition: "Movement of approximately 5 million Black Southerners to northern and western cities between 1940–1970, driven by wartime jobs, continued racial violence, and economic opportunity." },
          { term: "White Flight", definition: "Movement of white middle-class families from cities to suburbs after WWII, accelerated by racial integration; left cities with declining tax bases and deteriorating public services." },
          { term: "Sunbelt Migration", definition: "Mass movement of Americans to the South and West after WWII seeking warmer climates, lower costs of living, and booming defense industry employment." },
          { term: "Rustbelt Decline", definition: "Deindustrialization of the northeastern and midwestern manufacturing belt from the 1960s–80s; factory closures caused population loss, poverty, and political resentment that reshaped American politics." },
        ],
      },
      {
        name: "Cold War Refugees and Immigration Reform",
        terms: [
          { term: "Cuban Exiles", definition: "Approximately 250,000 Cubans who fled to the U.S. after Castro's 1959 revolution; settled primarily in Miami, transforming the city's culture, economy, and politics." },
          { term: "Hungarian Refugees", definition: "About 200,000 Hungarians who fled to the West after the Soviet Union crushed the 1956 Hungarian Revolution; admitted to the U.S. as political refugees in a Cold War propaganda victory." },
          { term: "Displaced Persons Act", definition: "1948 law admitting 400,000 European war refugees to the United States, marking a shift toward humanitarian immigration policy in the postwar era." },
          { term: "Immigration Act of 1965", definition: "Law abolishing the national-origin quota system from the 1920s; dramatically shifted immigration away from Europe toward Latin America, Asia, and Africa, reshaping American demographics." },
        ],
      },
      {
        name: "Latino Migration and Labor",
        terms: [
          { term: "Bracero Program", definition: "1942–1964 guest worker program bringing millions of Mexican laborers to U.S. agriculture; met wartime and postwar farm labor needs while systematically exploiting workers." },
          { term: "Puerto Rican Migration", definition: "Mass movement of Puerto Ricans to mainland U.S. cities — especially New York — in the 1940s–60s, driven by poverty and economic opportunity; Puerto Ricans are U.S. citizens by birth." },
          { term: "Operation Wetback", definition: "1954 U.S. government mass deportation campaign that forcibly removed over one million undocumented Mexican immigrants, often including legal residents and U.S. citizens." },
          { term: "Chicano Barrio", definition: "Predominantly Mexican American urban neighborhood that became a center of Chicano cultural identity, community organization, and political activism during the 1960s–70s." },
        ],
      },
      {
        name: "Reshaping Urban Space",
        terms: [
          { term: "Interstate Highway Act", definition: "1956 law funding 41,000 miles of highways; transformed American geography, enabled suburban growth, and often deliberately demolished Black urban neighborhoods to build routes through cities." },
          { term: "FHA Loans", definition: "Federal Housing Administration mortgage guarantees that made homeownership affordable for millions of white Americans after WWII while systematically excluding Black applicants through redlining." },
          { term: "Urban Renewal", definition: "1950s–60s federally funded program demolishing 'blighted' urban neighborhoods to build highways and modern housing; displaced primarily Black and poor communities, often with no replacement." },
          { term: "Public Housing", definition: "Government-built apartment complexes intended to house low-income families; often poorly maintained, racially segregated, and concentrated poverty in urban cores rather than alleviating it." },
        ],
      },
    ],
  },

  {
    id: "unit-8-pce",
    unit: 8,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Power" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Red Scare and Anti-Communist Politics",
        terms: [
          { term: "HUAC", definition: "House Un-American Activities Committee; congressional body that investigated suspected Communist influence in American institutions, especially Hollywood and labor unions." },
          { term: "Hollywood Ten", definition: "Film industry writers and directors who refused to cooperate with HUAC's investigations; imprisoned for contempt of Congress and blacklisted from the industry." },
          { term: "Rosenbergs", definition: "Julius and Ethel Rosenberg, executed in 1953 for passing atomic bomb secrets to the Soviet Union; their controversial trial became a defining Cold War political controversy." },
          { term: "Army-McCarthy Hearings", definition: "1954 televised Senate hearings in which attorney Joseph Welch's challenge — 'Have you no sense of decency?' — exposed McCarthy's recklessness and ended his political career." },
        ],
      },
      {
        name: "Presidential Power",
        terms: [
          { term: "Executive Order 9981", definition: "Truman's 1948 order desegregating the U.S. military, one of the first major federal civil rights actions of the postwar era and a landmark use of executive power." },
          { term: "Gulf of Tonkin Resolution", definition: "1964 congressional authorization giving President Johnson broad power to escalate military involvement in Vietnam; later revealed to be based partly on a fabricated incident." },
          { term: "War Powers Act", definition: "1973 law requiring the president to notify Congress within 48 hours of committing troops and limiting deployments to 60 days without congressional approval; a post-Vietnam check on executive power." },
          { term: "Imperial Presidency", definition: "Term describing the dramatic expansion of executive power during the Cold War, as presidents claimed broad unilateral authority to conduct foreign policy and national security affairs." },
        ],
      },
      {
        name: "Civil Rights Political Battles",
        terms: [
          { term: "Southern Manifesto", definition: "1956 declaration signed by 101 southern members of Congress opposing the Brown v. Board ruling and pledging resistance to desegregation; signaled the coming political realignment of the South." },
          { term: "Filibuster", definition: "Senate procedural tactic used by Southern Democrats to block civil rights legislation for decades; the Civil Rights Act of 1964 survived a 60-day filibuster — the longest in Senate history." },
          { term: "March on Washington", definition: "August 1963 civil rights rally of 250,000 people where MLK delivered the 'I Have a Dream' speech; demonstrated the movement's political strength and built public pressure for legislation." },
          { term: "Fair Housing Act 1968", definition: "Law prohibiting discrimination in the sale, rental, and financing of housing; passed within days of MLK's assassination as a tribute — and after years of failed attempts." },
        ],
      },
      {
        name: "Watergate and Constitutional Crisis",
        terms: [
          { term: "Watergate", definition: "1972 break-in at Democratic National Committee headquarters authorized by Nixon's team; the cover-up led to Nixon's resignation and shattered public trust in government." },
          { term: "Pentagon Papers", definition: "1971 classified Defense Department history leaked to the New York Times showing that multiple presidents had systematically misled Congress and the public about the Vietnam War." },
          { term: "Saturday Night Massacre", definition: "October 1973 event when Nixon ordered the firing of the Watergate special prosecutor; two attorneys general resigned rather than carry out the order, triggering a constitutional crisis." },
          { term: "Nixon Resignation", definition: "August 8, 1974, Nixon became the only U.S. president to resign from office, facing certain impeachment conviction after Watergate revealed his involvement in the cover-up." },
        ],
      },
    ],
  },

  {
    id: "unit-8-wor",
    unit: 8,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Containment Strategy",
        terms: [
          { term: "Truman Doctrine", definition: "1947 foreign policy pledging U.S. support for nations resisting communist takeover; began with Greece and Turkey and established containment as the defining Cold War strategy." },
          { term: "Marshall Plan", definition: "1948 U.S. program providing $13 billion in economic aid to rebuild Western Europe; prevented communist influence from filling the postwar power vacuum and stabilized democratic governments." },
          { term: "NATO", definition: "North Atlantic Treaty Organization; 1949 military alliance among the U.S., Canada, and Western Europe for collective defense; the cornerstone of American Cold War strategy in Europe." },
          { term: "Domino Theory", definition: "Cold War belief that if one nation fell to communism, its neighbors would follow like dominoes; used to justify U.S. military intervention in Korea, Vietnam, and beyond." },
        ],
      },
      {
        name: "Cold War Military Crises",
        terms: [
          { term: "Korean War", definition: "1950–1953 conflict in which U.S.-led UN forces fought to defend South Korea against a North Korean and Chinese invasion; ended in armistice at the original border with 36,000 Americans dead." },
          { term: "Bay of Pigs", definition: "1961 failed CIA-backed invasion of Cuba by anti-Castro exiles; the embarrassing defeat strengthened Castro, emboldened the Soviets, and badly damaged Kennedy's early presidency." },
          { term: "Cuban Missile Crisis", definition: "1962 thirteen-day standoff over Soviet nuclear missiles in Cuba; the closest the world came to nuclear war, resolved through secret diplomacy including a U.S. pledge not to invade Cuba." },
          { term: "Berlin Airlift", definition: "1948–1949 U.S. and British operation supplying West Berlin by air after the Soviet Union blockaded all ground routes; a Cold War victory achieved through logistics rather than military force." },
        ],
      },
      {
        name: "Vietnam War",
        terms: [
          { term: "Tet Offensive", definition: "January 1968 coordinated North Vietnamese attacks on South Vietnamese cities; militarily repelled but shattered American public confidence in winning the war and turned opinion against Johnson." },
          { term: "Vietnamization", definition: "Nixon's strategy of gradually withdrawing U.S. troops while training South Vietnamese forces to take over fighting; slowed U.S. withdrawal but ultimately failed to prevent South Vietnam's collapse." },
          { term: "Ho Chi Minh", definition: "Leader of North Vietnam's communist movement; his guerrilla strategy and determination outlasted multiple U.S. administrations, ultimately achieving Vietnamese reunification in 1975." },
          { term: "Draft Resistance", definition: "Widespread opposition to military conscription during Vietnam, including draft card burning, conscientious objector claims, and tens of thousands fleeing to Canada to avoid service." },
        ],
      },
      {
        name: "Détente and New Diplomacy",
        terms: [
          { term: "Nixon's Opening to China", definition: "Nixon's historic 1972 visit to the People's Republic of China, ending 23 years of non-recognition and reshaping Cold War geopolitics by exploiting the Sino-Soviet split." },
          { term: "SALT I", definition: "Strategic Arms Limitation Treaty (1972) between the U.S. and Soviet Union freezing the number of nuclear missiles each side could possess; the first major Cold War arms control agreement." },
          { term: "Helsinki Accords", definition: "1975 agreement among 35 nations recognizing postwar European borders and committing to human rights; later used by Soviet dissidents to challenge their governments." },
          { term: "Détente", definition: "Nixon and Kissinger's policy of reducing Cold War tensions with the Soviet Union and China through negotiation, trade, and arms control rather than confrontation; eased but did not end the Cold War." },
        ],
      },
    ],
  },

  {
    id: "unit-8-arc",
    unit: 8,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "1950s Popular Culture",
        terms: [
          { term: "Rock 'n' Roll", definition: "Musical genre combining rhythm and blues with country that exploded in the 1950s; artists like Elvis Presley and Chuck Berry crossed racial boundaries and shocked older generations." },
          { term: "Drive-In Theaters", definition: "Outdoor movie venues that became iconic in the postwar era, embodying car culture and suburban leisure; over 4,000 existed at their peak in the late 1950s." },
          { term: "Television Sitcoms", definition: "TV shows like Leave It to Beaver and Father Knows Best that portrayed idealized white suburban family life, setting cultural norms and expectations for postwar America." },
          { term: "Beat Poetry", definition: "Literary movement of the 1950s featuring poets like Allen Ginsberg and Lawrence Ferlinghetti who rejected mainstream values through experimental verse, planting seeds of 1960s counterculture." },
        ],
      },
      {
        name: "Civil Rights Cultural Expression",
        terms: [
          { term: "Freedom Songs", definition: "Songs like 'We Shall Overcome' and 'This Little Light of Mine' that sustained civil rights protesters during marches, sit-ins, and imprisonment; music as political resistance." },
          { term: "Soul Music", definition: "Genre emerging in the 1960s from gospel and R&B that became the soundtrack of Black pride and civil rights; artists like Aretha Franklin and James Brown defined its sound and politics." },
          { term: "Black Arts Movement", definition: "1960s–70s artistic movement aligned with Black Power that created a revolutionary Black aesthetic in literature, theater, and visual arts, insisting that art serve political liberation." },
          { term: "Spoken Word Poetry", definition: "African American oral poetic tradition that found new audiences in the 1960s–70s; the Last Poets and Gil Scott-Heron blended poetry and music to critique racism, war, and inequality." },
        ],
      },
      {
        name: "1960s Counterculture",
        terms: [
          { term: "Woodstock", definition: "August 1969 music festival in upstate New York drawing 400,000 people; became the defining symbol of the counterculture's ideals of peace, communal living, and generational identity." },
          { term: "Free Speech Movement", definition: "1964 student protest at UC Berkeley demanding the right to political organizing on campus; launched the era of campus activism that spread across the country." },
          { term: "Summer of Love", definition: "1967 gathering of 100,000 young people in San Francisco's Haight-Ashbury neighborhood; the cultural peak of the hippie movement and its vision of a new, peaceful society." },
          { term: "Psychedelic Culture", definition: "1960s movement centered on mind-altering experiences that influenced music, art, and fashion; part of the counterculture's broader rejection of mainstream American values and Cold War conformity." },
        ],
      },
      {
        name: "Women's Cultural Revolution",
        terms: [
          { term: "The Feminine Mystique", definition: "1963 book by Betty Friedan identifying the dissatisfaction of educated suburban housewives with their limited domestic roles; widely credited with igniting second-wave feminism." },
          { term: "Ms. Magazine", definition: "Feminist magazine co-founded by Gloria Steinem in 1972; the first mainstream publication to address women's issues from a feminist perspective and reach a mass national audience." },
          { term: "Women's Liberation Movement", definition: "Broad 1960s–70s movement demanding equal rights, reproductive freedom, and an end to gender discrimination in employment, education, law, and daily life." },
          { term: "Title IX", definition: "1972 federal law prohibiting sex discrimination in educational programs receiving federal funding; revolutionized women's opportunities in athletics and higher education." },
        ],
      },
    ],
  },

  {
    id: "unit-8-soc",
    unit: 8,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Cold War & Civil Rights",
    subject: "APUSH",
    groups: [
      {
        name: "Racial Inequality Structures",
        terms: [
          { term: "Separate but Equal", definition: "Legal doctrine from Plessy v. Ferguson (1896) allowing racial segregation as long as facilities were theoretically equivalent; overturned by Brown v. Board of Education in 1954." },
          { term: "Restrictive Covenants", definition: "Private agreements among homeowners not to sell to Black, Jewish, or other minority buyers; widespread until the Supreme Court ruled them unenforceable in Shelley v. Kraemer (1948)." },
          { term: "Sundown Towns", definition: "Communities that excluded Black residents through laws, threats, or violence, requiring them to leave by dark; thousands existed across the North and South well into the 1960s." },
          { term: "Racial Violence", definition: "Bombings, lynchings, and police brutality targeting Black civil rights workers and veterans; their documentation by journalists and activists helped build the case for federal intervention." },
        ],
      },
      {
        name: "Social Movement Organizations",
        terms: [
          { term: "SCLC", definition: "Southern Christian Leadership Conference; civil rights organization co-founded by MLK in 1957 that used nonviolent direct action and Black churches as its organizational and spiritual base." },
          { term: "SNCC", definition: "Student Nonviolent Coordinating Committee; youth-led civil rights organization founded in 1960 that organized sit-ins, Freedom Rides, and voter registration; later embraced Black Power under Stokely Carmichael." },
          { term: "NOW", definition: "National Organization for Women; founded in 1966 by Betty Friedan and others to advocate for legal equality, workplace rights, and reproductive freedom through legislation and litigation." },
          { term: "SDS", definition: "Students for a Democratic Society; New Left organization founded in 1962 that published the Port Huron Statement and led campus anti-war activism before dissolving in 1969." },
        ],
      },
      {
        name: "Generational and Class Tensions",
        terms: [
          { term: "Baby Boomers", definition: "Americans born between 1946 and 1964; the largest generation in U.S. history, their size and values transformed schools, the economy, politics, and culture as they aged." },
          { term: "Generation Gap", definition: "Profound cultural divide between Baby Boomers and their parents over values, authority, Vietnam, and social norms; a defining feature of 1960s American society and politics." },
          { term: "Port Huron Statement", definition: "1962 manifesto written by SDS calling for participatory democracy, civil rights, and an end to the Cold War arms race; the founding document of the New Left." },
          { term: "Silent Majority", definition: "Nixon's term for the millions of ordinary Americans he claimed were not protesting in the streets but quietly supported traditional values, law and order, and the Vietnam War." },
        ],
      },
      {
        name: "Gender and Family Transformations",
        terms: [
          { term: "ERA", definition: "Equal Rights Amendment; proposed constitutional amendment prohibiting sex discrimination; passed Congress in 1972 but fell three states short of ratification after a campaign led by Phyllis Schlafly." },
          { term: "Roe v. Wade", definition: "1973 Supreme Court ruling establishing a constitutional right to abortion in the first trimester; became the defining issue of culture war politics and remained so for nearly 50 years." },
          { term: "Betty Friedan", definition: "Author of The Feminine Mystique and co-founder of NOW; her vision of practical legal equality was central to second-wave feminism, though she clashed with more radical feminists." },
          { term: "Phyllis Schlafly", definition: "Conservative activist who led the STOP ERA campaign that successfully blocked the Equal Rights Amendment; her work energized the New Right and proved that conservative women could be powerful political organizers." },
        ],
      },
    ],
  },

  {
    id: "unit-9-nat",
    unit: 9,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Conservative Identity",
        terms: [
          { term: "Reagan Revolution", definition: "The rightward shift in American politics beginning in 1980; Reagan's coalition united free-market conservatives, social traditionalists, and Cold War hawks against the liberal New Deal order." },
          { term: "Moral Majority", definition: "Jerry Falwell's 1979 organization mobilizing evangelical Christians as a Republican voting bloc; helped define American conservatism around cultural issues like abortion and school prayer." },
          { term: "Religious Right", definition: "Coalition of conservative evangelical and Catholic voters who aligned with the Republican Party from the late 1970s; made abortion, gay rights, and school prayer central political issues." },
          { term: "Culture Wars", definition: "Ongoing political conflict since the 1980s over values, identity, and morality — abortion, LGBTQ rights, gun control, immigration, and the meaning of American nationhood." },
        ],
      },
      {
        name: "Civil Rights Continued",
        terms: [
          { term: "Black Lives Matter", definition: "Movement founded in 2013 after Trayvon Martin's killer was acquitted; galvanized by police killings of Black Americans and George Floyd's murder in 2020 — the largest protest movement in U.S. history." },
          { term: "Obergefell v. Hodges", definition: "2015 Supreme Court ruling legalizing same-sex marriage nationwide; the culmination of decades of LGBTQ rights activism and a landmark in American civil rights history." },
          { term: "Americans with Disabilities Act", definition: "1990 law prohibiting discrimination against people with disabilities in employment, public accommodations, and transportation; the most sweeping civil rights law since 1964." },
          { term: "#MeToo Movement", definition: "2017 viral campaign exposing the pervasiveness of sexual harassment and assault; toppled powerful men across industries and sparked a national reckoning with gender inequality." },
        ],
      },
      {
        name: "Post-9/11 Identity",
        terms: [
          { term: "September 11, 2001", definition: "Al-Qaeda hijackings destroyed the World Trade Center and struck the Pentagon, killing 2,977 people; transformed American foreign policy, civil liberties, and national identity." },
          { term: "Islamophobia", definition: "Surge in anti-Muslim prejudice and hate crimes following 9/11; targeted Arab Americans and Muslim communities regardless of citizenship — a pattern echoing earlier wartime discrimination." },
          { term: "USA PATRIOT Act", definition: "2001 law dramatically expanding government surveillance powers; debated as a necessary security tool versus a dangerous erosion of civil liberties and Fourth Amendment rights." },
          { term: "War on Terror", definition: "Bush administration's framing of post-9/11 policy as a global, open-ended conflict against terrorism; justified military action in Afghanistan, Iraq, and beyond." },
        ],
      },
      {
        name: "Demographic Change and Identity",
        terms: [
          { term: "Immigration Reform and Control Act", definition: "1986 Reagan-era law granting amnesty to 3 million undocumented immigrants while promising — but failing — to enforce employer sanctions against hiring undocumented workers." },
          { term: "DACA", definition: "Obama's 2012 executive order shielding 800,000 undocumented immigrants brought as children ('Dreamers') from deportation; a flashpoint in the immigration identity debate." },
          { term: "Browning of America", definition: "Demographic shift making the U.S. increasingly non-white; Census projections showing a majority-minority nation by 2045 fueled both multicultural celebration and white nationalist backlash." },
          { term: "Multiculturalism", definition: "Political and educational philosophy celebrating America's racial and ethnic diversity rather than demanding assimilation; contested in the culture wars as a threat to a unified national identity." },
        ],
      },
    ],
  },

  {
    id: "unit-9-wxt",
    unit: 9,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Reaganomics",
        terms: [
          { term: "Reaganomics", definition: "Reagan's economic program of supply-side tax cuts, deregulation, and domestic spending cuts; reduced top income tax rate from 70% to 28% and tripled the national debt." },
          { term: "Supply-Side Economics", definition: "Theory that cutting taxes on the wealthy and businesses stimulates investment that 'trickles down' to workers; the economic foundation of Republican fiscal policy since Reagan." },
          { term: "Deregulation", definition: "Reagan's rollback of federal regulations on banking, airlines, telecommunications, and energy; unleashed economic dynamism but also enabled the S&L crisis and later Wall Street excesses." },
          { term: "Air Traffic Controllers Strike", definition: "1981 PATCO strike that Reagan broke by firing 11,000 striking workers; signaled that government would no longer support organized labor and accelerated union decline." },
        ],
      },
      {
        name: "Globalization and Trade",
        terms: [
          { term: "NAFTA", definition: "1994 free trade agreement eliminating tariffs among the U.S., Canada, and Mexico; boosted trade and lowered consumer prices but contributed to the loss of 700,000+ U.S. manufacturing jobs." },
          { term: "Deindustrialization", definition: "Decline of American manufacturing from the 1970s onward as factories moved to lower-wage countries; devastated the Rust Belt and fueled working-class anger that reshaped politics." },
          { term: "WTO", definition: "World Trade Organization (1995) enforcing global trade rules; integrating China into the world economy accelerated U.S. manufacturing losses and fed populist backlash." },
          { term: "Rust Belt", definition: "Former industrial heartland (Ohio, Michigan, Pennsylvania, Wisconsin) hollowed out by deindustrialization; its economic decline drove the political realignment of white working-class voters." },
        ],
      },
      {
        name: "The Digital Revolution",
        terms: [
          { term: "Internet", definition: "Commercialized in the early 1990s, it transformed every aspect of the economy — creating trillion-dollar companies, disrupting established industries, and reshaping how Americans work and live." },
          { term: "Dot-Com Bubble", definition: "Late 1990s stock market speculation in internet companies; the 2000 crash wiped out $5 trillion in market value but left behind a transformed digital infrastructure." },
          { term: "Gig Economy", definition: "Post-2008 shift toward contract and freelance work facilitated by apps like Uber and TaskRabbit; expanded flexibility while stripping workers of benefits, job security, and labor protections." },
          { term: "Automation", definition: "Replacement of human labor by machines and software; eliminated millions of manufacturing and clerical jobs — a deeper cause of working-class economic anxiety than trade alone." },
        ],
      },
      {
        name: "Financial Crisis and Recovery",
        terms: [
          { term: "Great Recession", definition: "2007–2009 financial crisis triggered by the collapse of subprime mortgage-backed securities; worst economic downturn since the Great Depression, wiping out $13 trillion in household wealth." },
          { term: "TARP", definition: "Troubled Asset Relief Program (2008); $700 billion bank bailout passed by Congress to prevent financial system collapse — bailed out Wall Street while millions lost homes, fueling public fury." },
          { term: "Dodd-Frank Act", definition: "2010 financial reform law creating the Consumer Financial Protection Bureau and new bank regulations; significantly strengthened oversight but critics said it didn't go far enough." },
          { term: "American Recovery and Reinvestment Act", definition: "Obama's 2009 $787 billion stimulus package combining tax cuts, infrastructure spending, and aid to states; economists credit it with ending the recession, though recovery was slow." },
        ],
      },
    ],
  },

  {
    id: "unit-9-geo",
    unit: 9,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Environmental Policy",
        terms: [
          { term: "EPA Under Attack", definition: "Reagan slashed the EPA's budget and staff, appointed anti-regulation officials, and rolled back clean air and water rules; set the template for Republican deregulatory environmental policy." },
          { term: "Kyoto Protocol", definition: "1997 international climate agreement setting binding emissions reduction targets; the U.S. Senate refused to ratify it and Bush withdrew in 2001, isolating America on climate." },
          { term: "Paris Climate Agreement", definition: "2015 accord committing nearly every nation to emissions reductions; Obama joined, Trump withdrew in 2017, Biden rejoined in 2021 — a symbol of partisan environmental whiplash." },
          { term: "Hurricane Katrina", definition: "2005 hurricane that devastated New Orleans; the government's disastrous response exposed racial and class inequalities in disaster preparedness and became a symbol of federal incompetence." },
        ],
      },
      {
        name: "Sunbelt and Urban Shift",
        terms: [
          { term: "Sunbelt", definition: "Southern and western states (Florida, Texas, Arizona, California) that boomed from the 1970s onward due to air conditioning, defense spending, and migration from the Rust Belt." },
          { term: "White Flight", definition: "Post-WWII and ongoing exodus of white middle-class families from cities to suburbs; deepened racial and economic segregation and drained cities of tax base and resources." },
          { term: "Gentrification", definition: "Reinvestment in urban neighborhoods that raised property values and displaced lower-income and minority residents; reshaped American cities while intensifying inequality." },
          { term: "Rust Belt Decline", definition: "Deindustrialization hollowed out Great Lakes and mid-Atlantic cities; Detroit, Cleveland, and Pittsburgh lost half their populations as factories closed and jobs moved South or abroad." },
        ],
      },
      {
        name: "Wars and Geography",
        terms: [
          { term: "Gulf War", definition: "1990–91 U.S.-led coalition expelled Iraq from Kuwait in 100 hours of ground combat; demonstrated American military dominance but left Saddam in power — unfinished business that led to 2003." },
          { term: "War in Afghanistan", definition: "Began October 2001 to destroy Al-Qaeda and oust the Taliban; became America's longest war (20 years), ending with the Taliban's return to power in August 2021." },
          { term: "Iraq War", definition: "2003 invasion justified by false WMD claims; toppled Saddam but created a power vacuum, insurgency, and sectarian civil war that destabilized the region and cost 4,500 American lives." },
          { term: "ISIS", definition: "Islamic State that emerged from the Iraq War's chaos; seized large swaths of Iraq and Syria in 2014, requiring a new U.S. military campaign and revealing the lasting consequences of the 2003 invasion." },
        ],
      },
      {
        name: "Border and Immigration Geography",
        terms: [
          { term: "Border Wall", definition: "Barrier along the U.S.-Mexico border expanded under multiple administrations; Trump made its construction a defining promise and symbol of nativist immigration politics." },
          { term: "Undocumented Immigration", definition: "An estimated 11 million undocumented people live in the U.S., most from Latin America; their presence and legal status has been the era's most divisive domestic political issue." },
          { term: "Family Separation Policy", definition: "Trump administration's 2018 'zero tolerance' policy separating migrant children from parents at the border; produced images of children in cages that sparked national and international outrage." },
          { term: "Sanctuary Cities", definition: "Cities that limit cooperation with federal immigration enforcement; became flashpoints in the immigration debate as localities asserted authority against federal policy." },
        ],
      },
    ],
  },

  {
    id: "unit-9-mig",
    unit: 9,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Latin American Immigration",
        terms: [
          { term: "Immigration Reform and Control Act", definition: "1986 law granting amnesty to 3 million undocumented immigrants — the largest legalization in U.S. history — while attempting to deter future illegal entry through employer sanctions." },
          { term: "Central American Refugees", definition: "Surge of asylum seekers from Guatemala, Honduras, and El Salvador fleeing gang violence and poverty; their arrival sparked the 2018 family separation crisis and ongoing political battles over asylum law." },
          { term: "DACA", definition: "Obama's 2012 executive program protecting roughly 800,000 'Dreamers' — undocumented immigrants brought as children — from deportation; repeatedly threatened by courts and Republican administrations." },
          { term: "Latinx Population Growth", definition: "Latinos became the largest U.S. minority group in 2003; by 2020 comprising 18.7% of the population — transforming politics, culture, and the economy across the country." },
        ],
      },
      {
        name: "Refugee and Asylum Policy",
        terms: [
          { term: "Vietnamese Refugees", definition: "Over 800,000 Vietnamese refugees resettled in the U.S. after 1975; established communities across the country and became a model of refugee integration despite initial hostility." },
          { term: "Cuban Immigration", definition: "Multiple waves from Cuba — the 1959 revolution elite, 1980 Mariel boatlift, and 1990s balseros; Cuban Americans concentrated in South Florida became a powerful conservative voting bloc." },
          { term: "Haitian Refugees", definition: "Waves of Haitian asylum seekers intercepted at sea and turned back; their differential treatment compared to Cuban refugees revealed racial double standards in U.S. asylum policy." },
          { term: "Syrian Refugee Crisis", definition: "Obama admitted 10,000 Syrian refugees in 2016; Trump suspended the refugee program after taking office, using national security fears to drastically limit refugee admissions." },
        ],
      },
      {
        name: "Internal Migration",
        terms: [
          { term: "Sunbelt Migration", definition: "Massive population shift from the Northeast and Midwest to the South and West from the 1970s onward; reshaped the Electoral College, giving Sun Belt states more political power." },
          { term: "Reverse Great Migration", definition: "From the 1970s onward, millions of Black Americans began moving back to the South attracted by economic opportunity and lower costs; reversed a 60-year northward migration pattern." },
          { term: "Suburban Sprawl", definition: "Post-WWII and continuing spread of low-density housing developments around cities; automobile-dependent, racially segregated, and environmentally costly — the dominant American settlement pattern." },
          { term: "Rural Depopulation", definition: "Continuing decline of small towns and rural areas as agriculture mechanized and young people left for cities; fueled economic despair and political resentment that reshaped partisan alignment." },
        ],
      },
      {
        name: "Undocumented Immigration",
        terms: [
          { term: "Operation Wetback (legacy)", definition: "The 1954 mass deportation's legacy informed later enforcement debates; its methods were cited as a model and condemned as a human rights violation in modern immigration policy fights." },
          { term: "Undocumented Immigration", definition: "Estimated 11 million undocumented people in the U.S.; their labor is essential to agriculture, construction, and service industries while their status remains a flashpoint for political conflict." },
          { term: "Border Patrol Expansion", definition: "Dramatic growth of the Border Patrol from 4,000 agents in 1994 to over 20,000 by 2020; militarization of the border channeled migrants into more dangerous desert crossing routes, increasing deaths." },
          { term: "Dreamers", definition: "Young undocumented immigrants brought to the U.S. as children who grew up American in every way except legal status; their fight for citizenship became the human face of the immigration debate." },
        ],
      },
    ],
  },

  {
    id: "unit-9-pce",
    unit: 9,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Civic Engagement" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Reagan and the Republican Revolution",
        terms: [
          { term: "Reagan Revolution", definition: "Reagan's 1980 victory ended 50 years of New Deal Democratic dominance; his coalition of economic conservatives, social traditionalists, and Cold Warriors reshaped both parties." },
          { term: "Contract with America", definition: "Newt Gingrich's 1994 platform committing Republicans to specific legislative goals; helped Republicans win the House for the first time in 40 years, launching the 'Republican Revolution.'" },
          { term: "Newt Gingrich", definition: "Speaker of the House whose confrontational style transformed congressional politics; his strategy of treating opponents as enemies rather than rivals poisoned bipartisan cooperation." },
          { term: "Gridlock", definition: "Political paralysis caused by divided government and increasing partisan polarization; became the defining feature of American governance from the 1990s onward." },
        ],
      },
      {
        name: "Clinton and the Third Way",
        terms: [
          { term: "Third Way", definition: "Clinton's centrist Democratic philosophy accepting market economics while preserving a social safety net; moved the Democratic Party right on crime, welfare, and trade." },
          { term: "Welfare Reform Act", definition: "1996 Clinton law replacing the federal welfare entitlement with block grants and work requirements; reduced welfare rolls but critics argued it abandoned the poorest Americans." },
          { term: "Clinton Impeachment", definition: "1998 House impeachment on perjury charges related to the Lewinsky affair; acquitted by the Senate — the second presidential impeachment, demonstrating how partisan impeachment had become." },
          { term: "Don't Ask Don't Tell", definition: "Clinton's 1993 compromise allowing gay people to serve in the military if they concealed their sexuality; repealed in 2011 under Obama as attitudes toward LGBTQ equality shifted." },
        ],
      },
      {
        name: "Bush, Obama, and Polarization",
        terms: [
          { term: "Bush v. Gore", definition: "2000 Supreme Court decision stopping the Florida recount and handing the presidency to George W. Bush; the most controversial judicial intervention in American electoral history." },
          { term: "Tea Party Movement", definition: "2009–10 conservative grassroots movement opposing Obama's stimulus and healthcare law; elected 40 House Republicans in 2010 and radicalized the GOP base against compromise." },
          { term: "Affordable Care Act", definition: "Obama's 2010 healthcare law extending coverage to 20 million Americans; the most significant domestic legislation since Medicare — and the most polarizing, passing without a single Republican vote." },
          { term: "Citizens United", definition: "2010 Supreme Court ruling that corporate and union political spending is protected speech; unleashed unlimited 'dark money' into American elections and deepened the influence of the wealthy." },
        ],
      },
      {
        name: "Trump Era and After",
        terms: [
          { term: "Trump's Election (2016)", definition: "Donald Trump defeated Hillary Clinton by winning Rust Belt states that had been Democratic for decades; his victory was driven by white working-class voters angry at globalization and demographic change." },
          { term: "January 6th Insurrection", definition: "January 6, 2021 assault on the U.S. Capitol by supporters of Trump attempting to stop certification of Biden's election; the most serious attack on American democratic institutions in modern history." },
          { term: "First Trump Impeachment", definition: "2019 House impeachment for withholding military aid to Ukraine to pressure it into investigating political rival Joe Biden; acquitted by the Senate along party lines." },
          { term: "Second Trump Impeachment", definition: "2021 House impeachment for inciting the January 6th insurrection; the Senate acquitted again — the first president impeached twice, marking the depth of constitutional crisis." },
        ],
      },
    ],
  },

  {
    id: "unit-9-wor",
    unit: 9,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "End of the Cold War",
        terms: [
          { term: "Reagan Doctrine", definition: "Policy of arming anti-communist rebels worldwide — in Afghanistan, Nicaragua, Angola, and elsewhere; contributed to Soviet overextension while enabling human rights abuses." },
          { term: "Iran-Contra Affair", definition: "1986 Reagan administration scandal: officials secretly sold weapons to Iran (violating an arms embargo) and funneled profits to Nicaraguan Contras (violating a congressional ban)." },
          { term: "Fall of the Berlin Wall", definition: "November 9, 1989; East Germany opened its borders and crowds demolished the wall — the iconic moment of communist Europe's collapse and the Cold War's end." },
          { term: "Soviet Collapse", definition: "December 1991 dissolution of the USSR into 15 independent republics; ended the Cold War and left the U.S. as the sole superpower — a 'unipolar moment' that lasted until the 2000s." },
        ],
      },
      {
        name: "Post-Cold War Interventions",
        terms: [
          { term: "Gulf War", definition: "1990–91 U.S.-led coalition expelled Iraq from Kuwait; demonstrated American military dominance and established the model of multilateral intervention with UN authorization." },
          { term: "Somalia Intervention", definition: "1993 humanitarian mission ended in the 'Black Hawk Down' firefight killing 18 U.S. soldiers; made Clinton and Congress reluctant to intervene in Rwanda's genocide the following year." },
          { term: "Rwandan Genocide", definition: "1994 slaughter of 800,000 Tutsis in 100 days while the U.S. and UN stood aside; Clinton later called his failure to act the greatest regret of his presidency." },
          { term: "NATO Expansion", definition: "Clinton's decision to admit former Warsaw Pact nations into NATO angered Russia and, critics argue, planted the seeds of the hostility that led to Russia's 2022 invasion of Ukraine." },
        ],
      },
      {
        name: "War on Terror",
        terms: [
          { term: "September 11, 2001", definition: "Al-Qaeda attacks killing 2,977 people transformed American foreign policy; justified military action in Afghanistan, Iraq, and beyond — and surveillance and detention policies that violated civil liberties." },
          { term: "War in Afghanistan", definition: "America's longest war (2001–2021); toppled the Taliban quickly but failed to build a stable Afghan state — ended with the Taliban's return to power two weeks after U.S. withdrawal." },
          { term: "Iraq War", definition: "2003 invasion based on false WMD intelligence; toppled Saddam Hussein but ignited a sectarian civil war, created ISIS, and cost 4,500 American and 200,000+ Iraqi lives." },
          { term: "Abu Ghraib", definition: "2003–04 U.S. military prisoner abuse scandal in Iraq; photos of soldiers torturing detainees shocked the world, damaged American credibility, and fueled anti-American sentiment globally." },
        ],
      },
      {
        name: "America in a Multipolar World",
        terms: [
          { term: "China's Rise", definition: "China's explosive economic growth made it the world's second-largest economy by 2010; its military buildup and assertiveness in the Pacific challenged U.S. primacy and defined 21st-century geopolitics." },
          { term: "Paris Climate Agreement", definition: "2015 global climate accord: Obama joined, Trump withdrew, Biden rejoined — the climate fight became a test of whether the U.S. could sustain long-term international commitments." },
          { term: "Obama's 'Pivot to Asia'", definition: "Strategic shift emphasizing the Pacific over the Middle East; deployed more forces to Asia, strengthened alliances with Japan and Australia, and confronted China's South China Sea expansion." },
          { term: "Russia and Ukraine", definition: "Russia's 2014 annexation of Crimea and 2022 full invasion challenged the post-Cold War order; Biden led NATO in supporting Ukraine with weapons and sanctions — the most serious Europe crisis since WWII." },
        ],
      },
    ],
  },

  {
    id: "unit-9-arc",
    unit: 9,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Culture Wars",
        terms: [
          { term: "Culture Wars", definition: "Ongoing conflict since the 1980s between traditionalist and progressive values over abortion, LGBTQ rights, school curriculum, immigration, and the meaning of American identity." },
          { term: "Roe v. Wade", definition: "1973 Supreme Court ruling establishing abortion rights; its 2022 overturning by Dobbs v. Jackson reignited the culture war and transformed American electoral politics." },
          { term: "Dobbs v. Jackson", definition: "2022 Supreme Court ruling overturning Roe v. Wade and returning abortion regulation to states; the most consequential rollback of an established constitutional right in American history." },
          { term: "Gay Marriage", definition: "Legalized nationwide by Obergefell v. Hodges (2015); the speed of the cultural shift — from criminal in many states to constitutional right in decades — reshaped how Americans think about civil rights." },
        ],
      },
      {
        name: "Media and Technology Culture",
        terms: [
          { term: "Cable News", definition: "CNN (1980), Fox News (1996), and MSNBC created 24-hour partisan news cycles; Fox's conservative audience built a parallel information ecosystem that deepened political polarization." },
          { term: "Social Media", definition: "Facebook, Twitter, and YouTube transformed political communication; democratized information sharing while enabling misinformation, foreign interference, and political radicalization." },
          { term: "Hip-Hop", definition: "Music genre originating in 1970s Black and Latino New York that became the world's most popular music; addressed police brutality, inequality, and Black identity decades before mainstream politics caught up." },
          { term: "Fox News Effect", definition: "Research showing Fox News moved its viewers significantly rightward; its combination of entertainment and partisan politics created a conservative media ecosystem that shaped Republican politics." },
        ],
      },
      {
        name: "Literature and Memory",
        terms: [
          { term: "Toni Morrison", definition: "Nobel Prize-winning novelist (Beloved, Song of Solomon) who centered Black experience and trauma in the American literary canon; her work forced reckoning with slavery's legacy." },
          { term: "1619 Project", definition: "New York Times Magazine (2019) reframing American history around slavery's founding role; sparked intense debate over how to teach history and became a culture war flashpoint." },
          { term: "Vietnam War Memory", definition: "The war's contested legacy — was it noble sacrifice or criminal folly? — shaped every subsequent American military intervention and divided the country for decades." },
          { term: "9/11 Memorial", definition: "Built on the World Trade Center site; its design choices (reflecting pools, names of victims) embodied debates about how to honor loss without glorifying violence or erasing complexity." },
        ],
      },
      {
        name: "Music and Counterculture",
        terms: [
          { term: "AIDS Crisis Cultural Response", definition: "The epidemic produced an explosion of activism, art, and advocacy — ACT UP's protests, the AIDS Memorial Quilt, and Angels in America forced AIDS out of silence into the center of American culture." },
          { term: "Grunge", definition: "Seattle-born rock movement (Nirvana, Pearl Jam) capturing early 1990s disillusionment; its rejection of 1980s excess expressed the cultural mood of a generation that came of age as the Reagan era ended." },
          { term: "Hamilton (Musical)", definition: "Lin-Manuel Miranda's 2015 hip-hop musical about the Founding Fathers performed by a non-white cast; sparked debate about who gets to claim American history and identity." },
          { term: "Black Lives Matter Cultural Impact", definition: "Beyond protests, BLM sparked the removal of Confederate monuments, diversification of corporate boards, and a wave of anti-racist publishing — the most sweeping cultural reckoning with race since the 1960s." },
        ],
      },
    ],
  },

  {
    id: "unit-9-soc",
    unit: 9,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Reagan Era to Present",
    subject: "APUSH",
    groups: [
      {
        name: "Inequality and Class",
        terms: [
          { term: "Reaganomics", definition: "Reagan's tax cuts and deregulation accelerated income inequality; the top 1%'s share of income doubled between 1980 and 2000 while real wages for workers stagnated." },
          { term: "Deindustrialization", definition: "Factory closures in the Rust Belt eliminated millions of good-paying union jobs; devastated working-class communities and drove the opioid crisis, suicide rates, and political anger." },
          { term: "Great Recession", definition: "The 2008 crash disproportionately devastated Black and Latino families who lost homes; recovery benefited the wealthy far more than working people, widening the wealth gap further." },
          { term: "Occupy Wall Street", definition: "2011 protest movement against economic inequality, coining 'We are the 99%'; briefly occupied Zuccotti Park and sparked national conversation about wealth concentration, though it achieved no specific policy changes." },
        ],
      },
      {
        name: "LGBTQ Rights",
        terms: [
          { term: "AIDS Crisis", definition: "1980s epidemic decimating the gay community; Reagan's silence for years while tens of thousands died radicalized LGBTQ activists and built the movement that achieved marriage equality decades later." },
          { term: "Don't Ask Don't Tell", definition: "Clinton's 1993 compromise barring openly gay service members; repealed in 2011 under Obama after years of military testimony that it harmed unit cohesion without improving readiness." },
          { term: "Obergefell v. Hodges", definition: "2015 ruling legalizing same-sex marriage in all 50 states; the culmination of a 40-year legal and social transformation from criminalization to constitutional protection." },
          { term: "Transgender Rights", definition: "The next front of LGBTQ civil rights; battles over military service, bathroom access, and healthcare have made transgender Americans the new focus of culture war politics." },
        ],
      },
      {
        name: "Race in Contemporary America",
        terms: [
          { term: "War on Drugs", definition: "Reagan's escalation of drug enforcement produced mass incarceration; Black Americans were arrested and imprisoned at 5–10 times the rate of whites for equivalent drug use." },
          { term: "Mass Incarceration", definition: "U.S. prison population quintupled from 1980 to 2008, reaching 2.3 million; driven by mandatory minimums, the war on drugs, and sentencing disparities that fell overwhelmingly on Black and Latino men." },
          { term: "Black Lives Matter", definition: "Emerged in 2013 to protest the killing of Black Americans by police; the 2020 George Floyd protests were the largest in American history, forcing a national reckoning with structural racism." },
          { term: "Systemic Racism", definition: "Concept that racial inequality is embedded in institutions and policies, not just individual prejudice; became the central framework for understanding racial disparities in the 2020 reckoning." },
        ],
      },
      {
        name: "Women in the Era",
        terms: [
          { term: "Glass Ceiling", definition: "Metaphor for invisible barriers preventing women from reaching top leadership positions; remains partially intact — women are still underrepresented in Congress, C-suites, and the judiciary." },
          { term: "#MeToo Movement", definition: "2017 viral campaign exposing sexual harassment's pervasiveness across industries; toppled dozens of powerful men but also sparked debates about due process and the limits of social media justice." },
          { term: "Women in the Military", definition: "All combat positions opened to women in 2015; by 2020 women made up 17% of the military — a transformation that would have seemed impossible to previous generations." },
          { term: "Roe v. Wade Overturned", definition: "Dobbs v. Jackson (2022) eliminated the constitutional right to abortion; immediately triggered abortion bans in 13 states and energized women as a political force in subsequent elections." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-1-identity",
    unit: 1, puzzle: 1,
    theme: { code: "IDENTITY", name: "Identity" },
    title: "Being Human",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Theories of Personal Identity",
        terms: [
          { term: "Memory Theory", definition: "Locke's view that personal identity is constituted by psychological continuity — you are the same person as your past self if you have continuous memories connecting you." },
          { term: "Bundle Theory", definition: "Hume's claim that the self is nothing but a bundle of perceptions; there is no underlying unified substance beyond our experiences." },
          { term: "Biological Continuity", definition: "The view that personal identity persists through the continuous existence of the same living organism — your body, not your mind, makes you who you are over time." },
          { term: "Narrative Identity", definition: "Ricoeur's idea that selfhood is constructed through the stories we tell about our lives; we are the authors of our own ongoing life narratives." },
        ],
      },
      {
        name: "Philosophers of Personal Identity",
        terms: [
          { term: "Locke", definition: "17th-century empiricist who argued personal identity rests on psychological continuity, particularly memory — a person is whoever remembers doing past actions." },
          { term: "Hume", definition: "Scottish empiricist who denied a substantial self; in the Treatise he describes the self as merely a 'bundle of perceptions' with no underlying unity." },
          { term: "Parfit", definition: "20th-century philosopher who argued personal identity is not what matters; psychological continuity without uniqueness may be sufficient for what we care about." },
          { term: "Ricoeur", definition: "French philosopher who developed narrative identity — the idea that the self is constituted through the temporal structure of stories we tell about ourselves." },
        ],
      },
      {
        name: "Identity Thought Experiments",
        terms: [
          { term: "Ship of Theseus", definition: "Ancient puzzle asking whether a ship that has every plank replaced remains the same ship; raises the question of what makes anything persist through change." },
          { term: "Fission Case", definition: "Thought experiment in which one person's brain is divided between two bodies; challenges theories requiring personal identity to be one-to-one." },
          { term: "Brain Transplant", definition: "Thought experiment asking whether you follow your brain or your body if the two are separated; tests whether mind or body is the ground of personal identity." },
          { term: "Teleporter Paradox", definition: "Parfit's thought experiment about being disassembled and reassembled elsewhere; asks whether the resulting person is genuinely you or merely a perfect copy." },
        ],
      },
      {
        name: "Identity Concepts",
        terms: [
          { term: "Numerical Identity", definition: "Being exactly the same individual entity — not merely similar but literally one and the same thing across time or contexts." },
          { term: "Qualitative Identity", definition: "Sharing all the same properties or characteristics — two things can be qualitatively identical without being numerically identical." },
          { term: "Psychological Continuity", definition: "Overlapping chains of memory, personality, intentions, and beliefs that connect a person's past and present selves across time." },
          { term: "Persistence Conditions", definition: "The criteria that must be met for an entity to continue to exist through time as the same thing — the core question in the metaphysics of identity." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-1-other",
    unit: 1, puzzle: 2,
    theme: { code: "OTHER", name: "The Self and the Other" },
    title: "Being Human",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Theories of Other Minds",
        terms: [
          { term: "Argument by Analogy", definition: "Inference that others have minds because they behave as we do, and we know our own behavior is caused by mental states — J.S. Mill's classic solution to the problem of other minds." },
          { term: "Behaviorism", definition: "The view that mental states just are behavioral dispositions; if someone behaves as if in pain, they are in pain — which dissolves the problem of other minds." },
          { term: "Theory Theory", definition: "The view that we understand others by applying a folk psychological theory about how mental states cause behavior — we are all intuitive psychologists." },
          { term: "Simulation Theory", definition: "The view that we understand others by mentally simulating their perspective — using our own mind as a model for theirs rather than applying explicit theory." },
        ],
      },
      {
        name: "Key Thinkers on Self and Other",
        terms: [
          { term: "Levinas", definition: "French-Jewish philosopher who argued ethics begins with the encounter with the Other's face — a call to responsibility that precedes all philosophy and cannot be reduced to knowledge." },
          { term: "Buber", definition: "Jewish philosopher who distinguished I-Thou relations (genuine mutual encounter) from I-It relations (treating others as objects or means)." },
          { term: "Hegel", definition: "German idealist who argued self-consciousness requires recognition from another — the self only becomes aware of itself through the Other's gaze and acknowledgment." },
          { term: "Sartre", definition: "French existentialist who argued 'hell is other people' — others threaten our freedom by objectifying us through the Look, turning subjects into objects." },
        ],
      },
      {
        name: "Concepts of Intersubjectivity",
        terms: [
          { term: "Intersubjectivity", definition: "The shared or mutual dimension of experience between subjects; the philosophical basis for communication, empathy, and the possibility of a shared world." },
          { term: "Alterity", definition: "The quality of being radically 'other'; Levinas uses it to describe the Other's irreducible difference that resists being fully grasped or assimilated." },
          { term: "The Look", definition: "Sartre's concept that being seen by another transforms us from subject to object — the Other's gaze threatens our freedom and self-definition." },
          { term: "Recognition", definition: "Hegel's concept that self-consciousness and freedom develop through mutual acknowledgment; without recognition from others, genuine selfhood is impossible." },
        ],
      },
      {
        name: "Modes of Relation",
        terms: [
          { term: "I-Thou", definition: "Buber's term for a genuine, direct, mutual encounter between two persons in which both are treated as ends — the fullest form of human relation." },
          { term: "I-It", definition: "Buber's term for a relation in which one treats another as an object, tool, or means — the dominant mode of modern technological and commercial society." },
          { term: "Master-Slave Dialectic", definition: "Hegel's account of two self-consciousnesses struggling for recognition; the master dominates but becomes dependent, while the slave finds freedom through labor." },
          { term: "Empathy", definition: "The capacity to understand or feel what another is experiencing — a central concept in phenomenology, ethics of care, and theories of moral motivation." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-1-consciousness",
    unit: 1, puzzle: 3,
    theme: { code: "CONSCIOUSNESS", name: "Consciousness" },
    title: "Being Human",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Theories of Mind",
        terms: [
          { term: "Substance Dualism", definition: "Descartes' view that mind and body are two fundamentally distinct substances — thinking substance (res cogitans) and extended substance (res extensa)." },
          { term: "Physicalism", definition: "The view that consciousness is entirely physical — all mental states are brain states; nothing exists beyond the material world." },
          { term: "Functionalism", definition: "The view that mental states are defined by their functional roles in a causal system — what matters is the causal role, not the physical substrate." },
          { term: "Property Dualism", definition: "The view that there is only one physical substance but it has irreducible phenomenal properties — mental properties are real but not separate substances." },
        ],
      },
      {
        name: "Key Thinkers on Consciousness",
        terms: [
          { term: "Descartes", definition: "17th-century rationalist whose cogito established mind as the one certainty; his substance dualism created the mind-body problem that still drives philosophy of mind." },
          { term: "Chalmers", definition: "Contemporary philosopher who coined 'the hard problem of consciousness' — the challenge of explaining why physical processes give rise to subjective experience at all." },
          { term: "Nagel", definition: "Author of 'What Is It Like to Be a Bat?' arguing that subjective experience has an irreducibly first-person character that objective science cannot capture." },
          { term: "Dennett", definition: "Philosopher who defends materialism about consciousness; argues phenomenal experience is a construct of the brain and there are no qualia in the problematic sense." },
        ],
      },
      {
        name: "Key Concepts",
        terms: [
          { term: "Qualia", definition: "The subjective, phenomenal qualities of experience — the redness of red, the painfulness of pain; what it is like to be in a particular mental state." },
          { term: "Hard Problem", definition: "Chalmers' term for the challenge of explaining why and how physical brain processes give rise to subjective experience — why there is something it is like to be conscious." },
          { term: "Intentionality", definition: "The property of mental states of being about or directed toward something — the mind's capacity to represent objects and states of affairs in the world." },
          { term: "Phenomenal Consciousness", definition: "The subjective, experiential aspect of consciousness — there being something it is like to be in a given mental state, as opposed to merely processing information." },
        ],
      },
      {
        name: "Consciousness Thought Experiments",
        terms: [
          { term: "Mary's Room", definition: "Jackson's thought experiment: a scientist knows all physical facts about color but has never seen red — does she learn something new on first seeing it? Argues for qualia." },
          { term: "Chinese Room", definition: "Searle's argument that a computer following rules to manipulate symbols doesn't understand language — syntax alone is not sufficient for genuine semantics or consciousness." },
          { term: "Philosophical Zombie", definition: "Chalmers' thought experiment: a being physically identical to a human but with no inner experience — used to argue consciousness cannot be reduced to physical processes." },
          { term: "What Is It Like to Be a Bat?", definition: "Nagel's thought experiment arguing that the subjective character of bat echolocation cannot be captured by any objective physical description — consciousness resists reductionism." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-1-personhood",
    unit: 1, puzzle: 4,
    theme: { code: "PERSONHOOD", name: "Personhood" },
    title: "Being Human",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Criteria of Personhood",
        terms: [
          { term: "Rationality", definition: "Kant's criterion — a person is a being capable of rational thought and autonomous moral reasoning; the basis of human dignity and the categorical imperative." },
          { term: "Self-awareness", definition: "The capacity to recognize oneself as a distinct individual persisting through time; often proposed as necessary for personhood and full moral status." },
          { term: "Sentience", definition: "The capacity to have subjective experiences, especially to feel pleasure and pain; Singer's key criterion for moral considerability — not species membership." },
          { term: "Autonomy", definition: "The capacity to govern oneself according to one's own rational principles — central to Kantian ethics and liberal theories of rights and dignity." },
        ],
      },
      {
        name: "Key Thinkers on Personhood",
        terms: [
          { term: "Kant", definition: "Argued persons have dignity because they are rational, autonomous ends in themselves — the Categorical Imperative demands we never treat persons merely as means." },
          { term: "Singer", definition: "Utilitarian philosopher who argues sentience, not species membership, is the criterion for moral consideration — extending moral status to animals, challenging speciesism." },
          { term: "Warren", definition: "Philosopher who argued full personhood requires consciousness, reasoning, self-motivated activity, communication, and self-awareness — not merely being biologically human." },
          { term: "Tooley", definition: "Argued a being has a serious right to life only if it desires its own continued existence — used to challenge absolute prohibitions on abortion and infanticide." },
        ],
      },
      {
        name: "Moral Status Concepts",
        terms: [
          { term: "Moral Considerability", definition: "The property of being an entity whose interests must be taken into account in moral reasoning — the threshold for membership in the moral community." },
          { term: "Speciesism", definition: "Singer's term for the unjustified privileging of members of one's own species — analogous to racism or sexism in treating species membership as morally decisive." },
          { term: "Marginal Cases", definition: "Argument that if we grant full moral status to humans who lack rationality (infants, severely cognitively disabled), consistency requires extending it to similar animals." },
          { term: "Moral Patients", definition: "Beings that can be wronged and whose interests must be considered, but who cannot themselves be held morally responsible — may include animals and future persons." },
        ],
      },
      {
        name: "Personhood Debates",
        terms: [
          { term: "Abortion", definition: "Debate about whether a fetus has personhood and moral status; hinges on when rational, sentient, or self-aware capacities begin and what grounds the right to life." },
          { term: "Animal Rights", definition: "Debate about whether non-human animals qualify as persons or moral patients deserving rights — challenged by speciesism arguments and expanded notions of moral consideration." },
          { term: "AI Personhood", definition: "Question of whether sufficiently intelligent artificial systems could qualify as persons with moral status and legal rights — tests functionalist criteria of personhood." },
          { term: "End-of-Life Ethics", definition: "Debates about personhood in cases of persistent vegetative state or severe dementia — when, if ever, does personhood cease and what moral obligations follow?" },
        ],
      },
    ],
  },

  {
    id: "phil-unit-1-freedom",
    unit: 1, puzzle: 5,
    theme: { code: "FREEDOM", name: "Freedom" },
    title: "Being Human",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Positions on Free Will",
        terms: [
          { term: "Hard Determinism", definition: "The view that all events including human choices are causally determined by prior causes, and therefore free will and moral responsibility are illusions." },
          { term: "Libertarianism (Free Will)", definition: "The view that humans possess genuine free will that is not fully determined by prior causes — often associated with agent causation or quantum indeterminism." },
          { term: "Compatibilism", definition: "The view that free will and determinism are compatible — freedom means acting according to one's own desires without coercion, not acting without causes." },
          { term: "Hard Incompatibilism", definition: "The view that free will is incompatible with both determinism and indeterminism — genuine free will is metaphysically impossible on any account." },
        ],
      },
      {
        name: "Key Thinkers on Freedom",
        terms: [
          { term: "Hume", definition: "Argued for compatibilism — freedom is acting from one's own character and desires without external constraint; causation and freedom are not in conflict." },
          { term: "Kant", definition: "Distinguished the phenomenal (causally determined) self from the noumenal self; argued true freedom is autonomy — rational self-legislation independent of inclination." },
          { term: "Sartre", definition: "Existentialist who argued humans are 'condemned to be free' — we are radically free and cannot escape responsibility for our choices; bad faith denies this freedom." },
          { term: "Frankfurt", definition: "Contemporary philosopher who distinguished first-order from second-order desires — freedom is having the will you want to have; his cases challenge the role of alternative possibilities." },
        ],
      },
      {
        name: "Freedom Concepts",
        terms: [
          { term: "Determinism", definition: "The thesis that every event, including every human choice, is the necessary consequence of prior causes governed by natural laws — leaves no room for uncaused action." },
          { term: "Moral Responsibility", definition: "The condition of being appropriately subject to blame or praise for one's actions — presupposes some degree of freedom or control over what one does." },
          { term: "Bad Faith", definition: "Sartre's concept of self-deception — denying one's own freedom by pretending one has no choice, as a flight from the anxiety and burden of radical responsibility." },
          { term: "Causal Necessity", definition: "The idea that causes necessitate their effects under natural law; if all human actions are causally necessitated, the central question is whether freedom is still possible." },
        ],
      },
      {
        name: "Types of Freedom",
        terms: [
          { term: "Negative Freedom", definition: "Isaiah Berlin's conception: freedom from external interference or coercion — the absence of obstacles imposed by other persons or institutions." },
          { term: "Positive Freedom", definition: "Berlin's contrasting conception: freedom to act and realize one's potential — requires capacities and resources, not merely absence of external constraint." },
          { term: "Political Freedom", definition: "Freedom within civil society — rights of speech, assembly, belief, and participation in governance; the central concern of liberal political philosophy." },
          { term: "Existential Freedom", definition: "Sartre's radical conception: consciousness is inherently free — we are always free to interpret and respond to our situation, however constrained by circumstances." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-1-humannature",
    unit: 1, puzzle: 6,
    theme: { code: "HUMANNATURE", name: "Human Nature" },
    title: "Being Human",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Conceptions of Human Nature",
        terms: [
          { term: "Blank Slate", definition: "Locke's tabula rasa — the mind at birth is empty, shaped entirely by experience; there are no innate ideas, and human nature is formed by environment." },
          { term: "Noble Savage", definition: "Rousseau's idea that humans in a state of nature are naturally good, peaceful, and free; it is civilization and private property that corrupt us." },
          { term: "Rational Animal", definition: "Aristotle's definition of the human being — our nature is to exercise reason and live in political community; we flourish by actualizing this rational capacity." },
          { term: "Homo Economicus", definition: "The model of humans as rational self-interested maximizers; influential in economics and social theory — criticized as a reductive distortion of human nature." },
        ],
      },
      {
        name: "Key Thinkers on Human Nature",
        terms: [
          { term: "Hobbes", definition: "Argued humans are naturally competitive, fearful, and selfish; without the state, life is 'solitary, poor, nasty, brutish, and short.'" },
          { term: "Rousseau", definition: "Argued natural humans are compassionate and free; society, inequality, and private property corrupt an originally good nature." },
          { term: "Locke", definition: "Argued humans are naturally free, rational, and equal; the state of nature is relatively peaceful, grounding natural rights to life, liberty, and property." },
          { term: "Aristotle", definition: "Argued humans are by nature social and political animals who can only flourish in community; virtue is the actualization of our rational nature." },
        ],
      },
      {
        name: "Debates About Human Nature",
        terms: [
          { term: "Nature vs Nurture", definition: "Debate over whether human traits and behaviors are primarily determined by genetics (nature) or by environment and experience (nurture) — most contemporary thinkers see interaction." },
          { term: "Essentialism", definition: "The view that humans have a fixed essential nature — a set of properties defining what it is to be human — often criticized by existentialists and feminists." },
          { term: "Social Constructivism", definition: "The view that human nature, identity, and behavior are largely constructed by social, cultural, and historical forces rather than fixed by biology." },
          { term: "Evolutionary Psychology", definition: "The field arguing that human psychology reflects adaptations to ancestral environments — human nature is the product of natural selection, not blank slate or divine design." },
        ],
      },
      {
        name: "Political Implications of Human Nature",
        terms: [
          { term: "State of Nature", definition: "Hobbes, Locke, and Rousseau's thought experiment describing life before civil society — each theorist's account of natural humans grounds a different political philosophy." },
          { term: "Social Contract", definition: "The hypothetical agreement by which individuals consent to give up some freedoms in exchange for the protections and benefits of organized political society." },
          { term: "Natural Rights", definition: "Rights held by all humans by nature, not created by governments — Locke's life, liberty, and property; the foundation of liberal political theory." },
          { term: "Civil Society", definition: "The organized social and political order that emerges from or replaces the state of nature — the framework within which human nature is expressed and constrained." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-2-1",
    unit: 2, puzzle: 1,
    title: "Epistemology",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Theories of Knowledge",
        terms: [
          { term: "Empiricism", definition: "The view that all knowledge originates in sensory experience; associated with Locke, Berkeley, and Hume — the tradition that shaped British philosophy." },
          { term: "Rationalism", definition: "The view that reason, independent of sensory experience, is the primary source of knowledge; associated with Descartes, Spinoza, and Leibniz." },
          { term: "Pragmatism", definition: "The view that the meaning and truth of ideas lies in their practical consequences; associated with Peirce, James, and Dewey — truth is what works." },
          { term: "Kant's Synthesis", definition: "Kant's claim that knowledge is a joint product of sensory experience and a priori mental categories — neither pure reason nor pure experience alone is sufficient." },
        ],
      },
      {
        name: "Key Epistemologists",
        terms: [
          { term: "Plato", definition: "Argued genuine knowledge (episteme) is of eternal, unchanging Forms — not of the changing sensory world; knowledge requires reason, not mere perception." },
          { term: "Descartes", definition: "Used systematic doubt to find indubitable foundations for knowledge; his cogito ('I think, therefore I am') became the starting point for modern epistemology." },
          { term: "Hume", definition: "Argued all knowledge comes from impressions and ideas; distinguished matters of fact (contingent) from relations of ideas (necessary) — Hume's Fork." },
          { term: "Kant", definition: "Synthesized rationalism and empiricism; argued the mind actively structures experience through a priori categories of space, time, causality, and substance." },
        ],
      },
      {
        name: "Types of Knowledge",
        terms: [
          { term: "A Priori", definition: "Knowledge that can be known independently of experience — necessary and universal; includes mathematical truths and logical necessities." },
          { term: "A Posteriori", definition: "Knowledge that depends on sensory experience for its justification — contingent truths about the world; e.g., empirical facts about nature." },
          { term: "Propositional Knowledge", definition: "Knowledge-that — knowing facts expressed as propositions (e.g., knowing that Paris is in France); the main focus of traditional epistemology." },
          { term: "Procedural Knowledge", definition: "Knowledge-how — knowing how to perform a skill (e.g., riding a bike); not fully reducible to propositional knowledge and raises questions about tacit knowledge." },
        ],
      },
      {
        name: "Theories of Justification",
        terms: [
          { term: "Foundationalism", definition: "The view that justified beliefs rest on a foundation of basic beliefs that are self-justifying or non-inferentially justified — stopping the regress of justification." },
          { term: "Coherentism", definition: "The view that beliefs are justified by their coherence with each other within a web of belief — no beliefs are basic; justification is holistic." },
          { term: "Reliabilism", definition: "The view that a belief is justified if it is produced by a reliable cognitive process — one that tends to produce true beliefs in normal conditions." },
          { term: "Internalism", definition: "The view that justifying factors must be accessible to the believer's own reflection — justification depends on what is internal to the believer's mind." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-3-1",
    unit: 3, puzzle: 1,
    title: "Ethics",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Consequentialist Theories",
        terms: [
          { term: "Utilitarianism", definition: "The view that right actions are those producing the greatest happiness for the greatest number; associated with Bentham (act) and Mill (refined with higher/lower pleasures)." },
          { term: "Hedonism", definition: "The view that pleasure is the only intrinsic good and pain the only intrinsic evil — the value theory underlying classical Benthamite utilitarianism." },
          { term: "Preference Utilitarianism", definition: "Singer's version of utilitarianism: the right action maximizes satisfaction of preferences, not just pleasure — importantly, extends consideration to non-human animals." },
          { term: "Rule Consequentialism", definition: "The view that we should follow rules whose general acceptance would produce the best consequences — attempts to avoid the counterintuitive results of act utilitarianism." },
        ],
      },
      {
        name: "Deontological Theories",
        terms: [
          { term: "Kantian Ethics", definition: "Ethics based on universal rational principles — the Categorical Imperative demands we act only on maxims we could will to be universal laws for all rational beings." },
          { term: "Natural Law", definition: "The view that moral norms are derived from human nature and reason; associated with Aquinas — what is morally right accords with our natural ends and rational purpose." },
          { term: "Divine Command Theory", definition: "The view that moral obligations are determined by God's commands — something is right because God commands it, wrong because God forbids it." },
          { term: "Rights-Based Ethics", definition: "The view that certain actions are intrinsically right or wrong because they respect or violate fundamental rights — independent of consequences." },
        ],
      },
      {
        name: "Virtue Ethics",
        terms: [
          { term: "Aristotelian Virtue Ethics", definition: "Ethical theory centered on character — the virtuous person habitually chooses the mean between extremes and acts from virtue for its own sake, aiming at flourishing." },
          { term: "Eudaimonia", definition: "Aristotle's term for human flourishing — not mere pleasure, but the active exercise of the soul in accordance with virtue over a complete and well-lived life." },
          { term: "The Golden Mean", definition: "Aristotle's principle that virtues are means between extremes of excess and deficiency — courage is the mean between cowardice and recklessness." },
          { term: "Care Ethics", definition: "Feminist ethical theory (Gilligan, Noddings) emphasizing relationships, context, and caring responsibility over abstract universal rules — morality is personal, not impersonal." },
        ],
      },
      {
        name: "Key Ethicists",
        terms: [
          { term: "Kant", definition: "Prussian philosopher who grounded morality in reason — the Categorical Imperative; persons must always be treated as ends in themselves, never merely as means." },
          { term: "Mill", definition: "Utilitarian philosopher who argued for the greatest happiness principle; distinguished higher (intellectual) from lower (bodily) pleasures as qualitatively different." },
          { term: "Aristotle", definition: "Greek philosopher who founded virtue ethics; argued morality is about developing excellent character that enables a flourishing life within a political community." },
          { term: "Hume", definition: "Argued morality is based on sentiment, not reason — reason alone cannot motivate action; moral judgments express feelings of approval or disapproval, not discovered facts." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-4-1",
    unit: 4, puzzle: 1,
    title: "Philosophy of Religion",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Classical Arguments for God",
        terms: [
          { term: "Ontological Argument", definition: "A priori argument claiming God's existence follows from the very concept of God as the greatest conceivable being — existence is a necessary perfection." },
          { term: "Cosmological Argument", definition: "A posteriori argument that the existence of the universe requires a first cause or necessary being — God as the ultimate explanation for why anything exists." },
          { term: "Teleological Argument", definition: "Argument from design — the order, complexity, and apparent purpose of the natural world suggest an intelligent designer; classically formulated by Paley." },
          { term: "Moral Argument", definition: "Argument that the existence of objective moral facts requires God as their source and guarantor — without God, morality would be merely subjective or groundless." },
        ],
      },
      {
        name: "Key Thinkers on Arguments for God",
        terms: [
          { term: "Anselm", definition: "11th-century philosopher who formulated the classical ontological argument — God is 'that than which nothing greater can be conceived,' and such a being must exist." },
          { term: "Aquinas", definition: "Medieval theologian who formulated the Five Ways — cosmological arguments from motion, causation, contingency, degrees of perfection, and teleology." },
          { term: "Paley", definition: "18th-century theologian who revived the teleological argument with the watchmaker analogy — a watch implies a watchmaker; so the universe's complexity implies a designer." },
          { term: "Plantinga", definition: "Contemporary philosopher who developed modal versions of the ontological argument and reformed epistemology — belief in God can be properly basic without argument." },
        ],
      },
      {
        name: "Forms of the Cosmological Argument",
        terms: [
          { term: "Kalam Argument", definition: "Everything that begins to exist has a cause; the universe began to exist; therefore the universe has a cause — associated with al-Ghazali and William Lane Craig." },
          { term: "First Cause Argument", definition: "Aquinas' argument that the chain of efficient causes cannot regress infinitely — there must be an uncaused first cause, which we call God." },
          { term: "Contingency Argument", definition: "Leibniz's argument that contingent things (which might not have existed) require explanation in something necessary — God as the necessary being grounding all existence." },
          { term: "Argument from Motion", definition: "Aquinas' first way: everything in motion is moved by something else; there cannot be an infinite regress of movers; so there must be an Unmoved Mover — God." },
        ],
      },
      {
        name: "Religious Epistemology",
        terms: [
          { term: "Natural Theology", definition: "Attempting to establish truths about God through reason and observation alone, without appeal to scripture or revelation — Aquinas and Paley as exemplars." },
          { term: "Revealed Theology", definition: "Knowledge of God derived from sacred scriptures and religious tradition — revelation as a source of knowledge distinct from and potentially complementary to reason." },
          { term: "Reformed Epistemology", definition: "Plantinga's view that belief in God can be 'properly basic' — rational without requiring argument or evidence, analogous to belief in other minds or the past." },
          { term: "Faith and Reason", definition: "The question of the relationship between religious belief and rational inquiry — are they compatible, complementary, in tension, or necessarily in conflict?" },
        ],
      },
    ],
  },

  {
    id: "phil-unit-5-1",
    unit: 5, puzzle: 1,
    title: "Philosophy of Science",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Methods of Science",
        terms: [
          { term: "Induction", definition: "Reasoning from particular observations to general conclusions — the basis of empirical science; challenged by Hume's problem of induction." },
          { term: "Hypothetico-Deductive Method", definition: "Scientific method of generating testable predictions from hypotheses and checking them against observations — the dominant account of how science tests theories." },
          { term: "Abduction", definition: "Inference to the best explanation — reasoning to the hypothesis that would best explain the observed evidence; the basis of much scientific theorizing." },
          { term: "Falsifiability", definition: "Popper's criterion: a theory is scientific if there is some possible observation that would count as evidence against it — theories that explain everything explain nothing." },
        ],
      },
      {
        name: "Key Philosophers of Science",
        terms: [
          { term: "Popper", definition: "Argued science is distinguished from pseudoscience by falsifiability — good theories make bold, testable predictions that could in principle be proved wrong." },
          { term: "Kuhn", definition: "Argued science progresses through paradigm shifts — periods of normal science (puzzle-solving) are punctuated by crises that overthrow and replace dominant frameworks." },
          { term: "Lakatos", definition: "Proposed research programs as the proper unit of scientific appraisal — programs have a hard core protected by a belt of auxiliary hypotheses that can be adjusted." },
          { term: "Feyerabend", definition: "Radical philosopher who argued there is no single scientific method — 'anything goes'; science is no more inherently rational than other traditions of knowledge." },
        ],
      },
      {
        name: "Core Concepts",
        terms: [
          { term: "Paradigm", definition: "Kuhn's term for the framework of assumptions, methods, and standards shared by a scientific community — the background against which normal science operates." },
          { term: "Demarcation Problem", definition: "The problem of distinguishing science from pseudoscience or non-science — what criteria separate genuinely scientific claims from non-scientific ones?" },
          { term: "Underdetermination", definition: "The thesis that evidence always underdetermines theory — more than one theory is compatible with any given body of evidence; theory choice involves judgment beyond evidence." },
          { term: "Theory-ladenness", definition: "Hanson's argument that all observation is interpreted through theoretical assumptions — there is no pure, theory-neutral observation language in science." },
        ],
      },
      {
        name: "Problems of Induction and Evidence",
        terms: [
          { term: "Problem of Induction", definition: "Hume's challenge: past regularities give us no logical guarantee of future regularities — inductive reasoning cannot be rationally justified by induction without circularity." },
          { term: "Hume's Fork", definition: "Distinction between relations of ideas (a priori, necessary) and matters of fact (a posteriori, contingent) — any claim is one or the other; nothing else is genuinely meaningful." },
          { term: "Grue Paradox", definition: "Goodman's puzzle: emeralds are 'grue' (green before time T, blue after) — why is 'green' a better inductive projection than 'grue'? Challenges the logic of induction." },
          { term: "Pessimistic Meta-Induction", definition: "The argument that because past successful scientific theories were later shown to be false, we should expect current theories to be false too — undermines scientific realism." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-6-1",
    unit: 6, puzzle: 1,
    title: "Political Philosophy",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Theories of Political Authority",
        terms: [
          { term: "Social Contract Theory", definition: "The view that political authority is legitimate only if it rests on an agreement (actual or hypothetical) among those subject to it — Hobbes, Locke, Rousseau, Rawls." },
          { term: "Divine Right of Kings", definition: "The doctrine that monarchs derive their authority directly from God and are not accountable to any earthly power — rejected by social contract theorists." },
          { term: "Anarchism", definition: "The political philosophy rejecting all coercive authority; advocates voluntary cooperation and self-organization without state or hierarchy." },
          { term: "Republicanism", definition: "The view that legitimate government requires freedom from domination (not merely non-interference), rule of law, and civic participation." },
        ],
      },
      {
        name: "Key Political Philosophers",
        terms: [
          { term: "Hobbes", definition: "Argued that without a powerful sovereign, life is 'solitary, poor, nasty, brutish, and short' — rational individuals contract to create an absolute authority to escape the state of war." },
          { term: "Locke", definition: "Argued government derives authority from the consent of the governed; natural rights to life, liberty, and property set strict limits on legitimate government power." },
          { term: "Rousseau", definition: "Argued legitimate government expresses the General Will — the common good; popular sovereignty is the only legitimate basis for political authority." },
          { term: "Rawls", definition: "Devised the veil of ignorance to derive just principles; argued for equal basic liberties and the difference principle — inequalities are just only if they benefit the worst-off." },
        ],
      },
      {
        name: "Concepts of Justice",
        terms: [
          { term: "Distributive Justice", definition: "Concerns the fair distribution of goods, opportunities, and burdens across society — includes debates between equality, merit, need, and entitlement as principles." },
          { term: "Procedural Justice", definition: "The view that justice consists in fair procedures rather than particular outcomes — a just process produces just results whatever they are." },
          { term: "Retributive Justice", definition: "The view that wrongdoers deserve punishment proportional to their crimes — justice requires that wrongdoing be met with appropriate sanction." },
          { term: "Restorative Justice", definition: "The view that justice should aim to repair harm, restore relationships, and reintegrate offenders into the community — not simply punish." },
        ],
      },
      {
        name: "Social Contract Concepts",
        terms: [
          { term: "State of Nature", definition: "The hypothetical condition before civil society — Hobbes sees it as a war of all against all; Locke as relatively peaceful; Rousseau as a happy primitive condition." },
          { term: "General Will", definition: "Rousseau's concept of the common interest of the community as a whole — distinct from the 'will of all' (the sum of individual self-interests)." },
          { term: "Consent of the Governed", definition: "Locke's principle that legitimate authority requires the agreement of those subject to it — the basis of democratic legitimacy and the right to revolution." },
          { term: "Natural Rights", definition: "Rights held by all persons by nature, not granted by governments — Locke's life, liberty, and property; inalienable and the basis of limits on state power." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-7-1",
    unit: 7, puzzle: 1,
    title: "Social Philosophy",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Theories of Society",
        terms: [
          { term: "Marxism", definition: "Theory that society is structured by class conflict driven by economic relations; the ruling class ideology maintains dominance — workers must overthrow capitalism." },
          { term: "Functionalism", definition: "Sociological theory viewing society as a system of interrelated parts each serving a function to maintain social stability — associated with Durkheim and Parsons." },
          { term: "Conflict Theory", definition: "Sociological perspective focusing on competition and inequality as fundamental features of social life — groups compete for power, resources, and status." },
          { term: "Social Constructivism", definition: "The view that social reality — including gender, race, and institutions — is constructed through shared social practices and beliefs, not given by nature." },
        ],
      },
      {
        name: "Key Thinkers in Social Philosophy",
        terms: [
          { term: "Marx", definition: "Argued that the economic base (relations of production) determines the ideological superstructure; history is the story of class struggle; capitalism must be transcended." },
          { term: "Foucault", definition: "Analyzed how power operates through knowledge, discourse, and institutions — power is diffuse and productive, not just repressive; disciplines produce 'docile bodies.'" },
          { term: "Bourdieu", definition: "Developed concepts of habitus, field, and capital to analyze how social structures are reproduced through everyday practice and the pursuit of cultural distinction." },
          { term: "Butler", definition: "Feminist philosopher who argued gender is not a natural category but a performance — repeatedly enacted through stylized acts within socially enforced norms." },
        ],
      },
      {
        name: "Concepts of Power and Ideology",
        terms: [
          { term: "Hegemony", definition: "Gramsci's concept of cultural dominance — the ruling class maintains power not just by force but by making its worldview seem natural, inevitable, and common-sense." },
          { term: "Power/Knowledge", definition: "Foucault's thesis that power and knowledge are inseparable — regimes of knowledge legitimize relations of power; 'truth' is produced within power relations." },
          { term: "Ideology", definition: "Marx's concept of the ideas that serve ruling class interests by justifying the existing social order — 'the ruling ideas of every epoch are the ideas of the ruling class.'" },
          { term: "False Consciousness", definition: "Marx's concept that workers fail to recognize their own exploitation because ideology obscures the true nature of their social and economic situation." },
        ],
      },
      {
        name: "Forms of Oppression",
        terms: [
          { term: "Alienation", definition: "Marx's concept of workers' estrangement from their labor, its products, other workers, and their own humanity — a consequence of treating labor as a commodity under capitalism." },
          { term: "Exploitation", definition: "Marx's concept that capitalists extract surplus value from workers — paying less than the value workers produce and keeping the difference as profit." },
          { term: "Marginalization", definition: "Young's concept of being expelled from full participation in social and political life — a key form of oppression beyond economic exploitation." },
          { term: "Systemic Racism", definition: "Racism embedded in social institutions, policies, and cultural norms that produces racial inequality without requiring individual racist intent." },
        ],
      },
    ],
  },

  {
    id: "phil-unit-8-1",
    unit: 8, puzzle: 1,
    title: "Aesthetics",
    subject: "IB Philosophy",
    groups: [
      {
        name: "Theories of Art",
        terms: [
          { term: "Mimesis", definition: "Plato and Aristotle's view that art is imitation of reality — representation is central to art's nature; Plato criticized it as twice removed from truth." },
          { term: "Expression Theory", definition: "The view (Collingwood, Tolstoy) that art is the expression of emotion — genuine art communicates the artist's inner experience to the audience." },
          { term: "Institutional Theory", definition: "Dickie's view that art is whatever the 'artworld' — a network of institutions, critics, and practices — designates as a candidate for appreciation." },
          { term: "Formalism", definition: "The view (Bell, Fry) that what makes something art is its formal properties — significant form that produces a distinctly aesthetic emotion independent of content." },
        ],
      },
      {
        name: "Key Aestheticians",
        terms: [
          { term: "Plato", definition: "Argued art is imitation twice removed from reality (Forms → objects → representations) and morally dangerous; proposed banning poets from the Republic." },
          { term: "Hegel", definition: "Argued art is a sensuous presentation of Spirit — art, religion, and philosophy are three forms of the Absolute's self-expression; art is the lowest of the three." },
          { term: "Dickie", definition: "Developed the institutional theory of art — an artifact is a work of art if someone acting on behalf of the artworld has conferred upon it the status of candidate for appreciation." },
          { term: "Tolstoy", definition: "Argued genuine art is the sincere expression and transmission of emotion — if an artist successfully infects audiences with their feelings, it is art; otherwise it is counterfeit." },
        ],
      },
      {
        name: "Aesthetic Concepts",
        terms: [
          { term: "Beauty", definition: "A positive aesthetic property provoking pleasure through perception — philosophically contested: is beauty in the object, in the response, or in a relation between them?" },
          { term: "The Sublime", definition: "Burke and Kant's concept of aesthetic experience involving grandeur or power that exceeds our comprehension — produces a mixture of awe, terror, and ultimately pleasure." },
          { term: "Aesthetic Experience", definition: "A distinctive mode of engaging with objects — characterized by disinterested attention, heightened perception, and intrinsic (non-instrumental) value." },
          { term: "Disinterestedness", definition: "Kant's criterion for genuine aesthetic response — not motivated by personal desire, ownership, or practical interest in the object; purely contemplative appreciation." },
        ],
      },
      {
        name: "Defining Art",
        terms: [
          { term: "Artworld", definition: "Danto and Dickie's concept — the social institution of artists, critics, curators, and audiences that confers art status; determines what counts as art historically." },
          { term: "Open Concept of Art", definition: "Weitz's argument (following Wittgenstein) that 'art' cannot be defined by necessary and sufficient conditions — it is an open concept with family resemblances." },
          { term: "Anti-essentialism", definition: "The rejection of the view that art has an essential nature — art is too diverse and historically changing to be captured by any single necessary definition." },
          { term: "Aesthetic Properties", definition: "Properties that ground aesthetic judgments — formal properties (balance, rhythm) and expressive properties (elegance, sadness); the object of aesthetic attention." },
        ],
      },
    ],
  },

  // ── ENVIRONMENTAL SCIENCE ──────────────────────────────────────────

  // Unit 1 · Living World: Ecosystems
  {
    id: "envsci-unit-1-1",
    unit: 1,
    puzzle: 1,
    title: "Living World: Ecosystems",
    subject: "Env Science",
    groups: [
      {
        name: "Nitrogen Cycle Processes",
        terms: [
          { term: "Nitrogen Fixation", definition: "Conversion of atmospheric N₂ into ammonia (NH₃) or related compounds by bacteria or lightning; makes nitrogen available to plants." },
          { term: "Nitrification", definition: "Bacterial process that converts ammonia (NH₃) into nitrites and then into nitrates (NO₃⁻), the form plants can absorb." },
          { term: "Denitrification", definition: "Bacterial process that converts nitrates back into nitrogen gas (N₂), returning nitrogen to the atmosphere and completing the cycle." },
          { term: "Ammonification", definition: "Decomposition of organic nitrogen (dead organisms, waste) back into ammonia (NH₃) by decomposer bacteria and fungi." },
        ],
      },
      {
        name: "Ecological Succession",
        terms: [
          { term: "Primary Succession", definition: "Colonization of bare, lifeless substrate (lava, rock) where no soil exists; the slowest type of succession." },
          { term: "Secondary Succession", definition: "Re-establishment of a community where vegetation was destroyed but soil remains; faster than primary succession." },
          { term: "Pioneer Species", definition: "First organisms to colonize bare or disturbed land; hardy species (lichens, mosses) that begin soil formation and change conditions for other species." },
          { term: "Climax Community", definition: "The stable, mature community at the end of ecological succession that remains relatively unchanged over time in the absence of disturbance." },
        ],
      },
      {
        name: "Laws of Energy Flow",
        terms: [
          { term: "10% Rule", definition: "Approximately 10% of the energy stored in one trophic level is transferred to the next; the rest is lost primarily as heat." },
          { term: "1st Law of Thermodynamics", definition: "Energy cannot be created or destroyed, only transformed from one form to another; total energy in a closed system is constant." },
          { term: "2nd Law of Thermodynamics", definition: "Every energy transfer increases entropy; usable energy decreases as heat is lost with each transformation — no conversion is 100% efficient." },
          { term: "Energy Pyramid", definition: "Diagram showing the amount of energy at each trophic level; the base (producers) holds the most energy; each level is ~10% of the one below." },
        ],
      },
      {
        name: "Feeding Strategy Types",
        terms: [
          { term: "Autotroph", definition: "An organism that produces its own organic compounds from inorganic sources using sunlight (photosynthesis) or chemicals (chemosynthesis); a producer." },
          { term: "Heterotroph", definition: "An organism that cannot produce its own food and must consume other organisms for energy and nutrients; a consumer." },
          { term: "Decomposer", definition: "An organism (bacteria, fungi) that breaks down dead organic matter into simpler inorganic compounds, recycling nutrients back into the ecosystem." },
          { term: "Detritivore", definition: "An organism that feeds on detritus (dead organic material and animal waste), such as earthworms, millipedes, and dung beetles." },
        ],
      },
    ],
  },

  {
    id: "envsci-unit-1-2",
    unit: 1,
    puzzle: 2,
    title: "Living World: Ecosystems",
    subject: "Env Science",
    groups: [
      {
        name: "Open Ocean Zones",
        terms: [
          { term: "Abyssal Zone", definition: "The deepest ocean zone (4,000–6,000 m); characterized by extreme pressure, total darkness, and near-freezing temperatures." },
          { term: "Bathyal Zone", definition: "The mid-ocean zone (200–4,000 m); no light penetrates, high pressure; home to many deep-sea creatures." },
          { term: "Benthic Zone", definition: "The bottom layer of any body of water, including sediment and substrate; inhabited by bottom-dwelling organisms (benthos)." },
          { term: "Pelagic Zone", definition: "The open-ocean zone away from the shore and bottom; the largest aquatic habitat on Earth, subdivided by depth." },
        ],
      },
      {
        name: "Freshwater Lake Zones",
        terms: [
          { term: "Limnetic Zone", definition: "The open-water zone of a lake, away from shore, where sunlight still penetrates; primary zone of photosynthesis and plankton." },
          { term: "Littoral Zone", definition: "The shallow, near-shore zone of a lake; sunlight reaches the bottom, supporting rooted aquatic plants and diverse organisms." },
          { term: "Euphotic Zone", definition: "The upper layer of water (lake or ocean) that receives enough sunlight for photosynthesis to occur; depth varies with water clarity." },
          { term: "Profundal Zone", definition: "The deep, dark bottom zone of a lake where light does not penetrate; low oxygen, cold temperature, dominated by decomposers." },
        ],
      },
      {
        name: "Coastal & Wetland Ecosystems",
        terms: [
          { term: "Coral Reef", definition: "Marine ecosystem built from calcium carbonate skeletons of coral polyps; among the most biodiverse ecosystems on Earth, found in warm shallow waters." },
          { term: "Estuary", definition: "Coastal area where freshwater from rivers meets and mixes with saltwater from the ocean; highly productive and serves as nursery habitat." },
          { term: "Delta", definition: "A landform at the mouth of a river where it meets a body of water, depositing sediment; often forms fan-shaped wetland and marsh areas." },
          { term: "Wetlands", definition: "Land areas saturated with water (permanently or seasonally); include marshes, swamps, and bogs; filter pollutants and reduce flooding." },
        ],
      },
      {
        name: "Aquatic Water Properties",
        terms: [
          { term: "Brackish Water", definition: "Water with salinity between freshwater and seawater (0.5–30 ppt); found in estuaries and coastal marshes; fewer species than either extreme." },
          { term: "Salinity", definition: "The concentration of dissolved salts in water; a key abiotic factor that determines what organisms can survive in an aquatic ecosystem." },
          { term: "Turbidity", definition: "The cloudiness of water caused by suspended particles (sediment, algae); high turbidity reduces light penetration and limits photosynthesis." },
          { term: "Upwelling", definition: "The movement of cold, nutrient-rich deep water to the ocean surface, often driven by wind; supports extremely high biological productivity." },
        ],
      },
    ],
  },

  {
    id: "envsci-unit-1-3",
    unit: 1,
    puzzle: 3,
    title: "Living World: Ecosystems",
    subject: "Env Science",
    groups: [
      {
        name: "Species Interactions",
        terms: [
          { term: "Mutualism", definition: "A symbiotic relationship in which both species benefit (e.g., bees pollinating flowers, clownfish living among sea anemones)." },
          { term: "Commensalism", definition: "A symbiotic relationship in which one species benefits and the other is neither helped nor harmed (e.g., barnacles on a whale)." },
          { term: "Parasitism", definition: "A symbiotic relationship in which one organism (parasite) benefits at the expense of the host, harming but usually not immediately killing it." },
          { term: "Competitive Exclusion", definition: "The principle that two species competing for the same limiting resources in the same niche cannot stably coexist; one will eventually outcompete the other." },
        ],
      },
      {
        name: "Ecosystem Productivity Measures",
        terms: [
          { term: "Gross Primary Productivity (GPP)", definition: "The total rate at which producers capture and store energy through photosynthesis or chemosynthesis, before any is used for their own respiration." },
          { term: "Net Primary Productivity (NPP)", definition: "The energy stored by producers after subtracting their own cellular respiration; NPP = GPP − Respiration; energy available to consumers." },
          { term: "Biomass", definition: "The total mass of living or recently living organisms in a given area or trophic level, usually expressed as dry weight per unit area." },
          { term: "Trophic Level", definition: "A feeding level in a food chain or food web; producers occupy level 1, primary consumers level 2, secondary consumers level 3, and so on." },
        ],
      },
      {
        name: "Carbon & Energy Processes",
        terms: [
          { term: "Photosynthesis", definition: "The process by which producers convert CO₂ and water into glucose and oxygen using sunlight energy; 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂." },
          { term: "Aerobic Respiration", definition: "The process of breaking down glucose using oxygen to release energy (ATP); produces CO₂ and water as byproducts; occurs in most living cells." },
          { term: "Chemosynthesis", definition: "The process by which organisms (certain bacteria) convert inorganic compounds (e.g., H₂S) into organic matter without sunlight; occurs at hydrothermal vents." },
          { term: "Carbon Sink", definition: "Any reservoir that absorbs more carbon than it releases (e.g., forests, soils, oceans); slows the buildup of CO₂ in the atmosphere." },
        ],
      },
      {
        name: "Niche & Competition Concepts",
        terms: [
          { term: "Niche", definition: "The role and position a species occupies in its environment — all biotic and abiotic conditions and resources it needs to survive and reproduce." },
          { term: "Fundamental Niche", definition: "The full range of conditions and resources a species could theoretically use in the absence of competition or other limiting factors." },
          { term: "Realized Niche", definition: "The actual conditions and resources a species uses in nature, limited by competition, predation, and other interactions; narrower than the fundamental niche." },
          { term: "Resource Partitioning", definition: "The process by which competing species use the environment in different ways (different times, places, or food) to reduce direct competition and coexist." },
        ],
      },
    ],
  },

  {
    id: "envsci-unit-1-4",
    unit: 1,
    puzzle: 4,
    title: "Living World: Ecosystems",
    subject: "Env Science",
    groups: [
      {
        name: "Forest & Vegetation Types",
        terms: [
          { term: "Biome", definition: "A large geographic region characterized by a specific climate, soil type, and dominant community of plants and animals (e.g., tundra, desert, rainforest)." },
          { term: "Deciduous", definition: "Describes trees that shed their leaves seasonally (typically in autumn); adapted to temperate climates with cold winters." },
          { term: "Coniferous Evergreen Trees", definition: "Needle-leaved trees that retain their foliage year-round; dominate boreal/taiga biomes; adapted to cold, dry conditions." },
          { term: "Broadleaf Evergreen Plants/Trees", definition: "Plants that retain large, broad leaves year-round; characteristic of tropical and subtropical rainforests with warm, wet climates." },
        ],
      },
      {
        name: "Ecologically Important Species Types",
        terms: [
          { term: "Keystone Species", definition: "A species that has a disproportionately large effect on its ecosystem relative to its abundance; its removal causes dramatic ecosystem change." },
          { term: "Indicator Species", definition: "A species whose presence, absence, or condition reflects the overall health and quality of the broader ecosystem (e.g., lichens for air quality)." },
          { term: "Native Species", definition: "A species that naturally occurs and has evolved in a specific geographic region; part of the historic ecosystem without human introduction." },
          { term: "Endemic Species", definition: "A species found exclusively in one particular geographic area and nowhere else on Earth; often vulnerable to extinction due to limited range." },
        ],
      },
      {
        name: "Lake Nutrient Status",
        terms: [
          { term: "Eutrophic Lake", definition: "A nutrient-rich lake with abundant algae and plant growth; high productivity at the surface but low dissolved oxygen in deep water due to decomposition." },
          { term: "Oligotrophic", definition: "Describes a body of water with low nutrient levels and low productivity; typically clear, deep, and high in dissolved oxygen." },
          { term: "Cultural Eutrophication", definition: "Human-accelerated eutrophication caused by nutrient runoff (nitrogen, phosphorus) from agriculture, sewage, and urban areas into water bodies." },
          { term: "Phytoplankton", definition: "Microscopic photosynthetic organisms (algae, cyanobacteria) floating in water; the base of most aquatic food webs and responsible for ~50% of Earth's O₂." },
        ],
      },
      {
        name: "Abiotic Factors",
        terms: [
          { term: "Climate", definition: "The long-term pattern of weather conditions in a region, including average temperature, precipitation, and seasonal variation; determines biome type." },
          { term: "Latitude", definition: "Distance north or south of the equator (measured in degrees); strongly influences temperature and solar radiation, driving biome distribution." },
          { term: "Topography", definition: "The physical features of a land surface, including elevation, slope, and landforms; influences local climate, water flow, and soil development." },
          { term: "Permafrost", definition: "Permanently frozen subsoil found in Arctic and subarctic regions; limits plant root depth and water drainage; vulnerable to thawing with climate change." },
        ],
      },
    ],
  },

  {
    id: "envsci-unit-1-5",
    unit: 1,
    puzzle: 5,
    title: "Living World: Ecosystems",
    subject: "Env Science",
    groups: [
      {
        name: "Water Cycle Processes",
        terms: [
          { term: "Transpiration", definition: "The process by which water is absorbed by plant roots, moves through the plant, and evaporates from leaf surfaces; a major part of the water cycle." },
          { term: "Runoff", definition: "Water that flows over the land surface into streams and rivers rather than soaking into the ground; carries nutrients, sediments, and pollutants." },
          { term: "Watershed", definition: "A land area that drains into a common body of water (stream, river, lake); also called a drainage basin; the basic unit for water resource management." },
          { term: "Reservoir", definition: "A natural or human-made lake used to store water; also refers to any large pool of a substance in a biogeochemical cycle (e.g., the ocean as a carbon reservoir)." },
        ],
      },
      {
        name: "Consumer Types by Diet",
        terms: [
          { term: "Herbivore", definition: "An animal that eats only plants or algae; a primary consumer occupying the second trophic level (e.g., deer, caterpillars, manatees)." },
          { term: "Carnivore", definition: "An animal that eats only other animals; occupies the third trophic level or higher as a secondary or tertiary consumer (e.g., wolves, sharks)." },
          { term: "Omnivore", definition: "An animal that eats both plants and animals; flexible diet allows survival across trophic levels (e.g., bears, raccoons, humans)." },
          { term: "Scavenger", definition: "An animal that feeds on the carcasses or dead organic material of organisms it did not kill; plays a key role in nutrient cycling (e.g., vultures, hyenas)." },
        ],
      },
      {
        name: "Ecological Tolerance & Limits",
        terms: [
          { term: "Limiting Factor", definition: "Any abiotic or biotic resource or condition that restricts the growth, abundance, or distribution of an organism or population." },
          { term: "Range of Tolerance", definition: "The range of abiotic conditions (temperature, pH, salinity, etc.) within which an organism can survive; organisms thrive in the optimal range." },
          { term: "Resilience", definition: "The ability of an ecosystem to recover and return to its original state after a disturbance; more resilient ecosystems bounce back faster." },
          { term: "Biotic Potential", definition: "The maximum reproductive rate of a species under ideal conditions with unlimited resources; the theoretical upper limit of population growth." },
        ],
      },
      {
        name: "Aquatic Habitats & Life",
        terms: [
          { term: "Nekton", definition: "Aquatic organisms that actively swim and move through the water column, independent of currents (e.g., fish, whales, squid, sea turtles)." },
          { term: "Zooplankton", definition: "Tiny aquatic animals and other heterotrophs that drift with water currents; primary consumers in aquatic food webs that feed on phytoplankton." },
          { term: "Riparian Habitat", definition: "The land and vegetation along the banks of a river or stream; provides habitat for many species and filters runoff before it enters the waterway." },
          { term: "Floodplain", definition: "The flat, low-lying land adjacent to a river that is subject to periodic flooding; highly fertile and important for biodiversity and flood control." },
        ],
      },
    ],
  },

  // ── UNIT 2 · Living World: Biodiversity ─────────────────────────────

  // 2.1 Measuring Biodiversity
  {
    id: "envsci-unit-2-1",
    unit: 2,
    puzzle: 1,
    title: "Living World: Biodiversity",
    subject: "Env Science",
    groups: [
      {
        name: "Three Levels of Biodiversity",
        terms: [
          { term: "Genetic Diversity", definition: "The variety of genes and alleles within a species or population; high genetic diversity improves adaptability and long-term evolutionary potential." },
          { term: "Species Diversity", definition: "The variety of species in an ecosystem, incorporating both how many species (richness) and how evenly they are distributed (evenness)." },
          { term: "Ecosystem Diversity", definition: "The variety of different ecosystems, habitats, and ecological communities within a region; one of three core levels of biodiversity." },
          { term: "Biodiversity Hotspot", definition: "A region with an exceptionally high concentration of endemic species that is under significant threat from habitat loss; 36 recognized globally." },
        ],
      },
      {
        name: "Species Diversity Metrics",
        terms: [
          { term: "Species Richness", definition: "The total number of different species present in an area; a simple count regardless of relative abundance." },
          { term: "Species Evenness", definition: "How equally individuals are distributed among species in a community; high evenness means no single species dominates." },
          { term: "Indicator Species", definition: "A species whose presence, absence, or health reflects the overall condition of the broader ecosystem (e.g., frogs for water quality)." },
          { term: "Ecological Tolerance", definition: "The range of environmental conditions under which a species can survive and reproduce; wide tolerance = generalist, narrow tolerance = specialist." },
        ],
      },
      {
        name: "Types of Extinction",
        terms: [
          { term: "Background Extinction", definition: "The normal, low-level rate of species loss throughout Earth's history (~1–5 species/year); the baseline against which mass extinctions are measured." },
          { term: "Local Extinction", definition: "Disappearance of a species from one specific geographic area while it persists elsewhere; also called extirpation." },
          { term: "Global Extinction", definition: "The complete, irreversible disappearance of a species from all locations on Earth." },
          { term: "Mass Extinction", definition: "A rapid, widespread event eliminating a large percentage of species in geologically short time; Earth has experienced five; scientists warn of a sixth driven by humans." },
        ],
      },
      {
        name: "Ecologically Important Species",
        terms: [
          { term: "Keystone Species", definition: "A species with a disproportionately large effect on ecosystem structure relative to its abundance; its removal causes dramatic cascade effects." },
          { term: "Foundation Species", definition: "A species that creates and defines habitat structure used by many others (e.g., kelp, coral, beavers); loss destabilizes the entire community." },
          { term: "Endemic Species", definition: "A species found exclusively in one specific geographic area and nowhere else on Earth; especially vulnerable to localized threats." },
          { term: "Range of Tolerance", definition: "The full span of abiotic conditions (temperature, salinity, pH) within which an organism can survive; performance is best at the optimum." },
        ],
      },
    ],
  },

  // 2.2 Species, Evolution & Genetics
  {
    id: "envsci-unit-2-2",
    unit: 2,
    puzzle: 2,
    title: "Living World: Biodiversity",
    subject: "Env Science",
    groups: [
      {
        name: "Genetic Mechanisms in Small Populations",
        terms: [
          { term: "Genetic Drift", definition: "Random changes in allele frequencies due to chance events; has the greatest effect in small, isolated populations." },
          { term: "Founder Effect", definition: "Loss of genetic variation when a small group establishes a new isolated population; the founders' limited gene pool shapes all future generations." },
          { term: "Population Bottleneck", definition: "A severe, sudden reduction in population size that drastically reduces genetic diversity; survivors have a narrow, unrepresentative gene pool." },
          { term: "Reproductive Isolation", definition: "The inability of populations to interbreed successfully; a key barrier that leads to divergence and eventually speciation." },
        ],
      },
      {
        name: "Evolutionary Processes",
        terms: [
          { term: "Speciation", definition: "The evolutionary formation of new, distinct species; typically requires reproductive isolation followed by divergent natural selection over time." },
          { term: "Adaptation", definition: "A heritable trait that increases an organism's fitness in its environment; shaped by natural selection acting on genetic variation." },
          { term: "Coevolution", definition: "The reciprocal evolutionary change in two or more species that interact closely (e.g., flowers and pollinators, predators and prey)." },
          { term: "Natural Selection", definition: "The process by which individuals with favorable heritable traits survive and reproduce more successfully, passing those traits to future generations." },
        ],
      },
      {
        name: "Species by Niche Breadth",
        terms: [
          { term: "Generalist Species", definition: "A species with a broad niche that tolerates diverse conditions and exploits many resources (e.g., raccoon, rat); resilient to environmental change." },
          { term: "Specialist Species", definition: "A species with a narrow niche requiring specific conditions or food sources (e.g., giant panda, koala); more vulnerable to habitat loss." },
          { term: "Fundamental Niche", definition: "The full range of conditions a species could theoretically use in the absence of competition or other limiting biotic factors." },
          { term: "Realized Niche", definition: "The actual range of conditions a species uses in nature, constrained by competition, predation, and other interactions; narrower than the fundamental niche." },
        ],
      },
      {
        name: "Species Interactions",
        terms: [
          { term: "Mutualism", definition: "A symbiotic relationship in which both species benefit (e.g., bees and flowers, mycorrhizal fungi and plant roots)." },
          { term: "Commensalism", definition: "A symbiotic relationship in which one species benefits and the other is unaffected (e.g., barnacles on a whale)." },
          { term: "Parasitism", definition: "A relationship where one organism (the parasite) benefits at the expense of the host, which is harmed but usually not immediately killed." },
          { term: "Competitive Exclusion", definition: "The principle that two species competing for identical limiting resources cannot stably coexist; one will outcompete and eliminate the other locally." },
        ],
      },
    ],
  },

  // 2.3 Threats to Biodiversity
  {
    id: "envsci-unit-2-3",
    unit: 2,
    puzzle: 3,
    title: "Living World: Biodiversity",
    subject: "Env Science",
    groups: [
      {
        name: "Habitat Destruction",
        terms: [
          { term: "Habitat Fragmentation", definition: "The breaking up of continuous habitat into smaller isolated patches; reduces biodiversity, population size, and gene flow between populations." },
          { term: "Habitat Island", definition: "An isolated patch of suitable habitat surrounded by inhospitable terrain; supports fewer species than a continuous habitat of the same total area." },
          { term: "Edge Effect", definition: "Changes in species composition, microclimate, and biodiversity at the boundary between two habitats; increases as fragmentation creates more edge." },
          { term: "Deforestation", definition: "Large-scale removal of forests for agriculture, development, or logging; the primary driver of terrestrial habitat loss and biodiversity decline worldwide." },
        ],
      },
      {
        name: "Direct Exploitation & Overuse",
        terms: [
          { term: "Poaching", definition: "Illegal hunting, trapping, or harvesting of wildlife; a major driver of decline for high-value species such as elephants, rhinos, and tigers." },
          { term: "Overgrazing", definition: "Excessive livestock grazing beyond the land's carrying capacity; degrades plant cover, compacts soil, accelerates erosion, and reduces biodiversity." },
          { term: "Old-Growth Forests", definition: "Ancient, unlogged forests with complex structure, old trees, and high biodiversity; irreplaceable and disproportionately threatened by commercial logging." },
          { term: "Biomagnification", definition: "Increasing concentration of a persistent toxin (e.g., DDT, mercury) at each successive trophic level; apex predators receive the highest and most harmful doses." },
        ],
      },
      {
        name: "Population-Level Consequences",
        terms: [
          { term: "Population Bottleneck", definition: "A severe reduction in population size caused by habitat loss or overexploitation; sharply reduces genetic diversity and extinction risk rises." },
          { term: "Local Extinction", definition: "Disappearance of a species from a specific area due to habitat loss, hunting, or competition while it survives elsewhere." },
          { term: "Global Extinction", definition: "The irreversible loss of a species from the entire planet; permanent and accelerating due to human-driven habitat loss and exploitation." },
          { term: "Endemic Species", definition: "Species restricted to one geographic area; highly vulnerable because habitat destruction in that single location means global extinction." },
        ],
      },
      {
        name: "Ecological Disruption Concepts",
        terms: [
          { term: "Colonization", definition: "Arrival and establishment of a species in a new area; invasive colonization by non-native species can displace natives and reduce biodiversity." },
          { term: "Cultural Eutrophication", definition: "Human-accelerated nutrient enrichment of water bodies from agricultural runoff and sewage; triggers algal blooms, oxygen depletion, and biodiversity loss." },
          { term: "Ecological Tolerance", definition: "The range of conditions a species can endure; species with narrow tolerances are most vulnerable to habitat alteration and pollution." },
          { term: "Indicator Species", definition: "A species whose decline warns of broader ecosystem degradation; loss of indicator species often precedes wider biodiversity collapse." },
        ],
      },
    ],
  },

  // 2.4 Conservation Strategies & Protected Lands
  {
    id: "envsci-unit-2-4",
    unit: 2,
    puzzle: 4,
    title: "Living World: Biodiversity",
    subject: "Env Science",
    groups: [
      {
        name: "On-the-Ground Conservation Tools",
        terms: [
          { term: "Habitat Corridors", definition: "Strips of land connecting isolated habitat patches; allow species to disperse, interbreed, and recolonize, reducing the damage of fragmentation." },
          { term: "Buffer Zone", definition: "A transitional area surrounding a core protected zone that limits disruptive human activity; reduces edge effects and pressure on the protected core." },
          { term: "Ecological Restoration", definition: "Actively assisting the recovery of a degraded ecosystem toward its natural structure, function, and biodiversity." },
          { term: "MPAs (Marine Protected Areas)", definition: "Ocean zones where fishing, drilling, and other extractive activities are restricted to protect marine biodiversity and allow stocks to recover." },
        ],
      },
      {
        name: "U.S. Protected Land Categories",
        terms: [
          { term: "National Park", definition: "Federal land managed solely for conservation and public enjoyment by the National Park Service; no commercial resource extraction allowed." },
          { term: "National Forest", definition: "Federal land managed for multiple uses (timber, grazing, recreation, wildlife) by the U.S. Forest Service; not as strictly protected as parks." },
          { term: "National Wildlife Refuge (NWR)", definition: "Federal land managed primarily for wildlife conservation by the U.S. Fish and Wildlife Service; some recreational uses permitted." },
          { term: "Multiple-Use Land", definition: "Public land managed for simultaneous uses including grazing, mining, energy, recreation, and conservation; managed by the Bureau of Land Management." },
        ],
      },
      {
        name: "Biodiversity Conservation Concepts",
        terms: [
          { term: "Biodiversity Hotspot", definition: "A region with exceptional concentrations of endemic species facing severe habitat loss; protecting hotspots gives the greatest return on conservation investment." },
          { term: "Precautionary Principle", definition: "The policy of taking protective action against potential environmental harm even before scientific certainty is established." },
          { term: "Intrinsic/Existence Value", definition: "The value of a species or ecosystem independent of human use; the ethical position that nature deserves protection for its own sake." },
          { term: "Ecotourism", definition: "Environmentally responsible travel to natural areas that funds conservation and supports local economies; creates direct economic incentives to protect biodiversity." },
        ],
      },
      {
        name: "Ecosystem Services Worth Protecting",
        terms: [
          { term: "Carbon Sink", definition: "Any reservoir (forest, ocean, soil) that absorbs more carbon than it releases; protecting these areas mitigates climate change and supports biodiversity." },
          { term: "Watershed", definition: "A drainage basin where all land and water drain to a common outlet; healthy watersheds filter water, prevent floods, and support diverse species." },
          { term: "Wetlands", definition: "Water-saturated ecosystems (marshes, swamps, bogs) that filter pollutants, absorb floodwaters, store carbon, and support exceptional biodiversity." },
          { term: "Riparian Habitat", definition: "Vegetated land along rivers and streams that provides wildlife corridors, filters runoff, prevents erosion, and supports high species diversity." },
        ],
      },
    ],
  },

  // 2.5 Conservation Laws, Policy & Economics
  {
    id: "envsci-unit-2-5",
    unit: 2,
    puzzle: 5,
    title: "Living World: Biodiversity",
    subject: "Env Science",
    groups: [
      {
        name: "U.S. Federal Conservation Agencies",
        terms: [
          { term: "U.S. Fish and Wildlife Service", definition: "Federal agency that manages fish, wildlife, and their habitats; administers the Endangered Species Act and national wildlife refuges." },
          { term: "U.S. Forest Service", definition: "USDA agency managing national forests and grasslands for multiple uses: timber, recreation, watershed protection, and wildlife habitat." },
          { term: "U.S. Bureau of Land Management", definition: "Agency overseeing more public land than any other; manages grazing, mining, energy development, recreation, and conservation on federal lands." },
          { term: "U.S. National Park Service", definition: "Agency that preserves national parks, monuments, and historic sites; mission is to conserve resources unimpaired for future generations." },
        ],
      },
      {
        name: "Conservation Laws & Treaties",
        terms: [
          { term: "CITES", definition: "Convention on International Trade in Endangered Species; international treaty that controls and bans trade in threatened plants and animals to prevent extinction." },
          { term: "U.S. Endangered Species Act", definition: "Landmark U.S. law protecting listed threatened and endangered species and their critical habitats; prohibits take (killing, harming, or harassing) of listed species." },
          { term: "Marine Mammal Protection Act", definition: "U.S. law prohibiting the take and import of marine mammals; protects whales, dolphins, seals, and manatees in U.S. waters." },
          { term: "Environmental Protection Agency (EPA)", definition: "U.S. federal agency created in 1970 to protect human health and the environment by writing and enforcing environmental regulations." },
        ],
      },
      {
        name: "Policy & Ethical Frameworks",
        terms: [
          { term: "Precautionary Principle", definition: "When an action risks harm to the environment or health, precautionary measures should be taken even without full scientific proof of harm." },
          { term: "Intrinsic/Existence Value", definition: "The belief that all species have inherent worth regardless of utility to humans; a core ethical argument for biodiversity conservation." },
          { term: "Ecotourism", definition: "Nature-based tourism that financially supports conservation and local communities; aligns economic incentives with biodiversity protection." },
          { term: "Multiple-Use Land", definition: "A management philosophy that attempts to balance conservation with economic activities like logging, grazing, and mining on public lands." },
        ],
      },
      {
        name: "Monitoring Biodiversity Health",
        terms: [
          { term: "Indicator Species", definition: "Species used to assess ecosystem health; their decline is an early warning of broader biodiversity problems requiring policy response." },
          { term: "Keystone Species", definition: "Species whose protection is legally and ecologically critical; loss disproportionately destabilizes ecosystems even at low population numbers." },
          { term: "Endemic Species", definition: "Species found only in one place; their presence in a region signals conservation priority and is tracked to measure protection effectiveness." },
          { term: "Ecological Restoration", definition: "Measurable return of ecosystem structure and function; a key outcome used to evaluate the success of conservation policies and protected areas." },
        ],
      },
    ],
  },

  // ── UNIT 3 · Populations ─────────────────────────────────────────────

  // 3.1 Population Growth Models
  {
    id: "envsci-unit-3-1",
    unit: 3,
    puzzle: 1,
    title: "Populations",
    subject: "Env Science",
    groups: [
      {
        name: "Growth Curve Types",
        terms: [
          { term: "Exponential Growth (J-curve)", definition: "Unrestricted population growth when resources are unlimited; produces a J-shaped curve as the rate of growth accelerates over time." },
          { term: "Logistic Growth (S-curve)", definition: "Population growth that slows as it approaches carrying capacity due to resource limitations; produces an S-shaped curve." },
          { term: "Population Overshoot", definition: "When a population temporarily exceeds the carrying capacity of its environment, consuming resources faster than they can be replenished; often followed by a crash." },
          { term: "Carrying Capacity (K)", definition: "The maximum population size an environment can sustainably support given available food, water, space, and other resources." },
        ],
      },
      {
        name: "Growth Rate Measurements",
        terms: [
          { term: "Intrinsic Rate of Increase (r)", definition: "The maximum per capita rate of population growth under ideal conditions; the difference between per capita birth rate and death rate." },
          { term: "Biotic Potential", definition: "The theoretical maximum reproductive rate of a species under ideal, unlimited conditions; the upper ceiling on population growth." },
          { term: "Growth Rate", definition: "The net change in population size per unit time; calculated as (births + immigration) − (deaths + emigration)." },
          { term: "Rule of 70", definition: "A formula to estimate population doubling time: 70 ÷ annual growth rate (%) = approximate years to double; illustrates the power of compound growth." },
        ],
      },
      {
        name: "Population Distribution",
        terms: [
          { term: "Population Density", definition: "The number of individuals per unit area or volume; affects competition, disease transmission, predator–prey dynamics, and resource availability." },
          { term: "Population Dispersion", definition: "The spatial pattern of individuals within a habitat: clumped (most common), uniform, or random; reflects resource distribution and social behavior." },
          { term: "Immigration", definition: "The movement of individuals into a population or geographic area from another; adds individuals and increases population size." },
          { term: "Emigration", definition: "The movement of individuals out of a population or geographic area; removes individuals and decreases local population size." },
        ],
      },
      {
        name: "Life History Strategies",
        terms: [
          { term: "K-strategist", definition: "A species that produces few offspring with high parental investment; long-lived and adapted to stable, near-capacity environments (e.g., elephants, whales, humans)." },
          { term: "r-strategist", definition: "A species that produces many offspring with little parental investment; short-lived and thrives in unstable, variable environments (e.g., insects, bacteria, dandelions)." },
          { term: "Survivorship Curves (Type I, II, III)", definition: "Graphs of age-specific survival: Type I (most die old — humans), Type II (constant mortality — birds), Type III (most die young — fish, plants)." },
          { term: "Sustainable Yield", definition: "The maximum amount of a renewable resource that can be harvested without reducing its ability to regenerate; the threshold for sustainable use." },
        ],
      },
    ],
  },

  // 3.2 Population Regulation
  {
    id: "envsci-unit-3-2",
    unit: 3,
    puzzle: 2,
    title: "Populations",
    subject: "Env Science",
    groups: [
      {
        name: "How Populations Are Controlled",
        terms: [
          { term: "Density-Dependent Pop. Control", definition: "Limiting factors whose effect intensifies as population density increases (e.g., disease spreads faster, competition for food increases, predation rises)." },
          { term: "Density-Independent Pop. Control", definition: "Limiting factors that affect a population regardless of its density (e.g., natural disasters, extreme cold, drought, volcanic eruptions)." },
          { term: "Carrying Capacity (K)", definition: "The environmental ceiling for population size; set by resource availability and acts as the equilibrium point for logistic growth." },
          { term: "Limiting Factor", definition: "Any resource or condition (food, water, space, light, predation) that restricts the growth, abundance, or distribution of a population." },
        ],
      },
      {
        name: "Population Instability",
        terms: [
          { term: "Population Overshoot", definition: "Exceeding carrying capacity due to a lag in the response of limiting factors; resources are depleted before population growth slows, leading to a crash." },
          { term: "Demographic Bottleneck", definition: "A severe reduction in population size that distorts age structure and reduces genetic diversity; slows recovery and increases extinction risk." },
          { term: "Biotic Potential", definition: "The maximum reproductive capacity driving population growth; when biotic potential far exceeds environmental resistance, overshoot becomes likely." },
          { term: "Intrinsic Rate of Increase (r)", definition: "The per capita growth rate under ideal conditions; populations with high r rebound quickly from crashes but are also prone to overshoot." },
        ],
      },
      {
        name: "Reproductive & Survival Strategies",
        terms: [
          { term: "K-strategist", definition: "Species with low r that invest heavily in offspring and persist near K; populations recover slowly from disturbance but rarely overshoot." },
          { term: "r-strategist", definition: "Species with high r that reproduce rapidly; prone to boom-bust cycles — rapid overshoot followed by crashes when resources collapse." },
          { term: "Survivorship Curves (Type I, II, III)", definition: "Age-survival graphs that reveal which life stages face highest mortality; critical for identifying where population regulation acts most strongly." },
          { term: "Replacement-Level Fertility", definition: "The total fertility rate (~2.1 in developed nations) at which a population exactly replaces itself; below this, long-term population decline follows." },
        ],
      },
      {
        name: "Key Population Metrics",
        terms: [
          { term: "Population Density", definition: "Number of individuals per unit area; triggers density-dependent controls — high density accelerates disease, competition, and predation." },
          { term: "Population Dispersion", definition: "The spatial arrangement of individuals: clumped, uniform, or random; clumped dispersion amplifies density-dependent effects in resource-rich patches." },
          { term: "Crude Birth Rate", definition: "Number of live births per 1,000 people per year; the primary driver of upward population pressure against carrying capacity." },
          { term: "Crude Death Rate (CDR)", definition: "Number of deaths per 1,000 people per year; along with birth rate, determines whether a population is growing, stable, or declining." },
        ],
      },
    ],
  },

  // 3.3 Human Population Demographics
  {
    id: "envsci-unit-3-3",
    unit: 3,
    puzzle: 3,
    title: "Populations",
    subject: "Env Science",
    groups: [
      {
        name: "Vital Statistics",
        terms: [
          { term: "Crude Birth Rate", definition: "Number of live births per 1,000 people per year; high in developing countries; falls as women gain education, rights, and healthcare access." },
          { term: "Crude Death Rate (CDR)", definition: "Number of deaths per 1,000 people per year; declines with improved medicine and sanitation; one driver of the demographic transition." },
          { term: "Total Fertility Rate (TFR)", definition: "The average number of children a woman is expected to have over her lifetime; the single most important predictor of long-term population growth." },
          { term: "Infant Mortality Rate", definition: "Deaths of infants under 1 year old per 1,000 live births; a sensitive measure of healthcare quality, nutrition, and development level." },
        ],
      },
      {
        name: "Population Structure Tools",
        terms: [
          { term: "Age Structure Diagram", definition: "A population pyramid showing distribution by age and sex; a wide base indicates rapid growth; a narrow base signals declining or stable population." },
          { term: "Baby Boom", definition: "The sharp rise in birth rates after WWII (1946–1964 in the U.S.); created a large demographic cohort with lasting economic and environmental impacts." },
          { term: "Demographic Transition", definition: "A four-stage model showing how birth and death rates both fall as a country industrializes; ultimately leads to slow or zero population growth." },
          { term: "Replacement-Level Fertility", definition: "A TFR of ~2.1 at which a population exactly replaces itself; countries consistently below this level (e.g., Japan, Germany) face aging populations." },
        ],
      },
      {
        name: "Migration & Movement",
        terms: [
          { term: "Immigration", definition: "Movement of people into a country or region; can increase population size, alter age structure, and offset low birth rates in developed nations." },
          { term: "Emigration", definition: "Movement of people out of a country or region; can relieve population pressure in densely populated developing nations." },
          { term: "Population Density", definition: "Number of people per unit area; high-density regions strain water supplies, housing, transportation, and food systems." },
          { term: "Growth Rate", definition: "Annual net population change as a percentage; driven by the balance of births, deaths, immigration, and emigration." },
        ],
      },
      {
        name: "Economic Development Indicators",
        terms: [
          { term: "Gross Domestic Product (GDP)", definition: "The total monetary value of goods and services produced in a country per year; used to classify nations and measure economic capacity to address environmental issues." },
          { term: "Per Capita", definition: "Per person; GDP per capita divides total output by population to measure average living standard and per-person environmental impact." },
          { term: "Developed Country", definition: "A high-income, industrialized nation with low birth rates, high life expectancy, advanced infrastructure, and high per capita resource consumption." },
          { term: "Developing Country", definition: "A lower-income nation typically experiencing rapid population growth, higher birth rates, lower life expectancy, and less-developed infrastructure." },
        ],
      },
    ],
  },

  // 3.4 Development, Policy & Sustainability
  {
    id: "envsci-unit-3-4",
    unit: 3,
    puzzle: 4,
    title: "Populations",
    subject: "Env Science",
    groups: [
      {
        name: "Levels of Development",
        terms: [
          { term: "More Developed Country (MDC)", definition: "A high-income, post-industrial nation with low birth/death rates, aging population, high HDI, and high per capita energy and resource use." },
          { term: "Less Developed Country (LDC)", definition: "A lower-income nation with high birth rates, young age structure, lower HDI, and rapidly growing population; home to most future global population growth." },
          { term: "Affluence", definition: "A high standard of living and material wealth; affluence drives higher per capita resource consumption and environmental impact (I = P × A × T)." },
          { term: "Gross Domestic Product (GDP)", definition: "A nation's total economic output per year; used to classify development level and to estimate capacity to invest in environmental protection." },
        ],
      },
      {
        name: "Resources & Economic Tools",
        terms: [
          { term: "Nonrenewable Resource", definition: "A resource that cannot be replenished on a human timescale once consumed (e.g., fossil fuels, minerals); extraction is inherently finite." },
          { term: "Sustainable Yield", definition: "Maximum harvest of a renewable resource without impairing its ability to regenerate; the cornerstone of sustainable forestry, fisheries, and water management." },
          { term: "Per Capita", definition: "Per person; per capita consumption reveals how much of the environmental burden falls on individuals vs. population size or economic growth." },
          { term: "Subsidies", definition: "Government financial support (payments, tax breaks) for industries or products; fossil fuel subsidies can distort markets and discourage sustainable alternatives." },
        ],
      },
      {
        name: "Population Policy",
        terms: [
          { term: "Family Planning", definition: "Programs providing access to contraception, reproductive health education, and maternal care; the most effective voluntary strategy for slowing population growth." },
          { term: "Total fertility Rate (TFR)", definition: "Average children per woman; TFR falls reliably with increased access to education (especially for women), family planning, and economic development." },
          { term: "Demographic Transition", definition: "The model predicting that as countries develop, birth and death rates both fall, leading to slower population growth and eventually stabilization." },
          { term: "Replacement-Level Fertility", definition: "TFR of ~2.1; nations consistently below this face workforce shortages and social security strain as their populations age." },
        ],
      },
      {
        name: "Human Impact on Population Dynamics",
        terms: [
          { term: "Anthropogenic", definition: "Caused by human activity; anthropogenic drivers (pollution, habitat loss, climate change) alter carrying capacities for both wildlife and human populations." },
          { term: "Population Overshoot", definition: "When human consumption exceeds Earth's regenerative capacity; linked to resource depletion, ecosystem degradation, and long-term decline in carrying capacity." },
          { term: "Rule of 70", definition: "70 ÷ annual growth rate (%) = approximate doubling time; demonstrates how even modest growth rates compound rapidly over decades." },
          { term: "Baby Boom", definition: "A period of elevated birth rates (post-WWII U.S.); the resulting demographic bulge drives resource demand, healthcare costs, and social security pressure as it ages." },
        ],
      },
    ],
  },

  // ── UNIT 4 · Earth Systems & Resources ──────────────────────────────

  // 4.1 Plate Tectonics & Earth Structure
  {
    id: "envsci-unit-4-1",
    unit: 4,
    puzzle: 1,
    title: "Earth Systems & Resources",
    subject: "Env Science",
    groups: [
      {
        name: "Earth's Structural Layers",
        terms: [
          { term: "Lithosphere", definition: "Earth's rigid outer shell, composed of the crust and upper mantle; broken into tectonic plates that move on the underlying asthenosphere." },
          { term: "Asthenosphere", definition: "The semi-fluid, partially molten layer of the upper mantle just below the lithosphere; its plasticity allows tectonic plates to move." },
          { term: "Mantle", definition: "Earth's thick middle layer between the crust and core; composed mostly of silicate rock; the source of magma that drives volcanic activity." },
          { term: "Hot Spot", definition: "A stationary plume of magma rising through the mantle that creates volcanic activity; as a plate moves over it, a chain of volcanic islands forms (e.g., Hawaii)." },
        ],
      },
      {
        name: "Plate Boundary Types",
        terms: [
          { term: "Convergent Plate Boundary", definition: "Where two tectonic plates move toward each other; creates mountain ranges, ocean trenches, and subduction zones; associated with earthquakes and volcanoes." },
          { term: "Divergent Plate Boundary", definition: "Where two tectonic plates move apart; creates mid-ocean ridges, rift valleys, and new oceanic crust through sea floor spreading." },
          { term: "Transform Fault", definition: "A plate boundary where two plates slide horizontally past each other; causes significant earthquakes (e.g., the San Andreas Fault)." },
          { term: "Subduction", definition: "The process where a denser oceanic plate slides beneath a less-dense plate at a convergent boundary; creates deep trenches, volcanic arcs, and earthquakes." },
        ],
      },
      {
        name: "Tectonic Features",
        terms: [
          { term: "Tectonic Plate", definition: "One of Earth's large, rigid pieces of lithosphere that moves on the asthenosphere; their interactions drive earthquakes, volcanoes, and mountain building." },
          { term: "Ring of Fire", definition: "A zone circling the Pacific Ocean where a large number of earthquakes and volcanic eruptions occur; associated with subduction of Pacific plates." },
          { term: "Rift Valley", definition: "A low-lying landform created where diverging tectonic plates pull apart; may eventually become an ocean basin (e.g., East African Rift)." },
          { term: "Island Arc", definition: "A curved chain of volcanic islands formed when an oceanic plate subducts beneath another plate, generating magma that erupts above sea level." },
        ],
      },
      {
        name: "Rocks & Surface Processes",
        terms: [
          { term: "Igneous Rock", definition: "Rock formed from the cooling and solidification of magma (underground) or lava (at the surface); examples include granite and basalt." },
          { term: "Metamorphic Rock", definition: "Rock transformed by intense heat and/or pressure without melting; examples include marble (from limestone) and slate (from shale)." },
          { term: "Weathering", definition: "The physical and chemical breakdown of rock into smaller particles at or near Earth's surface; the first step in soil formation." },
          { term: "Erosion", definition: "The removal and transport of weathered rock and soil particles by water, wind, ice, or gravity; can degrade land and deposit sediment downstream." },
        ],
      },
    ],
  },

  // 4.2 Atmosphere & Climate Systems
  {
    id: "envsci-unit-4-2",
    unit: 4,
    puzzle: 2,
    title: "Earth Systems & Resources",
    subject: "Env Science",
    groups: [
      {
        name: "Atmospheric Layers",
        terms: [
          { term: "Troposphere", definition: "The lowest atmospheric layer (0–12 km); contains 75% of atmospheric mass and all weather; temperature decreases with altitude." },
          { term: "Mesosphere", definition: "The atmospheric layer from ~50–85 km; the coldest layer; where most meteors burn up before reaching Earth's surface." },
          { term: "Thermosphere", definition: "The layer from ~85–600 km; absorbs high-energy solar radiation causing extreme temperatures; home to the auroras and the International Space Station." },
          { term: "Exosphere", definition: "The outermost fringe of Earth's atmosphere; very thin gases extend thousands of km into space; where most satellites orbit." },
        ],
      },
      {
        name: "Global Wind Drivers",
        terms: [
          { term: "Convection Cell", definition: "A circular atmospheric pattern where warm air rises, cools and flows outward at altitude, sinks, and flows back along the surface; drives global wind belts." },
          { term: "Coriolis Effect", definition: "The deflection of winds and ocean currents caused by Earth's rotation; deflects air to the right in the Northern Hemisphere, left in the Southern Hemisphere." },
          { term: "Jet Stream", definition: "Narrow bands of fast-moving air near the top of the troposphere; influence the paths of storms, weather systems, and precipitation patterns globally." },
          { term: "Global Wind Patterns", definition: "The large-scale circulation of air around Earth, organized into belts (trade winds, westerlies, polar easterlies) driven by differential solar heating and Coriolis deflection." },
        ],
      },
      {
        name: "Ocean–Atmosphere Interactions",
        terms: [
          { term: "El Niño (ENSO)", definition: "A periodic warming of central and eastern Pacific Ocean surface temperatures that disrupts normal trade winds and shifts precipitation patterns globally." },
          { term: "La Niña", definition: "The opposite phase of ENSO; cooler-than-normal Pacific surface temperatures that amplify trade winds and intensify drought in some regions and flooding in others." },
          { term: "Sea Surface Temperature (SST)", definition: "The temperature of the uppermost ocean layer; drives evaporation, storm intensity, and climate patterns; a key indicator for ENSO and climate change monitoring." },
          { term: "Upwelling", definition: "The wind-driven movement of cold, nutrient-rich deep water to the ocean surface; suppressed during El Niño events, reducing fishery productivity." },
        ],
      },
      {
        name: "Precipitation & Wind Patterns",
        terms: [
          { term: "Trade Winds", definition: "Steady, reliable winds blowing from subtropical high-pressure zones toward the equatorial low; named for their historical use by sailing trade ships." },
          { term: "Prevailing Winds", definition: "The dominant wind direction in a region, determined by pressure belts and Coriolis deflection; strongly influence precipitation and temperature patterns." },
          { term: "Rain Shadow Effect", definition: "The dry area on the leeward (downwind) side of a mountain; moist air rises and drops precipitation on the windward side, leaving the leeward side dry." },
          { term: "Currents", definition: "Large-scale movements of ocean water driven by wind, temperature, and salinity differences; regulate climate by redistributing heat around the planet." },
        ],
      },
    ],
  },

  // 4.3 Soil Systems
  {
    id: "envsci-unit-4-3",
    unit: 4,
    puzzle: 3,
    title: "Earth Systems & Resources",
    subject: "Env Science",
    groups: [
      {
        name: "Soil Composition",
        terms: [
          { term: "Humus", definition: "The dark, stable organic component of soil formed from the decomposition of plant and animal matter; improves soil structure, water retention, and fertility." },
          { term: "Parent Material", definition: "The underlying geological material (bedrock or sediment) from which soil develops through weathering and organic accumulation over thousands of years." },
          { term: "Loam", definition: "Soil with a roughly equal mix of sand, silt, and clay; considered ideal for agriculture because it drains well while retaining sufficient moisture and nutrients." },
          { term: "Soil Texture", definition: "The relative proportions of sand, silt, and clay particles in soil; determines drainage, aeration, nutrient retention, and suitability for different uses." },
        ],
      },
      {
        name: "Soil Physical Properties",
        terms: [
          { term: "Permeability", definition: "The ability of soil or rock to transmit water; high permeability (sandy soils) allows rapid drainage; low permeability (clay soils) leads to waterlogging." },
          { term: "Porosity", definition: "The percentage of soil or rock volume made up of open pore spaces; high porosity allows more water and air storage, supporting roots and soil organisms." },
          { term: "Water Holding Capacity", definition: "The amount of water soil can retain against gravity after excess drains away; critical for plant survival, especially between rain events." },
          { term: "Soil Fertility", definition: "The ability of soil to supply essential nutrients (N, P, K, and micronutrients) in plant-available forms; determined by organic matter, pH, and mineral content." },
        ],
      },
      {
        name: "Soil Profile & Horizons",
        terms: [
          { term: "Soil Profile", definition: "A vertical cross-section of soil from surface to bedrock, showing distinct horizontal layers (horizons) that reflect the history of soil formation." },
          { term: "Soil Horizons (O, A, B, C)", definition: "Distinct layers in a soil profile: O = organic litter, A = topsoil (most fertile), B = subsoil (accumulation zone), C = weathered parent material." },
          { term: "Zone of Illuviation", definition: "The B horizon, where minerals and organic matter leached from the upper horizons accumulate; often enriched in clay, iron oxides, and carbonates." },
          { term: "Weathering", definition: "The physical and chemical breakdown of parent material that initiates soil formation; determines mineral content and soil texture over time." },
        ],
      },
      {
        name: "Soil–Water Zones",
        terms: [
          { term: "Zone of Aeration", definition: "The unsaturated soil zone above the water table where pore spaces contain both air and water; the root zone for most terrestrial plants." },
          { term: "Zone of Saturation", definition: "The zone below the water table where all pore spaces are completely filled with water; the location of groundwater stored in aquifers." },
          { term: "Infiltration", definition: "The downward movement of surface water into soil; rate depends on soil texture, porosity, and whether the soil is already saturated." },
          { term: "Soil Texture Triangle", definition: "A triangular diagram used to classify soil type based on the percentages of sand, silt, and clay; the standard tool for determining loam, clay, sandy loam, etc." },
        ],
      },
    ],
  },

  // 4.4 Water & Groundwater Systems
  {
    id: "envsci-unit-4-4",
    unit: 4,
    puzzle: 4,
    title: "Earth Systems & Resources",
    subject: "Env Science",
    groups: [
      {
        name: "Groundwater Storage",
        terms: [
          { term: "Aquifer", definition: "An underground layer of permeable rock, sediment, or soil that stores and transmits groundwater; the source of water for wells and springs." },
          { term: "Groundwater", definition: "Water stored underground in the saturated zone of soil and rock; fed by infiltration; accounts for about 30% of Earth's freshwater." },
          { term: "Natural Recharge", definition: "The process by which precipitation and surface water percolate through soil to replenish an aquifer; recharge rates are often much slower than extraction rates." },
          { term: "Zone of Saturation", definition: "The underground zone where all pore spaces are filled with water; the upper boundary is the water table; the location of groundwater reserves." },
        ],
      },
      {
        name: "Water Movement Through Land",
        terms: [
          { term: "Infiltration", definition: "The movement of surface water down through soil into groundwater; reduced by compaction, impervious surfaces, and saturated soil." },
          { term: "Watershed", definition: "An area of land that drains into a common body of water; the fundamental unit for managing water resources and tracking pollution sources." },
          { term: "Erosion", definition: "The transport of soil and rock by water, wind, or ice; degrades land productivity, silts up waterways, and reduces aquifer recharge." },
          { term: "Permeability", definition: "The rate at which water moves through soil or rock; determines how quickly recharge occurs and how well an aquifer can store and yield water." },
        ],
      },
      {
        name: "Ocean Circulation & Movement",
        terms: [
          { term: "Currents", definition: "Large-scale, continuous movements of ocean water driven by wind, temperature, and salinity; redistribute heat globally and influence regional climates." },
          { term: "Upwelling", definition: "The rising of cold, nutrient-rich water from ocean depths to the surface; drives some of the world's most productive fisheries along coastlines." },
          { term: "Sea Floor Spreading", definition: "The process where new oceanic crust is created at divergent boundaries as magma wells up; drives plate movement and shapes ocean basin depth and circulation." },
          { term: "Convection Cell", definition: "Circular movement of water (or air) driven by density differences from heating and cooling; drives deep ocean circulation (thermohaline circulation)." },
        ],
      },
      {
        name: "Soil–Water Storage Properties",
        terms: [
          { term: "Zone of Aeration", definition: "The unsaturated zone above the water table; stores some water in pore spaces but also contains air; the zone through which recharge water passes." },
          { term: "Porosity", definition: "The percentage of open pore space in soil or rock; high porosity allows more water storage and faster recharge of aquifers." },
          { term: "Water Holding Capacity", definition: "The volume of water soil can hold against gravity; critical for recharge dynamics — low capacity means water moves quickly to the water table." },
          { term: "Loam", definition: "Soil with balanced sand, silt, and clay; moderate permeability and water holding capacity make it ideal for both agriculture and steady aquifer recharge." },
        ],
      },
    ],
  },

  // ── UNIT 5 · Land & Water Use ────────────────────────────────────────

  // 5.1 Agriculture & Food Production
  {
    id: "envsci-unit-5-1",
    unit: 5,
    puzzle: 1,
    title: "Land & Water Use",
    subject: "Env Science",
    groups: [
      {
        name: "Agricultural Systems",
        terms: [
          { term: "Industrialized Agriculture", definition: "Large-scale farming using machinery, synthetic fertilizers, pesticides, and high-yield varieties; produces large quantities but carries significant environmental costs." },
          { term: "Monoculture", definition: "Growing a single crop species across a large area; efficient and high-yield but depletes soil nutrients, increases erosion risk, and is highly vulnerable to pests and disease." },
          { term: "Subsistence Farming", definition: "Growing crops primarily to feed one's own family with little or no surplus; common in developing countries; low-tech and low environmental impact per acre." },
          { term: "Traditional Agriculture", definition: "Low-input farming relying on human labor, animal power, and simple tools; lower yields than industrialized methods but minimal fossil fuel use and chemical inputs." },
        ],
      },
      {
        name: "Irrigation Methods",
        terms: [
          { term: "Drip Irrigation", definition: "Delivers water directly to plant roots through small tubes; the most water-efficient irrigation method; minimizes evaporation, runoff, and soil salinization." },
          { term: "Furrow Irrigation", definition: "Water flows by gravity through channels between crop rows; simple and inexpensive but water-inefficient and promotes runoff and salinization." },
          { term: "Spray Irrigation", definition: "Overhead sprinkler systems distribute water across fields; more efficient than furrow irrigation but loses water to evaporation and can promote fungal disease." },
          { term: "Salinization", definition: "The buildup of salts in soil from evaporation of irrigation water; reduces soil fertility over time and can permanently render farmland unproductive." },
        ],
      },
      {
        name: "Nutritional Challenges",
        terms: [
          { term: "Malnutrition", definition: "A condition caused by an insufficient, excessive, or unbalanced diet; encompasses both undernutrition and overnutrition; affects billions worldwide." },
          { term: "Undernutrition", definition: "Insufficient intake of calories and/or essential nutrients; leads to stunted growth, weakened immunity, and increased susceptibility to disease." },
          { term: "Overnutrition", definition: "Excessive food intake, particularly of calories and unhealthy foods; leads to obesity, diabetes, and cardiovascular disease; increasingly common globally." },
          { term: "Kwashiorkor", definition: "Severe protein malnutrition most common in young children; causes swollen abdomen, muscle wasting, skin lesions, and impaired development." },
        ],
      },
      {
        name: "Industrialized Food System Issues",
        terms: [
          { term: "CAFOs", definition: "Concentrated Animal Feeding Operations; large industrial facilities housing thousands of animals in confined spaces; highly efficient but generate massive waste, pollution, and antibiotic resistance." },
          { term: "Factory Farming", definition: "Intensive industrialized animal agriculture in CAFOs; raises serious concerns about animal welfare, water pollution from waste, and the spread of antibiotic-resistant bacteria." },
          { term: "Famine", definition: "A severe, widespread food shortage resulting in mass malnutrition and starvation; caused by drought, conflict, crop failure, or distribution failures." },
          { term: "Food Security", definition: "The condition in which all people at all times have physical, social, and economic access to sufficient, safe, and nutritious food to maintain a healthy life." },
        ],
      },
    ],
  },

  // 5.2 Fishing, Forestry & Mining
  {
    id: "envsci-unit-5-2",
    unit: 5,
    puzzle: 2,
    title: "Land & Water Use",
    subject: "Env Science",
    groups: [
      {
        name: "Commercial Fishing Methods",
        terms: [
          { term: "Bottom Trawling", definition: "Dragging weighted nets across the seafloor to catch fish; extremely destructive to benthic habitat structure and generates very high by-catch." },
          { term: "Gill Netting", definition: "Mesh nets suspended vertically in the water column that trap fish by their gills; can entangle non-target species including dolphins, sea turtles, and seabirds." },
          { term: "Long-Line Fishing", definition: "Setting lines of hundreds to thousands of baited hooks extending miles to catch open-ocean species; significant by-catch of sharks, seabirds, and sea turtles." },
          { term: "Purse-Seine Fishing", definition: "Encircling an entire fish school with a large net, then closing the bottom like a drawstring purse; highly efficient but can accidentally capture non-target species." },
        ],
      },
      {
        name: "Mining Methods",
        terms: [
          { term: "Open-Pit Mining", definition: "Excavating a large open hole to extract ore near the surface; cheaper than underground mining but causes massive land disturbance, erosion, and habitat loss." },
          { term: "Subsurface Mining", definition: "Extracting minerals through underground tunnels; less surface disturbance than open-pit but risks cave-ins, flooding, and toxic gas exposure for workers." },
          { term: "Strip Mining", definition: "Removing overlying rock and soil (overburden) in strips to expose shallow ore or coal seams; devastates surface ecosystems and produces large waste piles." },
          { term: "Mountaintop Removal", definition: "Blasting away mountain summits to access coal seams below; destroys entire ecosystems, buries streams under debris, and contaminates water supplies." },
        ],
      },
      {
        name: "Forestry Practices",
        terms: [
          { term: "Clear Cutting", definition: "Removing all trees from an area at once; maximizes short-term timber yield but destroys habitat, causes severe erosion, and eliminates wildlife diversity." },
          { term: "Selective Cutting", definition: "Removing only mature, damaged, or specific trees while leaving others; less disruptive than clear cutting; can support sustainable timber production." },
          { term: "Strip Cutting", definition: "Clear-cutting in alternating narrow strips to allow natural regeneration from adjacent uncut forest; a compromise between yield and ecological recovery." },
          { term: "Second-Growth Forests", definition: "Forests that regrow after logging or clearing; typically less structurally complex and biodiverse than old-growth forests but still valuable ecologically." },
        ],
      },
      {
        name: "Overexploitation & Waste",
        terms: [
          { term: "Overfishing", definition: "Harvesting fish faster than populations can reproduce; leads to stock collapse; affects most of the world's major fisheries and threatens marine food webs." },
          { term: "By-catch", definition: "Non-target species accidentally caught and typically discarded dead during commercial fishing; a major driver of marine biodiversity loss." },
          { term: "Tailings", definition: "Waste rock and processed material remaining after ore extraction; often contain toxic heavy metals and acid-generating minerals that can contaminate soil and water." },
          { term: "Overburden", definition: "The rock and soil removed to expose ore in surface mining; disposal creates massive waste piles that alter drainage patterns and bury wildlife habitat." },
        ],
      },
    ],
  },

  // 5.3 Sustainable Land Use
  {
    id: "envsci-unit-5-3",
    unit: 5,
    puzzle: 3,
    title: "Land & Water Use",
    subject: "Env Science",
    groups: [
      {
        name: "Sustainable Farming Techniques",
        terms: [
          { term: "Crop Rotation", definition: "Alternating different crops in the same field each season; restores soil nutrients, breaks pest and disease cycles, and reduces dependence on synthetic fertilizers." },
          { term: "Contour Farming", definition: "Plowing and planting along the contour lines of slopes rather than up and down; reduces runoff velocity and dramatically decreases soil erosion." },
          { term: "Conservation-Tillage Farming", definition: "Minimizing soil disturbance by leaving crop residue on fields; reduces erosion, retains moisture, improves soil structure, and stores more carbon." },
          { term: "No-till Agriculture", definition: "Planting crops without plowing; preserves soil structure and organisms, reduces erosion, retains carbon, and cuts fuel costs — at the cost of increased herbicide use." },
        ],
      },
      {
        name: "Alternative Agricultural Methods",
        terms: [
          { term: "Agroforestry", definition: "Integrating trees with crops and/or livestock on the same land; improves soil health, provides shade and windbreaks, increases biodiversity, and sequesters carbon." },
          { term: "Polyculture", definition: "Growing multiple crop species together in the same space; mimics natural ecosystems, reduces pest pressure, improves soil health, and increases resilience." },
          { term: "Organic Farming", definition: "Agriculture without synthetic pesticides or fertilizers; uses natural inputs, crop rotation, composting, and biological pest control to maintain soil health." },
          { term: "Integrated Pest Management (IPM)", definition: "A strategy combining biological, cultural, physical, and chemical methods to control pests while minimizing pesticide use, cost, and environmental harm." },
        ],
      },
      {
        name: "Sustainable Resource Management",
        terms: [
          { term: "Sustainable Forestry", definition: "Harvesting timber at rates that allow forests to regenerate naturally; maintains biodiversity, watershed function, carbon storage, and long-term timber supply." },
          { term: "Rotational Grazing", definition: "Moving livestock between pastures on a schedule to allow vegetation recovery; prevents overgrazing, maintains soil health, and sustains grassland biodiversity." },
          { term: "Shelterbelts", definition: "Rows of trees or shrubs planted alongside fields to reduce wind speed, prevent wind erosion, protect crops, and provide wildlife corridors (windbreaks)." },
          { term: "Seed Bank", definition: "A facility that stores seeds of diverse crop and wild plant varieties; preserves genetic diversity against crop failures, disease, climate change, and extinction." },
        ],
      },
      {
        name: "Land Use & Policy Concepts",
        terms: [
          { term: "Sustainable Agriculture", definition: "Farming that maintains long-term soil fertility, biodiversity, water quality, and productivity without depleting natural resources or harming future generations." },
          { term: "Green Revolution", definition: "Mid-20th-century transformation of agriculture through high-yield crop varieties, irrigation expansion, and synthetic fertilizers; dramatically increased food production but raised environmental concerns." },
          { term: "Ecological Footprint", definition: "A measure of the land and water area required to produce the resources a person or population consumes and to absorb the resulting waste; tracks sustainability." },
          { term: "Tragedy of the Commons", definition: "The overexploitation of shared, unregulated resources because individuals acting in self-interest deplete the resource to the detriment of everyone (e.g., overfishing, overgrazing)." },
        ],
      },
    ],
  },

  // ── UNIT 6 · Energy Resources & Consumption ─────────────────────────

  // 6.1 Fossil Fuels
  {
    id: "envsci-unit-6-1",
    unit: 6,
    puzzle: 1,
    title: "Energy Resources & Consumption",
    subject: "Env Science",
    groups: [
      {
        name: "Coal Types (Lowest → Highest Quality)",
        terms: [
          { term: "Peat", definition: "Partially decomposed organic matter; the first stage of coal formation; high moisture, low energy content; used as fuel in some regions (e.g., Ireland, Russia)." },
          { term: "Lignite", definition: "The lowest-grade, softest coal; high moisture content and low carbon; produces the most pollution per unit of energy; also called brown coal." },
          { term: "Bituminous Coal", definition: "The most abundant and widely used coal; moderate to high carbon content; primary fuel for electricity generation and steel (coke) production." },
          { term: "Anthracite Coal", definition: "The highest-grade, hardest coal; greatest carbon content and energy output; burns cleanest of all coal types but is the least abundant." },
        ],
      },
      {
        name: "Oil & Gas Fundamentals",
        terms: [
          { term: "Crude Oil", definition: "Raw, unrefined petroleum extracted from underground reservoirs; refined into gasoline, diesel, jet fuel, heating oil, and petrochemicals." },
          { term: "Natural Gas", definition: "A fossil fuel composed primarily of methane (CH₄); the cleanest-burning fossil fuel; used for heating, electricity generation, and industrial processes." },
          { term: "Hydrocarbons", definition: "Organic compounds composed only of hydrogen and carbon; the chemical building blocks of all fossil fuels — coal, oil, and natural gas." },
          { term: "Fossil Fuels", definition: "Fuels formed from the compressed, heated remains of ancient organisms over millions of years; include coal, oil, and natural gas; nonrenewable on a human timescale." },
        ],
      },
      {
        name: "Unconventional Fossil Fuels",
        terms: [
          { term: "Hydraulic Fracturing (Fracking)", definition: "Injecting high-pressure fluid into rock to fracture it and release trapped natural gas or oil; controversial due to water use, potential groundwater contamination, and induced earthquakes." },
          { term: "Oil Sands (Tar Sands)", definition: "Deposits of sand or clay saturated with heavy crude oil (bitumen); require energy-intensive strip mining and processing; major source in Alberta, Canada." },
          { term: "Oil Shale", definition: "Sedimentary rock containing kerogen, a solid organic material that can be converted to oil by heating; large global deposits but very energy-intensive to process." },
          { term: "Shale Oil", definition: "Liquid petroleum extracted from shale rock formations using hydraulic fracturing; drove the U.S. energy boom after 2010 and made the U.S. the world's top oil producer." },
        ],
      },
      {
        name: "Oil Industry Concepts",
        terms: [
          { term: "Fractional Distillation", definition: "The refinery process of separating crude oil into its component products (gasoline, diesel, jet fuel, kerosene) based on their different boiling points." },
          { term: "Petrochemicals", definition: "Chemical products derived from petroleum or natural gas; the raw materials for plastics, synthetic fertilizers, pesticides, pharmaceuticals, and synthetic fibers." },
          { term: "Peak Oil", definition: "The point at which global oil production reaches its maximum rate and begins to permanently decline; debate continues over whether it has occurred or is imminent." },
          { term: "OPEC", definition: "Organization of the Petroleum Exporting Countries; a cartel of major oil-producing nations that coordinates production levels to influence global oil prices and revenues." },
        ],
      },
    ],
  },

  // 6.2 Nuclear Energy
  {
    id: "envsci-unit-6-2",
    unit: 6,
    puzzle: 2,
    title: "Energy Resources & Consumption",
    subject: "Env Science",
    groups: [
      {
        name: "Nuclear Processes",
        terms: [
          { term: "Nuclear Fission", definition: "Splitting a heavy atomic nucleus (e.g., Uranium-235) into smaller fragments, releasing enormous energy; the process powering all commercial nuclear reactors." },
          { term: "Nuclear Fusion", definition: "Joining two light nuclei (e.g., hydrogen isotopes) to form a heavier nucleus, releasing even more energy than fission; powers the sun but not yet commercially viable on Earth." },
          { term: "Radioactive Decay", definition: "The spontaneous emission of radiation from an unstable atomic nucleus as it transforms into a more stable form; produces alpha, beta, or gamma radiation." },
          { term: "Chain Reaction", definition: "A self-sustaining sequence of fission events in which neutrons released from one split nucleus trigger additional fissions; controlled in reactors, uncontrolled in bombs." },
        ],
      },
      {
        name: "Nuclear Reactor Components",
        terms: [
          { term: "Fuel Rod", definition: "Metal tubes containing nuclear fuel pellets (usually enriched uranium) that undergo fission inside a reactor core; must be replaced when depleted." },
          { term: "Control Rod", definition: "Rods made of neutron-absorbing material (boron, cadmium) inserted into a reactor to slow or stop the chain reaction by absorbing neutrons." },
          { term: "Light Water Nuclear Reactor", definition: "The most common nuclear reactor type; uses ordinary (light) water as both coolant and moderator to sustain and control the fission chain reaction." },
          { term: "Breeder Nuclear Fission Reactor", definition: "A reactor that produces more fissile material than it consumes by converting non-fissile isotopes; extends fuel supply but increases proliferation risk." },
        ],
      },
      {
        name: "Radioactivity Concepts",
        terms: [
          { term: "Isotope", definition: "Atoms of the same element with the same number of protons but different numbers of neutrons; some isotopes are radioactive (e.g., Carbon-14, Uranium-235, Iodine-131)." },
          { term: "Uranium-235", definition: "The fissile isotope of uranium used as fuel in most nuclear reactors; makes up only 0.7% of natural uranium and must be enriched to ~3–5% for reactor use." },
          { term: "Gamma Rays", definition: "High-energy electromagnetic radiation emitted during radioactive decay; the most penetrating form of ionizing radiation; requires dense shielding such as lead or thick concrete." },
          { term: "Radiation", definition: "Energy emitted as electromagnetic waves or particles from radioactive atoms; ionizing radiation carries enough energy to remove electrons from atoms and damage DNA." },
        ],
      },
      {
        name: "Nuclear Waste & Challenges",
        terms: [
          { term: "High-Level Radioactive Waste", definition: "Highly radioactive spent nuclear fuel and weapons materials; remains dangerous for tens of thousands of years; requires deep geological disposal." },
          { term: "Low-Level Radioactive Waste", definition: "Mildly radioactive materials (contaminated clothing, tools, medical equipment) from nuclear plants and hospitals; less hazardous but still requires regulated disposal." },
          { term: "Decommissioning", definition: "The safe shutdown, decontamination, and dismantling of a nuclear plant at the end of its operational life; a decades-long, expensive process." },
          { term: "Estimated Reserves", definition: "The total calculated quantity of a nonrenewable resource (coal, oil, uranium) including known deposits and predicted undiscovered quantities; uncertain by nature." },
        ],
      },
    ],
  },

  // 6.3 Renewable Energy
  {
    id: "envsci-unit-6-3",
    unit: 6,
    puzzle: 3,
    title: "Energy Resources & Consumption",
    subject: "Env Science",
    groups: [
      {
        name: "Solar Energy Technologies",
        terms: [
          { term: "Photovoltaic Cells (PV)", definition: "Semiconductor devices that convert sunlight directly into electricity; used in rooftop solar panels and utility-scale solar farms; costs have fallen dramatically." },
          { term: "Active Solar Heating System", definition: "Uses mechanical equipment — pumps, fans, and solar collectors — to capture solar energy and actively distribute heat for water or space heating." },
          { term: "Passive Solar Heating System", definition: "Building design that uses orientation, large south-facing windows, and thermal mass to naturally collect and store solar heat without any mechanical systems." },
          { term: "Solar Power Tower", definition: "A concentrating solar power (CSP) system using a field of mirrors (heliostats) to focus sunlight onto a central tower, producing steam to drive a turbine." },
        ],
      },
      {
        name: "Other Renewable Sources",
        terms: [
          { term: "Wind Turbine", definition: "A device that converts the kinetic energy of wind into electricity through rotating blades connected to a generator; the fastest-growing global energy source." },
          { term: "Hydroelectric Power", definition: "Electricity generated by capturing the energy of flowing or falling water through a dam or run-of-river system; the largest source of renewable electricity worldwide." },
          { term: "Geothermal Energy", definition: "Heat energy from the Earth's interior used to generate electricity in geothermal plants or directly for heating buildings; reliable and available 24/7." },
          { term: "Tidal Energy", definition: "Electricity generated by harnessing the predictable rise and fall of ocean tides; limited to coastal areas with large tidal ranges but extremely reliable." },
        ],
      },
      {
        name: "Biofuels",
        terms: [
          { term: "Biomass Energy", definition: "Energy derived from burning or chemically converting biological materials (wood, crop waste, manure); the oldest energy source; carbon-neutral only if sustainably managed." },
          { term: "Biofuel", definition: "Liquid or gas fuel produced from biological materials; a renewable substitute for petroleum fuels; includes ethanol and biodiesel." },
          { term: "Ethanol", definition: "Alcohol fuel produced by fermenting sugars from corn, sugarcane, or switchgrass; blended with gasoline (E10, E85) in the U.S. to reduce petroleum dependence." },
          { term: "Biodiesel", definition: "Fuel made from vegetable oils, animal fats, or recycled cooking grease; can be used in diesel engines with little modification; lower emissions than petroleum diesel." },
        ],
      },
      {
        name: "Energy Resource Concepts",
        terms: [
          { term: "Renewable Energy", definition: "Energy from sources naturally replenished on a human timescale — sun, wind, water, geothermal heat, and biomass; key to reducing fossil fuel dependence." },
          { term: "Nonrenewable Energy", definition: "Energy from finite sources that cannot be replenished on a human timescale — coal, oil, natural gas, and nuclear; supply about 80% of current global energy." },
          { term: "Hydrogen Fuel Cell", definition: "A device that generates electricity through the electrochemical reaction of hydrogen and oxygen; emits only water vapor; a promising clean energy carrier." },
          { term: "CAFE Standards", definition: "Corporate Average Fuel Economy standards; U.S. regulations requiring automakers to meet fleet-wide fuel efficiency targets, driving development of more efficient and electric vehicles." },
        ],
      },
    ],
  },

  // 6.4 Energy Efficiency & Conservation
  {
    id: "envsci-unit-6-4",
    unit: 6,
    puzzle: 4,
    title: "Energy Resources & Consumption",
    subject: "Env Science",
    groups: [
      {
        name: "Lighting Efficiency",
        terms: [
          { term: "LED Lightbulb", definition: "Light-emitting diode bulb; uses 75–80% less energy than incandescent and lasts 25× longer; now the most energy-efficient and cost-effective common lighting technology." },
          { term: "Compact Fluorescent Light Bulb (CFL)", definition: "Uses ~75% less energy than incandescent; lasts 10× longer; contains small amounts of mercury requiring special disposal; largely superseded by LEDs." },
          { term: "Incandescent Bulb", definition: "Traditional bulb using a heated tungsten filament; converts only ~10% of energy to light, wasting 90% as heat; being phased out globally in favor of efficient alternatives." },
          { term: "Energy Efficiency", definition: "Using less energy to accomplish the same task; improvements in efficiency reduce costs and emissions without sacrificing service; often the cheapest clean energy option." },
        ],
      },
      {
        name: "Green Building Technologies",
        terms: [
          { term: "LEED Program", definition: "Leadership in Energy and Environmental Design; a green building certification rating buildings on energy use, water efficiency, materials, site, and indoor air quality." },
          { term: "Green Roof", definition: "A roof partially or fully covered with vegetation and growing medium; insulates the building, reduces stormwater runoff, mitigates urban heat island effect, and provides habitat." },
          { term: "Weather Stripping", definition: "Sealing material applied around doors and windows to prevent air infiltration; one of the cheapest and most effective ways to reduce heating and cooling energy use." },
          { term: "Multi-Paned Windows", definition: "Windows with two or three glass panes separated by insulating gas; significantly reduce heat loss in winter and heat gain in summer compared to single-pane windows." },
        ],
      },
      {
        name: "Efficient Vehicle Technologies",
        terms: [
          { term: "Hybrid Vehicle", definition: "Uses both a gasoline engine and an electric motor; battery charged by regenerative braking; significantly more fuel-efficient than conventional vehicles in city driving." },
          { term: "Plug-In Hybrid Vehicle", definition: "A hybrid that can also be charged from an external electrical outlet; can operate on electricity alone for short trips, dramatically reducing gasoline use." },
          { term: "Battery Electric Vehicle (BEV)", definition: "A vehicle powered entirely by electricity stored in rechargeable batteries; zero tailpipe emissions; range and charging infrastructure availability are the main adoption barriers." },
          { term: "Cogeneration", definition: "Simultaneously generating electricity and capturing waste heat for heating or industrial use (combined heat and power); raises total energy efficiency from ~35% to ~80%." },
        ],
      },
      {
        name: "Energy Conservation Measures",
        terms: [
          { term: "Energy Conservation", definition: "Reducing total energy consumption by changing behavior or eliminating unnecessary use; considered the cheapest, fastest way to reduce carbon emissions and energy costs." },
          { term: "Geothermal Heat Pump", definition: "Uses stable underground temperatures to heat buildings in winter and cool them in summer; 3–5× more efficient than conventional HVAC systems; works anywhere." },
          { term: "Tankless Hot Water Heater", definition: "Heats water on demand rather than maintaining a full tank; uses 24–34% less energy than conventional storage water heaters; eliminates standby heat loss." },
          { term: "Low-Quality Energy", definition: "Energy that is diffuse, low-temperature, or otherwise less useful for doing work (e.g., waste heat); high-quality energy (electricity, combustion) degrades to low-quality with use." },
        ],
      },
    ],
  },

  // 7.1 Air Pollutants & Sources
  {
    id: "envsci-unit-7-1",
    unit: 7,
    puzzle: 1,
    title: "Atmospheric Pollution",
    subject: "Env Science",
    groups: [
      {
        name: "Combustion Pollutants",
        terms: [
          { term: "Carbon Monoxide", definition: "Colorless, odorless gas produced by incomplete combustion; binds to hemoglobin and reduces blood's oxygen-carrying capacity; major vehicle emission." },
          { term: "Sulfur Dioxide", definition: "Gas released when sulfur-containing fossil fuels (especially coal) are burned; irritates airways and is a precursor to acid rain and sulfate particulates." },
          { term: "Nitrogen Dioxide", definition: "Reddish-brown gas from high-temperature combustion in vehicles and power plants; reacts in sunlight to form smog; irritates lung tissue." },
          { term: "Particulate Matter", definition: "Tiny solid or liquid particles suspended in air; PM2.5 penetrates deep into lungs, causing cardiovascular and respiratory disease; from combustion, dust, and smoke." },
        ],
      },
      {
        name: "Pollution Sources",
        terms: [
          { term: "Point Source Pollution", definition: "Air pollution that comes from a single, identifiable location such as a smokestack or exhaust pipe; easier to regulate than non-point sources." },
          { term: "Non-Point Source Pollution", definition: "Air pollution that comes from many diffuse sources — agricultural dust, vehicle exhaust across a city, wildfire smoke; harder to regulate or control." },
          { term: "Stationary Source", definition: "Fixed, immobile pollution source like a power plant, factory, or refinery; regulated under the Clean Air Act through emissions permits and technology standards." },
          { term: "Mobile Source", definition: "Moving source of air pollution — cars, trucks, planes, ships; collectively the largest contributor to urban air pollution in developed countries." },
        ],
      },
      {
        name: "Health Effects",
        terms: [
          { term: "Respiratory Irritation", definition: "Inflammation and damage to the airways and lung tissue caused by exposure to ozone, particulates, sulfur dioxide, or other air pollutants." },
          { term: "Cardiovascular Disease", definition: "Long-term exposure to fine particulate matter and other air pollutants increases risk of heart attack, stroke, and artery hardening." },
          { term: "Lung Cancer", definition: "Chronic exposure to air pollutants including particulate matter, benzene, and radon significantly increases the risk of malignant lung tumors." },
          { term: "Asthma", definition: "Chronic inflammatory airway condition triggered or worsened by air pollutants including ozone, particulates, and sulfur dioxide; affects hundreds of millions worldwide." },
        ],
      },
      {
        name: "Pollution Control Technology",
        terms: [
          { term: "Catalytic Converter", definition: "Device in vehicle exhaust systems that converts CO, NOx, and unburned hydrocarbons into less harmful CO₂, N₂, and water using platinum/palladium catalysts." },
          { term: "Scrubber", definition: "Industrial pollution control device that removes SO₂ and particulates from power plant exhaust by passing gases through water or a chemical spray before emission." },
          { term: "Electrostatic Precipitator", definition: "Device that removes fly ash and particulates from industrial exhaust by giving particles an electric charge and collecting them on oppositely charged plates." },
          { term: "Clean Air Act", definition: "U.S. federal law (1970, amended 1990) that authorizes EPA to set and enforce air quality standards for six criteria pollutants and regulate emissions from major sources." },
        ],
      },
    ],
  },

  // 7.2 Smog & Ozone
  {
    id: "envsci-unit-7-2",
    unit: 7,
    puzzle: 2,
    title: "Atmospheric Pollution",
    subject: "Env Science",
    groups: [
      {
        name: "Photochemical Smog Formation",
        terms: [
          { term: "Volatile Organic Compounds (VOCs)", definition: "Carbon-containing gases from vehicle exhaust, industrial solvents, and vegetation; react with NOx in sunlight to form ozone and photochemical smog." },
          { term: "Nitrogen Oxides (NOx)", definition: "Gases produced by high-temperature combustion; react with VOCs in sunlight to form ground-level ozone and photochemical smog; also cause acid rain." },
          { term: "Temperature Inversion", definition: "Atmospheric condition where warm air traps cooler polluted air near the ground, preventing dispersion; greatly intensifies smog episodes in cities like Los Angeles." },
          { term: "PAN", definition: "Peroxyacetyl nitrate; a secondary pollutant formed in photochemical smog from VOC-NOx reactions; a powerful lung irritant and eye irritant at low concentrations." },
        ],
      },
      {
        name: "Stratospheric Ozone",
        terms: [
          { term: "Stratosphere", definition: "Layer of Earth's atmosphere 12–50 km above the surface; contains the ozone layer that absorbs harmful UV-B and UV-C radiation from the sun." },
          { term: "Ozone Layer", definition: "Region of the stratosphere with high ozone (O₃) concentration; absorbs 97–99% of the sun's high-frequency UV radiation, protecting life at Earth's surface." },
          { term: "Ozone Hole", definition: "Seasonal thinning of the stratospheric ozone layer over Antarctica (and to lesser extent the Arctic); caused by halogen-containing pollutants; monitored since the 1980s." },
          { term: "UV-B Radiation", definition: "Medium-wavelength ultraviolet radiation partially blocked by the ozone layer; increased UV-B from ozone depletion causes skin cancer, cataracts, and harm to phytoplankton." },
        ],
      },
      {
        name: "Ozone-Depleting Substances",
        terms: [
          { term: "Chlorofluorocarbons (CFCs)", definition: "Synthetic compounds once used in refrigerants, aerosols, and foam; release chlorine in the stratosphere, which catalytically destroys thousands of ozone molecules per atom." },
          { term: "Halons", definition: "Bromine-containing compounds used in fire suppression systems; extremely potent ozone depletors — one bromine atom destroys ~40× more ozone than one chlorine atom." },
          { term: "Methyl Bromide", definition: "Agricultural fumigant and ozone-depleting substance; releases bromine in the stratosphere; its production and use has been largely phased out under the Montreal Protocol." },
          { term: "Montreal Protocol", definition: "1987 international treaty phasing out production and use of ozone-depleting substances; considered the most successful global environmental agreement; ozone layer is slowly recovering." },
        ],
      },
      {
        name: "Ground-Level Ozone Effects",
        terms: [
          { term: "Ground-Level Ozone", definition: "A secondary pollutant formed when VOCs and NOx react in sunlight; a key component of photochemical smog; damages lung tissue, reduces crop yields, and harms ecosystems." },
          { term: "Troposphere", definition: "Lowest layer of the atmosphere (0–12 km); where weather occurs and humans live; ground-level ozone here is a harmful pollutant, not a protective shield." },
          { term: "Air Quality Index (AQI)", definition: "EPA scale from 0–500 measuring daily air quality; values above 100 are unhealthy for sensitive groups; accounts for ozone, particulates, CO, SO₂, and NO₂ levels." },
          { term: "Smog Alert", definition: "Public health warning issued when ground-level ozone or particulate levels exceed safe thresholds; advises sensitive populations to limit outdoor activity." },
        ],
      },
    ],
  },

  // 7.3 Acid Deposition & Indoor Air Pollution
  {
    id: "envsci-unit-7-3",
    unit: 7,
    puzzle: 3,
    title: "Atmospheric Pollution",
    subject: "Env Science",
    groups: [
      {
        name: "Acid Deposition Causes",
        terms: [
          { term: "Acid Deposition", definition: "The wet or dry deposit of acidic compounds (H₂SO₄, HNO₃) from the atmosphere onto Earth's surface; also called acid rain when in liquid form." },
          { term: "Wet Deposition", definition: "Acid precipitation in the form of rain, snow, sleet, or fog; forms when SO₂ and NOx dissolve in atmospheric water to form sulfuric and nitric acid." },
          { term: "Dry Deposition", definition: "Acidic gases and particles settling on surfaces without precipitation; can then be washed into ecosystems by rain; especially damaging to building materials." },
          { term: "pH Scale", definition: "Logarithmic scale 0–14 measuring acidity; natural rain is pH ~5.6 due to CO₂; acid rain typically pH 4–4.5; a drop of one unit = 10× more acidic." },
        ],
      },
      {
        name: "Effects of Acid Rain",
        terms: [
          { term: "Lake Acidification", definition: "Lowering of lake pH by acid deposition; destroys fish, amphibians, and aquatic invertebrates; Adirondack and Scandinavian lakes were severely affected in the 20th century." },
          { term: "Soil Leaching", definition: "Acid deposition strips essential nutrients (calcium, magnesium) from soil and releases toxic aluminum into soil water, weakening trees and making them vulnerable to disease." },
          { term: "Forest Decline", definition: "Widespread dieback of trees, especially at high elevations, caused by acid deposition stripping nutrients from soil and needles; documented in the Appalachians and Black Forest." },
          { term: "Cultural Eutrophication", definition: "Excessive nutrient enrichment of water bodies from human activities — nitrogen from acid deposition contributes to this by fertilizing coastal and freshwater ecosystems." },
        ],
      },
      {
        name: "Indoor Air Pollutants",
        terms: [
          { term: "Radon", definition: "Naturally occurring radioactive gas from uranium decay in soil and rock; seeps into buildings through foundations; the second leading cause of lung cancer in the U.S." },
          { term: "Carbon Monoxide (Indoor)", definition: "Produced by faulty gas stoves, heaters, and vehicles in garages; colorless, odorless; binds to hemoglobin; leading cause of accidental poisoning deaths in the U.S." },
          { term: "Asbestos", definition: "Fibrous silicate mineral once used in insulation and fireproofing; microscopic fibers, when inhaled, cause mesothelioma and asbestosis; banned in most countries." },
          { term: "Formaldehyde", definition: "VOC off-gassed by pressed wood products, carpets, and adhesives in buildings; causes eye and throat irritation; classified as a human carcinogen by IARC." },
        ],
      },
      {
        name: "Indoor Pollution Sources",
        terms: [
          { term: "Secondhand Smoke", definition: "Tobacco smoke in indoor environments containing hundreds of toxic and carcinogenic compounds; major source of indoor PM2.5 and VOCs; causes cancer and heart disease in non-smokers." },
          { term: "Sick Building Syndrome", definition: "Condition where building occupants experience acute health effects linked to time spent inside; caused by poor ventilation, mold, VOCs, and other indoor pollutants." },
          { term: "Volatile Organic Compounds (Indoor)", definition: "Carbon-containing gases emitted by paints, cleaning products, furniture, and building materials; many are carcinogenic; indoor concentrations often 2–5× higher than outdoors." },
          { term: "Biological Contaminants", definition: "Indoor air pollutants including mold spores, dust mites, pet dander, and bacteria; thrive in poorly ventilated, damp buildings; trigger allergies and asthma." },
        ],
      },
    ],
  },

  // 8.1 Water Pollution Sources & Quality
  {
    id: "envsci-unit-8-1",
    unit: 8,
    puzzle: 1,
    title: "Aquatic & Terrestrial Pollution",
    subject: "Env Science",
    groups: [
      {
        name: "Types of Water Pollutants",
        terms: [
          { term: "Pathogens", definition: "Disease-causing organisms including bacteria, viruses, and protozoa that enter water through untreated sewage and animal waste; cause cholera, typhoid, and dysentery." },
          { term: "Nutrients (Water)", definition: "Nitrogen and phosphorus compounds from fertilizers and sewage; the primary drivers of eutrophication in lakes, rivers, and coastal zones." },
          { term: "Toxic Chemicals", definition: "Industrial pollutants including pesticides, solvents, and heavy metals that persist in the environment and bioaccumulate in food chains; regulated under CERCLA and RCRA." },
          { term: "Sediment", definition: "Soil particles eroded into waterways by agriculture and construction; increases turbidity, smothers aquatic habitats, and carries attached nutrients and pesticides." },
        ],
      },
      {
        name: "Sources of Water Pollution",
        terms: [
          { term: "Agricultural Runoff", definition: "The largest source of water pollution in the U.S.; carries excess nitrogen, phosphorus, pesticides, and sediment from farms into streams and groundwater." },
          { term: "Industrial Discharge", definition: "Release of chemical, thermal, or toxic pollutants from factories and processing plants into water bodies; regulated under NPDES permits from the Clean Water Act." },
          { term: "Combined Sewer Overflow", definition: "Release of untreated sewage mixed with stormwater during heavy rain when systems exceed capacity; a major source of pathogens and nutrient pollution in urban waterways." },
          { term: "Urban Stormwater", definition: "Rainwater running off paved surfaces picks up oil, pet waste, fertilizers, and litter; enters waterways through storm drains without treatment." },
        ],
      },
      {
        name: "Water Quality Indicators",
        terms: [
          { term: "Dissolved Oxygen (DO)", definition: "Amount of O₂ dissolved in water; healthy streams have 7–9 mg/L; values below 5 mg/L stress fish; near zero creates hypoxic dead zones." },
          { term: "Biological Oxygen Demand (BOD)", definition: "Measure of organic pollution; the amount of O₂ microbes need to decompose organic matter in water; high BOD indicates heavy organic pollution and low dissolved oxygen." },
          { term: "Turbidity", definition: "Cloudiness of water caused by suspended particles; reduces light penetration for aquatic plants; high turbidity indicates erosion, algal growth, or pollution." },
          { term: "Coliform Bacteria", definition: "Indicator organisms for fecal contamination in water; their presence signals potential pathogen contamination; used to assess drinking water and recreational water safety." },
        ],
      },
      {
        name: "Waterborne Diseases",
        terms: [
          { term: "Cholera", definition: "Severe diarrheal disease caused by Vibrio cholerae in contaminated water; can be fatal through dehydration; major risk in areas without clean water or sanitation infrastructure." },
          { term: "Typhoid Fever", definition: "Bacterial infection from Salmonella typhi in contaminated water or food; causes high fever and intestinal damage; controlled by water treatment and sanitation." },
          { term: "Giardia", definition: "Protozoan parasite in untreated water causing diarrheal illness; survives in cold, clear streams; resistant to chlorine but removed by filtration in water treatment." },
          { term: "Dysentery", definition: "Intestinal infection causing severe bloody diarrhea from bacteria or amoeba in contaminated water; a major cause of child mortality in developing countries." },
        ],
      },
    ],
  },

  // 8.2 Aquatic Pollution & Eutrophication
  {
    id: "envsci-unit-8-2",
    unit: 8,
    puzzle: 2,
    title: "Aquatic & Terrestrial Pollution",
    subject: "Env Science",
    groups: [
      {
        name: "Eutrophication Sequence",
        terms: [
          { term: "Nutrient Loading", definition: "Input of excess nitrogen and phosphorus into water bodies from fertilizers, sewage, and runoff; the trigger that sets off the eutrophication process." },
          { term: "Algal Bloom", definition: "Rapid proliferation of algae or cyanobacteria fueled by excess nutrients; blocks sunlight from submerged plants and sets up oxygen depletion when the bloom dies and decomposes." },
          { term: "Oxygen Depletion", definition: "Decomposers consume oxygen breaking down dead algae; dissolved oxygen crashes below levels fish and bottom-dwelling invertebrates need to survive." },
          { term: "Cultural Eutrophication", definition: "Human-accelerated eutrophication through excess nutrient inputs from agriculture, sewage, and urban runoff; far faster and more severe than natural eutrophication." },
        ],
      },
      {
        name: "Dead Zones",
        terms: [
          { term: "Hypoxia", definition: "Condition of critically low dissolved oxygen (<2 mg/L) in water; creates dead zones where most fish and invertebrates cannot survive; triggered by decomposition of algal blooms." },
          { term: "Dead Zone", definition: "Area of ocean or lake with oxygen too depleted to support most aquatic life; over 400 exist worldwide; size fluctuates seasonally with nutrient input." },
          { term: "Gulf of Mexico Dead Zone", definition: "The largest U.S. dead zone; caused by nitrogen runoff from Midwest corn and soybean farms draining down the Mississippi River; can exceed 20,000 km² in summer." },
          { term: "Harmful Algal Bloom (HAB)", definition: "Bloom of toxic algae or cyanobacteria producing poisons harmful to fish, wildlife, and humans; includes red tides from dinoflagellates and blue-green algae in freshwater." },
        ],
      },
      {
        name: "Ocean Pollution",
        terms: [
          { term: "Plastic Pollution", definition: "Non-biodegradable plastic debris in marine environments; harms wildlife through entanglement and ingestion; photodegrades into microplastics that enter food chains." },
          { term: "Microplastics", definition: "Plastic particles smaller than 5 mm from degradation of larger plastics, synthetic clothing fibers, and cosmetics; found throughout oceans, freshwater, and in organisms worldwide." },
          { term: "Ocean Acidification", definition: "Lowering of ocean pH as seawater absorbs excess atmospheric CO₂ forming carbonic acid; impairs shell and skeleton formation in mollusks, corals, and other calcifying organisms." },
          { term: "Thermal Pollution", definition: "Release of heated water from power plant cooling into waterways; reduces dissolved oxygen, disrupts aquatic ecosystems, and kills temperature-sensitive species near discharge points." },
        ],
      },
      {
        name: "Bioaccumulation & Spills",
        terms: [
          { term: "Bioaccumulation", definition: "Build-up of a toxin in an organism's tissues faster than it is excreted; fat-soluble pollutants like DDT, PCBs, and mercury bioaccumulate in fatty tissue." },
          { term: "Biomagnification", definition: "Increase in toxin concentration at each successive trophic level; top predators receive the highest doses — eagles, tuna, and orcas have the highest PCB and mercury burdens." },
          { term: "Oil Spill", definition: "Accidental release of petroleum into aquatic environments; coats seabirds and marine mammals, smothers benthic habitats, and can persist in sediments for decades." },
          { term: "Persistent Organic Pollutants (POPs)", definition: "Toxic chemicals that resist environmental degradation, bioaccumulate in food chains, and travel globally; includes DDT, PCBs, and dioxins; regulated by the Stockholm Convention." },
        ],
      },
    ],
  },

  // 8.3 Solid & Hazardous Waste
  {
    id: "envsci-unit-8-3",
    unit: 8,
    puzzle: 3,
    title: "Aquatic & Terrestrial Pollution",
    subject: "Env Science",
    groups: [
      {
        name: "Types of Solid Waste",
        terms: [
          { term: "Municipal Solid Waste (MSW)", definition: "Everyday trash from homes, businesses, schools, and institutions; Americans generate ~4–5 lbs per person per day; largest categories are food waste, paper, and plastics." },
          { term: "Electronic Waste (E-Waste)", definition: "Discarded computers, phones, and electronics; the fastest-growing waste stream; contains valuable recoverable metals and toxic substances including lead, cadmium, and mercury." },
          { term: "Industrial Solid Waste", definition: "Waste from manufacturing, mining, and industrial processes; far greater in volume than municipal solid waste; includes slag, ash, sludge, and chemical byproducts." },
          { term: "Agricultural Waste", definition: "Crop residues, animal manure, pesticide containers, and farm byproducts; manure lagoon failures and feedlot runoff are major sources of water and air pollution." },
        ],
      },
      {
        name: "Waste Disposal Methods",
        terms: [
          { term: "Sanitary Landfill", definition: "Engineered facility for solid waste disposal with clay and plastic liners to prevent leachate, leachate collection systems, and methane capture; the primary disposal method in the U.S." },
          { term: "Incineration", definition: "Burning solid waste at high temperatures to reduce volume by ~90%; can generate electricity but produces ash with concentrated toxic metals and air pollutants including dioxins." },
          { term: "Composting", definition: "Biological decomposition of organic waste into stable humus; diverts food and yard waste from landfills; produces useful soil amendment; reduces methane generation." },
          { term: "Open Dump", definition: "Uncontrolled waste disposal site without liners or management; contaminates groundwater, produces methane and odors, harbors pests; banned in the U.S. but common in lower-income countries." },
        ],
      },
      {
        name: "Hazardous Waste Law",
        terms: [
          { term: "RCRA", definition: "Resource Conservation and Recovery Act; U.S. law governing hazardous waste from cradle to grave — generation, transport, treatment, storage, and disposal." },
          { term: "CERCLA (Superfund)", definition: "Comprehensive Environmental Response, Compensation, and Liability Act; authorizes EPA to clean up contaminated sites and forces polluters to pay for remediation." },
          { term: "Love Canal", definition: "Neighborhood in Niagara Falls, NY built over a chemical waste dump; high rates of cancer and birth defects among residents catalyzed CERCLA legislation in 1980." },
          { term: "Brownfield", definition: "Abandoned or underused industrial or commercial property complicated by real or potential contamination; can be cleaned up and redeveloped for new use." },
        ],
      },
      {
        name: "Waste Reduction Hierarchy",
        terms: [
          { term: "Source Reduction", definition: "Preventing waste before it is created by using less material, designing longer-lasting products, and eliminating unnecessary packaging; the most preferred waste management strategy." },
          { term: "Reuse", definition: "Using products or materials multiple times before discarding; reduces resource consumption and waste generation without the energy cost of recycling or manufacturing." },
          { term: "Recycling", definition: "Processing used materials into new products; reduces raw material extraction, energy use, and landfill volume; effectiveness depends on collection systems and market demand." },
          { term: "Integrated Waste Management", definition: "Using a mix of strategies — source reduction, reuse, recycling, composting, and landfilling — to manage a community's solid waste as sustainably and cost-effectively as possible." },
        ],
      },
    ],
  },

  // 8.4 Remediation & Pollution Law
  {
    id: "envsci-unit-8-4",
    unit: 8,
    puzzle: 4,
    title: "Aquatic & Terrestrial Pollution",
    subject: "Env Science",
    groups: [
      {
        name: "Water Quality Laws",
        terms: [
          { term: "Clean Water Act", definition: "1972 U.S. law establishing water quality standards; regulates point source discharges through NPDES permits; set the goal of making all U.S. waters swimmable and fishable." },
          { term: "Safe Drinking Water Act", definition: "U.S. law setting EPA maximum contaminant levels for pollutants in public water supplies; requires treatment, monitoring, and consumer notification of violations." },
          { term: "NPDES Permit", definition: "National Pollutant Discharge Elimination System permit required for any facility releasing pollutants into U.S. waterways; specifies allowable pollutant types, amounts, and monitoring." },
          { term: "Maximum Contaminant Level (MCL)", definition: "EPA's enforceable limit for a specific contaminant in public drinking water; set as close to the health-based goal as is feasible given cost and available treatment technology." },
        ],
      },
      {
        name: "Remediation Techniques",
        terms: [
          { term: "Bioremediation", definition: "Use of microorganisms — bacteria, fungi, or algae — to break down or neutralize pollutants in contaminated soil and groundwater; cost-effective and minimally disruptive." },
          { term: "Phytoremediation", definition: "Use of plants to absorb, degrade, or immobilize contaminants; sunflowers absorb uranium; Indian mustard takes up lead and cadmium; willows treat contaminated groundwater." },
          { term: "Pump and Treat", definition: "Groundwater remediation method that pumps contaminated water to the surface for treatment before reinjection or disposal; common at Superfund sites but slow and expensive." },
          { term: "Capping", definition: "Covering a contaminated site with impermeable material to prevent rainwater infiltration and contaminant migration to groundwater; contains but does not eliminate the contamination." },
        ],
      },
      {
        name: "Pollution Prevention",
        terms: [
          { term: "Best Management Practices (BMPs)", definition: "Procedures that reduce nonpoint source pollution from agriculture, construction, and urban runoff; include vegetated buffer strips, cover crops, and sediment fences." },
          { term: "Integrated Pest Management (IPM)", definition: "Pest control strategy minimizing pesticide use through biological controls, crop rotation, and targeted chemical application only when needed; reduces agricultural water contamination." },
          { term: "Green Chemistry", definition: "Design of chemical products and processes that reduce or eliminate hazardous substances; prevents pollution at the source rather than treating it after the fact." },
          { term: "Pollution Prevention Act", definition: "1990 U.S. law establishing source reduction as the preferred environmental protection strategy; pollution hierarchy: prevention > recycling > treatment > disposal." },
        ],
      },
      {
        name: "Toxicology Concepts",
        terms: [
          { term: "Risk Assessment", definition: "Scientific process evaluating the probability and severity of harm from pollutant exposure; identifies hazard, assesses dose-response, estimates exposure, and characterizes risk." },
          { term: "LD50", definition: "Lethal dose that kills 50% of a test population; used to compare acute toxicity of chemicals; lower LD50 = more toxic; does not capture chronic or sub-lethal effects." },
          { term: "Dose-Response Relationship", definition: "The relationship between the amount of a toxin an organism is exposed to and the severity of the effect; fundamental concept in toxicology — 'the dose makes the poison.'" },
          { term: "Indicator Species", definition: "Species whose presence or absence signals environmental conditions; mayflies, stoneflies, and caddisflies indicate clean water; their disappearance signals aquatic pollution." },
        ],
      },
    ],
  },

  // 9.1 Greenhouse Effect & Climate Drivers
  {
    id: "envsci-unit-9-1",
    unit: 9,
    puzzle: 1,
    title: "Global Change",
    subject: "Env Science",
    groups: [
      {
        name: "Greenhouse Gases",
        terms: [
          { term: "Carbon Dioxide (CO₂)", definition: "Primary anthropogenic greenhouse gas from fossil fuel combustion, deforestation, and cement production; atmospheric concentration has risen from 280 ppm pre-industrial to over 420 ppm today." },
          { term: "Methane (CH₄)", definition: "Potent GHG ~80× more powerful than CO₂ over 20 years; emitted by livestock digestion, landfills, rice paddies, and natural gas leaks; second-largest contributor to climate change." },
          { term: "Nitrous Oxide (N₂O)", definition: "Greenhouse gas ~265× more potent than CO₂ over 100 years; primarily from agricultural soils and synthetic fertilizers; also depletes stratospheric ozone." },
          { term: "Water Vapor", definition: "The most abundant greenhouse gas; amplifies warming from other GHGs through positive feedback — warmer air holds more water vapor, trapping additional heat and causing further warming." },
        ],
      },
      {
        name: "Greenhouse Effect Mechanism",
        terms: [
          { term: "Greenhouse Effect", definition: "Natural process by which atmospheric gases trap infrared radiation re-emitted from Earth's surface, keeping the planet ~33°C warmer than it would otherwise be." },
          { term: "Enhanced Greenhouse Effect", definition: "Human-caused intensification of the natural greenhouse effect through GHG emissions; responsible for the observed global warming trend since the Industrial Revolution." },
          { term: "Radiative Forcing", definition: "Measure of the influence a factor has on Earth's energy balance; positive forcing warms the planet; CO₂ has the highest positive radiative forcing of any human-caused factor." },
          { term: "Carbon Cycle", definition: "Biogeochemical cycling of carbon through the atmosphere, biosphere, oceans, and lithosphere; human disruption of this cycle — burning fossil fuels and deforestation — drives climate change." },
        ],
      },
      {
        name: "Climate Change Evidence",
        terms: [
          { term: "Global Average Temperature", definition: "Has increased ~1.1°C above pre-industrial levels; the last decade was the warmest on record; warming is unequivocal per all major scientific bodies including the IPCC." },
          { term: "Ice Core Data", definition: "Records of past climate preserved in polar ice; trapped air bubbles show CO₂ and temperature over 800,000 years; tight correlation between CO₂ and temperature confirms the greenhouse effect." },
          { term: "Sea Level Rise", definition: "Global average sea level has risen ~20 cm since 1900 from thermal expansion of seawater and melting ice; rate is accelerating and threatens coastal communities worldwide." },
          { term: "Arctic Sea Ice Loss", definition: "Arctic summer sea ice has declined ~13% per decade since 1979; the Arctic is warming 3× faster than the global average due to the ice-albedo positive feedback loop." },
        ],
      },
      {
        name: "Natural Climate Drivers",
        terms: [
          { term: "Albedo", definition: "Fraction of solar energy reflected by a surface; ice and snow have high albedo (~0.9); dark ocean and forests have low albedo; melting ice reduces albedo, amplifying warming." },
          { term: "Milankovitch Cycles", definition: "Natural variations in Earth's orbital shape, axial tilt, and wobble over tens of thousands of years; drive ice ages but cannot explain the current rapid warming trend." },
          { term: "Volcanic Eruptions", definition: "Can cause short-term cooling by injecting SO₂ into the stratosphere, forming reflective sulfate aerosols; natural cooling effect is temporary (1–3 years)." },
          { term: "Solar Output", definition: "Variation in energy emitted by the sun; has been flat or slightly declining since 1980 while Earth has continued warming, ruling out solar activity as the cause of recent climate change." },
        ],
      },
    ],
  },

  // 9.2 Impacts of Climate Change
  {
    id: "envsci-unit-9-2",
    unit: 9,
    puzzle: 2,
    title: "Global Change",
    subject: "Env Science",
    groups: [
      {
        name: "Atmospheric & Weather Impacts",
        terms: [
          { term: "Extreme Heat Events", definition: "More frequent and intense heat waves as average temperatures rise; increased mortality from heat stress, especially for elderly, outdoor workers, and urban residents." },
          { term: "Intensified Hurricanes", definition: "Warmer ocean temperatures provide more energy to tropical storms, increasing peak intensity, rainfall rates, and storm surge — even if total storm frequency changes little." },
          { term: "Shifting Precipitation", definition: "Climate change alters where and when rain falls; wet regions trend wetter, dry regions drier; disrupts agriculture and freshwater supplies worldwide." },
          { term: "Wildfire Season Expansion", definition: "Higher temperatures, earlier snowmelt, and drier conditions extend wildfire season globally; fire frequency and severity have increased dramatically in western North America and Australia." },
        ],
      },
      {
        name: "Ocean & Ice Impacts",
        terms: [
          { term: "Coral Bleaching", definition: "When ocean temperatures exceed normal by ~1°C for weeks, corals expel their symbiotic algae (zooxanthellae) and turn white; prolonged bleaching kills the coral and collapses reef ecosystems." },
          { term: "Glacial Retreat", definition: "Mountain glaciers worldwide are shrinking rapidly; threatens freshwater supplies for billions in Asia and South America who depend on glacial meltwater during dry seasons." },
          { term: "Permafrost Thaw", definition: "Warming Arctic thaws permafrost, releasing stored methane and CO₂ frozen for millennia; a powerful positive feedback loop that accelerates warming beyond what GHG emissions alone would cause." },
          { term: "Sea Level Rise Acceleration", definition: "Rate of sea level rise has doubled since 1993; driven by thermal expansion, Greenland melt, and Antarctic ice loss; threatens low-lying nations, coastal cities, and island nations." },
        ],
      },
      {
        name: "Ecosystem Impacts",
        terms: [
          { term: "Species Range Shifts", definition: "Species moving poleward and to higher elevations as habitats warm; those unable to migrate fast enough face local extinction; disrupts ecological communities and food webs." },
          { term: "Phenological Changes", definition: "Shifts in timing of biological events — earlier spring flowering, bird migration, insect emergence; mismatches between interdependent species can collapse pollination and predator-prey relationships." },
          { term: "Habitat Loss (Climate)", definition: "Climate change shrinks or eliminates thermally suitable habitat for species, compounding threats from deforestation and fragmentation; mountain-top species and polar species face total habitat loss." },
          { term: "Dead Zone Expansion", definition: "Warmer water holds less dissolved oxygen; combined with eutrophication, climate change expands hypoxic dead zones in coastal and open ocean waters." },
        ],
      },
      {
        name: "Human Impacts",
        terms: [
          { term: "Food Security Threats", definition: "Changes in precipitation, temperature, and extreme weather reduce crop yields in many regions; climate change threatens to reverse decades of progress in reducing global hunger." },
          { term: "Climate Refugees", definition: "People displaced by sea level rise, extreme weather, drought, or resource conflict driven by climate change; potentially hundreds of millions by 2050." },
          { term: "Disease Range Expansion", definition: "Warmer temperatures expand the range of vector-borne diseases like malaria, dengue fever, and Lyme disease into previously too-cold regions." },
          { term: "Economic Costs of Climate Change", definition: "Climate change imposes growing costs through disaster damages, health impacts, infrastructure stress, and agricultural losses; projected to significantly reduce global GDP by 2100 without mitigation." },
        ],
      },
    ],
  },

  // 9.3 Feedback Loops & Tipping Points
  {
    id: "envsci-unit-9-3",
    unit: 9,
    puzzle: 3,
    title: "Global Change",
    subject: "Env Science",
    groups: [
      {
        name: "Positive Feedback Loops",
        terms: [
          { term: "Ice-Albedo Feedback", definition: "As ice and snow melt, darker land and ocean surfaces are exposed, absorbing more solar energy, causing more warming and more melting — a self-reinforcing cycle." },
          { term: "Water Vapor Feedback", definition: "Warmer air holds more water vapor, which is itself a greenhouse gas; the additional water vapor amplifies warming from CO₂ and other GHGs, roughly doubling the initial effect." },
          { term: "Permafrost-Methane Feedback", definition: "Thawing permafrost releases stored methane and CO₂, causing additional warming that thaws more permafrost, releasing more greenhouse gases in a dangerous runaway loop." },
          { term: "Forest Dieback Feedback", definition: "As climate warming and drought stress forests, tree death releases stored carbon, reduces evapotranspiration, and lowers the land's ability to absorb CO₂, amplifying warming further." },
        ],
      },
      {
        name: "Negative Feedback Loops",
        terms: [
          { term: "Blackbody Radiation Feedback", definition: "As Earth warms, it emits more infrared radiation to space; this Planck feedback is the primary thermostatic stabilizer that prevents runaway warming." },
          { term: "Increased Chemical Weathering", definition: "Warmer, wetter climates accelerate weathering of silicate rocks, which consumes CO₂ over geological timescales; a slow negative feedback operating over millions of years." },
          { term: "Stomatal Regulation", definition: "Higher CO₂ causes some plants to partially close stomata, reducing water loss; may slightly increase plant growth and carbon uptake — a weak negative feedback." },
          { term: "Ocean Carbon Uptake", definition: "Oceans absorb ~25% of annual CO₂ emissions; as CO₂ increases, the partial pressure gradient drives more absorption — a negative feedback, though it is slowing as oceans warm and acidify." },
        ],
      },
      {
        name: "Climate Tipping Points",
        terms: [
          { term: "Tipping Point", definition: "A threshold in the climate system beyond which a change becomes self-sustaining and largely irreversible; passing a tipping point can trigger rapid, large-scale shifts regardless of future emissions." },
          { term: "Greenland Ice Sheet", definition: "Crossing a warming threshold could trigger irreversible melting of the Greenland Ice Sheet, contributing up to 7 meters of sea level rise over centuries even if warming later stabilizes." },
          { term: "Amazon Dieback", definition: "Deforestation combined with climate-driven drought could push the Amazon rainforest past a tipping point, converting vast areas to savanna and releasing billions of tons of stored carbon." },
          { term: "AMOC Weakening", definition: "Atlantic Meridional Overturning Circulation is slowing due to freshwater from melting ice; collapse would dramatically alter climate in Europe and disrupt rainfall patterns in the tropics." },
        ],
      },
      {
        name: "Carbon Sinks",
        terms: [
          { term: "Ocean Carbon Sink", definition: "Oceans absorb ~25% of annual human CO₂ emissions through physical dissolution and biological uptake; absorption is slowing as oceans warm and acidify, reducing their buffering capacity." },
          { term: "Terrestrial Carbon Sink", definition: "Land ecosystems absorb ~30% of annual CO₂ emissions through plant photosynthesis and soil carbon storage; tropical forests are the largest terrestrial sinks." },
          { term: "Permafrost Carbon Store", definition: "Frozen Arctic soils contain roughly twice as much carbon as is currently in the atmosphere; thawing converts this massive store from a sink to a carbon source." },
          { term: "Blue Carbon", definition: "Carbon stored in coastal ecosystems — mangroves, seagrasses, and salt marshes; per-area carbon storage rivals tropical rainforests; rapidly lost to development and coastal degradation." },
        ],
      },
    ],
  },

  // 9.4 Climate Change Solutions
  {
    id: "envsci-unit-9-4",
    unit: 9,
    puzzle: 4,
    title: "Global Change",
    subject: "Env Science",
    groups: [
      {
        name: "Mitigation Policies",
        terms: [
          { term: "Carbon Tax", definition: "Economic policy placing a price on CO₂ emissions, making fossil fuels more expensive and incentivizing a shift to clean energy; considered one of the most cost-effective climate policies." },
          { term: "Cap and Trade", definition: "Emissions trading system setting a firm total limit on GHG emissions with tradeable permits; creates a market incentive to reduce emissions at the lowest possible cost." },
          { term: "Paris Agreement", definition: "2015 international climate accord committing nearly all nations to limit warming to well below 2°C above pre-industrial levels through nationally determined emission reduction plans." },
          { term: "Carbon Neutrality", definition: "State of achieving net-zero CO₂ emissions by balancing emissions released with carbon removed from the atmosphere; many nations and corporations have pledged carbon neutrality by mid-century." },
        ],
      },
      {
        name: "Adaptation Strategies",
        terms: [
          { term: "Managed Retreat", definition: "Planned relocation of communities and infrastructure away from climate-vulnerable coastlines and floodplains; increasingly necessary as sea levels rise but politically and economically difficult." },
          { term: "Drought-Resistant Crops", definition: "Crop varieties engineered or bred to maintain yields under reduced water availability; critical for food security in regions projected to face more frequent and severe droughts." },
          { term: "Urban Heat Island Mitigation", definition: "Strategies reducing extreme heat in cities — green roofs, urban trees, reflective surfaces, and less asphalt; protects human health and reduces energy demand for cooling." },
          { term: "Coastal Defense Infrastructure", definition: "Hard or soft engineering structures including seawalls, living shorelines, and restored wetlands that protect coastlines from sea level rise and intensifying storm surge." },
        ],
      },
      {
        name: "Carbon Sequestration",
        terms: [
          { term: "Carbon Capture and Storage (CCS)", definition: "Technology capturing CO₂ from power plant or industrial exhaust and storing it in underground geological formations; may be essential for decarbonizing industries that cannot fully electrify." },
          { term: "Reforestation", definition: "Replanting trees on previously forested land to restore forest cover and recapture atmospheric carbon; one of the cheapest carbon removal options with major co-benefits for biodiversity." },
          { term: "Biochar", definition: "Charcoal produced from biomass pyrolysis and applied to soil; stable for hundreds to thousands of years; sequesters carbon and improves soil fertility and water retention." },
          { term: "Direct Air Capture (DAC)", definition: "Technology using chemical processes to remove CO₂ directly from the atmosphere; currently expensive and energy-intensive but may be necessary alongside emission reductions to meet climate goals." },
        ],
      },
      {
        name: "International Climate Frameworks",
        terms: [
          { term: "IPCC", definition: "Intergovernmental Panel on Climate Change; scientific body reviewing and synthesizing global climate research; Assessment Reports provide the scientific foundation for international climate policy." },
          { term: "UNFCCC", definition: "United Nations Framework Convention on Climate Change; 1992 treaty establishing the framework for international climate negotiations; parent treaty of both the Kyoto Protocol and Paris Agreement." },
          { term: "Kyoto Protocol", definition: "1997 climate treaty binding developed nations to reduce GHG emissions below 1990 levels; first international agreement with binding targets; largely superseded by the Paris Agreement." },
          { term: "Nationally Determined Contributions (NDCs)", definition: "Climate action plans each country submits under the Paris Agreement; specify emission reduction targets and adaptation measures; reviewed and strengthened on a 5-year cycle." },
        ],
      },
    ],
  },

];

export function getGameByUnit(unit: number, subject?: string): GameSet | undefined {
  return gameSets.find((g) => g.unit === unit && (!subject || g.subject === subject));
}

export function getGamesByUnit(unit: number, subject?: string): GameSet[] {
  return gameSets
    .filter((g) => g.unit === unit && (!subject || g.subject === subject))
    .sort((a, b) => (a.puzzle ?? 1) - (b.puzzle ?? 1));
}
