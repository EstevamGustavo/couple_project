import { Container, LoginCard } from "./styled";
import { useForm } from "react-hook-form";
import { sendAuth } from "../../service/login";

export const AuthPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitLogin = (data) => {
    console.log(data);
    sendAuth(data)
      .then((res) => {
        console.log("res => ", res);
      })
      .catch((err) => {
        console.log("err => ", err);
      });
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(submitLogin)}>
          <LoginCard>
            <h1>Login</h1>
            <input
              placeholder="Username"
              type="text"
              {...register("username")}
            />
            <input
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <button type="submit">Logar</button>
          </LoginCard>
        </form>
      </Container>
    </>
  );
};
