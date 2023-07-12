import React from "react"
import MetaTags from "react-meta-tags"
import { Link } from "react-router-dom"
import {
  Container,
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import images
import harga from "../../assets/images/blog/harga.webp"

const ContentOne = () => {
  return (
    <React.Fragment>
      <div className="page-content bg-black mt-4">
        <MetaTags>
          <title>NurGolds | Bitcoin (BTC) price prediction for June 2023</title>
        </MetaTags>
        <Container>
          <div className="detail-blog">
            <Row>
              <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Breadcrumbs
                  maintitle="News"
                  title="CRYPTOCURRENCY"
                  breadcrumbItem="Bitcoin (BTC) price prediction for June 2023"
                />
                <h1>Bitcoin (BTC) price prediction for June 2023</h1>
                <div className="header-blog-img">
                  <img src={harga} alt="" className="" />
                </div>
                <div className="content">
                  <p>
                    Predicting what will happen to Bitcoin’s price is difficult.
                    The token traded at almost £50,000 in November 2021 and
                    today it’s valued at £21,118.
                  </p>
                  <p>
                    As volatile as BTC prices are, they’re driven by four main
                    factors: supply, demand, competition and sentiment. Here,
                    we’ve taken a look at how each might play out in the
                    foreseeable future – plus some additional pressures and
                    expert opinions - to predict what might be next for bitcoin
                    prices.
                  </p>

                  <p>
                    The Financial Conduct Authority (FCA) has warned repeatedly
                    that anyone investing in crypto should be prepared to lose
                    everything.
                  </p>

                  <p>
                    <b>Supply</b>
                  </p>
                  <p>
                    The more scarce an asset becomes, the more valuable it tends
                    to get. The total amount of bitcoin that will ever be
                    available is capped at 21,000,000, which means supply is
                    limited.
                  </p>

                  <p>
                    New bitcoins are minted when a new block of verified
                    transactions is added to the blockchain by a bitcoin miner
                    (read more here). As a reward, they’re gifted an amount of
                    newly-minted bitcoin.
                  </p>

                  <p>
                    More than 19,000,000 BTC have already been minted over the
                    last 12 years, leaving around 2,000,000 more to be mined.
                    However, while the unmined supply of BTC represents over 10%
                    of the total supply of BTC, it doesn’t mean the 21,000,000
                    limit will be reached in 14 months’ (10% of 12 years) time.
                  </p>

                  <p>
                    This is because the minting of new bitcoins is set at a
                    fixed rate which slows over time. When bitcoin began, the
                    reward given to miners for adding a block of transactions to
                    the blockchain was 50BTC. Four years later, it was halved to
                    25 and the reward continues to halve every four years.
                  </p>

                  <p>
                    It’s expected the reward will be 3.125BTC by the end of
                    2024, which means it’ll be decades before all 21,000,000
                    bitcoins are minted. So, in the medium term, bitcoin will
                    not be in short supply.
                  </p>

                  <p>
                    However, the halving mechanism effectively puts a constraint
                    on supply that could push up prices if demand increases in
                    future. We’re now less than a year out from the next halving
                    in April 2024, and anticipation could cause prices to rise.
                  </p>

                  <p>
                    Verdict on supply: With 10 months to go until the next
                    bitcoin halving, prices could slowly increase.
                  </p>
                  <p>
                    <b>Demand</b>
                  </p>
                  <p>
                    Growing demand for a finite resource should increase its
                    value. As we know, bitcoin is a finite resource that is
                    going to become scarcer over time.
                  </p>

                  <p>
                    The greater the demand for bitcoin – that is, the number of
                    people buying it – the more transactions there will be.
                    Daily bitcoin transactions peaked on May 10 2023 at more
                    than 670,000. Yesterday, on 7 June 2023, there were more
                    than 443,000 transactions - down from around 526,00 last
                    month.
                  </p>

                  <p>
                    Google trends data appears to show that fewer people are
                    searching for bitcoin today than they were a few years ago,
                    with searches peaking in December 2017. Searches in 2023 are
                    trending downwards.
                  </p>

                  <p>
                    Another worthwhile indication of demand is the number of
                    active bitcoin addresses, since you need an active address
                    to buy bitcoin.
                  </p>

                  <p>
                    At the time of writing, there were around 1,000,000 active
                    addresses, according to Glassnode data. That’s significantly
                    up from last month’s 566,000 and not far from its 1.25m peak
                    in April last year.
                  </p>

                  <p>
                    Finally, the next bitcoin halving is due to take place in
                    the spring of 2024, and demand could increase before that
                    time in anticipation of the supply squeeze it theoretically
                    brings.
                  </p>

                  <p>
                    Verdict on demand: Transaction numbers and active addresses
                    tell a contradictory story. Prices could fall, hold or rise.
                  </p>

                  <p>
                    <b>Competition</b>
                  </p>
                  <p>
                    The emergence of cheaper altcoins with faster transaction
                    speeds has not cost bitcoin its crown as the king of
                    cryptocurrencies. It’s still the biggest cryptocurrency by
                    market capitalisation and has even been adopted as a state
                    currency in El Salvador - something that no altcoin can
                    boast.
                  </p>

                  <p>
                    Detractors have argued that some altcoins have more
                    potential than bitcoin because, while the latter is a system
                    for payments alone, Ethereum, Cardano and Ripple feature
                    programmable blockchains that can host smart contracts and
                    decentralised apps (dApps).
                  </p>

                  <p>
                    Supporters might argue that bitcoin cannot be directly
                    compared to such altcoins.
                  </p>

                  <p>
                    It’s interesting to note that the crypto crash that began in
                    May 2022 and took more than 50% off bitcoin’s value also
                    affected its competition. Ethereum (ETH) and Cardano (ADA)
                    both fell by similar amounts, meaning bitcoin’s losses
                    weren’t its competitors’ gains.
                  </p>

                  <p>
                    Even stablecoins that were created as a less volatile
                    alternative to traditional crypto assets have been
                    negatively affected by global economic factors.
                  </p>

                  <p>
                    The other big change in (relatively) recent months is the
                    Ethereum merge, which saw Ethereum switch from a Proof of
                    Work consensus mechanism to a Proof of Stake consensus
                    mechanism. While better for the environment, the change
                    doesn’t appear to have boosted bitcoin’s main rival
                    significantly in terms of value.
                  </p>

                  <p>
                    Verdict on competition: With no particular pressure on
                    competition, prices may remain flat.
                  </p>

                  <p>
                    <b>Sentiment</b>
                  </p>
                  <p>
                    Bitcoin prices can be affected by people’s attitudes towards
                    it.
                  </p>

                  <p>
                    A fear and greed index is a tool used by investors to gauge
                    sentiment in a market. Fear reflects a market in which
                    investors sell their assets because they’re concerned prices
                    will fall. Greed reflects a market where investors are
                    buying because they expect prices will rise.A fear and greed
                    index is a tool used by investors to gauge sentiment in a
                    market. Fear reflects a market in which investors sell their
                    assets because they’re concerned prices will fall. Greed
                    reflects a market where investors are buying because they
                    expect prices will rise.
                  </p>

                  <p>
                    According to the widely cited Crypto Fear & Greed Index at
                    alternative.me, which tracks crypto trends, the market is
                    currently in a Neutral state - meaning crypto holders in
                    generalaren’t anticipating gains or losses. This status is
                    unchanged for the last few months.
                  </p>

                  <p>
                    Critics of fear and greed indices say they can be useful as
                    a barometer of sentiment, but they don’t work well for
                    predicting price movements.
                  </p>

                  <p>
                    Another good indicator of sentiment is the levels of bitcoin
                    outflow from crypto exchanges: in other words, the more
                    bitcoin is being transferred out of crypto exchanges and
                    into wallets, the more investors are holding their bitcoin
                    in anticipation it’ll go up in value.
                  </p>

                  <p>
                    Cryptoquant data shows withdrawals are broadly flat, albeit
                    up slightly on last month.
                  </p>

                  <p>
                    Verdict on sentiment: Sentiment might indicate that prices
                    are about to increase.
                  </p>
                </div>
                <div className="source">
                  Source:{" "}
                  <a
                    href="https://www.standard.co.uk/esmoney/investing/cryptocurrency/bitcoin-btc-price-prediction-for-june-2023-b1004590.html"
                    target="_blank"
                  >
                    https://www.standard.co.uk/esmoney/investing/cryptocurrency/bitcoin-btc-price-prediction-for-june-2023-b1004590.html
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ContentOne
