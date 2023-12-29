// Breadcrumb.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import sidebarDataAdmin from '../Sidebar/Data/SidebarDataAdmin';

const Breadcrumb = ({BreadCrumbData}) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const findBreadcrumbItems = () => {
        let breadcrumbItems = [];

        for (const mainItem of BreadCrumbData) {
            if (currentPath.startsWith(mainItem.startsWith)) {
                breadcrumbItems.push({ text: mainItem.title, link: mainItem.path });

                if (mainItem.submenu) {
                    for (const submenuItem of mainItem.submenu) {
                        if (currentPath === submenuItem.path) {
                            breadcrumbItems.push({ text: submenuItem.title });
                            break;
                        }
                    }
                }

                break;
            }
        }

        return breadcrumbItems;
    };

    const breadcrumbItems = findBreadcrumbItems();

    return (

        <div className="navbar-breadcrumb">
            <h5 className="mb-0">{breadcrumbItems[breadcrumbItems.length - 1]?.text}</h5>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    {breadcrumbItems.map((item, index) => (
                        <li key={index} className={`breadcrumb-item ${index === breadcrumbItems.length - 1 ? 'active' : ''}`}>
                            {index === breadcrumbItems.length - 1 ? (
                                item.text
                            ) : (
                                <a href={item.link}>{item.text}</a>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Breadcrumb;
