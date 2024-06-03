import React from 'react'
import { useReadContracts } from 'wagmi'
import { NFTAbi } from '../abi/NFTabi'
import { useWriteContract } from 'wagmi'
import { parseEther } from 'viem'

const contractAddress = "0xDDBbdcB889eA250eC0C9331c730F13DB70F21a2c";

const NFTContract = {
    address: contractAddress,
    abi: NFTAbi,
} as const


const Mint = () => {
    const { writeContract } = useWriteContract()


    const result = useReadContracts({
        contracts: [
            {
                ...NFTContract,
                functionName: 'name',
            },
            {
                ...NFTContract,
                functionName: 'symbol',
            },

        ],
    })

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="nft.png" alt="nftimage" /></figure>
                <div className="card-body">
                    <p>NFT name: {result.data?.[0].result?.toString()}</p>
                    <p>NFT Symbol: {result.data?.[1].result?.toString()}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"
                            onClick={() =>
                                writeContract({
                                    ...NFTContract,
                                    functionName: 'mint',
                                    value: parseEther('0.002')
                                })
                            }
                        >Mint</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Mint