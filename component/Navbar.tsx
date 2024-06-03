import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return (
        <div className="flex navbar bg-base-100 gap-5">
            <div className="flex-1 gap-6">
                <a className="btn btn-ghost text-xl gap-6">GoldNFT</a>
                <a className="btn btn-ghost text-xl gap-6"><ConnectButton /></a>
            </div>

        </div>
    )
}

export default Navbar