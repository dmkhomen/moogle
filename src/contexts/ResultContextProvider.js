import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://g-search.p.rapidapi.com/search?q=";

export const ResultContextProvider = ({ children }) => {
  // const fakeData = {
  //   status: 200,
  //   data: {
  //     result_stat: "About 1,420,000,000 results (0.64 seconds)",
  //     organic_results: [
  //       {
  //         title: "Cattle - Wikipedia",
  //         url: "https://en.wikipedia.org/wiki/Cattle",
  //         desc: "Cattle (Bos taurus) are large, domesticated, cloven-hooved, herbivores. They are a prominent modern member of the subfamily Bovinae and the most widespread ... Kingdom: Animalia Genus: Bos Order: Artiodactyla Family: Bovidae ‎ List of cattle breeds · ‎ Cow (disambiguation) · ‎ Dairy cattle · ‎ Beef cattle",
  //       },
  //       {
  //         title: "cow | Description & Facts - Encyclopedia Britannica",
  //         url: "https://www.britannica.com/animal/cow",
  //         desc: "cow , in common parlance, a domestic bovine, regardless of sex and age, usually of the species Bos taurus. In precise usage, the name is given to mature ... ‎ Domestic Cattle · ‎ Domestication And Economic... · ‎ Dairy Cattle Breeds",
  //       },
  //       {
  //         title: "Cow Definition & Meaning - Merriam-Webster",
  //         url: "https://www.merriam-webster.com/dictionary/cow",
  //         desc: "6 days ago — intimidate, cow , bulldoze, bully, browbeat mean to frighten into submission. intimidate implies inducing fear or a sense of inferiority into ... ‎ Have a Cow · ‎ Cash cow · ‎ Holy cow · ‎ Sacred cow",
  //       },
  //       {
  //         title: "cow - Wiktionary",
  //         url: "https://en.wiktionary.org/wiki/cow",
  //         desc: "(strictly) An adult female of the species Bos taurus, especially one that has calved. · (formerly inexact but now common) Any member of the species Bos taurus ...",
  //       },
  //       {
  //         title: "Cow | Smithsonian's National Zoo",
  //         url: "https://nationalzoo.si.edu/animals/cow",
  //         desc: "Domestic cattle belong to the genus Bos and the species taurus and indicus. All British and European cattle breeds, such as Angus, Hereford, Holstein, Shorthorn ... ‎ Fun Facts · ‎ Conservation Status · ‎ Cow News",
  //       },
  //       {
  //         title: "Cow (2021) - IMDb",
  //         url: "https://www.imdb.com/title/tt11548822/",
  //         desc: "Cow : Directed by Andrea Arnold. With Lin Gallagher. A close-up portrait of the daily lives of two cows . Rating: 7.1/10 · ‎ 1,564 votes ‎ Videos3 · ‎ More Like This · ‎ User Reviews25",
  //       },
  //       {
  //         title: "Cows | The Humane Society of the United States",
  //         url: "https://www.humanesociety.org/animals/cows",
  //         desc: "Cows bond closely with their herd and create close friendships. They can anticipate the future and experience pain, fear and anxiety, which makes the abuses ...",
  //       },
  //       {
  //         title: "Cow - Rotten Tomatoes",
  //         url: "https://www.rottentomatoes.com/m/cow",
  //         desc: "Critic Reviews for Cow · The documentary from British writer-director Andrea Arnold conveys something similar to the splendor that radiates from the best of ... Release Date (Theaters): Apr 8, 2022 limited Box Office (Gross USA): $22.2K Runtime: 1h 33m Director: Andrea Arnold Rating: 96% · ‎ 98 votes",
  //       },
  //       {
  //         title:
  //           "Cow | Discover the best in independent, foreign ... - IFC Films",
  //         url: "https://www.ifcfilms.com/films/cow",
  //         desc: "Academy Award winner Andrea Arnold returns with an intimate portrait of one dairy cow's life. The film highlights the beauty and challenges cows face, ...",
  //       },
  //       {
  //         title: "Cow Animal Facts | Bos Taurus",
  //         url: "https://a-z-animals.com/animals/cow/",
  //         desc: "Aug 28, 2022 — Cow are herbivores, which means they grass and other plants. Cows can eat a wide range of tough grasses thanks to their very unique way of ... What is the purpose of a cow? Where do cows come from?",
  //       },
  //       {
  //         title: "CoW Protocol - The smartest way to trade cryptocurrencies",
  //         url: "https://cow.fi/",
  //         desc: "CoW Protocol finds the lowest prices from all decentralized exchanges and DEX aggregators & saves you more with p2p trading and protection from MEV.",
  //       },
  //       {
  //         title: "Cows - Compassion in World Farming",
  //         url: "https://www.ciwf.org.uk/farm-animals/cows/",
  //         desc: "Cows are reared for beef, veal and their milk. Find out more about the lives of cows and their calves.",
  //       },
  //       {
  //         title: "Cow Definition & Meaning - Dictionary.com",
  //         url: "https://www.dictionary.com/browse/cow",
  //         desc: "Cow definition, the mature female of a bovine animal, especially of the genus Bos. See more.",
  //       },
  //       {
  //         title: "COW | definition in the Cambridge English Dictionary",
  //         url: "https://dictionary.cambridge.org/us/dictionary/english/cow",
  //         desc: "cow noun [C] (ANIMAL) ... A cow is also any of other large female, adult mammals, such as elephants or whales.",
  //       },
  //       {
  //         title: "The Cow Cafe - Restaurant in New Bern, NC",
  //         url: "https://www.cowcafenewbern.com/",
  //         desc: "The Cow Cafe in New Bern, NC. Call us at (252) 672-9269. Check out our location and hours, and latest menu with photos and reviews.",
  //       },
  //       {
  //         title: "Crowd Cow: Online Meat & Seafood Delivery | Meat ...",
  //         url: "https://www.crowdcow.com/",
  //         desc: "6 products — Get grass fed steaks, pasture raised craft beef, pastured chicken, heritage pork and more meat you can't find anywhere else ― delivered right to ...",
  //       },
  //       {
  //         title: "About BSE BSE (Bovine Spongiform Encephalopathy) - CDC",
  //         url: "https://www.cdc.gov/prions/bse/about.html",
  //         desc: "Bovine Spongiform Encephalopathy (BSE), or Mad Cow Disease ... Research indicates that the first probable infections of BSE in cows occurred during the ...",
  //       },
  //       {
  //         title: "1000+ Best Cow Images · 100% Free Download - Pexels",
  //         url: "https://www.pexels.com/search/cow/",
  //         desc: "Download and use 2000+ Cow stock photos for free. ✓ Thousands of new images every day ✓ Completely Free to Use ✓ High-quality videos and images from ...",
  //       },
  //       {
  //         title: "Cow Creek Band of Umpqua Tribe of Indians",
  //         url: "https://www.cowcreek-nsn.gov/",
  //         desc: "The Cow Creek Tribal Nation, located in Southwestern Oregon, is governed by an elected eleven-member council known as the Tribal Board of Directors. The Cow ...",
  //       },
  //       {
  //         title: "New Zealand angers its farmers by proposing taxing cow ...",
  //         url: "https://www.npr.org/2022/10/11/1127955580/new-zealand-angers-its-farmers-by-proposing-taxing-cow-burps",
  //         desc: "Oct 11, 2022 — New Zealand's government on Tuesday proposed taxing the greenhouse gasses that farm animals make from burping and peeing as part of a plan ...",
  //       },
  //       {
  //         title: "COWS Fun Original T'Shirts and Much MOOOORE!",
  //         url: "https://cows.ca/",
  //         desc: "COWS Fun Original T'Shirts and Much MOOOORE!",
  //       },
  //       {
  //         title: "Home - Sweet Cow Ice Cream",
  //         url: "https://www.sweetcowicecream.com/",
  //         desc: "Welcome to Sweet Cow Ice Cream. We are a Colorado-based small batch ice cream that is community based, home made - fresh daily & is simply moolicious!",
  //       },
  //       {
  //         title: "Official Skinny Cow® | Low Fat Ice Cream Sandwiches & ...",
  //         url: "https://www.icecream.com/us/en/brands/skinny-cow",
  //         desc: "Skinny Cow ® believes dessert is meant to be eaten. Indulge in all its chocolatey and caramelly glory today!",
  //       },
  //       {
  //         title: "Cow (2021) - MUBI",
  //         url: "https://mubi.com/films/cow-2021",
  //         desc: "A portrait of the life of a dairy cow called Luma, this observational documentary unflinchingly chronicles its subject's daily life, from grazing in green ...",
  //       },
  //       {
  //         title: "Purple Cow, New Edition: Transform Your Business by ...",
  //         url: "https://www.amazon.com/Purple-Cow-New-Transform-Remarkable/dp/1591843170",
  //         desc: "Purple Cow , New Edition: Transform Your Business by Being Remarkable [Godin, Seth] on Amazon.com. *FREE* shipping on qualifying offers. Purple Cow , New ... Publisher: ‎Portfolio; New edition (November 12, ... Dimensions: ‎5.2 x 0.8 x 7.4 inches Rating: 4.5 · ‎ 2,431 reviews · ‎ $12.29 · ‎ In stock",
  //       },
  //       {
  //         title: "Why a Documentary About a Cow Reveals the Limits of ...",
  //         url: "https://www.newyorker.com/culture/the-front-row/why-a-documentary-about-a-cow-reveals-the-limits-of-an-art-form",
  //         desc: "Apr 8, 2022 — Arnold and her crew followed a single dairy cow named Luma, at a cattle farm in Park Farm, in Kent, England, for an intermittent four-year ...",
  //       },
  //       {
  //         title: "Red Cow - Madrona, Seattle - Ethan Stowell Restaurants",
  //         url: "https://ethanstowellrestaurants.com/restaurants/red-cow-madrona-seattle",
  //         desc: "Red Cow is Steak Frites in Seattle's Madrona neighborhood. A classic French brasserie featuring housemade charcuterie, local seafood, a full bar, ...",
  //       },
  //       {
  //         title: "Cow in std::borrow - Rust",
  //         url: "https://doc.rust-lang.org/std/borrow/enum.Cow.html",
  //         desc: "The type Cow is a smart pointer providing clone-on-write functionality: it can enclose and provide immutable access to borrowed data, and clone the data ...",
  //       },
  //       {
  //         title: "Burgers & Whiskey | Farmer & the Cow | Wilmington DE",
  //         url: "https://www.farmerandthecow.com/",
  //         desc: "Farmer & the Cow serves up creative, fresh burgers, craft cocktails, and whiskey in a rustic and cozy downtown Wilmington bar.",
  //       },
  //       {
  //         title: "Cow - Minecraft Wiki",
  //         url: "https://minecraft.fandom.com/wiki/Cow",
  //         desc: "A cow is a passive mob found in most grassy biomes and a source of leather, beef and milk. Cows spawn above grass blocks in small herds during world ... Spawn: Grass blocks with at least two blocks of ... Speed: 0.25 Hitbox size: In Java Edition: Adult: Height: 1.4 ... Behavior: Passive",
  //       },
  //       {
  //         title: "Copper Cow Coffee | Specialty Vietnamese Coffee",
  //         url: "https://coppercowcoffee.com/",
  //         desc: "Upgrade your coffee ritual with sustainably sourced Vietnamese coffee, single serve pour overs, and latte kits, flavored with real, whole herbs and spices.",
  //       },
  //       {
  //         title: "Cow Vintage – We Are Cow",
  //         url: "https://wearecow.com/",
  //         desc: "The No1 Vintage Shop in The UK Is Now Online. We have all your vintage clothing needs, with branded, reworked, and vintage sportswear.",
  //       },
  //       {
  //         title: "Sector at a Glance - USDA ERS",
  //         url: "https://www.ers.usda.gov/topics/animal-products/cattle-beef/sector-at-a-glance/",
  //         desc: "Sep 26, 2022 — Cow -calf operations mainly maintain a herd of beef cows for raising calves. Most calves are born in the spring and weaned at 3 to 7 months.",
  //       },
  //       {
  //         title: "Cow | alimentarium",
  //         url: "https://www.alimentarium.org/en/fact-sheet/cow",
  //         desc: "Cows are female cattle and the term is also the common name for the entire 'Bos taurus' species. Cows are the first large mammals domesticated some 8000 ...",
  //       },
  //       {
  //         title: "Information & Facts on Cows,Bulls & Calves - Animal Corner",
  //         url: "https://animalcorner.org/animals/cows/",
  //         desc: "Cows are members of the sub-family 'Bovinae' of the family 'Bovidae'. This family also includes Gazelles, Buffalo, Bison, Antelopes, Sheep and Goats.",
  //       },
  //       {
  //         title: "This is COW!",
  //         url: "https://www.thisiscow.com/",
  //         desc: "Copyright Cow 2022. This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies. OK Learn More.",
  //       },
  //       {
  //         title: "Ripple Effect | Home",
  //         url: "https://rippleeffect.org/",
  //         desc: "Over the last 30 years, Send a Cow has been helping families to grow their own food, confidence and aspirations.",
  //       },
  //       {
  //         title: "How Cows Eat Grass - FDA",
  //         url: "https://www.fda.gov/animal-veterinary/animal-health-literacy/how-cows-eat-grass",
  //         desc: "Jul 1, 2022 — Exploring how a cow digests its food. Cows have a very different digestive system than people, and this allows them to thrive on a menu ...",
  //       },
  //       {
  //         title: "Gift of a Cow | Heifer International",
  //         url: "https://www.heifer.org/gift-catalog/animals/gift-of-a-heifer.html",
  //         desc: "Heifer cow gift donations can change lives, giving hope to families in even the most dire of circumstances. $50.00 to $500.00",
  //       },
  //     ],
  //     related_questions: [],
  //     image_results: [],
  //     image_filters: [],
  //     video_results: [
  //       {
  //         title: "Cow - Official Trailer | HD | IFC Films",
  //         url: "https://www.youtube.com/watch?v=NkCXJfdJE5A",
  //         image:
  //           "https://cdn.britannica.com/55/174255-050-526314B6/brown-Guernsey-cow.jpg",
  //       },
  //     ],
  //     inline_products: [],
  //     inline_cards: [],
  //     inline_twitter: [],
  //     knowledge_graph: {
  //       title: "Cattle",
  //       subtitle: "Animal",
  //       description:
  //         "Cattle are large, domesticated, cloven-hooved, herbivores. They are a prominent modern member of the subfamily Bovinae and the most widespread species of the genus Bos. Adult females are referred to as cows and adult males are referred to as bulls.",
  //       informations: [
  //         {
  //           attribute: "kc:/biology/organism_classification:speed",
  //           value: {
  //             title: "Speed",
  //             desc: "25 mph (Maximum)",
  //           },
  //         },
  //         {
  //           attribute:
  //             "kc:/biology/organism_classification:scientific name and meaning",
  //           value: {
  //             title: "Scientific name",
  //             desc: "Bos taurus",
  //           },
  //         },
  //         {
  //           attribute: "kc:/biology/organism_classification:daily sleep",
  //           value: {
  //             title: "Daily sleep",
  //             desc: "4 hours (Female, Adult, Cow)",
  //           },
  //         },
  //         {
  //           attribute: "kc:/biology/organism_classification:gestation period",
  //           value: {
  //             title: "Gestation period",
  //             desc: "283 days",
  //           },
  //         },
  //         {
  //           attribute: "kc:/biology/organism_classification:mass",
  //           value: {
  //             title: "Mass",
  //             desc: "2,400 lbs (Male, Adult, Bull), 1,600 lbs (Female, Adult, Cow)",
  //           },
  //         },
  //         {
  //           attribute:
  //             "kc:/biology/organism_classification:higher classification",
  //           value: {
  //             title: "Higher classification",
  //             desc: "Bos",
  //           },
  //         },
  //         {
  //           attribute: "kc:/biology/domesticated_animal:breeds",
  //           value:
  //             "Breeds View 15+ more Holstein Friesian cattle Aberdeen Angus Hereford cattle Simmental cattle",
  //         },
  //       ],
  //       answer_panel: [],
  //     },
  //     section_with_header: {
  //       section_list: [],
  //     },
  //     navigation: {
  //       current_page: "1",
  //       other_pages: [
  //         {
  //           page: "2",
  //           url: "https://www.google.com/search?q=cow&num=40&gl=US&hl=en&ei=jxRxY93BGcCH0PEP_tufgAM&start=40&sa=N&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ8tMDegQIBhAE",
  //         },
  //         {
  //           page: "3",
  //           url: "https://www.google.com/search?q=cow&num=40&gl=US&hl=en&ei=jxRxY93BGcCH0PEP_tufgAM&start=80&sa=N&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ8tMDegQIBhAG",
  //         },
  //         {
  //           page: "4",
  //           url: "https://www.google.com/search?q=cow&num=40&gl=US&hl=en&ei=jxRxY93BGcCH0PEP_tufgAM&start=120&sa=N&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ8tMDegQIBhAI",
  //         },
  //         {
  //           page: "5",
  //           url: "https://www.google.com/search?q=cow&num=40&gl=US&hl=en&ei=jxRxY93BGcCH0PEP_tufgAM&start=160&sa=N&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ8tMDegQIBhAK",
  //         },
  //         {
  //           page: "6",
  //           url: "https://www.google.com/search?q=cow&num=40&gl=US&hl=en&ei=jxRxY93BGcCH0PEP_tufgAM&start=200&sa=N&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ8tMDegQIBhAM",
  //         },
  //         {
  //           page: "7",
  //           url: "https://www.google.com/search?q=cow&num=40&gl=US&hl=en&ei=jxRxY93BGcCH0PEP_tufgAM&start=240&sa=N&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ8tMDegQIBhAO",
  //         },
  //         {
  //           page: "Next",
  //           url: "https://www.google.com/search?q=cow&num=40&gl=US&hl=en&ei=jxRxY93BGcCH0PEP_tufgAM&start=40&sa=N&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ8NMDegQIBhAQ",
  //         },
  //       ],
  //     },
  //     top_section: {
  //       featured_snippet: {},
  //       answer_box: {},
  //     },
  //     query: {
  //       auto_correction: {},
  //       related_search: [
  //         {
  //           query: "cow cartoon",
  //           url: "https://www.google.com/search?num=40&gl=US&hl=en&q=Cow+cartoon&sa=X&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ1QJ6BQiAAhAB",
  //         },
  //         {
  //           query: "cow baby",
  //           url: "https://www.google.com/search?num=40&gl=US&hl=en&q=Cow+baby&sa=X&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ1QJ6BQj-ARAB",
  //         },
  //         {
  //           query: "male cow",
  //           url: "https://www.google.com/search?num=40&gl=US&hl=en&q=Male+cow&sa=X&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ1QJ6BQiFAhAB",
  //         },
  //         {
  //           query: "female cow",
  //           url: "https://www.google.com/search?num=40&gl=US&hl=en&q=Female+cow&sa=X&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ1QJ6BQiEAhAB",
  //         },
  //         {
  //           query: "cow wikipedia",
  //           url: "https://www.google.com/search?num=40&gl=US&hl=en&q=Cow+Wikipedia&sa=X&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ1QJ6BQiDAhAB",
  //         },
  //         {
  //           query: "cow scientific name",
  //           url: "https://www.google.com/search?num=40&gl=US&hl=en&q=Cow+scientific+name&sa=X&ved=2ahUKEwidxeW_w6v7AhXAAzQIHf7tBzAQ1QJ6BQiCAhAB",
  //         },
  //       ],
  //     },
  //     local_results: {
  //       map: {},
  //       places: [],
  //       hotels: [],
  //     },
  //     ads: {
  //       top_text_ads: [],
  //       bottom_text_ads: [],
  //       product_ads: [],
  //       sidebar_product_ads: [],
  //     },
  //     search_parameters: {
  //       gl: "US",
  //       hl: "en",
  //       num: "40",
  //     },
  //   },
  // };
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");

  const getResults = async (query) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${query}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": "g-search.p.rapidapi.com",
      },
    });

    const data = await response.json();

    console.log(data);

    setResults(data);
    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
