import styled from 'styled-components';
import { List } from 'antd-mobile';

// const { Item } = List;

const Main = styled.div`
    background: #fff;
    height: 100%;
`;

const Top = styled.div`
    width: 100%;
    height: 110px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: #fff;
`;

const Avater = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 1px solid #eee;
`;

const Name = styled.div`
    margin-left: 30px;
    font-size: 14px;
`;

const GreyBlock = styled.div`
    background-color: #eee;
    height: 12px;
`;

const MyList = styled(List)`
    padding-left: 10px;
    position: relative;
    background: #fff;

    .am-list-body {
        border-top: none;
    }
`;

export {
    Main,
    Top,
    Avater,
    Name,
    MyList,
    GreyBlock,
};