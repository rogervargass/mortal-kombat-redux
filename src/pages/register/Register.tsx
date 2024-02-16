import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Loading from "../../components/loading/Loading";
import { addUser } from "../../services/slices/userSlice";
import { useRegisterMutation } from "../../services/user.service";
import { CreateUser } from "../../types/User";
import "./styles.css";

function Register() {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateUser>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleBackToLogin = () => navigate("/login");
  const onSubmit: SubmitHandler<CreateUser> = async (data: CreateUser) => {
    const { email, password } = data;

    await register({ email, password }).then((res) => {
      const data = (res as { data: { token: string } }).data;
      if (data.token) {
        dispatch(addUser({ email }));
        handleBackToLogin();
      } else {
        console.log("Error: usuário invalido ");
      }
    });
  };

  return (
    <main className="container register-page">
      <h1>Criar conta</h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <>
              <Input
                label="E-mail"
                type="email"
                placeholder="Digite um email"
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
                placeholder="Digite uma senha"
                {...field}
              />
              <small>{errors.password?.message}</small>
            </>
          )}
        />
        <div className="btn-register">
          <Button>
            {isLoading ? <Loading color="black" /> : "Criar conta"}
          </Button>
        </div>
      </form>
      <div className="btn-back-login">
        <Button onClick={handleBackToLogin}>Voltar</Button>
      </div>
    </main>
  );
}

export default Register;
