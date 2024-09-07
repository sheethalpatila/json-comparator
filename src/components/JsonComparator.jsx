import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Button } from '@mui/material';
import JsonInput from './JsonInput';
import JsonDisplay from './JsonDisplay';
import isEqual from 'lodash.isequal';
import StickyNavBar from './StickyNavBar';

const JsonComparator = () => {
    const [json1, setJson1] = useState({});
    const [json2, setJson2] = useState({});
    const [showDifferences, setShowDifferences] = useState(false);

    const handleJson1Change = (newJson) => {
        setJson1(newJson);
    };

    const handleJson2Change = (newJson) => {
        setJson2(newJson);
    };

    const handleSubmit = () => {
        if (!isEqual(json1, json2)) {
            setShowDifferences(true);
        } else {
            setShowDifferences(false);
            alert("Provided inputs have identical or invalid json data , Please check the inputs");
        }
    };

    return (
        <div >
            <StickyNavBar />
            <Grid container spacing={3} style={{ padding: "20px 20px 20px 20px" }}>
                <Grid item xs={12} md={6} >
                    <Typography variant="h6">JSON 1</Typography>
                    <JsonInput onJsonChange={handleJson1Change} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6">JSON 2</Typography>
                    <JsonInput onJsonChange={handleJson2Change} />
                </Grid>
            </Grid>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ marginTop: '20px' }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                >
                    Compare JSON
                </Button>
            </Box>
            {showDifferences && (
                <Paper style={{ padding: '16px', marginTop: '20px' }}>
                    <JsonDisplay oldJson={json1} newJson={json2} />
                </Paper>
            )}
        </div>
    );
};

export default JsonComparator;
