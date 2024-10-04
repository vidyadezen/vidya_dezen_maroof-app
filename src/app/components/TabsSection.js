import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, List, ListItem, ListItemText } from '@mui/material';

// Custom TabPanel component for rendering content
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

// A11y props for accessibility
const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const MyTabsComponent = () => {
  const [value, setValue] = useState(0); // State to handle active tab

  const handleChange = (event, newValue) => {
    setValue(newValue); // Update active tab value
  };

  // Sample list of values for the first tab
  const categories = [
    'Engine Parts',
    'Brake System',
    'Suspension Parts',
    'Exhaust Systems',
    'Electrical Components',
    'Body Parts',
    'Interior Accessories',
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        {/* Tabs */}
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All Categories" {...a11yProps(0)} />
          <Tab label="Find Car Parts" {...a11yProps(1)} />
          <Tab label="Car Service" {...a11yProps(2)} />
          <Tab label="Get Quotation" {...a11yProps(3)} />
          <Tab label="Maroof Membership" {...a11yProps(4)} />
          <Tab label="Become a Supplier" {...a11yProps(5)} />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
       
        <List sx={{direction:'row', display:'flex'}}>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </TabPanel>
      
      <TabPanel value={value} index={1}>
      <List sx={{direction:'row', display:'flex'}}>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <List sx={{direction:'row', display:'flex'}}>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </TabPanel>

      <TabPanel value={value} index={3}>
      <List sx={{direction:'row', display:'flex'}}>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </TabPanel>

      <TabPanel value={value} index={4}>
      <List sx={{direction:'row', display:'flex'}}>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </TabPanel>

      <TabPanel value={value} index={5}>
      <List sx={{direction:'row', display:'flex'}}>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <ListItemText primary={category} />
            </ListItem>
          ))}
        </List>
      </TabPanel>
    </Box>
  );
};

export default MyTabsComponent;
