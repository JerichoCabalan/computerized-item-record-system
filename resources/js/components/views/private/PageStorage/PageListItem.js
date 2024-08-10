import { Button, Card, Col, Dropdown, Menu, Modal, Table } from "antd";
import React, { useState, useEffect } from "react";
import {
    TableGlobalSearch,
    TablePageSize,
} from "../../../providers/CustomTableFilter";
import Icon from "@ant-design/icons/lib/components/Icon";
import {
    faFileExcel,
    faHandsHolding,
    faPencil,
    faPlus,
    faTrash,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxArchive } from "@fortawesome/pro-regular-svg-icons";
import ModalIssueItem from "./components/Modal/ModalIssueItem";

export default function PageListItem() {
    const [tableFilter, setTableFilter] = useState({
        page: 1,
        order: "descend",
        page_size: 50,
        search: "",
    });
    const [toggleModalCustomAddReport, setToggleModalCustomAddReport] =
        useState({
            open: false,
            data: null,
        });
    useEffect(() => {
        setTableFilter({
            page: 1,
            page_size: 50,
            search: "",
            sort_field: "created_at",
            sort_order: "desc",
        });
    }, []); // Removed location dependency
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dataSource = [
        {
            key: "1",
            qty: "8/0",
            s_no: "HP 904 (C78787556)",
            item: "HP LASREUHJASD PRO",
            brand: "HP",
            category: "Monitor",
            description: "HP LASREUHJASD PRO",
            type: "Monitor",
            created_at: "10/10/2021",
        },
        {
            key: "2",
            qty: "12/0",
            s_no: "HP 904 (C78787556)",
            item: "HP LASREUHJASD PRO",
            brand: "HP",
            category: "Monitor",
            description: "HP LASREUHJASD PRO",
            type: "Monitor",
            created_at: "10/10/2021",
        },
    ];

    const columns = [
        {
            title: "Key",
            dataIndex: "key",
            key: "key",
        },
        {
            title: "QTY/ISSUED",
            dataIndex: "qty",
            key: "qty",
        },
        {
            title: "SERIAL NO",
            dataIndex: "s_no",
            key: "s_no",
        },
        {
            title: "ITEM NAME",
            dataIndex: "item",
            key: "item",
        },
        {
            title: "BRAND",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "CATEGORY",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "DESCRIPTION",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "TYPE",
            dataIndex: "item",
            key: "item",
        },
        {
            title: "DATE",
            dataIndex: "item",
            key: "item",
        },

        {
            title: "Actions",
            key: "actions",
            render: (text, record) => (
                <div>
                    <FontAwesomeIcon
                        icon={faBoxArchive}
                        style={{ marginRight: 8, color: "blue" }}
                    />
                    <FontAwesomeIcon
                        icon={faPencil}
                        style={{ marginRight: 8, color: "green" }}
                    />
                    <FontAwesomeIcon
                        icon={faTrash}
                        style={{
                            color: "red",
                        }}
                    />
                </div>
            ),
        },
    ];

    const menu = (
        <Menu>
            <Menu.Item key="1">
                {" "}
                <FontAwesomeIcon
                    icon={faHandsHolding}
                    style={{
                        color: "red",
                    }}
                />{" "}
                <span
                    style={{
                        marginLeft: 8,
                        color: "red",
                    }}
                    open={toggleModalCustomAddReport.open}
                    onClick={() =>
                        setToggleModalCustomAddReport((ps) => ({
                            ...ps,
                            open: true,
                        }))
                    }
                >
                    {" "}
                    ISSUED ITEMS
                </span>
            </Menu.Item>
            <Menu.Item key="2">
                {" "}
                <FontAwesomeIcon
                    icon={faPlus}
                    style={{
                        color: "red",
                    }}
                />{" "}
                <span
                    style={{
                        marginLeft: 8,
                        color: "red",
                    }}
                >
                    {" "}
                    NEW ITEM
                </span>
            </Menu.Item>
            <Menu.Item key="3">
                {" "}
                <FontAwesomeIcon
                    icon={faFileExcel}
                    style={{
                        color: "red",
                    }}
                />{" "}
                <span
                    style={{
                        marginLeft: 8,
                        color: "red",
                    }}
                >
                    {" "}
                    Excel
                </span>
            </Menu.Item>
        </Menu>
    );

    return (
        <Card
            title={
                <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <span>Card Title</span>
                    <Dropdown overlay={menu}>
                        <Button type="primary">Click me</Button>
                    </Dropdown>
                </div>
            }
        >
            <Table dataSource={dataSource} columns={columns} />
            <ModalIssueItem
                setToggleModalCustomAddReport={setToggleModalCustomAddReport}
                toggleModalCustomAddReport={toggleModalCustomAddReport}
            />
        </Card>
    );
}
