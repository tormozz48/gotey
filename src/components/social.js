'use strict';

import React from 'react';
import {
  VKShareButton,
  OKShareButton,
  TelegramShareButton,
  EmailShareButton,
  TelegramIcon,
  VKIcon,
  OKIcon,
  EmailIcon,
} from 'react-share';

export default (props) => {
  const {url, title} = props;

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
      {telegramShare}
      {vkShare}
      {okShare}
      {emailShare}
    </span>
  );
};
