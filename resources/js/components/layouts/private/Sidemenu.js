import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Typography } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import { logoFullWidth, name, role } from "../../providers/companyInfo";
import { adminSideMenu } from "./components/SideMenuList";

export default function Sidemenu(props) {
    const {
        location,
        sideMenuCollapse,
        setSideMenuCollapse,
        width,
        // dataPermissions,
    } = props;

    const [openKeys, setOpenKeys] = useState();

    let pathname = location.pathname;
    pathname = pathname.split("/");
    pathname = "/" + pathname[1];

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems(adminSideMenu);

        return () => {};
    }, []);

    useEffect(() => {
        setOpenKeys(
            menuItems
                .filter((item) => item.path === pathname)
                .map((item) => item.path)
        );
    }, [pathname, menuItems]);

    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        const menuItemsFilter = menuItems
            .filter((item) => item.path === latestOpenKey)
            .map((item) => item.path);

        if (menuItemsFilter.indexOf(latestOpenKey) === -1) {
            setOpenKeys(menuItemsFilter);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    // const handleCheckPermission = (moduleCode) => {
    //     let checkPermissions = dataPermissions.filter(
    //         (f) =>
    //             f.module_code === moduleCode &&
    //             f.module_buttons.filter(
    //                 (f2) =>
    //                     f2.mod_button_code === "view_page" &&
    //                     parseInt(f2.status) === 1
    //             ).length > 0
    //     );
    //     return checkPermissions.length > 0 ? true : false;
    // };

    const activeRoute = (routeName) => {
        const pathname = location.pathname;
        return pathname === routeName ? "ant-menu-item-selected" : "";
    };

    const activeSubRoute = (routeName) => {
        const pathname1 = location.pathname.split("/");
        const pathname2 = routeName.split("/");
        return "/" + pathname1[1] + "/" + pathname1[2] ===
            "/" + pathname2[1] + "/" + pathname2[2]
            ? "ant-menu-item-selected"
            : "";
    };

    const handleMenuRender = () => {
        const renderMenu = (items) => {
            return items.map((item) => {
                if (item.children && item.children.length > 0) {
                    return {
                        key: item.path,
                        icon: item.icon,
                        label: item.title,
                        children: renderMenu(item.children),
                    };
                } else {
                    let link = "";

                    if (item.targetNew === 1) {
                        link = (
                            <Typography.Link
                                target="new"
                                href={window.location.origin + item.path}
                            >
                                {item.title ?? item.permission}
                            </Typography.Link>
                        );
                    } else {
                        link = (
                            <Link
                                onClick={() => {
                                    setOpenKeys([]);
                                }}
                                to={item.path}
                            >
                                {item.title ?? item.permission}
                            </Link>
                        );
                    }

                    return {
                        key: item.path,
                        icon: item.icon,
                        label: link,
                        className:
                            activeRoute(item.path) +
                            " " +
                            (item.className ?? ""),
                        id: item.id,
                        onClick: () => {
                            if (width < 768) {
                                setSideMenuCollapse(true);
                            }
                        },
                    };
                }
            });
        };

        return renderMenu(menuItems);
    };

    return (
        <Layout.Sider trigger={null} collapsible collapsed={sideMenuCollapse}>
            <div className="ant-side-header">
                <MenuUnfoldOutlined
                    id="btn_sidemenu_collapse_unfold"
                    onClick={() => {
                        setSideMenuCollapse(false);
                        setTimeout(() => {
                            setOpenKeys(
                                menuItems
                                    .filter((item) => item.path === pathname)
                                    .map((item) => item.path)
                            );
                        }, 200);
                    }}
                    style={{ display: sideMenuCollapse ? "block" : "none" }}
                />
                <MenuFoldOutlined
                    id="btn_sidemenu_collapse_fold"
                    onClick={() => {
                        setSideMenuCollapse(true);
                    }}
                    style={{ display: !sideMenuCollapse ? "block" : "none" }}
                />

                <div className="logo_wrapper">
                    {!sideMenuCollapse && (
                        <img src={logoFullWidth} alt={name} width="150px" />
                    )}
                </div>
            </div>

            <Menu
                theme="light"
                mode="inline"
                openKeys={openKeys}
                selectedKeys={[pathname]}
                onOpenChange={onOpenChange}
                items={handleMenuRender()}
            />
        </Layout.Sider>
    );
}
