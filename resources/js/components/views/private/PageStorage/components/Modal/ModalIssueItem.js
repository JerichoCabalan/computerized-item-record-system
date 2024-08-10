import { Button, Col, Modal, Row, Form } from "antd";
import React, { useState } from "react";
import FloatInput from "../../../../../providers/FloatInput";
import FloatSelect from "../../../../../providers/FloatSelect";

export default function ModalIssueItem(props) {
    const { toggleModalCustomAddReport, setToggleModalCustomAddReport } = props;

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setToggleModalCustomAddReport({
            open: false,
            data: null,
        });
    };
    return (
        <Modal
            title="Basic Modal"
            open={toggleModalCustomAddReport.open}
            onCancel={handleCancel}
            footer={[
                <Button
                    className="btn-main-primary outlined"
                    size="large"
                    key={1}
                >
                    CANCEL
                </Button>,
                <Button
                    className="btn-main-primary"
                    type="primary"
                    size="large"
                    key={2}
                >
                    SUBMIT
                </Button>,
            ]}
        >
            <Form>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item>
                            <FloatInput name="name" placeholder="Name" />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item>
                            <FloatSelect
                                placeholder="Select Issue"
                                label="Issue"
                                options={[
                                    {
                                        label: "Issue 1",
                                        value: 1,
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col>
                    {/* <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                        <Form.Item>
                            <FloatSelect
                                placeholder="Select Issue"
                                label="Issue"
                                options={[
                                    {
                                        label: "Issue 1",
                                        value: 1,
                                    },
                                ]}
                            />
                        </Form.Item>
                    </Col> */}
                </Row>
            </Form>
        </Modal>
    );
}
