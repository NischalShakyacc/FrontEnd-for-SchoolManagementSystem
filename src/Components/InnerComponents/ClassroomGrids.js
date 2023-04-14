import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles'
import Box from '@mui/material/Box';    
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../Styles/GeneralGridStyles.css'
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => (
    {
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
    }
    ));

    export default function ClassroomGrids(props) {
    return (
        <div style={{ width: '95%' }}>
            <Box sx={{ flexGrow: 1 }}>
            <Grid 
            container 
            spacing={{ xs: 2, md: 2 }} 
            columns={{ xs: 2, sm: 8, md: 12 }}
            >
            {
                props.classArray.map((value, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Item>
                        <Link 
                        to={'/classroom/'.concat(value)}
                        >
                            <button className='grid-button' value={props.value}>
                                {value}
                            </button>
                        </Link>
                    </Item>
                </Grid>
                ))
            }
            </Grid>
        </Box>
        </div>
        
    );
    }