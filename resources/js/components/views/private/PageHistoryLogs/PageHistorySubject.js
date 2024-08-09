import { Row, Button, Col, Card, Table, notification, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { DELETE, GET } from "../../../providers/useAxiosQuery";
import {
    TableGlobalSearch,
    TablePageSize,
    TablePagination,
    TableShowingEntries,
} from "../../../providers/CustomTableFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPlus, faTrash } from "@fortawesome/pro-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import notificationErrors from "../../../providers/notificationErrors";

export default function PageSubject() {
    const navigate = useNavigate();

    const [tableFilter, setTableFilter] = useState({
        page: 1,
        page_size: 50,
        search: "",
        sort_field: "created_at",
        sort_order: "desc",
        status: "Active",
    });

    const { data: dataSource, refetch: refetchSource } = GET(
        `api/ref_subject?${new URLSearchParams(tableFilter)}`,
        "subject_list"
    );

    const onChangeTable = (pagination, filters, sorter) => {
        console.log(
            "onChangeTable pagination, filters, sorter",
            pagination,
            filters,
            sorter
        );
        setTableFilter((prevState) => ({
            ...prevState,
            sort_field: sorter.columnKey,
            sort_order: sorter.order ? sorter.order.replace("end", "") : null,
            page: 1,
            page_size: "50",
        }));
    };

    useEffect(() => {
        if (dataSource) {
            refetchSource();
        }

        return () => {};
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tableFilter]);

    const { mutate: mutateDeleteSubject, loading: loadingDeleteSubject } =
        DELETE(`api/ref_subject`, "subject_list");

    const handleDelete = (record) => {
        mutateDeleteSubject(record, {
            onSuccess: (res) => {
                console.log("res", res);
                if (res.success) {
                    notification.success({
                        message: "Subject",
                        description: res.message,
                    });
                } else {
                    notification.error({
                        message: "Subject",
                        description: res.message,
                    });
                }
            },
            onError: (err) => {
                notificationErrors(err);
            },
        });
    };

    return (
        <Row gutter={[12, 12]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                <Row gutter={[12, 12]}>
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
                    <Col xs={24} sm={24} md={24}>
                        <Table
                            className="ant-table-default"
                            dataSource={dataSource && dataSource.data.data}
                            rowKey={(record) => record.id}
                            pagination={false}
                            bordered={false}
                            onChange={onChangeTable}
                            scroll={{ x: "max-content" }}
                        >
                            <Table.Column
                                title="Subject Code"
                                key="code"
                                dataIndex="code"
                                sorter={true}
                            />
                            <Table.Column
                                title="Subject Name"
                                key="name"
                                dataIndex="name"
                                sorter={true}
                            />
                            <Table.Column
                                title="Description"
                                key="description"
                                dataIndex="description"
                                sorter={true}
                            />
                        </Table>
                    </Col>
                    <Col xs={24} sm={24} md={24}>
                        <div className="tbl-bottom-filter">
                            <TableShowingEntries />
                            <TablePagination
                                tableFilter={tableFilter}
                                setTableFilter={setTableFilter}
                                setPaginationTotal={dataSource?.data.total}
                                showLessItems={true}
                                showSizeChanger={false}
                                tblIdWrapper="tbl_wrapper"
                            />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
