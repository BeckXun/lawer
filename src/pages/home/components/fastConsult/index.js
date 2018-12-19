import React, { PureComponent } from 'react';
import { TextareaItem, InputItem, ActionSheet, Button } from 'antd-mobile';
import './index.scss';
// import Header from '@/components/header';

class FastConsult extends PureComponent {
    state = {
        type: '请选择',
        way: '请选择',
    }
    slect = () => {
        this.setState()
    }
    showActionSheet = ({ type = 'type', title = '', }) => {
        const config = {
            type: ['民事纠纷', '家庭问题', '劳动纠纷', '交通事故', '取消'],
            way: ['在线回复（9.9元/次）', '电话回复（99元/次）', '取消'],
        };
        const BUTTONS = config[type];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 1,
            maskClosable: true,
            title,
        }, (buttonIndex) => {
            let res = BUTTONS[buttonIndex];
            if (res === '取消') {
                res = '请选择';
            }
            this.setState({
                [type]: res,
            });
        });
    }
    submit = () => {
        if (typeof this.props.submit === 'function') {
            this.props.submit();
        }
    }
    render() {
        return (
            <div className="fast-consult">
                <div className="fast-consult-container">
                    <div className="fast-consult-title">快速咨询</div>
                    <TextareaItem
                        rows={3}
                        count={150}
                        placeholder="请输入咨询内容"
                    />
                    <div className="fast-consult-title">手机号</div>
                    <InputItem
                        placeholder="请输入您的手机号码"
                    />
                    <div className="fast-consult-title">问题分类</div>
                    <div
                        className="fast-consult-select"
                        onClick={() => this.showActionSheet({ type: 'type', title: '请选择您的问题类型' })}
                    >
                        {this.state.type}
                    </div>
                    <div className="fast-consult-title">咨询方式</div>
                    <div
                        className="fast-consult-select"
                        onClick={() => this.showActionSheet({ type: 'way', title: '请选择您的咨询方式' })}
                    >
                        {this.state.way}
                    </div>
                    <Button
                        className="fast-consult-submit"
                        type="default"
                        onClick={this.submit}
                    >
                        提交
                    </Button>
                </div>
            </div>
        );
    }
};

export default FastConsult;