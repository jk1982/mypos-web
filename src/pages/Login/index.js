import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { Container } from "./styles";
import { ContentCut } from "@mui/icons-material";

import useAuth from "../../hooks/useAuth";

let schema = Yup.object().shape({
  email: Yup.string()
    .email("Endereço de email inválido.")
    .required("Obrigatório"),
  password: Yup.string()
    .min(6, "Senha deve ter no mínimo 6 caracteres.")
    .required("Obrigatório"),
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { onLogin } = useAuth();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    validateOnChange: false,
    validateOnBlur: false,

    onSubmit: values => {
      onLogin(values.email, values.password);
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <div id="main">
        <Stack display="flex" justifyContent="center" alignItems="center">
          <ContentCut id="logo" />
          <div>
            <span id="logoText1">be. </span>
            <span id="logoText2">Bell</span>
          </div>
        </Stack>
        <form
          onSubmit={formik.handleSubmit}
          onKeyDown={event => event.key === "Enter" && formik.handleSubmit()}>
          <Stack spacing={1}>
            <TextField
              label="E-mail"
              id="email"
              error={formik.errors.email && formik.touched.email}
              helperText={formik.errors.email}
              variant="standard"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <FormControl
              variant="standard"
              error={formik.errors.password && formik.touched.password}>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Mostrar senha"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText error>{formik.errors.password}</FormHelperText>
            </FormControl>
            <Stack pt={2} spacing={1}>
              <Button
                variant="outlined"
                color="success"
                onClick={() => formik.handleSubmit()}>
                Entrar
              </Button>
              <Button color="warning">Esqueci a senha</Button>
            </Stack>
          </Stack>
        </form>
      </div>
    </Container>
  );
}

export default Login;
