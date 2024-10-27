import React, { useEffect, useState } from 'react';
import { useTonConnectUI, useTonWallet, useTonConnectModal } from '@tonconnect/ui-react';
import { FadeLoader } from 'react-spinners';
import { MdCheckCircle } from 'react-icons/md';

const Balance = () => {
    const wallet = useTonWallet();
    const [loading, setLoading] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');

    useEffect(() => {
        if (wallet) {
            setWalletAddress(wallet.account.address);
        }
    }, [wallet]);

    const [tonConnectUI, setOptions] = useTonConnectUI();
    const { state, open, close } = useTonConnectModal();

    return (
        <div className="relative">
            <div>
                <div>Modal state: {state?.status}</div>
                <button onClick={open}>Open modal</button>
                <button onClick={close}>Close modal</button>
            </div>

            {walletAddress && (
                <>
                    <div>
                        <span>Connected wallet address: {wallet.account.address}</span>
                        <span>Device: {wallet.device.appName}</span>
                        <span>Connected via: {wallet.provider}</span>
                        {wallet.connectItems?.tonProof?.proof && <span>Ton proof: {wallet.connectItems.tonProof.proof}</span>}

                        <div>Connected wallet info:</div>
                        <div>
                            {wallet.name} <img src={wallet.imageUrl} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Balance;
