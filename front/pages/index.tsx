import type { NextPage } from 'next'
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import ProjectRow from "../src/components/ProjectRow";

const Home: NextPage = () => {
  return (
    <Box sx = {{
      display: 'flex',
      minHeight: '100vh'
    }}>
      <Box sx = {{
        minWidth: '250px',
        backgroundColor: 'rgba(9, 26, 178, 0.7)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding:'10px',
      }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => <Box
            key = {i}
            sx = {{
          backgroundColor: 'white',
          height: '40px',
          borderRadius: '15px'
        }}
        />)}
      </Box>
      <Box sx = {{
        flexGrow: 1,
      }}>
        <Box sx = {{
          display: 'flex',
          gap: '40px',
          padding: '10px 20px',
          marginTop: '10px'
        }}>
          <Typography color={'text.primary'}>Total Workload : 63</Typography>
          <Typography color={'text.primary'}>Minimum Workload per day : 7</Typography>
        </Box>
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Typography sx={{textTransform: 'uppercase'}}>
                      Project
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align={'center'} sx={{textTransform: 'uppercase'}}>
                      Workload
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography align={'center'} sx={{textTransform: 'uppercase'}}>
                    Deadline
                     </Typography>
                  </TableCell>
                  <TableCell/>
                </TableRow>
              </TableHead>
              <TableBody>
                {[1, 2, 3, 4, 5, 6, 7].map(i => <ProjectRow key={i}/>)}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

    </Box>
  )
}

export default Home
