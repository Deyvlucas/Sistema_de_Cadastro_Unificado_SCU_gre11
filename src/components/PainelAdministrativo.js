import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
} from "@mui/material";

function PainelAdministrativo() {
  const [usuarios, setUsuarios] = useState([]); // Dados dos usuários do backend

  useEffect(() => {
    // Lógica para buscar os usuários do backend
  }, []);

  const handleChangeTipoUsuario = (event, id) => {
    // Lógica para atualizar o tipo de usuário no backend
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Tipo de Usuário</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usuarios.map((usuario) => (
            <TableRow key={usuario.id}>
              <TableCell>{usuario.nome}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>
                <Select
                  value={usuario.tipo}
                  onChange={(event) =>
                    handleChangeTipoUsuario(event, usuario.id)
                  }
                >
                  <MenuItem value="usuario">Usuário</MenuItem>
                  <MenuItem value="admin">Administrador</MenuItem>
                </Select>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PainelAdministrativo;
