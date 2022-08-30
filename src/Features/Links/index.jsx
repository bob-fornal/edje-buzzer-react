
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { ContentCopy, OpenInBrowser } from '@mui/icons-material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Title } from '@Shared/Title';
import './Links.css';

function createData(id, title, link) {
  return { id, title, link };
}

const rows = [
  createData('display', 'Display', '/#/display/11111'),
  createData('buzzer', 'Buzzer', '/#/diagnostic/22222'),
  createData('diagnostics', 'Diagnostic', '/#/buzzer/33333')
];

const copy = async (content) => {
  const base = window.location.origin + window.location.pathname;
  try {
    await navigator.clipboard.writeText(base + content);
  } catch (error) {
    console.log('copy failed', error);
  }
};

const getHref = (content) => {
  const base = window.location.origin + window.location.pathname;
  return base + content;
};

export const Links = () => {
  return (
    <Card className="card pale-green">
      <CardContent>
        <Title>Links</Title>

        <TableContainer component={ Paper }>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Link</TableCell>
                <TableCell>Copy</TableCell>
                <TableCell>Open</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={ row.id }>
                  <TableCell>{ row.title }</TableCell>
                  <TableCell>
                    <button className="icon-parent link-button" onClick={ () => copy(row.link) }>
                      COPY <ContentCopy className='icon' sx={{ fontSize: 16 }} />
                    </button>
                  </TableCell>
                  <TableCell>
                    <a className="icon-parent" href={ getHref(row.link) } target="_blank" rel="noopener noreferrer">
                      OPEN <OpenInBrowser className='icon' sx={{ fontSize: 16 }} />
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </CardContent>
    </Card>
  );
};
