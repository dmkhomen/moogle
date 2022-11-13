import React, { createContext, useContext, useState } from "react";
const ResultContext = createContext();
const baseUrl = "https://g-search.p.rapidapi.com/search?q=";

export const ResultContextProvider = ({ children }) => {
  const fakeData = {
    status: 200,
    data: {
      result_stat: "About 983,000,000 results (0.84 seconds)",
      organic_results: [
        {
          title: "Bitcoin - Open source P2P money",
          url: "https://bitcoin.org/",
          desc: "Bitcoin is an innovative payment network and a new kind of money. Find all you need to know and get started with Bitcoin on bitcoin .org.",
        },
        {
          title: "Bitcoin Price | BTC Price Index and Live Chart — CoinDesk 20",
          url: "https://www.coindesk.com/price/bitcoin/",
          desc: "Bitcoin USD price, real-time (live) charts, news and videos. Learn about BTC value, bitcoin cryptocurrency, crypto trading, and more.",
        },
        {
          title: "Bitcoin.com | Buy BTC, ETH & BCH | Wallet, news, markets ...",
          url: "https://www.bitcoin.com/",
          desc: "Your gateway to Bitcoin & beyond. The tools and information you need to buy, sell, trade, invest, and spend cryptocurrencies. Get started.",
        },
        {
          title: "Bitcoin - Wikipedia",
          url: "https://en.wikipedia.org/wiki/Bitcoin",
          desc: "Bitcoin (abbreviation: BTC; sign: ₿) is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network. Ledger start: 3 January 2009 (13 years ago) Official user(s): : El Salvador; Central African R... Supply limit: ₿21,000,000 Initial release: 0.1.0 / 9 January 2009 (13 years ...",
        },
        {
          title: "Bitcoin price today, BTC to USD live, marketcap and chart",
          url: "https://coinmarketcap.com/currencies/bitcoin/",
          desc: "Bitcoin is down 1.25% in the last 24 hours. The current CoinMarketCap ranking is #1, with a live market cap of $319,523,013,630 USD. It has a circulating supply ...",
        },
        {
          title:
            "Coinbase - Buy and Sell Bitcoin, Ethereum, and more with trust",
          url: "https://www.coinbase.com/",
          desc: "Coinbase is a secure online platform for buying, selling, transferring, and storing cryptocurrency.",
        },
        {
          title: "Bitcoin - The Currency of the Internet - Reddit",
          url: "https://www.reddit.com/r/Bitcoin/",
          desc: "r/ Bitcoin : Bitcoin is the currency of the Internet: a distributed, worldwide, decentralized digital money. Unlike traditional currencies such as …",
        },
        {
          title: "Bitcoin/USD Coin Metrics BTC.CM=:Exchange - CNBC",
          url: "https://www.cnbc.com/quotes/BTC.CM=",
          desc: "Get Bitcoin /USD Coin Metrics (BTC.CM=:Exchange) real-time stock quotes, news, price and financial information from CNBC.",
        },
      ],
      related_questions: [],
      image_results: [],
      image_filters: [],
      video_results: [],
      inline_products: [],
      inline_cards: [],
      inline_twitter: [
        {
          url: "https://twitter.com/Bitcoin/status/1591449884359806976?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet",
        },
        {
          url: "https://twitter.com/Bitcoin/status/1591479648558678016?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet",
        },
        {
          url: "https://twitter.com/Bitcoin/status/1591460116691587073?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet",
        },
        {
          tweet:
            "What @sequoia thought about @SBF_FTX and @FTX_Official. Try not to puke. archive.ph/qFJJN#select…",
          url: "https://twitter.com/Bitcoin/status/1591514610993332224?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet",
        },
        {
          tweet: "What is the @FTX_Official contagion going to look like?",
          url: "https://twitter.com/Bitcoin/status/1591513857721524224?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Etweet",
        },
      ],
      knowledge_graph: {
        description:
          "Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network. Bitcoin transactions are verified by network nodes through cryptography and recorded in a public distributed ledger called a blockchain.",
        informations: [
          {
            attribute: "ss:/webfacts:code",
            value: {
              title: "Code",
              desc: "BTC, XBT",
            },
          },
          {
            attribute: "ss:/webfacts:exchang_rate",
            value: {
              title: "Exchange rate",
              desc: "Floating",
            },
          },
          {
            attribute: "ss:/webfacts:white_paper",
            value: {
              title: "White paper",
              desc: '" Bitcoin: A Peer-to-Peer Electronic Cash System "',
            },
          },
          {
            attribute: "ss:/webfacts:block_reward",
            value: {
              title: "Block reward",
              desc: "₿6.25",
            },
          },
          {
            attribute: "ss:/webfacts:circul_suppli",
            value: {
              title: "Circulating supply",
              desc: "₿18,925,000",
            },
          },
          {
            attribute: "ss:/webfacts:hash_function",
            value: {
              title: "Hash function",
              desc: "SHA-256 (two rounds)",
            },
          },
          {
            attribute: "hw:/collection/currencies:symbol",
            value: {
              title: "Symbols",
              desc: "BTC, ฿, ₿",
            },
          },
          {
            attribute: "kc:/common:downwards",
            value:
              "Bitcoin Foundation Bitcoin Association Bitcoin Association for BSV BitGive Foundation",
          },
          {
            attribute: "kc:/common:downwards",
            value: "Michael J. Saylor Roger Ver Jack Dorsey Sam Bankman‑Fried",
          },
        ],
        answer_panel: [],
      },
      section_with_header: {
        section_list: [],
      },
      navigation: {
        current_page: "1",
        other_pages: [
          {
            page: "2",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=10&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAE",
          },
          {
            page: "3",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=20&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAG",
          },
          {
            page: "4",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=30&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAI",
          },
          {
            page: "5",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=40&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAK",
          },
          {
            page: "6",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=50&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAM",
          },
          {
            page: "7",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=60&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAO",
          },
          {
            page: "8",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=70&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAQ",
          },
          {
            page: "9",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=80&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAS",
          },
          {
            page: "10",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=90&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8tMDegQIARAU",
          },
          {
            page: "Next",
            url: "https://www.google.com/search?q=bitcoin&gl=US&hl=en&ei=yOlwY8HSCPOcptQPksyhoA0&start=10&sa=N&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ8NMDegQIARAW",
          },
        ],
      },
      top_section: {
        featured_snippet: {},
        answer_box: {
          title: "Currency Converter",
          exchange_rate_value: "16591.600000000002",
          exchange_rate:
            "0x Aion Ardor Ark Augur Bancor Basic Attention Token Binance Coin BitShares Bitcoin Bitcoin Cash Bitgem Bytecoin Bytom Cardano ChainLink Dash Decred DigiByte DigitalNote DigixDAO Dogecoin EOS ETC Enigma Ether Factom FunFair GameCredits Gas Gnosis Golem Groestlcoin Hshare ICON KingN Coin Komodo Lisk Litecoin MANA MaidSafeCoin MonaCoin Monero NEM NEO Nano Neblio Nexus Nxt OmiseGO Ontology PIVX Populous Power Ledger QASH Qtum Quantstamp Raiden Network Token ReddCoin Request Network SALT Santiment Network Token Siacoin Status Steem Stellar Stratis Substratum Syscoin TRON TenX Tether Time New Bank Verge Veritaseum Voyager Tokens Waltonchain Wanchain Waves XRP ZClassic Zilliqa aelf iCoin BTC",
        },
      },
      query: {
        auto_correction: {},
        related_search: [
          {
            query: "Dogecoin",
            url: "https://www.google.com/search?gl=US&hl=en&q=Dogecoin&stick=H4sIAAAAAAAAAOOQUeLSz9U3qMqtyLYsMRJMLqosKMlXSC4tKkrNS85MLY5iT8osSc7PzDvFiKTwFCOvfrq-oWF6mlFKcnlSFlSyxNTEJMcEJpkSX15SlmyaDeOnGRsWGGVYVpxi5AAptswrTDvFyA1iGhobFJoYJsEU5malWRoWmCcjNGZVpmXk5SH4ecbmJRnZvxgFndHdu4iVwyU_PRXk4ltskgymH1uZvp2o3LJ_bnvKzTzO53uWf_QOTGy5BgDC5FRH-AAAAA&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQs9oBKAB6BAhIEAI",
          },
          {
            query: "Cardano",
            url: "https://www.google.com/search?gl=US&hl=en&q=Cardano&stick=H4sIAAAAAAAAAOOQUeLVT9c3NExPM0pJLk_KMhJMLqosKMlXSC4tKkrNS85MLY5iT8osSc7PzDvFyKWfq29QlVuRbVlyihFVI1SyxNTEJMcEJpkSX15SlmyaDeOnGRsWGGVYVpxi5AAptswrTDvFyA1iGhobFJoYJsEU5malWRoWmCcjNGZVpmXk5SH4ecbmJRnZvxgFndHdu4iV3TmxKCUxL_8WmySD6cdWpm8nKrfsn9uecjOP8_me5R-9AxNbrgEAR1fjkvoAAAA&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQs9oBKAF6BAhIEAM",
          },
          {
            query: "Litecoin",
            url: "https://www.google.com/search?gl=US&hl=en&q=Litecoin&stick=H4sIAAAAAAAAAOOQUeLSz9U3KDE1MckxMRJMLqosKMlXSC4tKkrNS85MLY5iT8osSc7PzDvFCFZYlVuRbVlyipFXP13f0DA9zSgluTwpCyoJMQUmmRJfXlKWbJoN46cZGxYYZVhWnGLkACm2zCtMO8XIDWIaGhsUmhgmwRTmZqVZGhaYJyM0ZlWmZeTlIfh5xuYlGdm_GAWd0d27iJXDJ7MkFeTiW2ySDKYfW5m-najcsn9ue8rNPM7ne5Z_9A5MbLkGAJuMMJL4AAAA&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQs9oBKAJ6BAhIEAQ",
          },
          {
            query: "Bitcoin Cash",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+Cash&stick=H4sIAAAAAAAAAOOQUeLVT9c3NEyJLy8pSzbNNhJMLqosKMlXSC4tKkrNS85MLY5iT8osSc7PzDvFyKWfq29QlVuRbVlyihGiMT3NKCW5PCkLKlliamKSYwKThJkK46cZGxYYZVhWnGLkACm2zCtMO8XIDWIaGhsUmhgmwRTmZqVZGhaYJyM0ZlWmZeTlIfh5xuYlGdm_GAWd0d27iJXHCeJgBefE4oxbbJIMph9bmb6dqNyyf257ys08zud7ln_0DkxsuQYAL4t3G_8AAAA&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQs9oBKAN6BAhIEAU",
          },
          {
            query: "Tether",
            url: "https://www.google.com/search?gl=US&hl=en&q=Tether&stick=H4sIAAAAAAAAAOOQUeLVT9c3NEwzNiwwyrCsMBJMLqosKMlXSC4tKkrNS85MLY5iT8osSc7PzDvFyKWfq29QlVuRbVlyihGiMT3NKCW5PCkLKlliamKSYwKTTIkvLylLNs2G8WG2nGLkACm2zCtMO8XIDWIaGhsUmhgmwRTmZqVZGhaYJyM0ZlWmZeTlIfh5xuYlGdm_GAWd0d27iJUtJLUkI7XoFpskg-nHVqZvJyq37J_bnnIzj_P5nuUfvQMTW64BAH1NppD5AAAA&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQs9oBKAR6BAhIEAY",
          },
          {
            query: "United States Dollar",
            url: "https://www.google.com/search?gl=US&hl=en&q=U.S.+Dollar&stick=H4sIAAAAAAAAAOOQUeLQz9U3sMwrTDMSTC6qLCjJV0guLSpKzUvOTC2OYk_KLEnOz8w7xcgFUlaVW5FtWXKKkVc_Xd_QMD3NKCW5PCkLKlliamKSYwKTTIkvLylLNs2G8dOMDQuMMiwrTjHCLTzFyA1iGhobFJoYJsEU5malWRoWmCcjNGZVpmXk5SH4ecbmJRnZvxgFndHdu4iVO1QvWE_BJT8nJ7HoFpskg-nHVqZvJyq37J_bnnIzj_P5nuUfvQMTW64BAHIB3gz5AAAA&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQs9oBKAV6BAhIEAc",
          },
          {
            query: "bitcoin price",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+price&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhsEAE",
          },
          {
            query: "bitcoin usd",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+USD&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhqEAE",
          },
          {
            query: "bitcoin news",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+news&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhoEAE",
          },
          {
            query: "bitcoin mining",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+mining&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhnEAE",
          },
          {
            query: "bitcoin dollar",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+dollar&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhlEAE",
          },
          {
            query: "bitcoin account",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+account&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhiEAE",
          },
          {
            query: "bitcoin chart",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+chart&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhgEAE",
          },
          {
            query: "bitcoin prediction",
            url: "https://www.google.com/search?gl=US&hl=en&q=Bitcoin+prediction&sa=X&ved=2ahUKEwjB1ujZmqv7AhVzjokEHRJmCNQQ1QJ6BAhvEAE",
          },
        ],
      },
      local_results: {
        map: {},
        places: [],
        hotels: [],
      },
      ads: {
        top_text_ads: [],
        bottom_text_ads: [],
        product_ads: [],
        sidebar_product_ads: [],
      },
      search_parameters: {
        gl: "US",
        hl: "en",
      },
    },
  };
  const [results, setResults] = useState(fakeData);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("cow");

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
