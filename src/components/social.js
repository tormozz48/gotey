'use strict';

import React from 'react';
import {ShareButtons, generateShareIcon} from 'react-share';

const {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    EmailShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const GooglePlusIcon = generateShareIcon('google');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const TelegramIcon = generateShareIcon('telegram');
const EmailIcon = generateShareIcon('email');

export default (props) => {
    const {url, title} = props;

    const facebookShare = (
        <div className="social">
            <FacebookShareButton
                url={url}
                quote={title}
                className="social__share-button">
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
        </div>
    );

    const twitterShare = (
        <div className="social">
            <TwitterShareButton
                url={url}
                title={title}
                className="social__share-button">
                <TwitterIcon size={32} round />
            </TwitterShareButton>
        </div>
    );

    const telegramShare = (
        <div className="social">
            <TelegramShareButton
                url={url}
                title={title}
                className="social__share-button">
                <TelegramIcon size={32} round/>
            </TelegramShareButton>
        </div>
    );

    const googlePlusShare = (
        <div className="social">
            <GooglePlusShareButton
                url={url}
                className="social__share-button">
                <GooglePlusIcon size={32} round />
            </GooglePlusShareButton>
        </div>
    );

    const vkShare = (
        <div className="social">
            <VKShareButton
                url={url}
                windowWidth={660}
                windowHeight={460}
                className="social__share-button">
                <VKIcon size={32} round />
            </VKShareButton>
        </div>
    );

    const okShare = (
        <div className="social">
            <OKShareButton
                url={url}
                windowWidth={660}
                windowHeight={460}
                className="social__share-button">
                <OKIcon size={32} round />
            </OKShareButton>
        </div>
    );

    const whatsAppShare = (
        <div className="social">
            <EmailShareButton
                url={url}
                subject={title}
                body="body"
                className="social__share-button">
                <EmailIcon size={32} round/>
            </EmailShareButton>
        </div>
    );

    return (
        <span>
            {facebookShare}
            {twitterShare}
            {telegramShare}
            {googlePlusShare}
            {vkShare}
            {okShare}
            {whatsAppShare}
        </span>
    );
};
