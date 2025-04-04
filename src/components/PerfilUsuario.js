import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";

function PerfilUsuario() {
  const [nome, setNome] = useState("Nome do Usuário"); // Dados do usuário do backend
  const [email, setEmail] = useState("email@usuario.com");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para salvar as alterações no backend
  };

  const handleExcluir = () => {
    // Lógica para excluir o usuário no backend
  };

  const handleGerarPDF = () => {
    // Lógica para gerar o PDF com os dados do usuário
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Perfil do Usuário
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Salvar Alterações
        </Button>
      </form>
      <Button variant="outlined" color="secondary" onClick={handleExcluir}>
        Excluir Usuário
      </Button>
      <Button variant="outlined" color="primary" onClick={handleGerarPDF}>
        Gerar PDF
      </Button>
    </Container>
  );
}

export default PerfilUsuario;
