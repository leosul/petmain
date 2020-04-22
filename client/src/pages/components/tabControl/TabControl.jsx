import React from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

const TabControl = ({ store, onChange, index }) => (
    <div>
        <Paper>
            <Tabs
                value={index}
                onChange={onChange}
                indicatorColor='primary'
                textColor='primary'
                variant='fullWidth'
                aria-label='full width tabs example'
                centered
            >
                {store.map(s => {
                    return (
                        <Tab key={s.index} label={s.label} value={s.index} icon={s.icon} />
                    )
                })}
            </Tabs>
        </Paper>
        <TabPanel value={index} index={index}>
            <Paper>
                {store.map(s => {
                    if (s.index === index)
                        return <h1>{s.label}</h1>
                    else
                        return null
                }
                )}
            </ Paper >
        </TabPanel>
    </div>
)

export default TabControl
