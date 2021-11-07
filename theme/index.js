import React, { Component } from 'react';
import { createTheme } from '@mui/material';

const theme = createTheme({
    overrides: {
        MuiStepIcon: {
            root: {
                color: '#000000', // or 'rgba(0, 0, 0, 1)'
                '&$active': {
                    color: '#000000',
                },
                '&$completed': {
                    color: '#000000',
                },
                ".Mui-active": {
                    color: '#12312312',
                }
            },
        },
    }
});

export default theme;