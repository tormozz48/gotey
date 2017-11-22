'use strict';

import React from 'react';
import {
    FacebookShareButton,
    GooglePlusShareButton,
    TwitterShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    EmailShareButton
} from 'react-share/lib/share-buttons.js';
import {generateIcon} from 'react-share/lib/generateIcon.js';

const FacebookIcon = generateIcon('facebook');
const TwitterIcon = generateIcon('twitter');
const GooglePlusIcon = generateIcon('google');
const VKIcon = generateIcon('vk');
const OKIcon = generateIcon('ok');
const TelegramIcon = generateIcon('telegram');
const EmailIcon = generateIcon('email');

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

    const emailShare = (
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
            {emailShare}
        </span>
    );
};
