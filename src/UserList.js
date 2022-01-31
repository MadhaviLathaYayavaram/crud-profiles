import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';



export function UserList(){
    
    return (
        <div>
          <h1>User Profiles</h1>
          <Box class="mybox"
             sx={{
               display: 'flex',
               flexWrap: 'wrap',
               '& > :not(style)': {
                 m: 1,
                 width: 350,
                 height: 350,
                 padding: 10,
               },
             }}
           >
           
             <Paper elevation={3} >
         
            
          Madhavi
             </Paper>
             
           </Box>

           
        </div>
       
    );
}

