import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Loading from "../../components/loading/Loading";
import Modal from "../../components/modal/Modal";
import { useAppSelector } from "../../hooks/useAppSelector";
import { addUser } from "../../services/slices/userSlice";
import { useLoginMutation } from "../../services/user.service";
import { AuthUser } from "../../types/User";
import { saveTokenToLocalStorage } from "../../utils/local-storage";
import "./styles.css";

function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.user);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AuthUser>({
    defaultValues: {
      email: user.email || "",
      password: "",
    },
  });

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  const handleCreateAccount = () => navigate("/register");

  const onSubmit: SubmitHandler<AuthUser> = async (data: AuthUser) => {
    const { email, password } = data;

    await login({ email, password }).then((res) => {
      const data = (res as { data: { token: string } }).data;
      if (data?.token) {
        saveTokenToLocalStorage(data.token);
        dispatch(addUser({ email }));
        navigate("/shop");
      } else {
        toggleModal();
      }
    });
  };

  return (
    <main className="container login-page">
      <h1>Entrar</h1>
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <Input
                label="E-mail"
                type="email"
                placeholder="Digite seu email"
                {...field}
              />
              <small>{errors.email?.message}</small>
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <Input
                label="Senha"
                type="text"
                placeholder="Digite sua senha"
                {...field}
              />
              <small>{errors.password?.message}</small>
            </>
          )}
        />
        <div className="btn-login">
          <Button>{isLoading ? <Loading color="black" /> : "Entrar"}</Button>
        </div>
      </form>
      <div className="btn-create">
        <Button onClick={handleCreateAccount}>Criar conta</Button>
      </div>
      <Modal isOpen={modalIsOpen} onClose={toggleModal}>
        <h2>Erro ao tentar fazer login</h2>
      </Modal>
    </main>
  );
}

export default Login;
