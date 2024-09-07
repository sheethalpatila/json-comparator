import React, { useState } from 'react';
import { TextField, Paper } from '@mui/material';

const JsonInput = ({ onJsonChange }) => {
    const [json, setJson] = useState('');

    const handleChange = (e) => {
        setJson(e.target.value);
        try {
            const parsedJson = JSON.parse(e.target.value);
            onJsonChange(parsedJson);
        } catch (error) {
            onJsonChange(null);
        }
    };

    return (
        <Paper style={{ padding: '10px' }}>
            <TextField
                multiline
                rows={10}
                fullWidth
                variant="outlined"
                value={json}
                onChange={handleChange}
                placeholder="Paste JSON here"
            />
        </Paper>
    );
};

export default JsonInput;
