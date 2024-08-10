import {
    faAward,
    faGlobe,
    faMoneyBill1Wave,
    faToolbox,
    faUp,
} from "@fortawesome/pro-light-svg-icons";
import { faArrowUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Table } from "antd";
import {
    TableGlobalSearch,
    TablePageSize,
} from "../../../providers/CustomTableFilter";
import { useEffect, useState } from "react";

export default function PageDashboard() {
    // const { tableFilter, setTableFilter, sortInfo } = props;

    const [tableFilter, setTableFilter] = useState({
        page: 1,
        order: "descend",
        page_size: 50,
        search: "",
    });

    useEffect(() => {
        setTableFilter({
            page: 1,
            page_size: 50,
            search: "",
            sort_field: "created_at",
            sort_order: "desc",
        });

        return () => {};
    }, [location]);
    const dataSource = [
        {
            key: "1",
            member: "Jericho Paler",
            quatity: 32,
            issue_date: "10/10/2021",
            s_number: "LC123123123",
            item: "Monitor",
        },
        {
            key: "2",
            member: "Jericho Rosales",
            quatity: 32,
            issue_date: "10/10/2021",
            s_number: "LC123123123",
            item: "Keyboard",
        },
    ];

    const columns = [
        {
            title: "Member",
            dataIndex: "member",
            key: "member",
        },
        {
            title: "Quatity",
            dataIndex: "quatity",
            key: "quatity",
        },

        {
            title: "Issue Date",
            dataIndex: "issue_date",
            key: "issue_date",
        },
        {
            title: "S.NO",
            dataIndex: "s_number",
            key: "s_number",
        },
        {
            title: "Item",
            dataIndex: "item",
            key: "item",
        },
    ];
    return (
        <>
            <Row gutter={[12, 12]}>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className="page-dashboard-card first-card">
                        <h2>ITEMS</h2>
                        <div className="progress-container">
                            <progress
                                style={{ marginTop: "20px" }}
                                value="10"
                                max="100"
                                className="strength-bar strength-bar-1"
                            />
                        </div>
                        <div className="icon-background"></div>{" "}
                        <p className="quantity">
                            <span className="quantity-arrow" style={{}}>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "20px",
                                    }}
                                />
                                <span
                                    style={{
                                        marginLeft: "8px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    69
                                </span>
                                <span
                                    style={{
                                        marginLeft: "25px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    Total Quantity
                                </span>
                            </span>
                        </p>
                        {/* Background SVG icon */}
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className="page-dashboard-card second-card">
                        <h2>ITEMS</h2>
                        <div className="progress-container">
                            <progress
                                style={{
                                    marginTop: "20px",
                                    color: "red",
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                }}
                                value="60"
                                max="100"
                                className="strength-bar strength-bar-2"
                            />
                        </div>
                        <div className="icon-background"></div>{" "}
                        <p className="quantity">
                            <span className="quantity-arrow" style={{}}>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "20px",
                                    }}
                                />
                                <span
                                    style={{
                                        marginLeft: "8px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    11.11%
                                </span>
                                <span
                                    style={{
                                        marginLeft: "25px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    Percent
                                </span>
                            </span>
                        </p>
                        {/* Background SVG icon */}
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className="page-dashboard-card third-card">
                        <h2>ITEMS</h2>
                        <div className="progress-container">
                            <progress
                                style={{ marginTop: "20px" }}
                                value="60"
                                max="100"
                                className="strength-bar strength-bar strength-bar-3"
                            />
                        </div>
                        <div className="icon-background"></div>{" "}
                        <p className="quantity">
                            <span className="quantity-arrow" style={{}}>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "20px",
                                    }}
                                />
                                <span
                                    style={{
                                        marginLeft: "8px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    11%
                                </span>
                                <span
                                    style={{
                                        marginLeft: "25px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    a Percent
                                </span>
                            </span>
                        </p>
                        {/* Background SVG icon */}
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={6} lg={6} xl={6} xxl={6}>
                    <Card className="page-dashboard-card fourth-card">
                        <h2>ITEMS</h2>
                        <div className="progress-container">
                            <progress
                                style={{
                                    marginTop: "20px",
                                    color: "pink",
                                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                                }}
                                value="69"
                                max="100"
                                className="strength-bar strength-bar-4"
                            />
                        </div>
                        <div className="icon-background"></div>{" "}
                        <p className="quantity">
                            <span className="quantity-arrow" style={{}}>
                                <FontAwesomeIcon
                                    icon={faArrowUp}
                                    style={{
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "20px",
                                    }}
                                />
                                <span
                                    style={{
                                        marginLeft: "8px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    11.11%
                                </span>
                                <span
                                    style={{
                                        marginLeft: "25px",
                                        color: "rgb(255, 255, 255)",
                                        fontSize: "20px",
                                        marginTop: "15px",
                                    }}
                                    className="quantity-value"
                                >
                                    Percent
                                </span>
                            </span>
                        </p>
                        {/* Background SVG icon */}
                    </Card>
                </Col>

                {/* End Card */}
            </Row>
            <br />
            <Row gutter={[12, 12]}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Card title="LASTEST BORROWED ITEM" width="100%">
                        <Col xs={24} sm={24} md={24}>
                            <div className="tbl-top-filter">
                                <TablePageSize
                                    tableFilter={tableFilter}
                                    setTableFilter={setTableFilter}
                                />
                                <TableGlobalSearch
                                    tableFilter={tableFilter}
                                    setTableFilter={setTableFilter}
                                />
                            </div>
                        </Col>
                        <Table dataSource={dataSource} columns={columns} />
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Card title="LASTEST RETURNED ITEM" width="100%">
                        <Col xs={24} sm={24} md={24}>
                            <div className="tbl-top-filter">
                                <TablePageSize
                                    tableFilter={tableFilter}
                                    setTableFilter={setTableFilter}
                                />
                                <TableGlobalSearch
                                    tableFilter={tableFilter}
                                    setTableFilter={setTableFilter}
                                />
                            </div>
                        </Col>
                        <Table dataSource={dataSource} columns={columns} />
                    </Card>
                </Col>
            </Row>
        </>
    );
}
