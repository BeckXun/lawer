import React from 'react';
import { Button } from 'antd-mobile';
import './index.scss';

const ConsultHeader = (props) => (
    <div className="consult-header">
        <div className="consult-header-desc">{props.desc}</div>
        <div className="consult-header-footer">
            <div className="consult-header-footer-type">{props.city} | {props.type}</div>
            <Button
                type="ghost"
                inline
                size="small"
                className="am-button-borderfix"
            >
                回复
            </Button>
        </div>
    </div>
);

export default ConsultHeader;