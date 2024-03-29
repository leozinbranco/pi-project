import * as React from "react";
import TextField from "@mui/material/TextField";
import styles from "../styles/Form.module.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { config } from "../config";

export default function NewClient({ handleNewClient }) {
  const [optional, setOptional] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [cpfCnpj, setCpfCnpj] = React.useState("");
  const [sexo, setSexo] = React.useState("");
  const [nomeFantasia, setNomeFantasia] = React.useState("");
  const [inscricaoEstadual, setInscricaoEstadual] = React.useState("");
  const [endereco, setEndereco] = React.useState("");
  const validations = {
    nome: false,
    telefone: false,
    email: false,
    cpfCnpj: false,
    sexo: false,
    nomeFantasia: false,
    inscricaoEstadual: false,
    endereco: false,
  };
  // const [cpfCnpj, setCpfCnpj] = React.useState("");
  // insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('João da Silva', '19980015420', 'joãodasilva@fatec.sp.gov.br','Rua das Dores 531, Cambuí - CEP 13871-001');
  // insert into Clientes(id_pessoa,flag_contrato_cliente) values (11,0);
  // insert into Fisica(id_pessoa,cpf_fisica,Sexo) values (11,'61981997032','M');
  // insert into Pessoa(nome_pessoa,telefone_pessoa,email_pessoa,endereco_pessoa) values ('Guru da bet Eireli', '1938543232', 'SAC@guruapostas.com.br','Rua das perdições 35, Taquaral - CEP 13571-015');
  // insert into Clientes(id_pessoa,flag_contrato_cliente) values (12,1);
  // insert into Juridica(id_pessoa,cnpj_juridica,nome_fantasia_jurid,inscricao_estad_jurid) values (12, '46583065000108', 'Guru das Apostas esportivas', '901292801201');

  const handleChange = (event) => {
    setOptional(event.target.value);
  };

  const clearAll = () => {
    setOptional("");
    setNome("");
    setTelefone("");
    setEmail("");
    setCpfCnpj("");
    setInscricaoEstadual("");
    setSexo("");
    setNomeFantasia("");
    setEndereco("");
  };

  const handleChangeName = (event) => {
    setNome(event.target.value);
  };

  const handleChangeTel = (event) => {
    setTelefone(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangeCpfCnpj = (event) => {
    setCpfCnpj(event.target.value);
  };

  const handleChangeInscricaoEstadual = (event) => {
    setInscricaoEstadual(event.target.value);
  };

  const handleChangeSexo = (event) => {
    setSexo(event.target.value);
  };

  const handleChangeNomeFantasia = (event) => {
    setNomeFantasia(event.target.value);
  };

  const handleChangeEndereco = (event) => {
    setEndereco(event.target.value);
  };

  const checkEmpty = () => {
    let numberOfInvalidFields = 0;
    validations.nome = nome.length > 1;
    validations.telefone = telefone.length > 1;
    validations.email = email.length > 1;
    validations.cpfCnpj = cpfCnpj.length > 1;
    validations.sexo = sexo.length > 1;
    validations.nomeFantasia = nomeFantasia.length > 1;
    validations.inscricaoEstadual = inscricaoEstadual.length > 1;
    validations.endereco = endereco.length > 1;

    for (const validation in validations) {
      if (this.validations[validation]) {
        numberOfInvalidFields++;
      }
    }
    return numberOfInvalidFields === 0;
  };

  const sendNewClient = async () => {
    // if (this.checkEmpty()) {
    const newClient = {
      nome_pessoa: nome,
      telefone_pessoa: telefone,
      email_pessoa: email,
      endereco_pessoa: endereco,
      flag_contrato_cliente: null,
      cpfCnpj: null,
      sexo: null,
      cpfCnpj: null,
      nome_fantasia_jurid: null,
      inscricao_estad_jurid: null,
    };
    if (optional === "Física") {
      newClient.flag_contrato_cliente = 0;
      newClient.cpfCnpj = cpfCnpj;
      newClient.sexo = sexo;
    } else {
      newClient.flag_contrato_cliente = 1;
      newClient.cpfCnpj = cpfCnpj;
      newClient.nome_fantasia_jurid = nomeFantasia;
      newClient.inscricao_estad_jurid = inscricaoEstadual;
    }
    handleNewClient(newClient);
    clearAll();
    // } else {

    // }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <form action="/send-data-here" method="post" style={{}}>
        <div className={styles.centerForm}>
          <div className={styles.formFirstLine}>
            <TextField
              label="Nome"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
              onChange={handleChangeName}
              value={nome}
            ></TextField>
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Telefone"
              type="tel"
              variant="outlined"
              onChange={handleChangeTel}
              value={telefone}
              className={styles.spaceTextFieldTwoLines}
            ></TextField>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              onChange={handleChangeEmail}
              className={styles.intireLine}
              value={email}
            ></TextField>
          </div>
          <div className={styles.formFirstLine}>
            <TextField
              label="Endereço"
              variant="outlined"
              className={styles.spaceTextFieldTwoLines}
              onChange={handleChangeEndereco}
              value={endereco}
            ></TextField>
          </div>
          <div className={styles.dropdown}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">CPF/CNPJ</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={optional}
                  onChange={handleChange}
                  label="CPF/CNPJ"
                >
                  <MenuItem value={"Física"}>CPF</MenuItem>
                  <MenuItem value={"Jurídica"}>CNPJ</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          {optional === "Física" ? (
            <div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="CPF"
                  variant="outlined"
                  onChange={handleChangeCpfCnpj}
                  className={styles.spaceTextFieldTwoLines}
                  value={cpfCnpj}
                ></TextField>
              </div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="Sexo"
                  variant="outlined"
                  onChange={handleChangeSexo}
                  className={styles.spaceTextFieldTwoLines}
                  value={sexo}
                ></TextField>
              </div>
            </div>
          ) : (
            <div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="CNPJ"
                  type="number"
                  variant="outlined"
                  onChange={handleChangeCpfCnpj}
                  value={cpfCnpj}
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
              </div>
              <div className={styles.formFirstLine}>
                <TextField
                  label="Nome Fantasia"
                  variant="outlined"
                  required={true}
                  value={nomeFantasia}
                  onChange={handleChangeNomeFantasia}
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
                <TextField
                  label="Inscrição estadual"
                  variant="outlined"
                  value={inscricaoEstadual}
                  type="number"
                  onChange={handleChangeInscricaoEstadual}
                  className={styles.spaceTextFieldTwoLines}
                ></TextField>
              </div>
            </div>
          )}

          <div className={styles.formFirstLine}></div>
          <Button
            size="large"
            variant="contained"
            onClick={sendNewClient}
            className={styles.btnSend}
          >
            ENVIAR
          </Button>
        </div>
      </form>
    </div>
  );
}

//OS, Cliente, Tipo, Equipamento, Situação, Modeificado em, Contato, E-mail
