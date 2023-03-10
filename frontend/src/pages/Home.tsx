import { useState } from "react"
import { Link } from "react-router-dom"

import { ConnectButton, Search, EasterEgg } from "../components"

import "./Home.css"

const Home = () => {
    const exampleAddress = "0x5e349eca2dc61aBCd9dD99Ce94d04136151a09Ee"

    const [easterEggFound, setEasterEggFound] = useState(false)

    const toggleEasterEgg = () => {
        setEasterEggFound(!easterEggFound)
    }

    return (
        <div className="home">
            <EasterEgg found={easterEggFound} toggle={toggleEasterEgg} />

            <div className="hero">
                <div className="container">
                    <div className="content">
                        <h1>Manage and delegate your governance tokens across every chain in <span className="gradient" onClick={toggleEasterEgg}>one place</span>.</h1>
                        <p className="lead">Unlock the full power of the network around governance tokens with the ability to delegate all your voting power - no coding needed.</p>

                        <div className="buttons">
                            <ConnectButton className="primary" />
                            <p>or</p>
                            <Search />
                        </div>

                        <small><Link to={`/account/${exampleAddress}`} className="example">View example wallet</Link></small>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="benefits">
                    <div className="card benefit">
                        <h3>Make holding governance tokens worth it</h3>
                        <p>Forget the days of holding governance tokens that don't get any use.</p>
                    </div>

                    <div className="card benefit">
                        <h3>Delegate your tokens through one platform</h3>
                        <p>Throw away your scratch notes and spreadsheets. Manage tokens in 1 simple interface.</p>
                    </div>

                    <div className="card benefit">
                        <h3>Manage your tokens across every key chain</h3>
                        <p>Manage your tokens across every key chain, including Ethereum, Optimism, and more.</p>
                    </div>

                    <div className="card benefit">
                        <h3>Unlock the full power of the network</h3>
                        <p>Lower the dormant voting power by promoting better personal governance practices.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Home }