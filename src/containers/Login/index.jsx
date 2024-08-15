import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
//import { api } from '../../services/api';

import {
    Container,
    LeftContainer,
    RightContainer,
    Title,
    Form,
    InputContainer,
    Link,
    ErrorMessage,
} from './styles';
import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';

// Definição do schema (remova a duplicata)
const schema = yup.object({
    email: yup
        .string()
        .email('Digite um e-mail válido')
        .required('O e-mail é obrigatório'),
    password: yup
        .string()
        .min(8, 'A senha deve ter pelo menos 8 caracteres')
        .required('Digite uma senha'),
}).required();

export function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await toast.promise( 
                api.post("/sessions", {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando dados',
                success: 'Seja bem-vindo',
                error: 'Erro verifica senha ou email'
            },
        );
            
            
            
            
            
            
            

            

            console.log(response.data);
            // Talvez redirecionar ou salvar token na autenticação aqui
        } catch (error) {
            console.error("Erro na solicitação", error);
            // Exibir mensagem de erro ao usuário, se necessário
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="Logo Devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem-vindo ao <span>Dev Burguer!</span>
                    <br />
                    Acesse com seu <span>Login e senha.</span>
                </Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register('email')} />
                        {errors.email && (
                            <ErrorMessage>{errors.email.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register('password')} />
                        {errors.password && (
                            <ErrorMessage>{errors.password.message}</ErrorMessage>
                        )}
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                </Form>
                <Link>Não possui conta? Clique aqui</Link>
            </RightContainer>
            <ToastContainer autoClose={2000} theme="colored" />
        </Container>
    );
}
