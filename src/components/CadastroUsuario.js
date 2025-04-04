import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importe useNavigate

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [loginRede, setLoginRede] = useState("");
  const [setor, setSetor] = useState("");
  const [matricula, setMatricula] = useState("");
  const [emailEducacional, setEmailEducacional] = useState("");
  const [emailPessoal, setEmailPessoal] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigate = useNavigate(); // Inicialize useNavigate

  const setores = [
    "Administração",
    "Financeiro",
    "Tecnologia da Informação",
    "Recursos Humanos",
    "Marketing",
    "Vendas",
    "Outro",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar os dados para o backend
    console.log({
      nome,
      loginRede,
      setor,
      matricula,
      emailEducacional,
      emailPessoal,
      cpf,
      telefone,
    });
    // Redireciona para a tela de login após o cadastro
    navigate("/login");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Cadastro de Usuário
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
          label="Login de Rede"
          value={loginRede}
          onChange={(e) => setLoginRede(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="setor-label">Setor</InputLabel>
          <Select
            labelId="setor-label"
            id="setor"
            value={setor}
            label="Setor"
            onChange={(e) => setSetor(e.target.value)}
          >
            {setores.map((setor) => (
              <MenuItem key={setor} value={setor}>
                {setor}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Matrícula"
          value={matricula}
          onChange={(e) => setMatricula(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email Educacional"
          value={emailEducacional}
          onChange={(e) => setEmailEducacional(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email Pessoal"
          value={emailPessoal}
          onChange={(e) => setEmailPessoal(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Número de Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Cadastrar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroUsuario;
