const presidents = [
{
    years: '1789-1797',
    name: 'George Washington',
    age: 57,
    party: 'None',
    photo:  'https://upload.wikimedia.org/wikipedia/commons/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg',
    info: 'George Washington was a Founding Father of the United States and served as the country\'s first president. He led the Continental Army to victory in the American Revolutionary War and presided over the drafting of the United States Constitution. Washington was admired for his strong leadership and integrity, and his role in establishing the presidency as an institution. He also set many precedents, including the two-term limit for the presidency. Washington is often referred to as the "Father of His Country" and is widely considered one of the greatest American presidents.'
},
{
    years: '1797-1801',
    name: 'John Adams',
    age: 61,
    party: 'Federalist',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/0/07/John_Adams_A18236.jpg',
    info: 'John Adams was a Founding Father of the United States and one of the signers of the Declaration of Independence. He served as the first Vice President under George Washington and then became the second President of the United States. Adams played a key role in the American Revolution and was known for his patriotism and strong leadership. As president, he faced challenges including tensions with France and the formation of political parties. He is also remembered for his support of the Alien and Sedition Acts, which limited freedom of speech and the press. Despite criticism during his presidency, Adams is widely respected for his contributions to American independence.'
},
{
    years: '1801-1809',
    name: 'Thomas Jefferson',
    age: 57,
    party: 'Democratic-Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg',
    info: 'Thomas Jefferson was a Founding Father of the United States, a statesman, and a philosopher. He is best known for drafting the Declaration of Independence, which declared American independence from Great Britain. As the third President of the United States, Jefferson was a champion of individual rights, limited government, and democracy. His administration was marked by his commitment to equality and his accomplishments include the Louisiana Purchase, which doubled the size of the United States, and the Lewis and Clark Expedition, which explored the western frontier. Jefferson\'s legacy as a statesman, philosopher, and advocate for democracy and equality has had a lasting impact on American history.'
},
{
    years: '1809-1817',
    name: 'James Madison',
    age: 57,
    party: 'Democratic-Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/James_Madison.jpg',
    info: 'James Madison was a Founding Father of the United States and the principal author of the United States Constitution. As the fourth President of the United States, Madison led the country through the War of 1812 against Great Britain. His administration was marked by several key events, including the burning of Washington, D.C. and the signing of the Treaty of Ghent, which ended the war. Madison was also a key proponent of religious freedom and played a leading role in the drafting of the Bill of Rights. His contributions to American history have been widely recognized and he is often referred to as the "Father of the Constitution."'
},
{
    years: '1817-1825',
    name: 'James Monroe',
    age: 58,
    party: 'Democratic-Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/James_Monroe_White_House_portrait_1819.jpg',
    info: 'James Monroe served during a period of significant expansion for the country. He is best known for the Monroe Doctrine, which declared that the United States would not tolerate European intervention in the affairs of nations in the Western Hemisphere. As president, he oversaw the acquisition of Florida from Spain and the Missouri Compromise, which helped to ease tensions over the issue of slavery. Monroe was also a supporter of infrastructure development, including the construction of the Erie Canal. He is remembered as one of the last Founding Fathers and a key figure in the history of the United States.'
},
{
    years: '1825-1829',
    name: 'John Quincy Adams',
    age: 57,
    party: 'Democratic-Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/John_Quincy_Adams_by_Charles_Osgood.jpg',
    info: 'John Quincy Adams was the sixth President of the United States and the son of the second President, John Adams. He is known for his work as a diplomat, including negotiating the Treaty of Ghent that ended the War of 1812. Adams was also an outspoken opponent of slavery and played a leading role in the Amistad case, arguing successfully before the Supreme Court for the freedom of a group of enslaved Africans. During his presidency, Adams focused on infrastructure development, including the construction of roads and canals, and advocated for a stronger federal government. He was also a prolific writer and thinker, and his legacy as a statesman and intellectual continues to influence American politics today.'
},
{
    years: '1829-1837',
    name: 'Andrew Jackson',
    age: 61,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Andrew_jackson_head.jpg',
    info: 'Andrew Jackson was the seventh President of the United States and a controversial figure in American history. He was known for his populist policies, which aimed to increase the power of the common people and limit the influence of wealthy elites. Jackson also played a key role in the expansion of the United States, including the acquisition of Florida from Spain and the forced removal of Native Americans from their lands in the Indian Removal Act. He was a strong advocate for states\' rights and limited government, but his presidency was also marked by controversy, including his veto of the Bank of the United States and his use of executive power.'
},
{
    years: '1837-1841',
    name: 'Martin Van Buren',
    age: 54,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Martin_Van_Buren.jpg/1024px-Martin_Van_Buren.jpg',
    info: 'Martin Van Buren was the eighth President of the United States and the first to be born a United States citizen. He was a skilled politician who played a key role in the development of the modern Democratic Party, and was known as "the Little Magician" for his political savvy. During his presidency, Van Buren faced a major economic depression known as the Panic of 1837, which he attempted to address through government intervention and the establishment of an independent treasury system. He was also a strong supporter of states\' rights and played a key role in the development of the two-party system in American politics.'
},
{
    years: '1841',
    name: 'William Henry Harrison',
    age: 68,
    party: 'Whig',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/William_Henry_Harrison_by_James_Reid_Lambdin%2C_1835_crop.jpg',
    info: 'William Henry Harrison was the ninth President of the United States, serving the shortest term in office in American history. He was a war hero and the oldest person to be elected President at the time, but his presidency was cut short by his untimely death just 31 days into his term due to complications from pneumonia. Harrison was known for his folksy, down-to-earth style, and his campaign slogan "Tippecanoe and Tyler too" is still remembered today. Despite his brief time in office, Harrison left a lasting impact on American politics and is remembered as a symbol of presidential sacrifice.'
},
{
    years: '1841-1845',
    name: 'John Tyler',
    age: 51,
    party: 'Whig',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/John_Tyler%2C_Jr.jpg',
    info: 'John Tyler was the tenth President of the United States, succeeding to the presidency after the death of William Henry Harrison. He was the first Vice President to take over the presidency due to the death of a sitting President. Tyler was a states\' rights advocate who opposed many of the policies of the Whig Party, which he had been elected with, and he was eventually expelled from the party. During his presidency, Tyler negotiated a treaty with China, signed a bill establishing the Smithsonian Institution, and vetoed several bills aimed at establishing a national bank. Tyler was also known for his efforts to expand the United States through territorial annexation.'
},
{
    years: '1845-1849',
    name: 'James K. Polk',
    age: 49,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/JKP.jpg',
    info: 'James K. Polk was the eleventh President of the United States, and is remembered for his accomplishments in expanding the United States through territorial acquisition. During his presidency, Polk oversaw the annexation of Texas, the negotiation of the Oregon Treaty with Great Britain, and the acquisition of California and other territories from Mexico in the Mexican-American War. Polk was a strong supporter of Manifest Destiny, the belief that it was the United States\' God-given right to expand westward, and his expansionist policies greatly increased the size and power of the United States. Polk also supported policies that lowered tariffs and promoted free trade.'
},
{
    years: '1849-1850',
    name: 'Zachary Taylor',
    age: 64,
    party: 'Whig',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Zachary_Taylor_restored_and_cropped.jpg',
    info: 'Zachary Taylor was the twelfth President of the United States, and served in office for just over a year before his sudden death. Prior to his presidency, Taylor had a long and distinguished career as a military commander, serving in numerous conflicts including the Black Hawk War and the Mexican-American War. During his presidency, Taylor was known for his opposition to the expansion of slavery into new territories, and he threatened to use force against states that attempted to secede from the Union. Taylor also worked to reduce tariffs and improve infrastructure, but his sudden death from illness prevented him from accomplishing many of his goals.'
},
{
    years: '1850-1853',
    name: 'Millard Fillmore',
    age: 50,
    party: 'Whig',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Millard_Fillmore_Better_Crop.jpg/1024px-Millard_Fillmore_Better_Crop.jpg',
    info: 'Millard Fillmore was the thirteenth President of the United States, serving in office after the sudden death of his predecessor, Zachary Taylor. As a member of the Whig party, Fillmore supported policies such as infrastructure improvements and reduced tariffs. However, his presidency is perhaps best remembered for his signing of the Compromise of 1850, a set of laws designed to address the issue of slavery in the new territories acquired from Mexico. The Compromise of 1850 included a controversial Fugitive Slave Act, which required citizens to aid in the capture and return of escaped slaves, and which proved deeply unpopular in the North. Fillmore\'s presidency was marked by growing tensions over the issue of slavery, which ultimately led to the outbreak of the Civil War.'
},
{
    years: '1853-1857',
    name: 'Franklin Pierce',
    age: 48,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg/1024px-Mathew_Brady_-_Franklin_Pierce_-_alternate_crop.jpg',
    info: 'Franklin Pierce was the 14th President of the United States, serving during a tumultuous period in American history. His presidency was marked by a number of significant events, including the passage of the controversial Kansas-Nebraska Act, which allowed settlers in those territories to decide whether or not to allow slavery. Pierce also oversaw the Gadsden Purchase, which added a significant amount of territory to the United States, and sent American troops to suppress a rebellion in Nicaragua. Despite his accomplishments, Pierce\'s presidency was largely unsuccessful, and he is often considered one of the least effective Presidents in American history.'
},
{
    years: '1857-1861',
    name: 'James Buchanan',
    age: 65,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/James_Buchanan.jpg',
    info: 'James Buchanan was the 15th President of the United States, serving on the eve of the American Civil War. Buchanan was known for his reluctance to confront the issue of slavery, despite growing tensions between the North and South. He attempted to appease both sides, but ultimately failed to prevent the outbreak of war. During his presidency, seven southern states seceded from the Union, and Buchanan did little to stop them. Buchanan is often ranked as one of the worst Presidents in American history, largely due to his failure to prevent the Civil War and his lack of leadership during a critical time in the nation\'s history.'
},
{
    years: '1861-1865',
    name: 'Abraham Lincoln',
    age: 52,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg',
    info: 'Abraham Lincoln, the 16th President of the United States, is widely regarded as one of the nation\'s greatest leaders. He is best known for his leadership during the American Civil War, during which he successfully preserved the Union and ended slavery through the Emancipation Proclamation. Lincoln was a skilled orator, delivering famous speeches like the Gettysburg Address and his Second Inaugural Address. He also played a key role in the passage of the 13th Amendment to the Constitution, which officially abolished slavery in the United States. Lincoln\'s leadership and legacy have continued to inspire generations of Americans.'
},
{
    years: '1865-1869',
    name: 'Andrew Johnson',
    age: 56,
    party: 'Democratic/National Union',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Andrew_Johnson_photo_portrait_head_and_shoulders%2C_c1870-1880-Edit1.jpg',
    info: 'Andrew Johnson became president following the assassination of Abraham Lincoln. He was the first president to be impeached by the House of Representatives, but he was acquitted by the Senate. Johnson faced intense opposition from the Republican-controlled Congress due to his lenient policies towards the South during Reconstruction. He vetoed several key Reconstruction bills, which led to a bitter power struggle with Congress. Despite his struggles with Congress, Johnson did manage to purchase Alaska from Russia, which would prove to be a significant expansion of U.S. territory.'
},
{
    years: '1869-1877',
    name: 'Ulysses S. Grant',
    age: 46,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Ulysses_S_Grant_by_Brady_c1870-restored.jpg',
    info: 'Ulysses S. Grant, a former Union general during the Civil War, was known for his leadership and strategic skills on the battlefield. As president, he worked to stabilize the country following the war and to promote civil rights for African Americans. He supported the 15th Amendment to the Constitution, which granted voting rights to African American men. Grant also pursued a foreign policy that sought to expand American influence abroad, negotiating the Treaty of Washington with Great Britain and dispatching troops to defend American interests in Mexico. However, his administration was marred by corruption scandals involving some of his close associates.'
},
{
    years: '1877-1881',
    name: 'Rutherford B. Hayes',
    age: 54,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/President_Rutherford_Hayes_1870_-_1880_Restored.jpg',
    info: 'Rutherford B. Hayes, the 19th President of the United States, is known for his advocacy for civil service reform and his attempts to reconcile the divided nation after the Civil War. He championed civil service reform and worked to eliminate political patronage in government appointments, signing the Pendleton Civil Service Reform Act into law. During his presidency, he also worked to improve education and strengthen the U.S. Navy. Hayes is also known for his controversial election, which was resolved through the Compromise of 1877, leading to the withdrawal of federal troops from the South and effectively ending Reconstruction.'
},
{
    years: '1881',
    name: 'James A. Garfield',
    age: 49,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg',
    info: 'James A. Garfield, the 20th President of the United States, served only 200 days in office before he was assassinated. Prior to his presidency, Garfield was a Civil War hero, serving as a major general in the Union Army. He was also a successful lawyer, educator, and served in Congress. Garfield was known for his advocacy of civil rights and education reform, including increasing funding for public schools. He was shot by Charles Guiteau, a disgruntled office-seeker, on July 2, 1881 and died of complications from his wounds on September 19, 1881.'
},
{
    years: '1881-1885',
    name: 'Chester A. Arthur',
    age: 51,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Chester_Alan_Arthur.jpg',
    info: 'Chester A. Arthur served as the 21st President of the United States. He assumed office after the assassination of President James A. Garfield. Arthur was known for his efforts to reform the civil service system, as he supported the Pendleton Civil Service Reform Act, which aimed to end the spoils system. He also signed into law the Chinese Exclusion Act, which restricted Chinese immigration to the United States. Arthur was known for his love of luxury, which earned him the nickname “The Gentleman Boss”. During his presidency, he was also involved in the construction of the Brooklyn Bridge.'
},
{
    years: '1885-1889',
    name: 'Grover Cleveland',
    age: 47,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg',
    info: 'Grover Cleveland was the 22nd and 24th President of the United States. During his first term, he signed the Interstate Commerce Act, which created the Interstate Commerce Commission to regulate railroads and other interstate commerce. He also vetoed several private pension bills, which earned him the nickname "Veto President." Cleveland was known for his strict fiscal policies and for his opposition to excessive government spending. He also oversaw the passage of the Dawes Act, which divided Native American tribal land into individual plots and opened it up to settlement by non-Natives.'
},
{
    years: '1889-1893',
    name: 'Benjamin Harrison',
    age: 55,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg',
    info: 'President Benjamin Harrison was the grandson of President William Henry Harrison, and the first President to have his voice recorded. Harrison signed the Sherman Antitrust Act into law, which aimed to prevent monopolies and promote competition in business. He also supported the expansion of the Navy and oversaw the opening of the Pan-American Conference. Harrison also signed the Land Revision Act of 1891, which increased public land protection and designated certain areas as national forests. His presidency was marked by efforts to modernize and expand the country\'s infrastructure, including the construction of the first skyscraper in Chicago.'
},
{
    years: '1893-1897',
    name: 'Grover Cleveland',
    age: 55,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Grover_Cleveland_-_NARA_-_518139_%28cropped%29.jpg',
    info: 'Grover Cleveland was the only U.S. president to serve two non-consecutive terms, becoming the 22nd and 24th president. During his second term, Cleveland faced several significant challenges, including a national economic depression, labor strikes, and the Pullman Strike of 1894. He also worked to maintain America\'s neutrality during the Cuban War of Independence and sought to reduce tariffs through the Wilson-Gorman Tariff Act of 1894. However, his efforts were criticized, and he faced significant opposition from both political parties. Despite these challenges, Cleveland remained committed to his principles and values, and his leadership during these tumultuous times earned him a place in history as one of America\'s most respected presidents.'
},
{
    years: '1897-1901',
    name: 'William McKinley',
    age: 54,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Mckinley.jpg',
    info: 'William McKinley, the 25th President of the United States, was known for his advocacy of high tariffs and imperialism. During his presidency, the United States saw a period of rapid economic growth and expansion, with McKinley\'s administration working to establish new markets for American goods overseas. McKinley was also responsible for leading the country through the Spanish-American War, which resulted in the acquisition of Puerto Rico, Guam, and the Philippines. Unfortunately, his presidency was cut short when he was assassinated in 1901, just six months into his second term. McKinley\'s legacy is remembered for his efforts to expand American influence and his support for economic growth.'
},
{
    years: '1901-1909',
    name: 'Theodore Roosevelt',
    age: 42,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/President_Roosevelt_-_Pach_Bros.jpg',
    info: 'President Theodore Roosevelt, also known as Teddy Roosevelt, was the youngest person to assume the presidency at age 42 after the assassination of President William McKinley. Roosevelt is best known for his "Square Deal" domestic policies that sought to balance the interests of businesses, consumers, and workers. He was also a strong advocate for conservation, creating national parks and forests, and establishing the U.S. Forest Service. Roosevelt was a charismatic leader who projected American power and influence around the world, famously saying "speak softly and carry a big stick." His foreign policy was marked by his belief in a strong navy, which he used to secure the Panama Canal and promote American interests in Asia.'
},
{
    years: '1909-1913',
    name: 'William Howard Taft',
    age: 51,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/William_Howard_Taft_-_Harris_and_Ewing.jpg',
    info: 'President William Howard Taft was a lawyer, judge, and government official before his presidency. During his term, Taft worked to strengthen the Interstate Commerce Commission and establish a federal income tax. He also signed laws that strengthened safety regulations in mines and railroads. Taft also pursued a policy of "dollar diplomacy" which aimed to use American financial power to influence foreign countries. Taft signed treaties with several countries that allowed American businesses to invest and operate there. Taft was known for his large physique and was the heaviest president in history. After leaving office, Taft served as a professor of law at Yale University and later as Chief Justice of the Supreme Court.'
},
{
    years: '1913-1921',
    name: 'Woodrow Wilson',
    age: 56,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Thomas_Woodrow_Wilson%2C_Harris_%26_Ewing_bw_photo_portrait%2C_1919.jpg',
    info: 'President Woodrow Wilson is known for his leadership during World War I and his efforts to establish the League of Nations. Wilson was the first president to have a Ph.D. and he was also a prolific author and scholar. During his presidency, he signed many significant pieces of legislation, including the Clayton Antitrust Act, the Federal Reserve Act, and the 19th Amendment which granted women the right to vote. He is also remembered for his progressive domestic policies, such as his New Freedom program, which aimed to reduce corporate power and promote small businesses. However, his record on civil rights was mixed, as he failed to support efforts to pass federal anti-lynching legislation and opposed the voting rights of African Americans. Wilson suffered a debilitating stroke towards the end of his presidency, which left him partially paralyzed and unable to perform his duties.'
},
{
    years: '1921-1923',
    name: 'Warren G. Harding',
    age: 55,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Warren_G_Harding-Harris_%26_Ewing.jpg',
    info: 'President Warren G. Harding served during the early 1920s and focused on promoting a return to normalcy after the upheaval of World War I. He supported business interests and favored isolationism in foreign policy, as evidenced by his signing of the Fordney-McCumber Tariff Act and his attempt to limit US involvement in the League of Nations. Harding also made efforts to address government corruption, although his administration was later marred by several scandals, including the infamous Teapot Dome scandal. Despite this, Harding\'s death in 1923 led to a wave of public mourning, and his legacy is often viewed as one of mixed success.'
},
{
    years: '1923-1929',
    name: 'Calvin Coolidge',
    age: 51,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Calvin_Coolidge_cph.3g10777_%28cropped%29.jpg',
    info: 'Calvin Coolidge is often remembered for his simple and frugal lifestyle and his conservative policies. During his presidency, he lowered taxes and reduced government spending, which helped to promote economic growth and reduce the federal debt. He also signed the Indian Citizenship Act, which granted U.S. citizenship to Native Americans. Coolidge was known for his quiet demeanor and his belief in the power of individualism and self-reliance. He is also remembered for his response to the Boston police strike in 1919, in which he famously declared, "There is no right to strike against the public safety by anybody, anywhere, anytime".'
},
{
    years: '1929-1933',
    name: 'Herbert Hoover',
    age: 54,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/57/President_Hoover_portrait.jpg',
    info: 'Herbert Hoover, served as president from 1929 to 1933, during the early years of the Great Depression. Hoover was a successful businessman before entering politics, and he is often remembered for his efforts to promote economic recovery during the Depression. However, his policies were largely unsuccessful, and his reputation suffered as a result. He signed the Smoot-Hawley Tariff Act, which raised tariffs on imported goods and is widely believed to have contributed to the severity of the Depression. Hoover also signed the Norris-La Guardia Act, which limited the power of employers to use injunctions against striking workers. Despite his efforts to promote economic recovery, Hoover was defeated in the 1932 presidential election by Franklin D. Roosevelt.'
},
{
    years: '1933-1945',
    name: 'Franklin D. Roosevelt',
    age: 51,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/42/FDR_1944_Color_Portrait.jpg',
    info: 'Franklin D. Roosevelt served as the President of the United States during one of the most challenging times in American history. He was first elected in 1932 and went on to win the next three presidential elections, serving a total of four terms. During his presidency, Roosevelt led the country through the Great Depression and World War II. He implemented policies such as the New Deal, which aimed to provide economic relief and reform, and helped establish the United States as a major world power. Roosevelt is also known for his fireside chats, where he spoke directly to the American people and provided updates on his administration\'s policies and initiatives. His leadership and ability to connect with the public made him one of the most influential presidents in American history.'
},
{
    years: '1945-1953',
    name: 'Harry S. Truman',
    age: 60,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/TRUMAN_58-766-06_%28cropped%29.jpg',
    info: 'Harry S. Truman became President of the United States in 1945, following the death of Franklin D. Roosevelt. During his presidency, Truman oversaw the end of World War II, including the decision to drop atomic bombs on Hiroshima and Nagasaki. He also played a key role in the establishment of the United Nations and the Marshall Plan, which helped rebuild Europe after the war. Truman is also known for his domestic policies, including efforts to expand civil rights and establish a fairer economy. He implemented policies such as the Fair Deal, which aimed to provide greater economic security and opportunity for all Americans. Truman\'s presidency was marked by both significant achievements and challenges, and he is widely regarded as one of the most consequential presidents of the 20th century.'
},
{
    years: '1953-1961',
    name: 'Dwight D. Eisenhower',
    age: 62,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Dwight_D._Eisenhower%2C_official_photo_portrait%2C_May_29%2C_1959.jpg',
    info: 'Dwight D. Eisenhower was a five-star general in the United States Army during World War II and later served as the 34th President of the United States. During his presidency, he oversaw the end of the Korean War, signed the Civil Rights Act of 1957, and established the Interstate Highway System. He also warned about the dangers of the "military-industrial complex" in his farewell address. He is known for his pragmatic leadership style, which emphasized cooperation and consensus-building rather than confrontation. His foreign policy focused on containing communism and promoting the spread of democracy, and he played a key role in the formation of NATO. He was also instrumental in resolving the Suez Crisis and the Hungarian Revolution.'
},
{
    years: '1961-1963',
    name: 'John F. Kennedy',
    age: 43,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/John_F._Kennedy%2C_White_House_color_photo_portrait.jpg',
    info: 'John F. Kennedy was the 35th President of the United States and is remembered for his charismatic personality, progressive policies, and tragic assassination. During his presidency, he established the Peace Corps and the Alliance for Progress, aimed at promoting social and economic progress in developing nations. He also pushed for civil rights legislation and gave his famous speech calling for equal rights for all Americans, regardless of race. He faced several foreign policy challenges, including the Cuban Missile Crisis, where his leadership helped avert a nuclear war with the Soviet Union. He also supported the Space Race and the early efforts of NASA to send a man to the moon. His presidency was cut short by his assassination in Dallas, Texas in 1963, which shocked the nation and led to a wave of mourning and tributes in his honor.'
},
{
    years: '1963-1969',
    name: 'Lyndon B. Johnson',
    age: 55,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/37_Lyndon_Johnson_3x4.jpg',
    info: 'Lyndon B. Johnson became president after the assassination of President John F. Kennedy in 1963. Johnson is best known for his "Great Society" programs, which included the creation of Medicare and Medicaid, the Voting Rights Act, and the Civil Rights Act of 1964. He also oversaw significant expansions of social welfare programs and launched the "War on Poverty," which aimed to eradicate poverty in the United States. However, his presidency was also marked by his escalation of the Vietnam War, which remains a controversial and divisive issue to this day. Johnson decided not to seek re-election in 1968 and retired to his ranch in Texas.'
},
{
    years: '1969-1974',
    name: 'Richard Nixon',
    age: 56,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Richard_Nixon_presidential_portrait_%281%29.jpg',
    info: 'Richard Nixon is the only president in U.S. history to resign from office. His presidency was marked by both significant domestic achievements and significant controversies. Nixon established the Environmental Protection Agency and signed the Clean Air Act and Clean Water Act into law, expanding environmental protections. He also pursued a policy of détente with the Soviet Union and China, easing tensions between the U.S. and these two major world powers. However, his presidency was also plagued by the Watergate scandal, which involved a break-in at the Democratic National Committee headquarters in the Watergate complex and subsequent attempts to cover it up. Nixon\'s attempts to obstruct the investigation led to his resignation in 1974, after he faced almost certain impeachment by the House of Representatives.'
},
{
    years: '1974-1977',
    name: 'Gerald Ford',
    age: 61,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Gerald_Ford_presidential_portrait_%28cropped_3%29.jpg',
    info: 'Gerald Ford served as the 38th President of the United States from 1974 to 1977. He became president following the resignation of Richard Nixon, becoming the only person in U.S. history to serve as both vice president and president without being elected to either office. His presidency was marked by efforts to heal the country after the Watergate scandal and the Vietnam War. Ford also played a significant role in U.S. foreign policy, including signing the Helsinki Accords and strengthening relations with the Soviet Union. However, his time in office was also marked by economic difficulties, including high inflation and unemployment. Ford is also known for his controversial decision to pardon Nixon for his involvement in the Watergate scandal, a move that was criticized by many at the time.'
},
{
    years: '1977-1981',
    name: 'Jimmy Carter',
    age: 52,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/JimmyCarterPortrait2.jpg',
    info: 'Jimmy Carter was born in Georgia in 1924 and had a background in the Navy and in agriculture before entering politics. During his presidency, Carter prioritized human rights and worked towards peace in the Middle East. He brokered the Camp David Accords between Israel and Egypt and established diplomatic relations with China. However, his presidency was also marked by economic struggles and the Iran hostage crisis. Despite his efforts to secure the release of the hostages, they were not freed until after he left office. After his presidency, Carter became known for his philanthropic work, particularly through the Carter Center which promotes peace, health, and human rights.'
},
{
    years: '1981-1989',
    name: 'Ronald Reagan',
    age: 69,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Official_Portrait_of_President_Reagan_1981.jpg',
    info: 'Ronald Reagan was a former actor and governor of California before becoming president. Reagan was known for his conservative policies and his ability to communicate effectively with the American public. During his presidency, he oversaw a period of economic growth and played a key role in bringing an end to the Cold War. He implemented tax cuts and deregulation and advocated for a strong national defense. However, his administration was also marked by controversy, including the Iran-Contra scandal where members of his administration sold weapons to Iran in exchange for hostages and funneled the profits to Contra rebels in Nicaragua. After his presidency, Reagan continued to be a prominent figure in American politics and conservative ideology, and his legacy remains influential in American politics today.'
},
{
    years: '1989-1993',
    name: 'George H. W. Bush',
    age: 64,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/George_H._W._Bush_presidential_portrait_%28cropped%29.jpg',
    info: 'Prior to his presidency, George H.W. Bush served as Vice President under Ronald Reagan and as Director of the CIA. During his presidency, Bush oversaw the end of the Cold War and the collapse of the Soviet Union. He launched Operation Desert Storm to liberate Kuwait from Iraqi occupation in 1991, and oversaw the successful military campaign. He also signed the Americans with Disabilities Act and the Clean Air Act Amendments during his presidency. However, he faced criticism for his handling of domestic issues such as the economy and the handling of the HIV/AIDS crisis. Bush lost his bid for re-election in 1992 to Bill Clinton.'
},
{
    years: '1993-2001',
    name: 'Bill Clinton',
    age: 46,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Bill_Clinton.jpg',
    info: 'During Bill Clinton\'s presidency, he focused on domestic issues such as the economy, healthcare, education, and crime reduction. He presided over a period of economic growth and job creation, with low unemployment rates and budget surpluses. However, his presidency was marred by personal scandals, including an affair with a White House intern that led to his impeachment by the House of Representatives. Despite this, he remains a popular figure among Democrats and is often praised for his ability to communicate with the public and work across the aisle. He signed into law several landmark pieces of legislation, such as the Family and Medical Leave Act, the Brady Handgun Violence Prevention Act, and the North American Free Trade Agreement. Clinton also played an active role in foreign affairs, overseeing military interventions in Bosnia and Kosovo and negotiating peace agreements between Israel and Palestine. Overall, Clinton\'s presidency was marked by both successes and controversies, leaving a lasting impact on American politics and culture.'
},
{
    years: '2001-2009',
    name: 'George W. Bush',
    age: 54,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/George-W-Bush.jpeg',
    info: 'President George W. Bush was born into a political family and began his political career as Governor of Texas, serving two terms from 1995 to 2000. As President, he faced major challenges including the 9/11 terrorist attacks, which led to the War on Terror and the invasion of Afghanistan in 2001 and Iraq in 2003. He also signed significant domestic legislation such as the No Child Left Behind Act and the Medicare Prescription Drug Improvement and Modernization Act. In 2008, the country faced a financial crisis that resulted in the government bailout of several large financial institutions. Bush\'s presidency was controversial, with some praising his strong leadership after 9/11 while others criticized his handling of the Iraq War and the response to Hurricane Katrina. After leaving office, he has focused on philanthropic work and promoting his Presidential Library and Museum.'
},
{
    years: '2009-2017',
    name: 'Barack Obama',
    age: 47,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Official_portrait_of_Barack_Obama.jpg',
    info: 'President Barack Obama made history as the first African American president, and his presidency was marked by a focus on healthcare reform, climate change, and economic recovery. His administration introduced the Affordable Care Act, which expanded access to healthcare for millions of Americans. Obama also signed the Paris Agreement, committing the United States to reduce greenhouse gas emissions, and implemented policies to promote clean energy and combat climate change. In response to the 2008 financial crisis, he signed the American Recovery and Reinvestment Act, which injected billions of dollars into the economy to create jobs and stimulate growth. Obama\'s foreign policy focused on diplomacy and multilateralism, and he successfully negotiated the Iran nuclear deal and the Paris climate agreement. However, his presidency was also marked by political polarization and criticism, particularly from conservative lawmakers and media outlets.'
},
{
    years: '2017-2021',
    name: 'Donald Trump',
    age: 70,
    party: 'Republican',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
    info: 'Trump was a businessman and television personality before entering politics, and he was elected as a Republican. During his presidency, he pursued a number of controversial policies, such as a travel ban on several Muslim-majority countries and the separation of migrant families at the border. He also faced several high-profile investigations, including a special counsel investigation into his campaign\'s possible collusion with Russia and an impeachment trial in the House of Representatives and Senate over allegations of abuse of power and obstruction of Congress. Trump\'s foreign policy was marked by his "America First" approach, including a contentious relationship with several NATO allies and the withdrawal of the United States from the Paris Agreement on climate change. He also oversaw a number of domestic policy changes, including a significant overhaul of the tax code and the appointment of several conservative justices to the Supreme Court. Trump\'s presidency was also notable for his use of social media, particularly Twitter, where he frequently made controversial statements and engaged in public feuds with political opponents, journalists, and celebrities.'
},
{
    years: '2021-present',
    name: 'Joe Biden',
    age: 78,
    party: 'Democratic',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Joe_Biden_presidential_portrait.jpg',
    info: 'Prior to Biden\'s presidency, he had an extensive career in politics, serving as a United States Senator from Delaware for 36 years and as Vice President of the United States under President Barack Obama from 2009 to 2017. As President, he has been focused on addressing the COVID-19 pandemic, implementing policies to bolster the economy, and promoting social justice reforms. In his first days in office, he signed a series of executive orders to rejoin the Paris Climate Agreement, end the travel ban on predominantly Muslim countries, and strengthen the Deferred Action for Childhood Arrivals (DACA) program. He has also implemented a $1.9 trillion stimulus package aimed at providing relief to American families and businesses impacted by the pandemic. His administration has also prioritized expanding access to healthcare, proposing initiatives to reduce the cost of prescription drugs and expand access to affordable health insurance. President Biden has also pushed for police reform and social justice, including the George Floyd Justice in Policing Act, which aims to reform law enforcement practices and hold officers accountable for misconduct.'
}
];
