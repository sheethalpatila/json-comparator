import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ReactDiffViewer from 'react-diff-viewer-continued';

const JsonDisplay = ({ oldJson, newJson }) => {
    const oldJsonString = JSON.stringify(oldJson, null, 2);
    const newJsonString = JSON.stringify(newJson, null, 2);

    return (
        <Box sx={{ maxHeight: '400px', overflowY: 'auto', padding: 2 }}>
            <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Differences
                </Typography>
                <ReactDiffViewer
                    oldValue={oldJsonString}
                    newValue={newJsonString}
                    splitView
                    compareMethod="diffWords"
                    styles={{
                        variables: {
                            light: {
                                diffViewerBackground: '#f7f7f7',
                                addedBackground: '#e6ffed',
                                removedBackground: '#ffeef0',
                            },
                        },
                    }}
                />
            </Paper>
        </Box>
    );
};

export default JsonDisplay;
