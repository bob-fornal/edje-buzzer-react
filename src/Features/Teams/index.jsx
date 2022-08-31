
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Title } from '@Shared/Title';
import { socket } from '@Core/Services/WebSocket.service';
import { storage } from '@Core/Services/Storage.service';

import actions from '@Core/Constants/actions.json';
import teamData from '@Core/Constants/teams.json';

function handleKeyChange(key) {
  if (key.length === 0) return;

  socket.setApiKey(key);
  socket.messagesOfType(actions.SELECTED_TEAM).subscribe(handleTeamChange);
}

storage.key.subscribe(handleKeyChange);

let adjustTeams;
let uuids = [];
let users = {};
let sourceTeams = teamData;

function useTeams(initialValue) {
  const [teams, setTeams] = useState(initialValue);

  adjustTeams = setTeams;

  return { teams };
}

function handleTeamChange(message) {
  const uuid = message.payload.uuid;
  if (uuids.includes(uuid) === false) uuids.push(uuid);
  users[uuid] = message.payload;
  countTeams();
}

function countTeams() {
  let teamLocations = {};
  sourceTeams.forEach((team, index) => {
    team.count = 0;
    teamLocations[team.value] = index;
  });
  uuids.forEach((uuid) => {
    const uuidTeam = this.users[uuid].team;
    sourceTeams[teamLocations[uuidTeam]].count++;
  });
  adjustTeams(sourceTeams);
}

export const Teams = () => {
  const { teams } = useTeams(teamData);

  return (
    <Card className="card pale-yellow">
      <CardContent>
        <Title>Teams</Title>
        
        <TableContainer component={ Paper }>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className="center">Color</TableCell>
                <TableCell className="center">Team</TableCell>
                <TableCell className="center">Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teams.map((row) => (
                <TableRow key={ row.id }>
                  <TableCell style={{ backgroundColor: row.color }}></TableCell>
                  <TableCell>{ row.title }</TableCell>
                  <TableCell className="center">0</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
