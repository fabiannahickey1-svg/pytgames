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
  // ── Unit 1: Natives, Contact & Exploration ──────────────────────────────
  {
    id: "unit-1-nat",
    unit: 1,
    puzzle: 1,
    theme: { code: "NAT", name: "American and National Identity" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Northeastern Native Nations",
        terms: [
          { term: "Iroquois Confederacy", definition: "Alliance of five (later six) northeastern Native nations united under the Great Law of Peace; one of the most sophisticated democratic governments in the pre-contact Americas." },
          { term: "Algonquian", definition: "Diverse group of Native peoples along the Eastern Seaboard who were among the first to encounter English settlers; spoke a family of related languages." },
          { term: "Huron", definition: "Confederacy of four nations in the Great Lakes region who allied with French fur traders; longstanding rivals of the Iroquois Confederacy." },
          { term: "Lenape", definition: "Eastern Woodlands people of the mid-Atlantic region, known among Algonquian-speaking peoples as the 'Grandfathers' for their status as an ancient and respected nation." },
        ],
      },
      {
        name: "Mesoamerican Civilizations",
        terms: [
          { term: "Aztec", definition: "Dominant Mesoamerican empire centered at Tenochtitlán; conquered by Cortés in 1521 through a combination of military force, disease, and alliances with rival Native peoples." },
          { term: "Maya", definition: "Sophisticated Mesoamerican civilization known for written language, advanced astronomy, and city-states; had declined before Spanish arrival but remained numerous at contact." },
          { term: "Olmec", definition: "Ancient Mesoamerican civilization considered a 'mother culture' of later societies; known for colossal stone heads and one of the earliest writing systems in the Western Hemisphere." },
          { term: "Zapotec", definition: "Pre-Columbian Mesoamerican civilization of the Oaxaca Valley that developed one of the earliest writing systems in the Americas, predating even the Maya." },
        ],
      },
      {
        name: "European Justifications for Conquest",
        terms: [
          { term: "Doctrine of Discovery", definition: "Legal principle claiming that Christian European nations could claim sovereignty over any land not already ruled by Christians; used to legitimize colonization." },
          { term: "Terra Nullius", definition: "Legal concept declaring that land inhabited by non-Christian or 'uncivilized' peoples was legally empty and available for European claiming." },
          { term: "Just War Theory", definition: "Catholic theological framework used to justify warfare against Native peoples who resisted conversion or refused to submit to Spanish authority." },
          { term: "Divine Providence", definition: "Belief that God had specifically ordained European expansion as part of a divine plan; widely used by colonizers to justify conquest as a religious duty." },
        ],
      },
      {
        name: "Native Self-Governance",
        terms: [
          { term: "Great Law of Peace", definition: "Founding constitution of the Iroquois Confederacy establishing democratic governance, individual rights, and collective decision-making among member nations." },
          { term: "Tribal Sovereignty", definition: "The inherent authority of Native nations to govern themselves; recognized in various European treaties as independent political entities pre-dating European arrival." },
          { term: "Clan Mothers", definition: "In Iroquois society, elder women who held significant political power, including the authority to select and remove male chiefs (sachems)." },
          { term: "Sachems", definition: "Chiefs or leaders in Algonquian and Iroquois societies who represented their people in council and diplomatic negotiations with other nations." },
        ],
      },
    ],
  },
  {
    id: "unit-1-wxt",
    unit: 1,
    puzzle: 2,
    theme: { code: "WXT", name: "Work, Exchange, and Technology" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Columbian Exchange: Europe to Americas",
        terms: [
          { term: "Smallpox", definition: "Deadly disease brought by Europeans that killed 50–90% of Indigenous populations in many regions, as Native peoples had no prior immunity." },
          { term: "Horses", definition: "European animals reintroduced to the Americas that transformed the hunting, warfare, and mobility of Great Plains Native peoples." },
          { term: "Cattle", definition: "European livestock brought to the Americas that reshaped land use, caused overgrazing, and displaced Native food sources across the continent." },
          { term: "Wheat", definition: "European grain introduced to the Americas that became a major staple crop and eventually a key export of the colonial economy." },
        ],
      },
      {
        name: "Columbian Exchange: Americas to Europe",
        terms: [
          { term: "Corn", definition: "Staple crop domesticated in Mesoamerica and introduced to Europe after 1492; became one of the most important food sources in the world." },
          { term: "Potatoes", definition: "South American crop brought to Europe after contact; became a dietary staple especially in Ireland and Eastern Europe, later triggering a catastrophic famine." },
          { term: "Tobacco", definition: "Native American plant introduced to Europe after contact; became a highly profitable cash crop in the English colonies and fueled demand for enslaved labor." },
          { term: "Tomatoes", definition: "Mesoamerican fruit introduced to Europe after 1492; initially regarded with suspicion but eventually transformed European cuisines, especially Italian." },
        ],
      },
      {
        name: "Spanish Colonial Labor Systems",
        terms: [
          { term: "Encomienda", definition: "Spanish colonial labor system granting settlers the right to demand tribute and labor from Native peoples in exchange for protection and religious instruction." },
          { term: "Repartimiento", definition: "Replacement labor system requiring Native communities to provide rotating draft workers for colonial projects; ostensibly paid but effectively coercive." },
          { term: "Mita", definition: "Andean forced labor system adapted by the Spanish, requiring Indigenous communities to supply rotating workers for deadly silver mines like Potosí." },
          { term: "Hacienda", definition: "Large Spanish-owned landed estate worked by Native or mestizo laborers under debt bondage; the dominant economic unit of the colonial countryside." },
        ],
      },
      {
        name: "Native Trade Networks",
        terms: [
          { term: "Obsidian", definition: "Volcanic glass prized by Mesoamerican and Southwestern peoples for cutting tools and weapons; traded across vast continental networks." },
          { term: "Copper", definition: "Metal traded extensively among North American peoples, especially in the Great Lakes region; used for ornamental and ceremonial objects marking high status." },
          { term: "Turquoise", definition: "Semi-precious stone mined in the Southwest and traded across the continent; highly valued by Pueblo and other Southwestern peoples for jewelry and ceremony." },
          { term: "Wampum", definition: "Beads made from clamshells used by Eastern Woodlands peoples as a medium of exchange, diplomatic record, and ceremonial object; later adopted by colonists as currency." },
        ],
      },
    ],
  },
  {
    id: "unit-1-geo",
    unit: 1,
    puzzle: 3,
    theme: { code: "GEO", name: "Geography and the Environment" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Native Culture Regions",
        terms: [
          { term: "Eastern Woodlands", definition: "Culture region east of the Mississippi characterized by dense forests, mixed farming and hunting, and diverse nations including the Iroquois and Algonquian peoples." },
          { term: "Great Plains", definition: "Vast grassland region between the Mississippi and Rockies; home to nomadic and semi-nomadic nations who hunted bison before and after the arrival of horses." },
          { term: "Pacific Northwest", definition: "Coastal region of abundant salmon, cedar, and marine resources; home to nations like the Chinook and Tlingit known for complex stratified societies and totem poles." },
          { term: "Southwest Desert", definition: "Arid region of present-day Arizona and New Mexico; home to Pueblo, Navajo, and Hopi peoples who mastered irrigation agriculture in an extreme environment." },
        ],
      },
      {
        name: "Major Pre-Columbian Urban Centers",
        terms: [
          { term: "Tenochtitlán", definition: "Capital of the Aztec Empire, built on an island in Lake Texcoco with a population rivaling the largest European cities at the time of Spanish contact." },
          { term: "Cahokia", definition: "Largest pre-Columbian city north of Mexico, near present-day St. Louis; center of Mississippian culture with massive earthen mounds and a population of ~20,000." },
          { term: "Chaco Canyon", definition: "Major center of Ancestral Puebloan culture in present-day New Mexico; featured monumental great houses and served as a regional hub for trade and ceremony." },
          { term: "Cusco", definition: "Capital of the Inca Empire high in the Andes; center of a highly organized state controlling much of western South America before Spanish conquest." },
        ],
      },
      {
        name: "Technology That Enabled Exploration",
        terms: [
          { term: "Caravel", definition: "Small, maneuverable Portuguese sailing ship with lateen sails; its ability to sail into the wind made long Atlantic and coastal voyages of exploration possible." },
          { term: "Astrolabe", definition: "Navigational instrument used to measure the altitude of the sun or stars, allowing sailors to determine their latitude at sea." },
          { term: "Trade Winds", definition: "Steady equatorial winds blowing westward across the Atlantic; their predictability allowed European sailors to reliably cross the ocean toward the Americas." },
          { term: "Portolan Charts", definition: "Detailed navigational maps showing coastlines, ports, and sailing directions; essential tools for European explorers navigating unfamiliar Atlantic waters." },
        ],
      },
      {
        name: "Environmental Impact of Contact",
        terms: [
          { term: "Overgrazing", definition: "Introduced cattle, pigs, and sheep consumed vegetation faster than ecosystems could recover, causing widespread soil erosion and loss of native plant species." },
          { term: "Deforestation", definition: "Spanish demand for timber for ships, construction, and fuel led to large-scale forest clearing around colonial settlements, altering watersheds and habitats." },
          { term: "Epidemic Disease", definition: "Smallpox and other European diseases killed 50–90% of Indigenous populations across the Americas within a century of contact, reshaping the entire landscape." },
          { term: "Silver Mining", definition: "Spanish extraction at mines like Potosí used toxic mercury amalgamation and required massive deforestation for fuel, poisoning soil and water across entire regions." },
        ],
      },
    ],
  },
  {
    id: "unit-1-mig",
    unit: 1,
    puzzle: 4,
    theme: { code: "MIG", name: "Migration and Settlement" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Spanish Conquistadors",
        terms: [
          { term: "Hernán Cortés", definition: "Spanish conquistador who conquered the Aztec Empire in 1521 by forging alliances with rival Native peoples and exploiting political divisions." },
          { term: "Francisco Pizarro", definition: "Spanish conquistador who defeated the Inca Empire in Peru in the 1530s, capturing Emperor Atahualpa and opening South America to colonization." },
          { term: "Hernando de Soto", definition: "Spanish explorer who led the first European expedition through the southeastern United States (1539–1542) in a brutal search for gold." },
          { term: "Juan Ponce de León", definition: "Spanish conquistador who led the first European expedition to Florida in 1513, claiming it for Spain while searching for land and legendary riches." },
        ],
      },
      {
        name: "Non-Spanish Explorers",
        terms: [
          { term: "Jacques Cartier", definition: "French explorer who sailed the St. Lawrence River in the 1530s, claiming the region for France and laying the groundwork for New France." },
          { term: "John Cabot", definition: "Italian explorer sailing for England who reached North America in 1497, providing the legal basis for England's later territorial claims on the continent." },
          { term: "Giovanni da Verrazzano", definition: "Italian explorer sailing for France who mapped the Atlantic coast of North America in 1524, including what is now New York Harbor." },
          { term: "Henry Hudson", definition: "English explorer sailing for the Dutch who explored the Hudson River (1609), establishing Dutch claims to the region that became New Netherland." },
        ],
      },
      {
        name: "Native Dwelling Types",
        terms: [
          { term: "Longhouses", definition: "Large communal wooden structures built by Iroquois and other northeastern peoples, housing multiple related families under one roof along a central corridor." },
          { term: "Pueblos", definition: "Multi-story stone and adobe structures built by Southwestern peoples for communal housing and defense; some housed hundreds of people." },
          { term: "Tipis", definition: "Portable cone-shaped dwellings made from animal hides used by nomadic Great Plains peoples; could be assembled or disassembled in under an hour for seasonal moves." },
          { term: "Wigwams", definition: "Dome-shaped structures built by Algonquian-speaking peoples using bent saplings covered with bark or hides; smaller and more mobile than longhouses." },
        ],
      },
      {
        name: "Motivations for European Exploration",
        terms: [
          { term: "God", definition: "Religious motivation driving European exploration; rulers and the Church sought to spread Christianity to new peoples and win souls, justifying conquest as a holy mission." },
          { term: "Gold", definition: "Economic motivation driving European explorers to seek precious metals; Spanish extraction of silver and gold from the Americas fueled European economies for centuries." },
          { term: "Glory", definition: "Nationalist motivation for exploration; European monarchs competed for prestige, territorial claims, and international power through overseas discovery." },
          { term: "New Trade Routes", definition: "Desire to reach Asian markets directly without crossing Ottoman-controlled overland routes; the search for a western sea route to Asia led Columbus to the Americas." },
        ],
      },
    ],
  },
  {
    id: "unit-1-pce",
    unit: 1,
    puzzle: 5,
    theme: { code: "PCE", name: "Politics and Power" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Spanish Colonial Government",
        terms: [
          { term: "Viceroy", definition: "Royal governor who administered a large Spanish colonial territory (viceroyalty) on behalf of the Spanish crown, holding sweeping executive and judicial powers." },
          { term: "Audiencia", definition: "High court and governing council in Spanish colonial territories that handled both judicial and administrative matters, reporting directly to the Council of the Indies." },
          { term: "Cabildo", definition: "Municipal council in Spanish colonial towns handling local governance; one of the few venues where colonists had any meaningful political participation." },
          { term: "Council of the Indies", definition: "Spanish royal body based in Madrid that oversaw all colonial legislation, appointments, and trade for the American colonies; the supreme authority over colonial affairs." },
        ],
      },
      {
        name: "Native Resistance to Spanish Power",
        terms: [
          { term: "Pueblo Revolt", definition: "1680 uprising in which Pueblo peoples united under Popé expelled Spanish colonizers from New Mexico for 12 years, destroying missions and killing priests." },
          { term: "Mixtón War", definition: "1541–1542 rebellion by Indigenous peoples of western Mexico against Spanish rule; nearly ended Spanish expansion northward into the region." },
          { term: "Arauco War", definition: "Long-running conflict between Spanish colonizers and the Mapuche people of Chile who successfully resisted Spanish conquest for centuries using guerrilla warfare." },
          { term: "Tenochtitlán Siege", definition: "1521 months-long siege by Spanish and allied Native forces that destroyed the Aztec capital; its fall ended the Aztec Empire and opened central Mexico to colonization." },
        ],
      },
      {
        name: "Spanish Legal Concepts",
        terms: [
          { term: "Requerimiento", definition: "Spanish legal document read aloud (often in Spanish to people who spoke no Spanish) demanding submission to the Crown; refusal was used to legally justify conquest." },
          { term: "Papal Donation", definition: "1493 decree by Pope Alexander VI dividing the non-Christian world between Spain and Portugal, used to legitimize their colonial territorial claims." },
          { term: "New Laws of 1542", definition: "Spanish legislation attempting to limit the encomienda system and protect Native peoples from abuse; largely unenforced due to colonist resistance." },
          { term: "Treaty of Tordesillas", definition: "1494 agreement between Spain and Portugal dividing the newly discovered world along a meridian line, giving Spain most of the Americas and Portugal Brazil and Africa." },
        ],
      },
      {
        name: "Native Political Confederacies",
        terms: [
          { term: "Aztec Triple Alliance", definition: "Political and military alliance of Tenochtitlán, Texcoco, and Tlacopan that dominated Mesoamerica through tribute extraction before the Spanish conquest." },
          { term: "Powhatan Confederacy", definition: "Alliance of approximately 30 Algonquian-speaking tribes in the Virginia tidewater region, led by Chief Wahunsenacah; encountered English settlers at Jamestown." },
          { term: "Creek Confederacy", definition: "Loose alliance of towns in the southeastern United States; one of the major Native political entities that shaped colonial power dynamics in the region." },
          { term: "Maya City-States", definition: "Independent urban centers of the Maya civilization, each ruled by a divine king; their political fragmentation made them easier targets for Spanish conquest than the centralized Aztec Empire." },
        ],
      },
    ],
  },
  {
    id: "unit-1-wor",
    unit: 1,
    puzzle: 6,
    theme: { code: "WOR", name: "America in the World" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "European Colonial Powers",
        terms: [
          { term: "Spain", definition: "First European power to establish a major colonial empire in the Americas after 1492; dominated Central and South America and extracted enormous wealth through mining and agriculture." },
          { term: "Portugal", definition: "First European nation to develop Atlantic trade routes; colonized Brazil, controlled the African slave trade, and established an empire stretching from Africa to Asia." },
          { term: "France", definition: "Established colonies in Canada and the Caribbean focusing on the fur trade and Indigenous alliances; founded Quebec in 1608 and contested British power for North America." },
          { term: "England", definition: "Late entrant to American colonization; established Jamestown in 1607 and quickly expanded along the Atlantic coast, eventually challenging Spain and France for dominance." },
        ],
      },
      {
        name: "Navigation Innovations",
        terms: [
          { term: "Compass", definition: "Navigational device using Earth's magnetic field to indicate north; adopted by European explorers from Arab and Chinese navigators, enabling open-ocean sailing." },
          { term: "Lateen Sail", definition: "Triangular sail that allowed ships to sail more directly into the wind; a key innovation enabling Portuguese and Spanish explorers to navigate Atlantic and coastal waters." },
          { term: "Cross-Staff", definition: "Navigational instrument used to measure the angle of the sun or stars above the horizon, allowing sailors to calculate their latitude during the Age of Exploration." },
          { term: "Dead Reckoning", definition: "Navigation method using known speed, direction, and elapsed time to estimate position; essential for sailors crossing open ocean before precise instruments were available." },
        ],
      },
      {
        name: "Key Transatlantic Events",
        terms: [
          { term: "Reconquista", definition: "Centuries-long Christian campaign to retake the Iberian Peninsula from Muslim rule; its completion in 1492 freed Spain to fund Columbus's voyage that same year." },
          { term: "Columbus's 1492 Voyage", definition: "Spanish-funded expedition that reached the Caribbean, initiating sustained transatlantic contact between Europe and the Americas and permanently altering world history." },
          { term: "Magellan's Circumnavigation", definition: "1519–1522 Spanish expedition that first sailed around the world, demonstrating the Earth's true scale and the vast size of the Pacific Ocean." },
          { term: "Line of Demarcation", definition: "Boundary established by the papal decree of 1493 dividing exploration rights between Spain and Portugal; formalized by the Treaty of Tordesillas in 1494." },
        ],
      },
      {
        name: "Africa and the Atlantic World",
        terms: [
          { term: "West African Kingdoms", definition: "Powerful states such as Mali, Songhai, and Kongo that were drawn into or weakened by the Atlantic slave trade, fundamentally reshaping African society and politics." },
          { term: "Atlantic Slave Trade", definition: "System of forced transportation of millions of Africans to the Americas beginning in the 16th century; one of the largest forced migrations in human history." },
          { term: "Asiento", definition: "Contract granted by the Spanish crown giving a nation or company exclusive rights to supply enslaved Africans to Spanish American colonies; a key mechanism of the Atlantic slave trade." },
          { term: "Estevanico", definition: "Enslaved African man who survived a disastrous Spanish expedition and became one of the first non-Native people to travel through the American Southwest, exploring for Spain in 1539." },
        ],
      },
    ],
  },
  {
    id: "unit-1-arc",
    unit: 1,
    puzzle: 7,
    theme: { code: "ARC", name: "American and Regional Culture" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Native American Spiritual Practices",
        terms: [
          { term: "Animism", definition: "Belief that spirits inhabit all natural objects — animals, plants, rivers, and landforms; central to most Native American spiritual traditions." },
          { term: "Shamanism", definition: "Spiritual practice in which a shaman acts as intermediary between the human and spirit worlds through ritual, healing, and vision; found across many Native cultures." },
          { term: "Vision Quest", definition: "Coming-of-age ritual practiced by many Plains and Woodland peoples in which a young person fasts in solitude seeking a spiritual vision to guide their life." },
          { term: "Sweat Lodge", definition: "Ceremonial structure used for purification rituals combining heat, steam, and prayer; practiced across many Native nations as a spiritual and communal rite." },
        ],
      },
      {
        name: "Spanish Catholic Cultural Influence",
        terms: [
          { term: "Missions", definition: "Spanish religious settlements combining Catholic worship, forced labor, and cultural assimilation; built across Florida, the Southwest, and California to convert Native peoples." },
          { term: "Franciscans", definition: "Catholic religious order that led missionary efforts across Spanish North America, building a chain of missions from Florida to California." },
          { term: "Jesuits", definition: "Catholic religious order known for intellectual rigor and adaptability; established missions in South America and Canada and advocated—with limits—for some Indigenous rights." },
          { term: "Our Lady of Guadalupe", definition: "Apparition of the Virgin Mary said to appear to a Nahua man in 1531; became the most powerful religious symbol of colonial Mexico, blending Catholic and Indigenous devotion." },
        ],
      },
      {
        name: "Native Cultural Traditions",
        terms: [
          { term: "Potlatch", definition: "Ceremonial feast practiced by Pacific Northwest peoples in which hosts demonstrate status and build alliances by giving away large quantities of goods." },
          { term: "Sun Dance", definition: "Sacred annual ceremony of many Plains peoples involving communal prayer, fasting, and physical endurance to renew spiritual bonds with the creator and community." },
          { term: "Green Corn Ceremony", definition: "Annual thanksgiving ritual of Southeastern peoples celebrating the new corn harvest through communal fasting, feasting, forgiveness, and spiritual renewal." },
          { term: "Oral Tradition", definition: "Transmission of history, law, and culture through spoken word, song, and story; the primary means of preserving collective knowledge in non-literate Native societies." },
        ],
      },
      {
        name: "Native Arts and Architecture",
        terms: [
          { term: "Totem Poles", definition: "Carved wooden pillars created by Pacific Northwest peoples depicting ancestral beings, clan histories, and significant events; monuments of cultural identity and status." },
          { term: "Kachina Dolls", definition: "Carved figures representing spiritual beings (kachinas) in Pueblo religion; used in ceremonies and given to children as teaching tools about the spirit world." },
          { term: "Earthen Mounds", definition: "Large earthworks built by Mississippian and earlier cultures for ceremonial, burial, and residential purposes; the most impressive at Cahokia rival the size of Egyptian pyramids." },
          { term: "Cliff Dwellings", definition: "Stone and adobe structures built into cliff faces by Ancestral Puebloan peoples for protection and habitation, such as the elaborate complex at Mesa Verde, Colorado." },
        ],
      },
    ],
  },
  {
    id: "unit-1-soc",
    unit: 1,
    puzzle: 8,
    theme: { code: "SOC", name: "Social Structures" },
    title: "Natives, Contact & Exploration",
    subject: "APUSH",
    groups: [
      {
        name: "Spanish Colonial Hierarchy",
        terms: [
          { term: "Peninsulares", definition: "Spanish-born colonists who held the highest social status in colonial society and monopolized top government and church positions in the Americas." },
          { term: "Criollos", definition: "People of Spanish descent born in the Americas; lower in status than peninsulares despite often equal wealth; they would later lead Latin American independence movements." },
          { term: "Mestizos", definition: "People of mixed Spanish and Native heritage who grew to be the largest population group in colonial society, occupying a middle tier between Spanish elites and Indigenous peoples." },
          { term: "Castas", definition: "General term for people of mixed racial ancestry in the Spanish colonial racial classification system; dozens of specific categories determined one's legal rights and social standing." },
        ],
      },
      {
        name: "Native Social Organization",
        terms: [
          { term: "Tribe", definition: "Basic unit of Native American social and political organization, typically sharing a common territory, language, kinship network, and cultural practices." },
          { term: "Clan", definition: "Kinship group within a tribe tracing descent from a common ancestor; regulates marriage, social obligations, and ceremonial responsibilities." },
          { term: "Moiety", definition: "Division of a society into two complementary halves that regulate marriage patterns, ceremonial roles, and social reciprocity between groups." },
          { term: "Extended Family", definition: "The core social and economic unit in most Native societies, in which grandparents, parents, children, and cousins lived, farmed, hunted, and raised children cooperatively." },
        ],
      },
      {
        name: "Gender in Native Societies",
        terms: [
          { term: "Matrilineal Descent", definition: "System in which lineage, clan membership, and property pass through the mother's line; practiced by the Iroquois and many other Eastern and Southeastern nations." },
          { term: "Patrilineal Descent", definition: "System in which lineage and property pass through the father's line; common among many Southwestern and Plains peoples." },
          { term: "Two-Spirit", definition: "A tradition recognized in many Native cultures acknowledging people who embody both masculine and feminine spiritual qualities; often held specialized ceremonial roles." },
          { term: "Division of Labor", definition: "Gendered allocation of tasks in Native societies; typically women managed farming, food processing, and home life while men handled hunting, warfare, and long-distance trade." },
        ],
      },
      {
        name: "Key Figures Crossing Social Boundaries",
        terms: [
          { term: "La Malinche", definition: "Nahua woman who served as translator and strategic advisor to Hernán Cortés; her role as cultural intermediary was crucial to the conquest and remains historically controversial." },
          { term: "Bartolomé de las Casas", definition: "Spanish priest who witnessed and documented Spanish atrocities against Indigenous peoples, becoming the most prominent advocate for Native rights in the 16th century." },
          { term: "Tlaxcalan Allies", definition: "Indigenous peoples of Tlaxcala who allied with Cortés against the Aztec Empire; their military support was arguably the decisive factor in the Spanish conquest of Tenochtitlán." },
          { term: "Native Converts", definition: "Indigenous peoples who adopted Christianity — sometimes voluntarily, often under coercion — and frequently served as cultural intermediaries and translators in colonial society." },
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
  // ── Unit 7: WWI, Roaring 20s & Great Depression ─────────────────────────
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
  // ── Unit 8: Cold War & Civil Rights ─────────────────────────────────────
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
