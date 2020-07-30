/**
 * @overview The main dashboard component which is rendered when the dashboard
 * route is matched.
 */

import React, { Component } from 'react';
import './Dashboard.css';

import DashboardContent from '../../components/DashboardContent/DashboardContent';
import DashboardLayout from '../../components/DashboardLayout/DashboardLayout';
import Footer from '../../components/Footer/Footer';
import KForceTest from '../../components/KForceTest/KForceTest';

class Dashboard extends Component {
    render() {
        return (
            <div className="Dashboard">
                <DashboardContent>
                    <DashboardLayout>
                        <KForceTest />
                    </DashboardLayout>
                </DashboardContent>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
