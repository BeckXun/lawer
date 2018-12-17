import React from 'react';
import './index.scss';

const Title = (props) => (
    <div className="common-title">
        <div className="common-title-icon"></div>
        <div className="common-title-content">{props.content}</div>
    </div>
);

export default Title;