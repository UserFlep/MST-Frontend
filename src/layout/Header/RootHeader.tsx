import classes from "./root-header.module.less"
import React, {FC} from 'react';
import {Menu, Layout} from "antd";

const {Header} = Layout

const ITEMS = [
    { label: 'Обучающие выборки', key: 'item-1' },
    { label: 'Контрольные выборки', key: 'item-2' },
    { label: 'Нейронные сети', key: 'item-3' },
]

const MyHeader: FC = () => {
    return (
        <Header>
            <span className={classes.logo} style={{color: "white"}}>Лого</span>
            <Menu
                theme="dark"
                className={classes.headerMenu}
                mode="horizontal"
                items={ITEMS}
                defaultSelectedKeys={['1']}
            />
        </Header>
    );
};

export default MyHeader;