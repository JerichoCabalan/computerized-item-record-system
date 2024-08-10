import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUsers,
    faShieldKeyhole,
    faCogs,
    faContainerStorage,
    faTools,
    faChartBar,
    faBoxTaped,
    faList,
    faChartPie,
} from "@fortawesome/pro-light-svg-icons";

export const adminHeaderMenuLeft = (
    <>
        {/* <div className="ant-menu-left-icon">
            <Link to="/subscribers/current">
                <span className="anticon">
                    <FontAwesomeIcon icon={faUsers} />
                </span>
                <Typography.Text>Subscribers</Typography.Text>
            </Link>
        </div> */}
    </>
);

export const adminHeaderDropDownMenuLeft = () => {
    const items = [
        // {
        //     key: "/subscribers/current",
        //     icon: <FontAwesomeIcon icon={faUsers} />,
        //     label: <Link to="/subscribers/current">Subscribers</Link>,
        // },
    ];

    return <Menu items={items} />;
};

export const adminSideMenu = [
    {
        title: "DASHBOARD",
        path: "/dashboard",
        icon: <FontAwesomeIcon icon={faHome} />,
        moduleCode: "M-01",
    },
    {
        title: "STORAGE",
        path: "/storage",
        icon: <FontAwesomeIcon icon={faContainerStorage} />,
        children: [
            {
                title: "List Item",
                path: "/storage/list-item",
                moduleCode: "M-02",
            },
            {
                title: "Issued item",
                path: "/storage/issued-item",
                moduleCode: "M-03",
            },
            {
                title: "Archive item",
                path: "/storage/archive-item",
                moduleCode: "M-03",
            },
        ],
    },
    {
        title: "RESERVE",
        path: "/permission",
        icon: <FontAwesomeIcon icon={faShieldKeyhole} />,
        // children: [
        //     {
        //         title: "OPIS",
        //         path: "/permission/opis",
        //         moduleCode: "M-04",
        //     },
        //     {
        //         title: "Faculty Monitoring",
        //         path: "/permission/faculty-monitoring",
        //         moduleCode: "M-05",
        //     },
        // ],
    },
    {
        title: "MEMBERS",
        path: "/members",
        icon: <FontAwesomeIcon icon={faCogs} />,
        // children: [
        //     {
        //         title: "Email Templates",
        //         path: "/system-settings/email-templates",
        //         moduleCode: "M-06",
        //     },
        // ],
    },

    {
        title: <span style={{ fontSize: "10px" }}>MAINTRENANCE</span>,
    },
    {
        title: "ITEM TYPE",
        path: "/itemtype",
        icon: <FontAwesomeIcon icon={faBoxTaped} />,
        children: [
            {
                title: "Email Templates",
                path: "/itemtype/1",
            },
        ],
    },
    {
        title: "CATEGORY",
        path: "/category",
        icon: <FontAwesomeIcon icon={faList} />,
        children: [
            {
                title: "Email Templatess",
                path: "/category/email",
            },
        ],
    },

    {
        title: <span style={{ fontSize: "10px" }}>REPORTS</span>,
    },
    {
        title: "GENRATE REPORT",
        path: "/generatereport",
        icon: <FontAwesomeIcon icon={faChartPie} />,
        children: [
            {
                title: "Email Templates",
                path: "/generatereport/email",
            },
        ],
    },
];
