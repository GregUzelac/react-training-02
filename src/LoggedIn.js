import React from 'react';
import './App.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import '../node_modules/react-tabs/style/react-tabs.css';
import { Businesses } from './Businesses.js';

export function LoggedIn() {
    return (
    <Tabs
        defaultTab="Businesses"
        onChange={(tabId) => { console.log(tabId) }}
      >
        <TabList>
          <Tab tabFor="Businesses">Businesses</Tab>
          <Tab tabFor="Plants">Plants & Factories</Tab>
          <Tab tabFor="Machines">Machines</Tab>
          <Tab tabFor="Repairs">Repairs</Tab>
          <Tab tabFor="Parts">Parts</Tab>
          <Tab tabFor="Users">Users</Tab>
          <Tab tabFor="Barcode">Scan a barcode</Tab>
        </TabList>
        <TabPanel tabId="Businesses">
          <p>Businesses</p>
          <Businesses />
        </TabPanel>
        <TabPanel tabId="Plants">
          <p>Plants & Factories</p>
        </TabPanel>
        <TabPanel tabId="Machines">
          <p>Machines</p>
        </TabPanel>
        <TabPanel tabId="Repairs">
          <p>Repairs</p>
        </TabPanel>
        <TabPanel tabId="Parts">
          <p>Parts</p>
        </TabPanel>
        <TabPanel tabId="Users">
          <p>Users</p>
        </TabPanel>
        <TabPanel tabId="Barcode">
          <p>Scan the QR / Barcode now...</p>
        </TabPanel>
      </Tabs>    )
}
